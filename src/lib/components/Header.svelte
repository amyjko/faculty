<script lang="ts" module>
    /**
     * The page a search started from, so that clearing the field returns there
     * instead of stranding the reader on stale results. Module scope, so it
     * survives client-side navigation to the search page and back.
     */
    let origin: string | undefined = undefined;
</script>

<script lang="ts">
    import { page } from '$app/state';
    import { base } from '$app/paths';
    import { goto } from '$app/navigation';
    import Emoji from './Emoji.svelte';
    import Link from './Link.svelte';
    import Social from './Social.svelte';
    import Thumbnail from './Thumbnail.svelte';
    import SpeechBubble from './SpeechBubble.svelte';
    import { profile } from '$lib/models/stores';
    import loadSearch from '$lib/models/searchIndex';

    interface Props {
        headers?: [string, string][];
        activeid: string | undefined;
    }

    let { headers = [], activeid }: Props = $props();

    const words = [
        'anti-racism',
        'racism',
        'allyship',
        'bias',
        'diversity',
        'equity',
        'inclusion',
        'feminism',
        'gender',
        'justice',
        'injustice',
        'intersectionality',
        'prejudice',
        'privilege',
        'racial identity',
        'sexuality',
        'pronouns',
        'queer',
        'transgender',
        'equality',
    ];

    /**
     * Seeded from the URL so the field keeps the query on the search page. Done
     * in an effect because search params are unreadable while prerendering.
     */
    let query = $state('');
    $effect(() => {
        query = page.url.searchParams.get('q') ?? '';
    });

    let searching = $derived(page.url.pathname === `${base}/search`);

    /** How long typing has to settle before searching. */
    const DWELL = 250;

    let pending: ReturnType<typeof setTimeout> | undefined = undefined;

    /**
     * Search as you type. The whole index is in memory and Fuse runs
     * synchronously, so there's no round trip to wait on — only the reader's
     * typing to settle.
     *
     * The `q === current` guard is load-bearing. The effect above writes
     * `query` from the URL and this one writes the URL from `query`, so
     * without it every navigation would schedule another one, forever.
     */
    $effect(() => {
        const q = query.trim();
        const current = page.url.searchParams.get('q')?.trim() ?? '';
        if (q === current) return;
        pending = setTimeout(() => navigate(q), DWELL);
        return () => clearTimeout(pending);
    });

    let field: HTMLInputElement | undefined = $state(undefined);

    /**
     * Clicking the field's clear button fires a `search` event, which Svelte
     * doesn't type, so it's bound here. Without it, clearing the field would
     * leave the stale results on screen.
     */
    $effect(() => {
        const input = field;
        if (input === undefined) return;
        input.addEventListener('search', search);
        return () => input.removeEventListener('search', search);
    });

    /** A page's address without the search query, which is ours to manage. */
    function withoutQuery(url: URL): string {
        const params = new URLSearchParams(url.searchParams);
        params.delete('q');
        const rest = params.toString();
        return url.pathname + (rest.length > 0 ? `?${rest}` : '');
    }

    /**
     * Shows results for a query, or returns to where the search began when it
     * is empty. Shared by typing, Enter, and the field's clear button.
     *
     * Focus is kept because otherwise navigating mid-word drops the reader out
     * of the field, and scrolling is suppressed so results don't yank the page.
     * Every update after the first replaces history, so a search session leaves
     * one entry rather than one per keystroke, and Back returns to the origin.
     */
    function navigate(q: string) {
        if (q.length > 0) {
            const replaceState = searching;
            if (!searching) origin = withoutQuery(page.url);
            goto(`${base}/search?q=${encodeURIComponent(q)}`, {
                keepFocus: true,
                noScroll: true,
                replaceState,
            });
        } else if (searching) {
            // Emptied on the results page: go back where the search began.
            goto(origin ?? base ?? '/', {
                keepFocus: true,
                noScroll: true,
                replaceState: true,
            });
            origin = undefined;
        } else if (page.url.searchParams.has('q')) {
            // Emptied on a page reached from a result: drop its highlight.
            goto(withoutQuery(page.url), {
                keepFocus: true,
                noScroll: true,
                replaceState: true,
            });
        }
    }

    function search(event: Event) {
        event.preventDefault();
        // Enter commits immediately rather than waiting out the dwell.
        clearTimeout(pending);
        navigate(query.trim());
    }

    function textNodesUnder(el: Node) {
        const children: Node[] = []; // Type: Node[]
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) {
            children.push(walker.currentNode);
        }
        return children;
    }
    function replace() {
        const texts = textNodesUnder(document.body);
        for (const text of texts) {
            if (
                text.nodeType === 3 &&
                text.textContent !== null &&
                text.textContent.trim().length > 0
            ) {
                const spaceBefore = text.textContent.match(/^\s*/)?.[0] || '';
                const spaceAfter = text.textContent.match(/\s*$/)?.[0] || '';
                text.textContent =
                    spaceBefore +
                    text.textContent
                        .split(' ')
                        .map(
                            () =>
                                words[Math.round(Math.random() * words.length)],
                        )
                        .join(' ') +
                    spaceAfter;
            }
        }
    }
</script>

<section class="info">
    <Link to="/(app)" plain
        ><Thumbnail
            url="/images/headshots/ajko.jpg"
            alt="Headshot of Amy J. Ko"
        /></Link
    >
    {#if $profile.json.announcement}
        <div class="mobile-bubble">
            <SpeechBubble>{$profile.json.announcement}</SpeechBubble>
        </div>
    {/if}
    <h1>Amy J. Ko, Ph.D.</h1>
    <div class="metadata">
        <span class="small"
            ><em
                ><Link to="https://www.mypronouns.org/she-her" annotate={false}
                    >she/her</Link
                ></em
            ></span
        >
        <strong
            ><Link
                to="https://ap.washington.edu/ahr/academic-titles-ranks/professor/"
                annotate={false}>Professor</Link
            ></strong
        >
        <strong
            ><Link
                to="https://ischool.uw.edu/about/leadership"
                annotate={false}
            >
                Associate Dean for Academics</Link
            ></strong
        >
        <span>
            <Link to="http://ischool.uw.edu" annotate={false}
                ><em>The Information School</em></Link
            ></span
        >
        <span style:font-size="0.8em">
            <Link to="http://cs.uw.edu" annotate={false}
                ><em
                    >Paul G. Allen School of Computer Science &amp; Engineering</em
                >
                <span class="small">[<em>courtesy</em>]</span></Link
            ></span
        >
        <span style:font-size="0.8em">
            <Link to="http://education.uw.edu" annotate={false}
                ><em>College of Education</em>
                <span class="small">[<em>courtesy</em>]</span></Link
            ></span
        >
        <span>
            <Link to="http://www.washington.edu" annotate={false}
                >University of Washington, Seattle</Link
            ></span
        >
        <span class="small"
            >- Editor-in-Chief, <Link
                to="https://dl.acm.org/journal/toce"
                annotate={false}>ACM TOCE</Link
            ></span
        >
        <span class="small"
            >- Co-Director, <Link to="https://csforallwa.org/" annotate={false}
                >CS for All WA</Link
            ></span
        >
        <span class="small"
            >- Co-Director, <Link
                to="https://reciprocal.reviews/"
                annotate={false}>Reciprocal Reviews</Link
            ></span
        >
        <Social />
    </div></section
>

<br /><button onclick={replace}>censor</button>

<hr />
<nav>
    <div class="links">
        <Link to="/(app)/latest"><em>Latest</em></Link>
        <Link to="/(app)">Research</Link>
        <Link to="/(app)/wordplay"
            ><Emoji symbol="💬" /> <strong>Wordplay</strong></Link
        >
        <Link to="/(app)/lab">Lab</Link>
        <Link to="/(app)/communities">Communities</Link>
        <Link to="/(app)/publications">Publications</Link>
        <Link to="/(app)/essays">Essays</Link>
        <Link to="/(app)/talks">Talks</Link>
        <Link to="/(app)/classes">Classes</Link>
        <Link to="/(app)/books">Books</Link>
        <Link to="/(app)/code">Code</Link>
        <Link to="/(app)/impact">Impact</Link>
        <Link to="/(app)/funding">Funding</Link>
        <Link to="/(app)/travel">Travel</Link>
        <Link to="/(app)/bio">Bio</Link>
        <Link to="/(app)/commitments">Commitments</Link>
        <Link to="/(app)/contact">Contact</Link>
        <Link to="/(app)/faq">FAQ</Link>
        <Link to="/(app)/cer">CER FAQ</Link>
        <Link to="/(cv)/cv" newTab>CV</Link>
    </div>
    <form class="search" onsubmit={search}>
        <label for="search">Search this site</label>
        <input
            id="search"
            type="search"
            placeholder="search"
            bind:value={query}
            onfocus={() => loadSearch().catch(() => undefined)}
            bind:this={field}
        />
    </form>
    {#if headers.length > 1}
        <div class="outline">
            <ul>
                {#each headers as [header, id]}
                    <li
                        ><Link to="" {id} active={id === activeid}
                            >{header.substring(0, 32) +
                                (header.length > 32 ? '…' : '')}</Link
                        ></li
                    >
                {/each}
            </ul>
        </div>
    {/if}
</nav>

<hr class="small-hr" />

<style>
    .mobile-bubble {
        display: none;
    }

    @media only screen and (max-width: 800px) {
        .mobile-bubble {
            display: block;
        }
    }

    nav,
    .metadata {
        font-size: var(--small-font-size);
        line-height: 1.5;
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .small {
        font-size: calc(var(--small-font-size) * 0.8);
    }

    .links {
        font-size: var(--small-font-size);
        line-height: 1.5;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: calc(var(--padding) / 2);
    }

    :global(.links > *) {
        padding-left: var(--padding);
        padding-right: var(--padding);
        border-radius: var(--roundedness);
    }

    :global(.links > a:hover) {
        background-color: var(--border-color);
    }

    :global(.links > span.at) {
        background-color: transparent;
        text-decoration: underline;
        text-decoration-thickness: 3px;
    }

    .search {
        --clear-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3 3L13 13M13 3L3 13' stroke='%23000' stroke-width='2.5' stroke-linecap='round'/%3E%3C/svg%3E");
        margin-top: calc(var(--padding) * 2);
        padding-left: var(--padding);
        padding-right: var(--padding);
    }

    /* Visible to screen readers only; the placeholder labels it visually. */
    .search label {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip-path: inset(50%);
        white-space: nowrap;
    }

    .search input {
        width: 100%;
        box-sizing: border-box;
        font-family: inherit;
        font-size: var(--small-font-size);
        padding: calc(var(--padding) / 2);
        border: 1px solid var(--border-color);
        border-radius: var(--roundedness);
        background: none;
        color: inherit;
    }

    /* The browser default ring doesn't match anything else here. This borrows
       the link color, which is the site's existing "this is interactive" cue,
       and stays visible in both light and dark themes. */
    .search input:focus-visible {
        outline: 2px solid var(--link-color);
        /* Zero, so the border and outline read as one ring rather than two
           lines with a strip of background between them. */
        outline-offset: 0;
        border-color: var(--link-color);
    }

    /* WebKit's clear button is a grey circled x that matches nothing on the
       site. This replaces it with a plain stroke in the site's text color. */
    .search input::-webkit-search-cancel-button {
        -webkit-appearance: none;
        appearance: none;
        height: 0.7em;
        width: 0.7em;
        cursor: pointer;
        background-color: var(--text-color);
        -webkit-mask: var(--clear-icon) center / contain no-repeat;
        mask: var(--clear-icon) center / contain no-repeat;
    }

    .outline li {
        font-style: italic;
        font-size: var(--extra-small-font-size);
        list-style-type: square;
    }

    .outline ul {
        padding-inline-start: calc(3 * var(--padding));
    }

    @media only screen and (min-width: 800px) {
        nav {
            position: sticky;
            top: var(--margin);
        }
        .small-hr {
            display: none;
        }
        .mobile-bubble {
            display: none;
        }
    }

    @media only screen and (max-width: 800px) {
        .outline {
            display: none;
        }

        nav {
            white-space: nowrap;
        }
    }
</style>
