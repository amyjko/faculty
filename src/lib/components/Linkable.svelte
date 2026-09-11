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
    <!-- Remove the base from the pathname before Link reappends it. The link
         glyph is a pseudo-element below, so that it stays out of text selections. -->
    <span class="anchor"><Link to="" {id} label="Link to this section" /></span>
</h2>

<style>
    .linked {
        border-bottom: 4px solid var(--annotation-color);
    }

    .anchor :global(a)::after {
        content: '\01F517\00FE0E';
        font-family: 'Noto Emoji', emoji;
    }
</style>
