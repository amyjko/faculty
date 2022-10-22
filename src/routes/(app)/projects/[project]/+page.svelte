<script lang="ts">
    
	import { onMount } from "svelte";
    import External from "$lib/components/External.svelte";
	import { profile } from "$lib/models/stores";
	import Paper from "$lib/components/Paper.svelte";
	import Block from "$lib/components/Block.svelte";
	import Link from "$lib/components/Link.svelte";
	import Image from "$lib/components/Image.svelte";
	import { page } from "$app/stores";
    import getPersonImagePath from "$lib/components/getPersonImage";

	$: project = $profile.getProject($page.params.project);

	onMount(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	const buttonStyle = "btn btn-xs btn-default";

</script>

{#if project}

	{@const papers = $profile.getPublications(paper => project !== undefined && project.papers.includes(paper.id), paper => -paper.year)}
	{@const videos = project.links.filter(link => link.url.indexOf("youtube.com") >= 0) }
	{@const code = project.links.filter(link => link.url.indexOf("github.com") >= 0) }
	{@const demos = project.links.filter(link => link.title.indexOf("Try") >= 0) }

	<h1>
		<em>{project.name}</em> <small>({project.startdate}&ndash;{project.stopdate ?? ""})</small>
	</h1>

	<Block>
		<Image slot="image" url={"/images/projects/project-" + project.id + ".png"} alt={project.name} />
		<p>{project.description}</p>
	</Block>

	<h3>Contributors</h3>
	<p>
		{#each project.people.map(id => $profile.getPerson(id)) as person }
			{#if person }
				<Link to={person.id === "ajko" ? "/bio" : "/lab#" + person.id}>
					<img 
						src={getPersonImagePath(person.id)}
						alt={person.name + " headshot"}
						class="mini-headshot"
						style="width: 32px"
					/>
				</Link>
			{/if}
		{/each}
	</p>

	<h3>Funding</h3>
	{#each project.funding.map(id => $profile.getGrant(id)) as grant}
		{#if grant }
			<p>
				{#if grant.url}<External to={grant.url}>{grant.title}</External>{:else}{grant.title}{/if}
				<br/><em><small>{grant.funder}</small></em>
			</p>
		{/if}
	{/each}

	{#if videos.length > 0}
		<h3>Videos</h3>
		{#each videos as link}
			<div class="responsive-frame">
				<iframe title="YouTube video" src={"https://www.youtube.com/embed/" + link.url.substring(link.url.indexOf("=") + 1)} frameBorder="0" allowFullScreen></iframe>
			</div>
		{/each}

	{/if}

	{#if demos.length > 0}
		<h3>Demos</h3>
		{#each demos as link}
			<p><a class={buttonStyle} href={link.url} target="_blank" rel="noreferrer">{link.title}</a></p>
		{/each}
	{/if}

	{#if code.length > 0}
		<h3>Source</h3>
		{#each code as link}
			<p><a class={buttonStyle} href={link.url} target="_blank" rel="noreferrer">{link.title}</a>&nbsp;</p>
		{/each}
	{/if}

	<h3>Impact</h3>

	{#each $profile.getImpacts(
			impact => project !== undefined && impact.projects.includes(project.id),
			impact => -impact.start
		) as impact}
		<p>
			<span style="font-variant: small-caps">{impact.kind}</span> <small> ({impact.start}{impact.end == null ? "-present" : impact.start !== impact.end ? "-" + impact.end : "" })</small>
			<br/>{impact.description}{#if impact.url}<small> <External to={impact.url}>evidence</External></small>{/if}
		</p>
	{/each}

	<h3>Publications</h3>

	{#each papers as paper}
		<Paper paper={paper} />
	{/each}

{:else}
	<div class='alert'>There's no project by this name.</div>
{/if}
