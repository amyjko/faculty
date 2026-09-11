<script lang="ts">
    import { page } from '$app/state';

    interface Props {
        to: string;
        id?: string;
        query?: string;
        active?: boolean;
        plain?: boolean;
        newTab?: boolean;
        annotate?: boolean;
        /** An accessible name, for links with no text content. */
        label?: string;
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
        label,
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
            to === page.route.id &&
            // Still render an anchor when linking to a specific id on the current page.
            !id,
    );
</script>

{#if isCurrentRoute}
    <span class="at">{@render children?.()}</span>
{:else if isExternal(to)}
    <!-- The annotation is a pseudo-element so that it stays out of text selections. -->
    <a href={to} target="_blank" rel="noreferrer" class:annotated={annotate}
        >{@render children?.()}</a
    >
{:else}
    <a
        href={`${to === '' ? page.url.pathname : resolveRoute(to)}${id ? `#${id}` : ''}${query ? `/?${query}` : ''}`}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noreferrer' : undefined}
        aria-label={label}
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

    /* A link glyph, drawn with generated content so that it is invisible to
       text selection: it is never copied, and it does not fragment the
       paragraph-granularity selection of a triple click. */
    .annotated::after {
        content: '\01F517\00FE0E';
        font-family: 'Noto Emoji', emoji;
        display: inline-block;
        font-size: 0.5em;
        vertical-align: baseline;
        margin-left: 0.1em;
        line-height: 0;
    }
</style>
