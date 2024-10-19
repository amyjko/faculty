<script lang="ts">
    interface Props {
        facets: Record<string, string[]>;
        update: (selection: {}) => void;
        selection?: Record<string, string>;
    }

    let { facets, update, selection = $bindable({}) }: Props = $props();

    function selectValue(facet: string, value: string) {
        if (facet in selection && selection[facet] === value)
            delete selection[facet];
        else selection[facet] = value;

        selection = selection;

        update(selection);
    }
</script>

{#each Object.keys(facets) as facet}
    <div role="radiogroup" aria-label="Filter">
        {#each facets[facet].sort() as value}
            <span
                role="radio"
                tabindex="0"
                aria-checked={facet in selection && selection[facet] === value}
                aria-label={'Filter by ' + value}
                class={'annotation clickable topic' +
                    (facet in selection && selection[facet] === value
                        ? ' selected'
                        : '')}
                onclick={() => selectValue(facet, value)}
                onkeydown={(event) =>
                    event.key === 'Enter'
                        ? selectValue(facet, value)
                        : undefined}
            >
                {value}
            </span>
        {/each}
    </div>
{/each}

<style>
    .topic {
        display: inline-block;
        margin-right: var(--padding);
        margin-bottom: var(--padding);
        background-color: var(--border-color);
        padding: var(--padding);
        border-radius: var(--roundedness);
        font-family: var(--text-font-family);
        font-size: var(--annotation-size);
    }

    .topic.selected {
        background-color: var(--annotation-color);
    }
</style>
