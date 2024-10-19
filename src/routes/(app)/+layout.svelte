<script lang="ts">
    import Page from '$lib/components/Page.svelte';
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<Page>{@render children?.()}</Page>
