<script lang="ts">
    import Tag from './Tag.svelte';

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
            <Tag
                label={value}
                selected={facet in selection && selection[facet] === value}
                onselect={() => selectValue(facet, value)}
            />
        {/each}
    </div>
{/each}
