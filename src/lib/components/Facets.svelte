<script lang="ts">

    export let facets: Record<string, string[]>;
    export let update: (selection: {}) => void;
    
    let selection: Record<string, string> = {};

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
            class={"clickable topic" + (facet in selection && selection[facet] === value ? " selected" : "")} 
            on:click={() => selectValue(facet, value)}
            on:keydown={event => event.key === "Enter" ? selectValue(facet, value) : undefined }
        >
            <small>{value}</small>
        </mark>
    {/each}
    </p>
{/each}

<style>
    .topic {
        display: inline-block;
    }

    mark {
        background-color: #f1f6fe;
        border-radius: 3px;
        padding-top: 3px;
        padding-bottom: 3px;
        padding-left: 6px;
        padding-right: 6px;
        margin: 3px;
    }

</style>