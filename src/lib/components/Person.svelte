<script lang="ts">

    import type { Person } from "$lib/models/Person";
    import Block from "./Block.svelte";
    import External from "./External.svelte";
    import Link from "./Link.svelte";
    import Image from "./Image.svelte";

    export let highlight: boolean;
    export let person: Person;

</script>

<div class={(highlight ? "bg-info" : "")} id={person.id}>
    <Block 
        link={person.url}
    >
        <Image slot="image" url={"/images/headshots/mug-" + person.id + ".jpg"} alt={"Photograph of " + person.name} />
        <span>
            <External to={person.url}>{person.name}</External>
            &nbsp;
            <mark>{person.level}</mark>
            &nbsp;
            <small>{ person.startdate }{ person.enddate ? (person.startdate !== person.enddate ? " - " + person.enddate : null) : " - present" }</small>
            <br/>
            {person.bio}
            {#if person.dissertation }
                <div class="top-bordered">
                    <small>
                        <Link to={"/dissertations/" + person.dissertation}>Dissertation</Link>
                    </small>
                </div>
            {/if}
        </span>
    </Block>
</div>