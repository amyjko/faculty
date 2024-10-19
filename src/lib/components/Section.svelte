<script lang="ts">
    import Linkable from './Linkable.svelte';

    interface Props {
        id: string;
        header: string;
        children?: import('svelte').Snippet;
    }

    let { id, header, children }: Props = $props();
</script>

<Linkable {id}>{header}</Linkable>
{@render children?.()}
