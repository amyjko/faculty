<script lang="ts">
    import Block from '$lib/components/Block.svelte';
    import External from '$lib/components/External.svelte';
    import { profile } from '$lib/models/stores';
    import Image from '$lib/components/Thumbnail.svelte';
    import Title from '$lib/components/Title.svelte';
</script>

<Title text="Impact" />

<h1> I actively share my research and expertise with the world. </h1>

<p>
    I try to reach many audiences, including not only academia, but K-12
    education across the state, nation, and world, not-for-profit and for-profit
    industries focused on programming, learning technologies, and learning in
    general, state and federal government, and the broader public.
</p>

<p> Here is a timeline of impacts I've tried to document over my career. </p>

<hr />

{#each $profile.getImpacts( () => true, (impact) => -impact.start, ) as impact}
    <p>
        <span style="font-variant: small-caps">{impact.kind}</span>
        <small
            >({impact.start}{impact.end == null
                ? '-present'
                : impact.start !== impact.end
                  ? '-' + impact.end
                  : ''})</small
        >
        {#if impact.url}<small
                ><External to={impact.url}>evidence</External></small
            >{/if}
        <br />{impact.description}
    </p>
{/each}
