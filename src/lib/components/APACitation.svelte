<script lang="ts">
    import type Paper from '$lib/models/Paper';
    import Authors from './Authors.svelte';
    import { profile } from '$lib/models/stores';

    interface Props {
        paper: Paper;
    }

    let { paper }: Props = $props();
</script>

<div>
    <div id={'citation-' + paper.id}>
        <Authors {paper} />
        ({paper.year}).
        <strong>{paper.title}</strong>
        {paper.title.charAt(paper.title.length - 1) === '?' ? '' : '.'}
        <em>{$profile.getSourceName(paper.source)}</em>
        {paper.doi ? ' ' + paper.doi : ''}
        {#if paper.award && paper.award.length > 0}
            <span>
                <br />
                <mark class="award">{paper.award.join(' + ')}</mark>
            </span>
        {/if}
    </div>
</div>

<style>
    .award {
        padding: 0;
        background: none;
        color: var(--text-color);
        font-weight: var(--bold-weight);
        display: block;
    }
</style>
