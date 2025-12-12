<script lang="ts">
    import { getContext, type Snippet } from 'svelte';

    interface Props {
        year: number;
        children: Snippet;
    }

    let { children, year }: Props = $props();

    let annotations = getContext<{ on: boolean; year: number }>('annotations');
</script>

{#if annotations.on && annotations.year === year}
    <div class="annotation">{@render children()}</div>
{/if}

<style>
    .annotation {
        display: inline-block;
        margin-block-start: calc(2 * var(--padding));
        margin-inline-start: calc(2 * var(--padding));
        margin-block-end: var(--padding);
        padding: var(--padding) calc(var(--padding) * 2) var(--padding)
            calc(var(--padding) * 2);
        background: rgb(255 231 160);
        border-radius: calc(var(--roundedness));
        border: solid 4px rgb(253, 212, 89);
        font-style: italic;
        font-family: 'Nunito', sans-serif;
        max-width: 75%;
    }
</style>
