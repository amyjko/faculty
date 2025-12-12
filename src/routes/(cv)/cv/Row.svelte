<script lang="ts">
    import type Annotation from '$lib/models/Annotation';
    import Highlight from '$lib/components/Highlight.svelte';

    interface Props {
        start: string | number;
        end?: string | number | null;
        header: string;
        detail: string;
        extra?: string | null;
        annotation?: Annotation;
    }

    let {
        start,
        end = null,
        header,
        detail,
        extra = null,
        annotation,
    }: Props = $props();
</script>

<tr>
    <td
        ><small class="date"
            >{start}{start === end
                ? ''
                : end === null
                  ? ' — present'
                  : ' - ' + end}</small
        ></td
    >
    <td
        ><strong>{header}</strong>
        {#if annotation}<Highlight year={annotation.year}
                >{annotation.text}</Highlight
            >{/if}</td
    >
    {#if detail}<td>{detail}</td>{/if}
    {#if extra}<td>{extra}</td>{/if}
</tr>
