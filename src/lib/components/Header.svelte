<script lang="ts">
    import Emoji from './Emoji.svelte';
    import External from './External.svelte';
    import Link from './Link.svelte';
    import Social from './Social.svelte';
    import Image from './Thumbnail.svelte';
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
        <External to="https://www.mypronouns.org/she-her">she/her/hers</External
        >
        <br /><External
            to="https://ap.washington.edu/ahr/academic-titles-ranks/professor/"
            >Professor</External
        >
        <br /><External to="http://ischool.uw.edu"
            >The Information School</External
        >
        <br /><External to="http://cs.uw.edu"
            >Computer Science &amp; Engineering (courtesy)</External
        >
        <br /><External to="http://www.washington.edu"
            >University of Washington, Seattle</External
        >
        <!-- &nbsp;&sdot; <a href="https://ischool.uw.edu/academics/informatics">Program Chair, <em>Informatics</em></a> -->
        <br /><External to="https://dl.acm.org/journal/toce"
            >Editor-in-Chief, <em>ACM TOCE</em></External
        >
        <Social />
    </div></section
>
<section class="small-info">
    <a href="/ajko/"
        ><Image
            url={'/images/headshots/ajko.jpg'}
            alt="Headshot of Amy J. Ko"
        /></a
    >
    <div>
        <h1 style="margin-top: 0; margin-bottom: 0;">Amy J. Ko</h1>
        <div class="metadata">
            <External
                to="https://ap.washington.edu/ahr/academic-titles-ranks/professor/"
                >Professor</External
            >
            <br /><External to="http://ischool.uw.edu">iSchool</External> &middot;
            <External to="http://cs.uw.edu">CSE</External> &middot; <External
                to="http://www.washington.edu">UW</External
            >
            <Social />
        </div>
    </div>
</section>

<hr />
<nav>
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
    <br /><Link to="/wordplaypen" at={'/wordplaypen'}
        ><Emoji symbol="💬" /> <strong>Wordplaypen</strong></Link
    >
</nav>

<hr class="small-hr" />

<style>
    nav,
    .metadata {
        font-size: var(--small-font-size);
        line-height: 1.5;
    }

    nav {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: calc(var(--padding) / 2);
    }

    :global(nav > *) {
        padding-left: var(--padding);
        padding-right: var(--padding);
        border-radius: var(--roundedness);
    }

    :global(nav > a:hover) {
        background-color: var(--border-color);
    }

    :global(nav > .at) {
        background-color: var(--annotation-color);
    }

    .small-info {
        display: flex;
        flex-direction: row;
        flex-basis: 1;
    }

    @media only screen and (min-width: 800px) {
        nav {
            position: sticky;
            top: var(--margin);
        }
        .small-info {
            display: none;
        }
        .small-hr {
            display: none;
        }
    }

    @media only screen and (max-width: 800px) {
        .info {
            display: none;
        }

        nav {
            flex-wrap: nowrap;
            overflow-x: scroll;
            white-space: nowrap;
        }
    }
</style>
