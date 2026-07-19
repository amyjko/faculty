/**
 * Builds the site search index by scanning the prerendered HTML in build/.
 *
 * Deriving the index from rendered output rather than from src/data means the
 * content -> page mapping is automatic and self-correcting, and that content
 * which isn't rendered anywhere is inherently excluded.
 *
 * Run after `vite build`. See package.json's build script.
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { parse, HTMLElement, NodeType, type Node } from 'node-html-parser';
import type SearchEntry from '../src/lib/models/SearchEntry';

/** Must match kit.paths.base in svelte.config.js. */
const BASE = '/ajko';
const BUILD = 'build';

/** Elements that never contain indexable prose. */
const SKIP = new Set([
    'script',
    'style',
    'noscript',
    'svg',
    'head',
    'nav',
    'footer',
    'template',
]);

/** Elements whose text stands alone as a chunk of content. */
const BLOCK = new Set([
    'p',
    'li',
    'dd',
    'dt',
    'td',
    'th',
    'blockquote',
    'figcaption',
    'summary',
]);

const HEADING = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

/**
 * An element containing any of these is a container to recurse into; anything
 * else is a leaf whose text becomes one chunk. Ids come first because keeping
 * each record under its own anchor is the whole point of the traversal.
 */
const STRUCTURE = ['[id]', ...BLOCK, ...HEADING].join(', ');

/**
 * Prerendered research prototypes under static/demo, which aren't authored site
 * content, and the search page itself, which has no content of its own.
 */
const EXCLUDE = /^(demo\/|search\.html$)/;

/** Chunks longer than this are split on sentence boundaries. */
const MAX_CHUNK = 500;

/** Unanchored prose shorter than this is noise; anchored text and headings are never dropped. */
const MIN_PROSE = 15;

/**
 * Pages are visited in this order, and text already seen is skipped, so a
 * record indexed from its canonical list page wins over the same record
 * repeated on an aggregate page. Anything unlisted sorts between the two
 * groups, in alphabetical order.
 */
const FIRST = [
    'publications',
    'essays',
    'talks',
    'lab',
    'classes',
    'funding',
    'impact',
    'travel',
    'commitments',
    'communities',
    'books',
    'code',
    'bio',
];
const LAST = ['latest', 'cv'];

function collapse(text: string): string {
    return text
        .replaceAll('🔗︎', '')
        .replaceAll('🔗', '')
        .replace(/\s+/g, ' ')
        .trim();
}

/** Split text too long to be a single result into chunks that end on sentence boundaries. */
function split(text: string): string[] {
    if (text.length <= MAX_CHUNK) return [text];
    const chunks: string[] = [];
    let current = '';
    for (const sentence of text.split(/(?<=[.!?])\s+/)) {
        if (
            current.length > 0 &&
            current.length + sentence.length > MAX_CHUNK
        ) {
            chunks.push(current);
            current = '';
        }
        current += (current.length > 0 ? ' ' : '') + sentence;
    }
    if (current.length > 0) chunks.push(current);
    return chunks;
}

/** Every .html file under build/, as paths relative to build/. */
function pages(dir: string = BUILD): string[] {
    const found: string[] = [];
    for (const name of readdirSync(dir)) {
        const path = join(dir, name);
        if (statSync(path).isDirectory()) found.push(...pages(path));
        else if (name.endsWith('.html')) found.push(relative(BUILD, path));
    }
    return found;
}

/** build/publications.html -> /ajko/publications, build/index.html -> /ajko */
function urlOf(file: string): string {
    const path = file
        .split(sep)
        .join('/')
        .replace(/\.html$/, '');
    return path === 'index' ? BASE : `${BASE}/${path.replace(/\/index$/, '')}`;
}

function priority(url: string): number {
    const slug = url.slice(BASE.length).replace(/^\//, '');
    const first = FIRST.indexOf(slug);
    if (first >= 0) return first;
    const last = LAST.indexOf(slug);
    if (last >= 0) return FIRST.length + 1 + last;
    return FIRST.length;
}

function index(file: string): SearchEntry[] {
    const url = urlOf(file);
    const root = parse(readFileSync(join(BUILD, file), 'utf8'));

    // Titles read "Amy J. Ko - Publications"; the name is redundant in results.
    const page = collapse(root.querySelector('title')?.text ?? url).replace(
        /^Amy J\. Ko\s*[-–]\s*/,
        '',
    );

    // The (app) layout wraps content in .content; the (cv) layout uses .container.
    // Standalone pages under static/ have neither. Everything outside the content
    // column is the repeated header, nav, announcement, and footer.
    const content =
        root.querySelector('.content') ??
        root.querySelector('.container') ??
        root.querySelector('body');
    if (content === null) return [];
    // The footer and announcement bubble repeat on every page, and interactive
    // controls — facet filters, "cite" toggles — are chrome, not content.
    for (const el of content.querySelectorAll(
        '.footer, .desktop-bubble, .mobile-bubble, button, select, [role="radiogroup"], [role="button"]',
    ))
        el.remove();

    const entries: SearchEntry[] = [];

    /**
     * A heading applies to everything after it until the next heading, so it is
     * sticky. An element's own id, by contrast, applies only within that
     * element — otherwise the prose following a record would be attributed to
     * that record's anchor.
     */
    let sticky: string | undefined = undefined;
    let heading = '';

    function emit(text: string, anchor: string | undefined, anchored: boolean) {
        for (const chunk of split(text)) {
            if (!anchored && chunk.length < MIN_PROSE) continue;
            entries.push({
                url: anchor === undefined ? url : `${url}#${anchor}`,
                page,
                heading,
                text: chunk,
            });
        }
    }

    function visit(node: Node, inherited: string | undefined) {
        if (node.nodeType !== NodeType.ELEMENT_NODE) return;
        const el = node as HTMLElement;
        const tag = el.rawTagName?.toLowerCase();
        if (tag === undefined || SKIP.has(tag)) return;

        const id = el.getAttribute('id');
        const own = id !== undefined && id.length > 0 ? id : undefined;

        if (HEADING.has(tag)) {
            const text = collapse(el.text);
            heading = text;
            if (own !== undefined) sticky = own;
            // Headings are never length-filtered: they carry names and acronyms.
            if (text.length > 0) emit(text, own ?? inherited ?? sticky, true);
            return;
        }

        // Nearest wins: this element's own id, then the enclosing record's,
        // and only then the last heading. Checking sticky earlier would let a
        // section heading outrank the record actually containing this text.
        const anchor = own ?? inherited ?? sticky;

        // Recurse only while there is structure left to separate: a descendant
        // with its own id (so each record keeps its own anchor) or a nested
        // block. Otherwise this element's text is a single chunk. Without the
        // leaf case, prose wrapped only in inline elements is never emitted.
        if (el.querySelector(STRUCTURE) !== null) {
            for (const child of el.childNodes) visit(child, anchor);
            return;
        }

        const text = collapse(el.text);
        if (text.length > 0) emit(text, anchor, anchor !== undefined);
    }

    visit(content, undefined);
    return entries;
}

const files = pages()
    .filter((file) => !EXCLUDE.test(file.split(sep).join('/')))
    .sort(
        (a, b) =>
            priority(urlOf(a)) - priority(urlOf(b)) ||
            urlOf(a).localeCompare(urlOf(b)),
    );

const seen = new Set<string>();
const entries: SearchEntry[] = [];
for (const file of files) {
    for (const entry of index(file)) {
        const key = entry.text.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        entries.push(entry);
    }
}

const json = JSON.stringify(entries);
// The fresh copy that ships. Written after Vite's static copy, so it wins.
writeFileSync(join(BUILD, 'search-index.json'), json);
// A copy for `vite dev`, which has no build/ to serve from. Gitignored.
writeFileSync(join('static', 'search-index.json'), json);

console.log(
    `Search index: ${entries.length} entries from ${files.length} pages, ${Math.round(json.length / 1024)}kb`,
);
