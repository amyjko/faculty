import { base } from '$app/paths';
// Type only; Fuse itself is imported dynamically below, so that neither it nor
// the index is downloaded until someone actually searches.
import type Fuse from 'fuse.js';
import type SearchEntry from './SearchEntry';

/**
 * Memoized so that the index and Fuse are fetched at most once a session,
 * whether the header's search field is focused first or the search page is
 * loaded directly. Nothing loads until one of those happens.
 */
let loading: Promise<Fuse<SearchEntry>> | undefined = undefined;

export default function loadSearch(): Promise<Fuse<SearchEntry>> {
    if (loading === undefined)
        loading = load().catch((error) => {
            // Don't memoize a failure; a later search should try again.
            loading = undefined;
            throw error;
        });
    return loading;
}

async function load(): Promise<Fuse<SearchEntry>> {
    const [{ default: Fuse }, response] = await Promise.all([
        import('fuse.js'),
        fetch(`${base}/search-index.json`),
    ]);
    if (!response.ok) throw new Error(`No search index (${response.status}).`);
    const entries: SearchEntry[] = await response.json();
    return new Fuse(entries, {
        // Only the content itself, so that every result can show the reader a
        // sentence containing what they searched for. Headings are already
        // indexed as entries of their own, and page titles are display-only —
        // matching either produced results whose text had nothing to do with
        // the query.
        keys: ['text'],
        includeMatches: true,
        ignoreLocation: true,
        threshold: 0.2,
        // Two, not three, so that acronyms like CS and AI match.
        minMatchCharLength: 2,
    });
}
