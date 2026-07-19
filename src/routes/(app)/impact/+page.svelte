<script lang="ts">
    import Block from '$lib/components/Block.svelte';
    import Link from '$lib/components/Link.svelte';
    import { profile } from '$lib/models/stores';
    import Image from '$lib/components/Thumbnail.svelte';
    import Title from '$lib/components/Title.svelte';
    import { impactID, unique } from '$lib/models/anchors';

    let impacts = $derived(
        $profile.getImpacts(
            () => true,
            (impact) => -impact.start,
        ),
    );

    /** Anchors so search results and links can reach a specific impact. */
    let ids = $derived(unique(impacts.map(impactID)));
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

{#each impacts as impact, index}
    <p id={ids[index]}>
        <span style="font-variant: small-caps">{impact.kind}</span>
        <small
            >({impact.start}{impact.end == null
                ? '-present'
                : impact.start !== impact.end
                  ? '-' + impact.end
                  : ''})</small
        >
        {#if impact.url}<small><Link to={impact.url}>evidence</Link></small
            >{/if}
        <br />{impact.description}
    </p>
{/each}
