<script>
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();
</script>

<div>
    {@render children?.()}
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>
