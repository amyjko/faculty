<script lang="ts">
    import { page } from '$app/state';
    import Emoji from './Emoji.svelte';

    interface Props {
        to: string;
        id?: string;
        query?: string;
        active?: boolean;
        plain?: boolean;
        newTab?: boolean;
        annotate?: boolean;
        children?: import('svelte').Snippet;
    }

    let {
        to,
        id,
        query,
        active = false,
        plain = false,
        newTab = false,
        annotate = true,
        children,
    }: Props = $props();

    function isExternal(url: string): boolean {
        return url.startsWith('http://') || url.startsWith('https://');
    }

    function resolveRoute(route: string): string {
        const base = import.meta.env.BASE_URL.replace(/\/$/, '');
        return base + (route.replace(/\/\([^)]+\)/g, '') || '/');
    }

    let isCurrentRoute = $derived(
        !plain &&
            !newTab &&
            !isExternal(to) &&
            to !== '' &&
            to === page.route.id,
    );
</script>

{#if isCurrentRoute}
    <span class="at">{@render children?.()}</span>
{:else if isExternal(to)}
    <a href={to} target="_blank" rel="noreferrer"
        >{@render children?.()}{#if annotate}<span class="external"
                ><Emoji symbol="🔗" /></span
            >{/if}</a
    >
{:else}
    <a
        href={`${to === '' ? page.url.pathname : resolveRoute(to)}${id ? `#${id}` : ''}${query ? `/?${query}` : ''}`}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noreferrer' : undefined}
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

    .external {
        font-size: 0.5em;
        vertical-align: baseline;
        margin-left: 0.1em;
        line-height: 0;
    }
</style>
