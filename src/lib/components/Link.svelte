<script module lang="ts">
    type ExternalPath = `http://${string}` | `https://${string}`;
    type Path = RouteId | '' | ExternalPath;
</script>

<script lang="ts">
    import { resolve } from '$app/paths';
    import { page } from '$app/state';
    import type { RouteId } from '$app/types';

    interface Props {
        to: Path;
        id?: string;
        query?: string;
        active?: boolean;
        children?: import('svelte').Snippet;
    }

    let { to, id, query, active = false, children }: Props = $props();

    let path = $derived(page.url.pathname);

    function isExternal(url: string): url is ExternalPath {
        return url.startsWith('http://') || url.startsWith('https://');
    }
</script>

{#if to === path}
    <span class="at">{@render children?.()}</span>
{:else if isExternal(to)}
    <a href={to} target="_blank" rel="noreferrer">{@render children?.()}</a>
{:else}
    <a
        href={`${to === '' ? page.url.pathname : resolve(to)}${id ? `#${id}` : ''}${query ? `/?${query}` : ''}`}
        class={active ? 'at' : ''}>{@render children?.()}</a
    >
{/if}

<style>
    /* So that components can style it. */
    span {
        display: inline-block;
    }

    .at {
        background-color: var(--annotation-color);
    }
</style>
