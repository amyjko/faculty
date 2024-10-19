<script lang="ts">
    import { base } from '$app/paths';
    import { type Snippet } from 'svelte';

    interface Props {
        header?: string | null;
        link?: string | null;
        image?: Snippet;
        children?: Snippet;
    }

    let {
        header = null,
        link = null,
        image,
        children
    }: Props = $props();

    let url = $derived(link?.startsWith('/') ? `${base}${link}` : link);
</script>

<div class="block">
    <div class="left">
        {#if url}
            <a href={url} target="_blank" rel="noreferrer"
                >{@render image?.()}</a
            >
        {:else}
            {@render image?.()}
        {/if}
    </div>
    <div class="right">
        {#if header}{#if url}<a href={url} target="_blank" rel="noreferrer"
                    >{header}</a
                >{:else}<strong>{header}</strong>{/if}{/if}{@render children?.()}
    </div>
</div>

<style>
    .block {
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
    }

    .left {
        flex: 0 0 10em;
    }

    @media only screen and (max-width: 800px) {
        .left {
            flex: 0 0 5em;
        }
    }
</style>
