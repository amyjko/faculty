<script lang="ts">
    import { onMount } from 'svelte';
    import Link from './Link.svelte';
    import { page } from '$app/stores';
    import { scrollToElement } from '../models/utilities';
    import { base } from '$app/paths';

    interface Props {
        id: string;
        children?: import('svelte').Snippet;
    }

    let { id, children }: Props = $props();

    function isLinked() {
        return typeof window === 'undefined'
            ? undefined
            : window.location.hash.length > 0 &&
                  window.location.hash.substring(1) === id;
    }

    onMount(() => {
        // If this window has a hash and it matches this header's ID, scroll to this header.
        if (isLinked()) {
            let element = document.getElementById(id);
            if (element) scrollToElement(element);
        }
    });
</script>

<h2 {id} class={`section ${isLinked() ? 'linked' : ''}`}>
    {@render children?.()}
    <!-- Remove the base from the pathname before Link reappends it. -->
    <Link to={$page.url.pathname.replace(base, '') + '#' + id}>&#x1F517;</Link>
</h2>

<style>
    .linked {
        border-bottom: 4px solid var(--annotation-color);
    }
</style>
