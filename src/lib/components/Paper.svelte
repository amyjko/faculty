<script lang="ts">

	import Block from "./Block.svelte";
	import Authors from "./Authors.svelte";
	import type { Paper } from "$lib/models/Paper";
	import Link from "./Link.svelte";
    import External from "./External.svelte";
    import APACitation from "./APACitation.svelte";
	import { profile } from "$lib/models/stores";
    import { afterUpdate } from "svelte";
	import Image from "./Image.svelte";

	export let paper: Paper;
	export let format: "apa" | "cv" | "full" = "full";
	export let highlight: boolean = false;
	export let year: boolean = true;

	let apa = false;

	function toggle() {
		apa = !apa;
	}

	function getLocalURL() {
		return "/papers/" + paper.local;
	}

	function getURL() {

		// If there's a local, show it first, since digital libraries have my deadname.
		if(paper.local)
			return getLocalURL();
		// If we don't have one, but there's an ACM authorizer URL, return it, because visitors will be able to bypass the paywall.
		else if(paper.authorizer)
			return paper.authorizer;
		// Lastly, include the doi, which will not be as easily accessible.
		else if(paper.doi)
			return paper.doi;
		else
			return "";

	}

	// Highlight the citation if expanded.
	afterUpdate(() => {
		if(apa) {
			let node = document.getElementById("citation-" + paper.id);
			if(node) {
				if (window.getSelection) {
					const selection = window.getSelection();
					if(selection !== null) {
						const range = document.createRange();
						range.selectNodeContents(node);
						selection.removeAllRanges();
						selection.addRange(range);
					}
				}
			}
		}
	})

	const url = getURL();

</script>

{#if format === "apa" }
	<APACitation paper={paper}/>
{:else if format === "cv" }
	<div class="ws-bottom">
		<strong>{paper.title}</strong> &sdot;
		{#if year }<small>{paper.year} &sdot;</small>{/if}
		<small><Authors paper={paper}/></small> &sdot; 
		<small><em>{$profile.getSourceName(paper.source)}</em></small>
		{#if paper.award && paper.award.length > 0}
			<span class="award">{ paper.award.join(" + ") }</span>
		{/if}
	</div>
{:else}
	<Block
		link={url}
	>
		<Image slot="image" url={"/images/papers/paper-" + paper.id + ".jpg"} alt="A clip from the paper's PDF."/>
		<div name={ paper.id } class={"paper ws-bottom " + (highlight ? "bg-info" : "")}>
			{#if paper.award && paper.award.length > 0}
				<span class="award">&#x2605; { paper.award.join(" + ")}</span>
				<br/>
			{/if}
			<small><Authors paper={paper} link/> ({paper.year})</small>
			<br/>
			{#if url}
				<span><strong>{#if url.startsWith("http")}<External to={url}>{paper.title}</External>{:else}<Link to={url}>{paper.title}</Link>{/if}</strong> <Link to={"/publications/#" + paper.id}><img class="link" alt="external link icon" src={"/images/icons/link.png"} /></Link></span>
			{:else}
				<strong>{paper.title}</strong>
			{/if}
			<br/><small><em>{$profile.getSourceName(paper.source)}</em></small>
			{#if paper.contribution}<span><br/><em class="text-muted small">{paper.contribution}</em></span>{/if}
			<div class="top-bordered">
				<small>
					<span class="clickable" tabIndex=0 on:click={toggle} on:keydown={(event) => event.key === "Enter" ? toggle() : undefined}>{apa ? "▾ cite" : "▸ cite"}</span>
					{#if paper.local}<span> &sdot; <Link to={getLocalURL()}>pdf</Link></span>{/if}
					{#if paper.doi}<span> &sdot; <External to={paper.doi}>doi</External></span>{/if}
					{#if paper.blog}<span> &sdot; <External to={paper.blog}>blog post</External></span>{/if}
				</small>
			</div>
			{#if apa}<div class="top-bordered"><small><APACitation paper={paper}/></small></div>{/if}

		</div>	
	</Block>
{/if}

<style>
	.ws-bottom {
		padding-bottom: 20px;
	}

	.award {
		padding: 3px;
		font-variant: small-caps;
		display: inline-block;
		margin-bottom: 3px;
		border-radius: 3px;
	}

</style>