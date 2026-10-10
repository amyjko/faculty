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

    /* The page's @page margin is the only margin on paper. */
    @media print {
        :global(body) {
            margin: 0;
        }

        .container {
            max-width: none;
        }
    }
</style>
