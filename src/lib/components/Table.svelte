<script>
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();
</script>

<div>
    <table>
        {@render children?.()}
    </table>
</div>

<style>
    div {
        width: 100%;
        overflow-x: auto;
    }

    table {
        border-collapse: collapse;
    }

    table :global(td),
    table :global(th) {
        text-align: left;
        vertical-align: top;
        padding-right: var(--margin);
        padding-top: var(--margin);
    }

    table :global(tr) {
        border-bottom: 1px solid var(--border-color);
    }
</style>
