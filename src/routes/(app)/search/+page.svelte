<script lang="ts">
    import { page } from '$app/state';
    import { browser } from '$app/environment';
    import loadSearch from '$lib/models/searchIndex';
    import type SearchEntry from '$lib/models/SearchEntry';

    const LIMIT = 50;

    type Match = { indices: readonly [number, number][]; key?: string };
    type Result = {
        entry: SearchEntry;
        /** The sentence the match falls in, split around the matched text. */
        before: string;
        match: string;
        after: string;
        /** True when the sentence isn't the start of the indexed content. */
        continued: boolean;
    };

    // Guarded because search params are unreadable while prerendering; this page
    // is a static shell that reads its query once hydrated.
    let query = $derived(
        browser ? (page.url.searchParams.get('q')?.trim() ?? '') : '',
    );
    let results: Result[] | undefined = $state(undefined);
    let error: string | undefined = $state(undefined);

    $effect(() => {
        const q = query;
        results = undefined;
        error = undefined;
        if (q.length === 0) return;
        let current = true;
        loadSearch().then(
            (fuse) => {
                if (current)
                    results = fuse
                        .search(q, { limit: LIMIT })
                        .map((result) =>
                            contextualize(
                                result.item,
                                result.matches as Match[] | undefined,
                            ),
                        );
            },
            () => {
                if (current)
                    error =
                        "Couldn't load the search index. If you're running this site locally, build it with npm run build.";
            },
        );
        return () => {
            current = false;
        };
    });

    /** Words whose trailing period doesn't end a sentence. */
    const ABBREVIATIONS = new Set([
        'dr',
        'mr',
        'mrs',
        'ms',
        'prof',
        'vs',
        'etc',
        'eg',
        'ie',
        'ph',
        'no',
        'inc',
        'st',
        'jr',
        'sr',
        'al',
        'dept',
        'univ',
        'approx',
    ]);

    /**
     * The sentences of some text, with the offset each starts at. Periods in
     * initials ("Amy J. Ko"), dotted acronyms ("U.S."), and abbreviations are
     * not sentence ends — naively splitting on punctuation cuts names in half,
     * which is exactly the context a reader needs to see intact.
     */
    function sentences(text: string): { start: number; end: number }[] {
        const found: { start: number; end: number }[] = [];
        const pattern = /[.!?]+(?:\s+|$)/g;
        let match: RegExpExecArray | null;
        let start = 0;
        while ((match = pattern.exec(text)) !== null) {
            const end = match.index + match[0].length;
            const word =
                text.slice(start, match.index).match(/\S+$/)?.[0] ?? '';
            const initial = /^[A-Za-z]$/.test(word);
            const acronym = /^(?:[A-Za-z]\.)+[A-Za-z]?$/.test(word);
            const abbreviation = ABBREVIATIONS.has(
                word.toLowerCase().replace(/[^a-z]/g, ''),
            );
            const next = text[end];
            // A real sentence end is followed by something that starts one.
            const starts = next === undefined || /[A-Z0-9“"'(]/.test(next);
            if (initial || acronym || abbreviation || !starts) continue;
            found.push({ start, end });
            start = end;
        }
        if (start < text.length) found.push({ start, end: text.length });
        return found.length > 0 ? found : [{ start: 0, end: text.length }];
    }

    /**
     * Finds the sentence containing the first match, so that results read as
     * whole English rather than as a window around a keyword.
     */
    function contextualize(
        entry: SearchEntry,
        matches: Match[] | undefined,
    ): Result {
        const text = entry.text;
        const all = sentences(text);
        // Text is the only search key, so there is at most one match to show.
        const [from, to] = matches?.[0]?.indices[0] ?? [0, -1];
        const sentence =
            all.find(
                (candidate) => from >= candidate.start && from < candidate.end,
            ) ?? all[0];
        return {
            entry,
            before: text.slice(sentence.start, Math.max(from, sentence.start)),
            match: to < from ? '' : text.slice(from, to + 1),
            after: text.slice(
                Math.min(Math.max(to + 1, sentence.start), sentence.end),
                sentence.end,
            ),
            continued: sentence.start > 0,
        };
    }

    /**
     * Carries the query to the destination page so it can highlight the match,
     * while keeping the anchor that points at the content itself.
     */
    function link(entry: SearchEntry): string {
        const [path, anchor] = entry.url.split('#');
        return `${path}?q=${encodeURIComponent(query)}${anchor === undefined ? '' : `#${anchor}`}`;
    }
</script>

<svelte:head>
    <title
        >Amy J. Ko - {query.length === 0 ? 'Search' : `Search: ${query}`}</title
    >
</svelte:head>

<h1>Search</h1>

<!-- One persistent element, so the live region is stable across states and
     results are announced as they update. Swapping it out per branch would
     leave nothing for a screen reader to watch. -->
<p aria-live="polite">
    {#if query.length === 0}
        Search this site with the field in the header.
    {:else if error !== undefined}
        {error}
    {:else if results === undefined}
        Searching for <strong>{query}</strong>…
    {:else if results.length === 0}
        No matches for <strong>{query}</strong>.
    {:else}
        {results.length}{results.length === LIMIT ? '+' : ''}
        {results.length === 1 ? 'match' : 'matches'} for
        <strong>{query}</strong>.
    {/if}
</p>

{#if results !== undefined && results.length > 0}
    <ul>
        {#each results as result}
            <li>
                <a href={link(result.entry)}>
                    {result.entry
                        .page}{#if result.entry.heading.length > 0 && result.entry.heading !== result.entry.page}
                        <span class="heading">
                            ⋅ {result.entry.heading}</span
                        >{/if}
                </a>
                <p>
                    {#if result.continued}…{/if}{result.before}{#if result.match.length > 0}<mark
                            >{result.match}</mark
                        >{/if}{result.after}
                </p>
            </li>
        {/each}
    </ul>
{/if}

<style>
    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: calc(var(--padding) * 3);
    }

    li p {
        margin: calc(var(--padding) / 2) 0 0 0;
    }

    .heading {
        font-style: italic;
    }

    /* The global mark is a tag pill — small type, generous padding. A search
       match sits inside a sentence, so it takes the surrounding type exactly
       and only enough padding to keep the gold off the glyphs. */
    mark {
        font: inherit;
        background-color: var(--highlight-color);
        color: var(--highlight-text-color);
        border-radius: var(--roundedness);
        padding: 0 0.15em;
        margin: 0;
    }
</style>
