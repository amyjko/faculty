<script lang="ts">
    import type Annotation from '#lib/models/Annotation.ts';
    import Highlight from '#lib/components/Highlight.svelte';
    import Link from '#lib/components/Link.svelte';

    interface Props {
        /** An anchor for the record this renders, for deep linking. */
        id?: string;
        venue?: string;
        title?: string;
        author?: string;
        url?: string | null;
        annotation?: Annotation;
    }

    let { id, venue, title, author, url, annotation }: Props = $props();
</script>

<!-- A dateless entry for lists already grouped under year headings. -->
<div class="entry" {id}>
    {#if venue}<strong>{venue}</strong>{/if}
    {#if title}
        <div>
            {#if url}<Link to={url} annotate={false}>{title}</Link>{:else}{title}{/if}
        </div>
    {/if}
    {#if author}<div><small>{author}</small></div>{/if}
    {#if annotation}<Highlight year={annotation.year}
            >{annotation.text}</Highlight
        >{/if}
</div>

<style>
    .entry {
        padding-bottom: var(--margin);
        line-height: 1.35;
        break-inside: avoid;
    }
</style>
