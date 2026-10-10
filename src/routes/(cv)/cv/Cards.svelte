<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

<div class="cards">
    {@render children()}
</div>

<style>
    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(13em, 1fr));
        gap: var(--margin);
        /* Padding, not margin, so it adds to the next heading's top margin
           instead of collapsing into it, matching the spacing of other lists. */
        padding-bottom: var(--margin);
    }
</style>
