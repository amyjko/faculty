<script lang="ts">
    import type Annotation from '#lib/models/Annotation.ts';
    import Highlight from '#lib/components/Highlight.svelte';
    import Years from './Years.svelte';
    import Link from '#lib/components/Link.svelte';

    interface Props {
        start: string | number;
        end?: string | number | null;
        header: string;
        /** Where the header links to, if anywhere. */
        url?: string | null;
        detail: string;
        /** A last column. Pass null for a row with nothing in it, so the row
            still has the cell and lines up with the rest of its table. */
        extra?: string | null;
        /** Notes listed in small type under the header, such as achievements. */
        items?: readonly string[];
        /** An anchor for the record this renders, for deep linking. */
        id?: string;
        annotation?: Annotation;
    }

    let {
        start,
        end = null,
        header,
        url = null,
        detail,
        extra = undefined,
        items = [],
        id = undefined,
        annotation,
    }: Props = $props();
</script>

<tr {id}>
    <td class="date"><Years {start} {end} /></td>
    <td
        ><strong
            >{#if url}<Link to={url} annotate={false}>{header}</Link
                >{:else}{header}{/if}</strong
        >
        {#if items.length > 0}
            <ul class="items">
                {#each items as item}<li><small>{item}</small></li>{/each}
            </ul>
        {/if}
        {#if annotation}<Highlight year={annotation.year}
                >{annotation.text}</Highlight
            >{/if}</td
    >
    <td>{detail}</td>
    {#if extra !== undefined}<td>{extra ?? ''}</td>{/if}
</tr>

<style>
    /* Shrinks to the years. It keeps the row's line height, so the years'
       first line box matches the header's and their baselines align. */
    .date {
        width: 1%;
    }

    .items {
        margin: 0;
        padding-inline-start: 0.75em;
        list-style-type: '- ';
        line-height: 1.3;
    }
</style>
