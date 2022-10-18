<script lang="ts">

	import External from "./External.svelte";
	import Link from "./Link.svelte";
	import { page } from "$app/stores";

	$: path = $page.url.pathname;

</script>

<div class='row'>

	<div class="col-xs-3 col-sm-3 col-md-3">
		<Link to="/"><img class='img-thumbnail' alt="Headshot of Amy J. Ko" src={"/images/headshots/mug-ajko.jpg"} /></Link>
	</div>

	<div class="col-xs-9 col-sm-9 col-md-9" style={"line-height: 1.25em"}>
		<h2 style={"margin: 0"}>Amy J. Ko, Ph.D.</h2>
		<small>
			<External to="https://www.mypronouns.org/she-her">she/her/hers</External>
			<br/>
			<External to="https://ap.washington.edu/ahr/academic-titles-ranks/professor/">Professor</External>
			<span class="hidden-xs">
				<!-- &nbsp;&sdot; <a href="https://ischool.uw.edu/academics/informatics">Program Chair, <em>Informatics</em></a> -->
				&nbsp;&sdot; <External to="https://dl.acm.org/journal/toce">Editor-in-Chief, <em>ACM TOCE</em></External>
			</span>
			<br/>
			<External to="http://ischool.uw.edu">The Information School</External>
			<span class="hidden-xs">
				&nbsp;&sdot;<External to="http://cs.uw.edu">Computer Science &amp; Engineering (courtesy)</External>
			</span>
			<br/><External to="http://www.washington.edu">University of Washington<span class="hidden-xs">, Seattle</span></External>
			<br/><a href="mailto:ajko@uw.edu">email</a> &sdot; <External to="https://twitter.com/amyjko">twitter</External> &sdot; <External to="https://amyjko.medium.com">blog</External>
			<br/><span style={"backgroundColor: rgb(255, 240, 240)"}>I'm on <External to="https://medium.com/bits-and-behavior/sabbatical-2-e2ea332301c3">sabbatical</External> until Sept. 2023.</span>
		</small>
	</div>
	
</div>

<div class="header">
	<nav>
		<ul class="nav nav-pills">
			<li role="presentation" class={path === "/" ? "active" : ""}><Link to="/">Research</Link></li>
			<li role="presentation" class={path.match(/^\/lab(\/.+)?$/) ? "active" : ""}><Link to="/lab">Lab</Link></li>
			<li role="presentation" class={path.startsWith("/lablets") ? "active" : ""}><Link to="/lablets">Lablets</Link></li>
			<li role="presentation" class={path.startsWith("/communities") ? "active" : ""}><Link to="/communities">Communities</Link></li>
			<li role="presentation" class={path.startsWith("/publications") ? "active" : ""}><Link to="/publications">Publications</Link></li>
			<li role="presentation" class={path.startsWith("/essays") ? "active" : ""}><Link to="/essays">Essays</Link></li>
			<li role="presentation" class={path.startsWith("/talks") ? "active" : ""}><Link to="/talks">Talks</Link></li>
			<li role="presentation" class={path.startsWith("/classes") ? "active" : ""}><Link to="/classes">Classes</Link></li>
			<li role="presentation" class={path.startsWith("/books") ? "active" : ""}><Link to="/books">Books</Link></li>
			<li role="presentation" class={path.startsWith("/impact") ? "active" : ""}><Link to="/impact">Impact</Link></li>
			<li role="presentation" class={path.startsWith("/funding") ? "active" : ""}><Link to="/funding">Funding</Link></li>
			<li role="presentation" class={path.startsWith("/travel") ? "active" : ""}><Link to="/travel">Travel</Link></li>
			<li role="presentation" class={path.startsWith("/bio") ? "active" : ""}><Link to="/bio">Bio</Link></li>
			<li role="presentation" class={path.startsWith("/commitments") ? "active" : ""}><Link to="/commitments">Commitments</Link></li>
			<li role="presentation" class={path.startsWith("/contact") ? "active" : ""}><Link to="/contact">Contact</Link></li>
			<li role="presentation" class={path.startsWith("/faq") ? "active" : ""}><Link to="/faq">FAQ</Link></li>
			<li role="presentation" class={path.startsWith("/cer") ? "active" : ""}><Link to="/cer">CER FAQ</Link></li>
			<li role="presentation"><Link to="/cv">CV</Link></li>
		</ul>
	</nav>
</div>

<style>
	.header {
		padding-top: 10px;
		padding-bottom: 10px;
		margin-top: 20px;
		margin-bottom: 20px;
		border-top: 1px solid #e5e5e5;
		border-bottom: 1px solid #e5e5e5;
	}

	:global(.nav > li > a){
		margin: 2px;
		padding: 5px;
	}

</style>