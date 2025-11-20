<script lang="ts">
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    import Alert from './Alert.svelte';
    import Emoji from './Emoji.svelte';
    import External from './External.svelte';
    import Link from './Link.svelte';
    import Social from './Social.svelte';
    import Image from './Thumbnail.svelte';

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
    <a href="/ajko/"
        ><Image
            url={'/images/headshots/ajko.jpg'}
            alt="Headshot of Amy J. Ko"
        /></a
    >
    <h1>Amy J. Ko, Ph.D.</h1>
    <div class="metadata">
        <span class="small"
            ><em
                ><External to="https://www.mypronouns.org/she-her"
                    >she/her/hers</External
                ></em
            ></span
        >
        <strong
            ><External
                to="https://ap.washington.edu/ahr/academic-titles-ranks/professor/"
                >Professor</External
            ></strong
        >
        <strong
            ><External to="https://ischool.uw.edu/about/leadership"
                >Associate Dean for Academics</External
            ></strong
        >
        <span
            ><External to="http://ischool.uw.edu"
                >The Information School</External
            ></span
        >
        <span
            ><External to="http://cs.uw.edu"
                >Paul G. Allen School of Computer Science &amp; Engineering <span
                    class="small"><em>courtesy</em></span
                ></External
            ></span
        >
        <span
            ><External to="http://www.washington.edu"
                >University of Washington, Seattle</External
            ></span
        >
        <span class="small"
            >- <External to="https://dl.acm.org/journal/toce"
                >Editor-in-Chief, <em>ACM TOCE</em></External
            ></span
        >
        <span class="small"
            >- <External to="https://reciprocal.reviews/"
                >Co-Director, <em>Reciprocal Reviews</em></External
            ></span
        >
        <span class="small"
            >- <External to="https://csforallwa.org/"
                >Co-Director, <em>CS for All Washington</em></External
            ></span
        >
        <Social />
    </div></section
>

<button onclick={replace}>CENSOR</button>

<hr />
<nav>
    <div class="links">
        <Link to="/" at={'/'}>Research</Link>
        <Link to="/lab" at={'/lab'}>Lab</Link>
        <Link to="/communities" at={'/communities'}>Communities</Link>
        <Link to="/publications" at={'/publications'}>Publications</Link>
        <Link to="/essays" at={'/essays'}>Essays</Link>
        <Link to="/talks" at={'/talks'}>Talks</Link>
        <Link to="/classes" at={'/classes'}>Classes</Link>
        <Link to="/books" at={'/books'}>Books</Link>
        <Link to="/code" at={'/code'}>Code</Link>
        <Link to="/impact" at={'/impact'}>Impact</Link>
        <Link to="/funding" at={'/funding'}>Funding</Link>
        <Link to="/travel" at={'/travel'}>Travel</Link>
        <Link to="/bio" at={'/bio'}>Bio</Link>
        <Link to="/commitments" at={'/commitments'}>Commitments</Link>
        <Link to="/contact" at={'/contact'}>Contact</Link>
        <Link to="/faq" at={'/faq'}>FAQ</Link>
        <Link to="/cer" at={'/cer'}>CER FAQ</Link>
        <Link to="/cv">CV</Link>
        <br /><Link to="/wordplay" at={'/wordplay'}
            ><Emoji symbol="💬" /> <strong>Wordplay</strong></Link
        >
    </div>
    {#if headers.length > 1}
        <div class="outline">
            <ul>
                {#each headers as [header, id]}
                    <li
                        ><Link
                            to={`${$page.url.pathname.replace(base, '')}#${id}`}
                            active={id === activeid}
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

    :global(nav .at) {
        background-color: var(--annotation-color);
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
