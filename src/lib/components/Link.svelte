<script lang="ts">
    import { base } from '$app/paths';
    import { page } from '$app/stores';

    interface Props {
        to: string;
        at?: string | undefined;
        active?: boolean;
        children?: import('svelte').Snippet;
    }

    let {
        to,
        at = undefined,
        active = false,
        children
    }: Props = $props();

    let path = $derived($page.url.pathname);
</script>

{#if at && (at === '/' ? path === `${base}/` : path === `${base}${at}`)}
    <span class="at">{@render children?.()}</span>
{:else if to.startsWith('http')}
    <a href={to} target="_blank" rel="noreferrer">{@render children?.()}</a>
{:else}
    <a href={`${base}${to}`} class={active ? 'at' : ''}>{@render children?.()}</a>
{/if}

<style>
    /* So that components can style it. */
    span {
        display: inline-block;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
