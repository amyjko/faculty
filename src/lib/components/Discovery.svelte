<script lang="ts">
    import type { Discovery } from '$lib/models/Discovery';
    import { profile } from '$lib/models/stores';
    import Block from './Block.svelte';
    import Link from './Link.svelte';
    import Thumbnail from './Thumbnail.svelte';
    import External from './External.svelte';
    import getPersonImagePath from '$lib/components/getPersonImage';
    import Paper from './Paper.svelte';

    interface Props {
        discovery: Discovery;
    }

    let { discovery }: Props = $props();

    let range = $derived($profile.getDiscoveryRange(discovery));
    let papers = $derived($profile.getDiscoveryPapers(discovery));
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
        <strong>{discovery.contribution}</strong>
        <small
            >({range[0]}{range[0] !== range[1] ? ` — ${range[1]}` : ''})</small
        >
        <br />{discovery.detail}
        <p>
            {#each $profile.getPeopleFromPubs(papers.map((p) => p.id)) as person}
                {#if person}
                    <Link
                        to={person.id === 'ajko' ? '/(app)/bio' : '/(app)/lab'}
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
        </p>
        <p>
            <button onclick={() => (expanded = !expanded)}
                ><small>{expanded ? '▼' : '▶'}</small>
                {papers.length} publications</button
            >
            {#if expanded}
                {#each papers as paper}
                    <Paper {paper} />
                {/each}
            {/if}
        </p>
    </Block>
{/if}
