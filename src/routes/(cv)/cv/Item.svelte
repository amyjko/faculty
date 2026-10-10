<script lang="ts">
    import type Annotation from '#lib/models/Annotation.ts';
    import Highlight from '#lib/components/Highlight.svelte';
    import Years from './Years.svelte';
    import Link from '#lib/components/Link.svelte';

    interface Props {
        start: number;
        stop?: number | null | false;
        header: string;
        /** Where the header links to, if anywhere. */
        url?: string | null;
        /** An anchor for the record this renders, for deep linking. */
        id?: string;
        two?: string | undefined;
        three?: string | undefined;
        four?: string | readonly string[] | undefined;
        five?: string | undefined;
        six?: string | undefined;
        annotation?: Annotation;
    }

    let {
        start,
        stop = false,
        header,
        url = null,
        id = undefined,
        two = undefined,
        three = undefined,
        four = undefined,
        five = undefined,
        six = undefined,
        annotation = undefined,
    }: Props = $props();
</script>

<div class="chunk" {id}>
    <div><Years {start} end={stop} /></div>
    <div>
        <strong class="header"
            >{#if url}<Link to={url} annotate={false}>{header}</Link
                >{:else}{header}{/if}</strong
        >
        {#if two}<span><br />{two} </span>{/if}
        {#if three}<div><small>{three}</small></div>{/if}
        {#if four}
            {#if Array.isArray(four)}
                <small>
                    {#each four as item}
                        - {item}<br />
                    {/each}
                </small>
            {:else}
                <div><small>{four}</small></div>
            {/if}
        {/if}
        {#if five}<div><small>{five}</small></div>{/if}
        {#if six}<div><small>{six}</small></div>{/if}
        {#if annotation}<Highlight year={annotation.year}
                >{annotation.text}</Highlight
            >{/if}
    </div>
</div>

<style>
    /* The year sits in a narrow column to the left of the content, so the
       eye can run down the dates without reading each block. */
    .chunk {
        display: grid;
        grid-template-columns: 4em 1fr;
        column-gap: var(--margin);
        /* Puts the smaller years on the header's baseline. */
        align-items: first baseline;
        margin-bottom: var(--margin);
        page-break-after: auto;
    }

    @media print {
        .chunk {
            widows: 3;
            orphans: 3;
        }
    }
</style>
