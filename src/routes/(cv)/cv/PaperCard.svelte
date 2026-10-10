<script lang="ts">
    import type { Paper } from '../../../data/Pubs';
    import { profile } from '#lib/models/stores.ts';
    import Authors from '#lib/components/Authors.svelte';
    import AwardTag from '#lib/components/AwardTag.svelte';
    import Highlight from '#lib/components/Highlight.svelte';
    import { paperHref } from '#lib/components/paperURL.ts';

    interface Props {
        paper: Paper;
    }

    let { paper }: Props = $props();

    let href = $derived(paperHref(paper));
</script>

<!-- A book-like block: a heavier spine on the left, the title first. -->
<div class="card" id={paper.id}>
    {#if paper.award && paper.award.length > 0}
        <div><AwardTag awards={paper.award} /></div>
    {/if}
    <strong class="title"
        >{#if href}<a {href}>{paper.title}</a>{:else}{paper.title}{/if}</strong
    >
    <div class="meta">
        <small><Authors {paper} students /></small>
        <br /><small>{paper.year} &sdot; <em
                >{$profile.getSourceName(paper.source)}</em
            ></small
        >
    </div>
    {#if paper.annotation}<Highlight year={paper.annotation.year}
            >{paper.annotation.text}</Highlight
        >{/if}
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        gap: var(--padding);
        padding: calc(2 * var(--padding)) calc(3 * var(--padding));
        border: 1px solid currentColor;
        border-left-width: 6px;
        border-radius: 2px 6px 6px 2px;
        break-inside: avoid;
    }

    /* Highlight is sized for a full-width column, not a card. */
    .card :global(.annotation) {
        max-width: 100%;
        margin-inline-start: 0;
    }

    .title {
        line-height: 1.25;
    }

    .meta {
        line-height: 1.3;
        margin-top: auto;
    }
</style>
