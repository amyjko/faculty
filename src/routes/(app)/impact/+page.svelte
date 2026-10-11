<script lang="ts">
    import Link from '#lib/components/Link.svelte';
    import Facets from '#lib/components/Facets.svelte';
    import Tag from '#lib/components/Tag.svelte';
    import Linkable from '#lib/components/Linkable.svelte';
    import { profile } from '#lib/models/stores.ts';
    import Title from '#lib/components/Title.svelte';
    import { impactID, unique } from '#lib/models/anchors.ts';
    import type { Impact } from '../../../data/Impact';

    let filter: Record<string, string> = $state({});

    let impacts = $derived(
        $profile.getImpacts(
            (impact) => !('kind' in filter) || impact.kind === filter.kind,
            (impact) => -impact.start,
        ),
    );

    /** Every kind of impact, from all of them rather than just those shown. */
    const kinds = [
        ...new Set(
            $profile
                .getImpacts(
                    () => true,
                    () => 0,
                )
                .map((impact) => impact.kind),
        ),
    ];

    /** Anchors so search results and links can reach a specific impact. */
    let ids = $derived(unique(impacts.map(impactID)));

    function setFilter(selection: Record<string, string>) {
        filter = selection;
    }

    /**
     * What the evidence link says: the title and outlet when the record names
     * them, otherwise the website it points to, so the link is never vague.
     */
    function source(impact: Impact & { url: string }): string {
        const named = [impact.title, impact.source].filter(
            (part) => part !== undefined && part !== '',
        );
        if (named.length > 0) return named.join(' · ');
        try {
            return new URL(impact.url).hostname.replace(/^www\./, '');
        } catch {
            return impact.url;
        }
    }

    /** The span of years, for impacts that ran longer than the year they're under. */
    function span(impact: Impact): string | undefined {
        return impact.end === null
            ? `${impact.start}–present`
            : impact.end !== impact.start
              ? `${impact.start}–${impact.end}`
              : undefined;
    }
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

<p> Filter by kind. </p>

<Facets facets={{ kind: kinds }} update={setFilter} />

{#each impacts as impact, index}
    {#if index === 0 || impact.start !== impacts[index - 1].start}
        <Linkable id={`${impact.start}`}>{impact.start}</Linkable>
    {/if}
    {@const years = span(impact)}
    <p id={ids[index]}>
        <Tag label={impact.kind} selected={filter.kind === impact.kind} />
        {#if years}<small>{years}</small>{/if}
        <br />{impact.description}
        {#if impact.url}
            <br /><small
                ><Link to={impact.url}>{source({ ...impact, url: impact.url })}</Link
                ></small
            >
        {/if}
    </p>
{/each}
