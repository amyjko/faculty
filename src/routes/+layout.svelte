<script>
    import { page } from '$app/state';
    import { browser } from '$app/environment';
    import highlight from '$lib/models/highlight';

    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();

    // Arriving from a search result? Show what matched. This lives in the root
    // layout rather than in Page, because the CV is in its own route group and
    // doesn't use Page.
    $effect(() => {
        if (browser) highlight(page.url.searchParams.get('q'));
    });
</script>

{@render children?.()}
