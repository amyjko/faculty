/**
 * Highlights occurrences of a search query in the page's content column, so
 * that arriving from a search result shows what matched.
 *
 * This uses the CSS Custom Highlight API rather than wrapping text in <mark>
 * elements, so that it never mutates DOM that Svelte owns. See ::highlight() in
 * static/css/global.css for the styling.
 */
/** Breathing room above a match scrolled into view, in pixels. */
const MARGIN = 100;

export default function highlight(query: string | null): void {
    if (typeof CSS === 'undefined' || !('highlights' in CSS)) return;

    CSS.highlights.delete('search');

    const text = query?.trim().toLowerCase();
    if (text === undefined || text.length === 0) return;

    // The same fallback chain the indexer uses to pick a page's content root
    // (see scripts/build-search-index.ts). The two must agree: the indexer
    // decides what is searchable and this decides what is highlightable, so a
    // page covered by one and not the other yields results that do nothing.
    const content =
        document.querySelector('.content') ??
        document.querySelector('.container') ??
        document.body;
    if (content === null) return;

    const ranges: Range[] = [];
    const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
        const node = walker.currentNode;
        const candidate = node.textContent?.toLowerCase();
        if (candidate === undefined) continue;
        let index = candidate.indexOf(text);
        while (index >= 0) {
            const range = document.createRange();
            range.setStart(node, index);
            range.setEnd(node, index + text.length);
            ranges.push(range);
            index = candidate.indexOf(text, index + text.length);
        }
    }

    if (ranges.length === 0) return;

    CSS.highlights.set('search', new Highlight(...ranges));

    // Bring the first match into view, but only when no fragment was given:
    // with one, Linkable's on-mount scroll owns the scroll position and the
    // two would fight over it. This is what makes results useful on pages
    // whose records have no anchor of their own.
    if (window.location.hash.length === 0) {
        const top = ranges[0].getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: Math.max(0, top - MARGIN),
            behavior: 'smooth',
        });
    }
}
