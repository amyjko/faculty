<script lang="ts">

	import External from "./External.svelte";
	import Link from "./Link.svelte";
	import Image from "./Image.svelte";
	import { page } from "$app/stores";

	$: path = $page.url.pathname;

</script>

<div class="info">
	<a href="/ajko/"><Image url={"/images/headshots/mug-ajko.jpg"} alt="Headshot of Amy J. Ko"/></a>
	<h1>Amy J. Ko, Ph.D.</h1>
	<External to="https://www.mypronouns.org/she-her">she/her/hers</External>
	<br/><External to="https://ap.washington.edu/ahr/academic-titles-ranks/professor/">Professor</External>
	<br/><External to="http://ischool.uw.edu">The Information School</External>
	<br/><External to="http://cs.uw.edu">Computer Science &amp; Engineering (courtesy)</External>
	<br/><External to="http://www.washington.edu">University of Washington<span class="hidden-xs">, Seattle</span></External>
	<!-- &nbsp;&sdot; <a href="https://ischool.uw.edu/academics/informatics">Program Chair, <em>Informatics</em></a> -->
	<br/><External to="https://dl.acm.org/journal/toce">Editor-in-Chief, <em>ACM TOCE</em></External>
	<br/><a href="mailto:ajko@uw.edu">email</a> &sdot; <External to="https://twitter.com/amyjko">twitter</External> &sdot; <External to="https://amyjko.medium.com">blog</External>
	<br/><br/><mark>I'm on <External to="https://medium.com/bits-and-behavior/sabbatical-2-e2ea332301c3">sabbatical</External> until Sept. 2023.</mark>
</div>
<hr/>
<nav>
	<Link to="/" at={path === "/"}>Research</Link>
	<Link to="/lab" at={/^\/lab(\/.+)?$/.test(path)}>Lab</Link>
	<Link to="/lablets" at={path.startsWith("/lablets")}>Lablets</Link>
	<Link to="/communities" at={path.startsWith("/communities")}>Communities</Link>
	<Link to="/publications" at={path.startsWith("/publications")}>Publications</Link>
	<Link to="/essays" at={path.startsWith("/essays")}>Essays</Link>
	<Link to="/talks" at={path.startsWith("/talks")}>Talks</Link>
	<Link to="/classes" at={path.startsWith("/classes")}>Classes</Link>
	<Link to="/books" at={path.startsWith("/books")}>Books</Link>
	<Link to="/impact" at={path.startsWith("/impact")}>Impact</Link>
	<Link to="/funding" at={path.startsWith("/funding")}>Funding</Link>
	<Link to="/travel" at={path.startsWith("/travel")}>Travel</Link>
	<Link to="/bio" at={path.startsWith("/bio")}>Bio</Link>
	<Link to="/commitments" at={path.startsWith("/commitments")}>Commitments</Link>
	<Link to="/contact" at={path.startsWith("/contact")}>Contact</Link>
	<Link to="/faq" at={path.startsWith("/faq")}>FAQ</Link>
	<Link to="/cer" at={path.startsWith("/cer")}>CER FAQ</Link>
	<Link to="/cv">CV</Link>
</nav>
<hr/>

<style>
	:global(nav > *) {
		padding: var(--padding);
		border-radius: var(--roundedness);
	}

	:global(nav > a:hover) {
		background-color: var(--border-color);
	}

	:global(nav > .at) {
		background-color: var(--annotation-color);
	}

	nav {
		position: sticky;
		top: var(--margin);
	}

</style>