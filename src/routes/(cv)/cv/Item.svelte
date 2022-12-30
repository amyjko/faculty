<script lang="ts">
    export let start: number;
    export let stop: number | null | false = false;
    export let header: string;
    export let two: string | undefined = undefined;
    export let three: string | undefined = undefined;
    export let four: string | string[] | undefined = undefined;
    export let five: string | undefined = undefined;
    export let six: string | undefined = undefined;

    let end =
        stop === null
            ? 'present'
            : stop === false
            ? ''
            : start !== stop
            ? stop
            : '';
</script>

<div class="chunk">
    <small class="date">
        {start + (end ? '-' : '')}{end}
    </small>
    <div>
        <strong class="header">{header}</strong>
        {#if two}<span><br />{two} </span>{/if}
        {#if three}<div><small>{three}</small></div>{/if}
        {#if four}
            {#if Array.isArray(four)}
                <small>
                    {#each four as item}
                        - {item}<br />
                    {/each}
                </small>
            {:else}
                <div><small>{four}</small></div>
            {/if}
        {/if}
        {#if five}<div><small>{five}</small></div>{/if}
        {#if six}<div><small>{six}</small></div>{/if}
    </div>
</div>

<style>
    .date {
        font-style: italic;
    }

    .chunk {
        display: inline-block;
        flex-basis: calc(50% - var(--margin));
        margin-right: var(--margin);
        margin-bottom: var(--margin);
    }

    @media only screen and (max-width: 600px) {
        .chunk {
            flex-basis: 100%;
        }
    }
</style>
