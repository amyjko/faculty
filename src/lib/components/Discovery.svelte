<script lang="ts">
    import type { Discovery } from '$lib/models/Discovery';
    import { profile } from '$lib/models/stores';
    import Block from './Block.svelte';
    import Link from './Link.svelte';
    import Thumbnail from './Thumbnail.svelte';
    import External from './External.svelte';
    import getPersonImagePath from '$lib/components/getPersonImage';
    import Paper from './Paper.svelte';
    import Emoji from './Emoji.svelte';

    interface Props {
        discovery: Discovery;
    }

    let { discovery }: Props = $props();

    let range = $derived($profile.getDiscoveryRange(discovery));
    let papers = $derived(
        $profile
            .getDiscoveryPapers(discovery)
            .toSorted((a, b) => b.year - a.year),
    );
    let keyPaper = $derived(papers[0]);

    let expanded = $state(false);
</script>

{#if keyPaper}
    <Block>
        {#snippet image()}
            <Thumbnail
                url={`/images/papers/paper-${keyPaper.id}.jpg`}
                alt="A clip from the paper's text or figure"
            />
        {/snippet}
        <div class="title">
            <strong>{discovery.contribution}</strong>
            <small
                >({range[0]}{range[0] !== range[1]
                    ? ` — ${range[1]}`
                    : ''})</small
            >
        </div>
        <div>
            {discovery.detail}
        </div>
        <div class="meta">
            <div>
                {#each $profile.getPeopleFromPubs(papers.map((p) => p.id)) as person}
                    {#if person}
                        <Link
                            to={person.id === 'ajko'
                                ? '/(app)/bio'
                                : '/(app)/lab'}
                            id={person.id === 'ajko' ? undefined : person.id}
                        >
                            <img
                                src={`${getPersonImagePath(person.id)}`}
                                alt={`${person.name} headshot`}
                                class="mini-headshot"
                            />
                        </Link>
                    {/if}
                {/each}
            </div>
            <div class="resources">
                <!-- {#each discovery.tags as tag}<mark class={'topic'}
                        ><Link to={`/(app)/publications`} query={tag}
                            >{tag}</Link
                        ></mark
                    >{/each} -->
                {#if discovery.resources}
                    {#each discovery.resources as resource}
                        {#if resource.kind === 'video'}
                            <div class="item">
                                <Emoji symbol="🎬"></Emoji>
                                <External to={resource.url}
                                    >{resource.label}</External
                                >
                            </div>
                        {:else if resource.kind === 'demo'}
                            <div class="item">
                                <Emoji symbol="🖥️"></Emoji>
                                <External to={resource.url}
                                    >{resource.label}</External
                                >
                            </div>
                        {:else if resource.kind === 'code'}
                            <div class="item">
                                <code>{'{}'}</code>
                                <External to={resource.url}
                                    >{resource.label}</External
                                >
                            </div>
                        {/if}
                    {/each}
                {/if}
            </div>
            <button onclick={() => (expanded = !expanded)}
                ><small>{expanded ? '–' : '+'}</small>
                {papers.length} publications</button
            >
            {#if expanded}
                <div class="papers">
                    {#each papers as paper}
                        <Paper {paper} />
                    {/each}
                </div>
            {/if}
        </div>
    </Block>
{/if}

<style>
    .title {
        line-height: 1.4;
        display: flex;
        flex-direction: column;
        gap: 0;
    }
    .resources {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        font-size: var(--small-font-size);
        gap: var(--margin);
        row-gap: var(--padding);
    }

    .meta {
        display: flex;
        flex-direction: column;
        gap: calc(var(--margin) / 2);
        align-items: start;
    }

    .papers {
        margin-top: var(--margin);
        border-left: solid 4px var(--border-color);
        padding: 0;
        padding-left: var(--margin);
    }
</style>
