<script lang="ts">
    import { asset } from '$app/paths';
    import { page } from '$app/state';
    import Emoji from './Emoji.svelte';
    import External from './External.svelte';
    import Link from './Link.svelte';
    import Social from './Social.svelte';
    import Thumbnail from './Thumbnail.svelte';

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
    <Link to="/(app)"
        ><Thumbnail
            url="/images/headshots/ajko.jpg"
            alt="Headshot of Amy J. Ko"
        /></Link
    >
    <h1>Amy J. Ko, Ph.D.</h1>
    <div class="metadata">
        <span class="small"
            ><em
                ><Link to="https://www.mypronouns.org/she-her"
                    >she/her/hers</Link
                ></em
            ></span
        >
        <strong
            ><Link
                to="https://ap.washington.edu/ahr/academic-titles-ranks/professor/"
                >Professor</Link
            ></strong
        >
        <strong
            ><Link to="https://ischool.uw.edu/about/leadership"
                >Associate Dean for Academics</Link
            ></strong
        >
        <span>
            <Link to="http://ischool.uw.edu"
                ><em>The Information School</em></Link
            ></span
        >
        <span>
            <Link to="http://cs.uw.edu"
                ><em
                    >Paul G. Allen School of Computer Science &amp; Engineering</em
                >
                <span class="small"><em>courtesy</em></span></Link
            ></span
        >
        <span>
            <Link to="http://www.washington.edu"
                >University of Washington, Seattle</Link
            ></span
        >
        <span class="small"
            >- <Link to="https://dl.acm.org/journal/toce"
                >Editor-in-Chief, <em>ACM TOCE</em></Link
            ></span
        >
        <span class="small"
            >- <Link to="https://csforallwa.org/"
                >Co-Director, <em>CS for All Washington</em></Link
            ></span
        >
        <span class="small"
            >- <Link to="https://reciprocal.reviews/"
                >Co-Director, <em>Reciprocal Reviews</em></Link
            ></span
        >
        <Social />
    </div></section
>

<!-- <Alert
    >I will not be recruiting new Ph.D. students for the 2026-27 academic year,
    due to the U.S. government's grant terminations, research funding cuts, and
    threats to university budgets. Progress will have to wait for an
    administration interested in the future.
</Alert> -->

<br /><button onclick={replace}>censor</button>

<hr />
<nav>
    <div class="links">
        <Link to="/(app)">Research</Link>
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
        <Link to="/(cv)">CV</Link>
        <br /><Link to="/(app)/wordplay"
            ><Emoji symbol="💬" /> <strong>Wordplay</strong></Link
        >
    </div>
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

    .outline li {
        font-style: italic;
        font-size: 80%;
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
