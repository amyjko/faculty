<script lang="ts">
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<p class="alert">
    {@render children?.()}
</p>

<style>
    p {
        display: block;
        text-align: left;
        background-color: var(--annotation-color);
        padding: calc(2 * var(--padding));
        margin-top: var(--margin);
        margin-bottom: var(--margin);
        border-radius: var(--roundedness);
    }
</style>
