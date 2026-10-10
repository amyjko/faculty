<script lang="ts">
    import Block from './Block.svelte';
    import Authors from './Authors.svelte';
    import type { Paper } from '../../data/Pubs';
    import Link from './Link.svelte';
    import APACitation from './APACitation.svelte';
    import { profile } from '#lib/models/stores.ts';
    import Image from './Thumbnail.svelte';
    import Highlight from './Highlight.svelte';
    import localAsset from './localAsset';
    import AwardTag from './AwardTag.svelte';
    import { paperURL, paperHref } from './paperURL';

    interface Props {
        paper: Paper;
        format?: 'apa' | 'cv' | 'full';
        highlight?: boolean;
        year?: boolean;
    }

    let {
        paper,
        format = 'full',
        highlight = false,
        year = true,
    }: Props = $props();

    let apa = $state(false);

    function toggle() {
        apa = !apa;
    }

    // Highlight the citation if expanded.
    $effect(() => {
        if (apa) {
            let node = document.getElementById('citation-' + paper.id);
            if (node) {
                if (window.getSelection) {
                    const selection = window.getSelection();
                    if (selection !== null) {
                        const range = document.createRange();
                        range.selectNodeContents(node);
                        selection.removeAllRanges();
                        selection.addRange(range);
                    }
                }
            }
        }
    });

    let paperLocalURL = $derived(`/papers/${paper.local}`);

    let url = $derived(paperURL(paper));
    let href = $derived(paperHref(paper));
</script>

{#if format === 'apa'}
    <APACitation {paper} />
{:else if format === 'cv'}
    <!-- Each paper renders once in this format, under exactly one kind
         section, so the paper's own id is unique on the page. -->
    <div class="paper" id={paper.id}>
        {#if paper.award && paper.award.length > 0}
            <div><AwardTag awards={paper.award} /></div>
        {/if}
        <strong
            >{#if href}<a {href}>{paper.title}</a>{:else}{paper.title}{/if}</strong
        > &sdot;
        {#if year}<small>{paper.year} &sdot;</small>{/if}
        <small><Authors {paper} students /></small> &sdot;
        <small><em>{$profile.getSourceName(paper.source)}</em></small>
        {#if paper.annotation}
            <br /><Highlight year={paper.annotation.year}
                >{paper.annotation.text}</Highlight
            >
        {/if}
    </div>
{:else}
    {#snippet image()}
        {#if paper.image !== false}
            <Image
                url={'/images/papers/' + paper.id + '.jpg'}
                alt="A clip from the paper's PDF."
                {highlight}
            />
        {/if}
    {/snippet}
    <Block link={url} {image}>
        <div id={paper.id} class="paper">
            {#if paper.award && paper.award.length > 0}
                <mark class="award">&#x2605; {paper.award.join(' + ')}</mark>
                <br />
            {/if}
            <small><Authors {paper} link /> ({paper.year})</small>
            <br />
            {#if href}
                <span><a {href}>{paper.title}</a></span>
            {:else}
                <strong>{paper.title}</strong>
            {/if}
            <br /><small><em>{$profile.getSourceName(paper.source)}</em></small>
            {#if paper.contribution}<span
                    ><br /><small>{paper.contribution}</small></span
                >{/if}
            <div>
                <small>
                    <span
                        class="clickable"
                        role="button"
                        tabindex="0"
                        onclick={toggle}
                        onkeydown={(event) =>
                            event.key === 'Enter' ? toggle() : undefined}
                        >{apa ? '▾ cite' : '▸ cite'}</span
                    >
                    {#if paper.local}<span>
                            &sdot; <a href={localAsset(paperLocalURL)}>pdf</a></span
                        >{/if}
                    {#if paper.doi}<span>
                            &sdot; <Link to={paper.doi}>doi</Link></span
                        >{/if}
                    {#if paper.slides}<span>
                            &sdot; <a href={localAsset(`slides/${paper.slides}`)}
                                >slides</a
                            ></span
                        >{/if}
                    {#if paper.blog}<span>
                            &sdot; <Link to={paper.blog}>blog</Link></span
                        >{/if}
                    &sdot; <Link to={'/(app)/publications'} id={paper.id}
                        ><span class="emoji">&#x1F517;</span></Link
                    >
                </small>
            </div>
            {#if apa}<div><small><APACitation {paper} /></small></div>{/if}
        </div>
    </Block>
{/if}

<style>
    .paper {
        padding-bottom: 20px;
    }

    .award {
        padding: 3px;
        font-variant: small-caps;
        display: inline-block;
        margin-bottom: 3px;
        border-radius: 3px;
    }

    @media print {
        .paper {
            orphans: 2;
            widows: 2;
            break-inside: avoid;
        }
    }
</style>
