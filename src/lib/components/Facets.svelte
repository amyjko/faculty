<script lang="ts">

    export let facets: Record<string, string[]>;
    export let update: (selection: {}) => void;    
    export let selection: Record<string, string> = {};

    function selectValue(facet: string, value: string) {

        if(facet in selection && selection[facet] === value)
            delete selection[facet];
        else
            selection[facet] = value;

        selection = selection;

        update(selection);

    }


</script>

{#each Object.keys(facets) as facet}
    <p role="radiogroup" aria-label="Filter">
    {#each facets[facet].sort() as value }
        <mark 
            role="radio"
            tabindex="0"
            aria-checked={facet in selection && selection[facet] === value}
            tabIndex={facet in selection && selection[facet] === value ? 0 : 1}
            aria-label={"Filter by " + value}
            class={"annotation clickable topic" + (facet in selection && selection[facet] === value ? " selected" : "")} 
            on:click={() => selectValue(facet, value)}
            on:keydown={event => event.key === "Enter" ? selectValue(facet, value) : undefined }
        >
            {value}
        </mark>
    {/each}
    </p>
{/each}

<style>
    .topic {
        display: inline-block;
        margin-right: var(--padding);
        margin-bottom: var(--padding);
    }

    mark {
        background-color: var(--border-color);
    }

    mark.selected {
        background-color: var(--annotation-color);
    }
</style>