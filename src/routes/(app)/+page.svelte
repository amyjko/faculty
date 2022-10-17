<script lang="ts">

	import Link from "$lib/components/Link.svelte";
    import External from "$lib/components/External.svelte";
	import ProjectSummary from "$lib/components/ProjectSummary.svelte";
	import { profile } from "$lib/models/stores";

</script>

<div class="lead">
	Whether it's youth debugging an animation, a developer auditing a classifier for bias, or a teacher linking code to oppression, I study our individual and collective struggle to understand computing and harness it for play, power, equity, and justice.
</div>

<p>
	I work with outstanding <Link to={"/lab"}>students</Link> and vibrant <Link to={"/communities"}>communities</Link> on this work, 
	<Link to={"/publications"}>publishing</Link> it in <Link to={"/cer"}>Computing Education</Link>, 
	<External to="https://www.google.com/books/edition/Human_Computer_Interaction_Handbook/dVrRBQAAQBAJ?hl=en&gbpv=0">Human-Computer Interaction</External>, and 
	<External to="https://link.springer.com/article/10.1007/s10664-020-09858-z">Software Engineering</External> communities, 
	and then <Link to={"/essays"}>blogging</Link>, <Link to={"/talks"}>presenting</Link>, 
	<Link to={"/classes"}>teaching</Link>, <Link to={"/books"}>synthesizing</Link>, and 
	<Link to={"/impact"}>applying</Link> it in the world.
</p>

<p>
	I have expertise in debugging, program understanding, explainability, end-user programming, human aspects of software engineering, broadening participation in computing, assessment, and HCI education. 
	I also have broad methodological expertise, including the design and implementation of user interfaces, programming languages, and developer tools; 
	HCI methods; multivariate null hypothesis significance testing; Bayesian modeling; qualitative methods such as interviews, surveys, content analysis, and fieldwork; 
	data science methods; and argumentation.
</p>

<p>
	Want to do research with me?
	Read about my <Link to="/lab">lab</Link>.
</p>
				
<h3>Active Topics</h3>

<p>These are topics that people in my lab are actively investigating.</p>

{#each $profile.getProjects(project => project.active) as project }
	<ProjectSummary project={project} />
{/each}

<br/>
<h3>Inactive Topics</h3>

<p>These are topics that my lab has investigated in the past, but that no one in the lab is actively investigating now. New students might join my lab and bring them back to life!</p>

{#each $profile.getProjects(project => !project.active) as project }
	<ProjectSummary project={project} />
{/each}
