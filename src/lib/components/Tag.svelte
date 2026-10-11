<script lang="ts">
    interface Props {
        label: string;
        /** Whether it matches the current filter. */
        selected?: boolean;
        /** Makes it a choice in a filter; without it, the tag only labels. */
        onselect?: () => void;
    }

    let { label, selected = false, onselect }: Props = $props();
</script>

<!-- One look for every tag, whether it filters a list or labels an item in
     it, so the two read as the same thing. -->
{#if onselect}
    <span
        role="radio"
        tabindex="0"
        aria-checked={selected}
        aria-label={'Filter by ' + label}
        class={['tag', 'choice', 'clickable', selected && 'selected']}
        onclick={onselect}
        onkeydown={(event) => (event.key === 'Enter' ? onselect() : undefined)}
        >{label}</span
    >
{:else}
    <span class={['tag', selected && 'selected']}>{label}</span>
{/if}

<style>
    .tag {
        display: inline-block;
        margin-right: var(--padding);
        margin-bottom: var(--padding);
        background-color: var(--border-color);
        padding: var(--padding);
        border-radius: var(--roundedness);
        font-family: var(--text-font-family);
        font-size: var(--annotation-size);
        line-height: 1.2;
    }

    .tag.selected {
        background-color: var(--annotation-color);
    }

    /* A filter's choice grows a little when chosen. A transform scales it
       from its center without moving anything around it. */
    .choice {
        transform-origin: center;
        transition:
            transform 150ms ease-out,
            background-color 150ms ease-out;
    }

    /* Gentle, since tags sit close together; a long one may still overlap its
       neighbors slightly, so the chosen one is drawn on top of them. */
    .choice.selected {
        transform: scale(1.08);
        position: relative;
        z-index: 1;
    }

    @media (prefers-reduced-motion: reduce) {
        .choice {
            transition: none;
        }
    }
</style>
