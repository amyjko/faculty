<script>
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();
</script>

<div class="container">
    {@render children?.()}
</div>

<style>
    :global(body) {
        margin: 2em;
    }

    .container {
        margin: auto;
        max-width: 45em;
    }
</style>
