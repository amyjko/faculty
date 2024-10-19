<script lang="ts">
    interface Props {
        to: string;
        children?: import('svelte').Snippet;
    }

    let { to, children }: Props = $props();
</script>

<a href={to} target="_blank" rel="noreferrer">{@render children?.()}</a>

<style>
    a:hover {
        text-decoration: underline;
    }
</style>
