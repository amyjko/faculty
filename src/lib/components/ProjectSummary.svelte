<script lang="ts">
    import Link from "$lib/components/Link.svelte";
    import Block from "$lib/components/Block.svelte";
    import type { Project } from "$lib/models/Project";
    import { profile } from "../models/stores";
    import Image from "./Image.svelte";
    import getPersonImagePath from "$lib/components/getPersonImage";
    export let project: Project;

    const link = "/projects/" + project.id;

</script>
		
<Block     
    link={link}
>
    <Image slot="image" url={"/images/projects/project-" + project.id + ".png"} alt={project.name} />
    <span>
        <h3>{project.name} <small>({project.startdate}&ndash;{project.stopdate ?? ""})</small></h3>
        <p>
        {#each project.people.map(id => $profile.getPerson(id)) as person }
            {#if person}
                <Link to={person.id === "ajko" ? "/bio" : "/lab/#" + person.id}>
                    <img 
                        src={`${getPersonImagePath(person.id)}`} 
                        alt={`${person.name} headshot`}
                        class="mini-headshot" 
                    />
                </Link>
            {/if}
        {/each}
        </p>
        <p>{project.description}</p>
        <p><Link to={link}>{"See " + (project.papers.length) + " papers" + (project.links.length > 0 ? ", " + project.links.length + " demo" + (project.links.length > 1 ? "s" : "") + ", " : "") + " and impact details..."}</Link></p>
    </span>
</Block>

<style>
    h3 {
        margin-top: 0;
    }
</style>