<script lang="ts">

	import External from "./External.svelte";
	import Link from "./Link.svelte";
	import Image from "./Thumbnail.svelte";
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
	<Link to="/" at={"/"}>Research</Link>
	<Link to="/lab" at={"/lab"}>Lab</Link>
	<Link to="/lablets" at={"/lablets"}>Lablets</Link>
	<Link to="/communities" at={"/communities"}>Communities</Link>
	<Link to="/publications" at={"/publications"}>Publications</Link>
	<Link to="/essays" at={"/essays"}>Essays</Link>
	<Link to="/talks" at={"/talks"}>Talks</Link>
	<Link to="/classes" at={"/classes"}>Classes</Link>
	<Link to="/books" at={"/books"}>Books</Link>
	<Link to="/impact" at={"/impact"}>Impact</Link>
	<Link to="/funding" at={"/funding"}>Funding</Link>
	<Link to="/travel" at={"/travel"}>Travel</Link>
	<Link to="/bio" at={"/bio"}>Bio</Link>
	<Link to="/commitments" at={"/commitments"}>Commitments</Link>
	<Link to="/contact" at={"/contact"}>Contact</Link>
	<Link to="/faq" at={"/faq.*"}>FAQ</Link>
	<Link to="/cer" at={"/cer.*"}>CER FAQ</Link>
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

	@media only screen and (min-width: 800px) {
		nav {
			position: sticky;
			top: var(--margin);
		}
	}
</style>