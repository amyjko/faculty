<script lang="ts">
    /**
     * The page Apache serves as its ErrorDocument for 404s, prerendered to
     * build/404.html so it arrives with the site's navigation already in it and
     * needs no JavaScript. See static/.htaccess.
     *
     * It shares its wording with +error.svelte, which covers the same case for
     * links followed inside the app.
     */
    import NotFound from '$lib/components/NotFound.svelte';
</script>

<NotFound />
