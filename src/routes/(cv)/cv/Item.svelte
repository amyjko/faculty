<script lang="ts">
    interface Props {
        start: number;
        stop?: number | null | false;
        header: string;
        two?: string | undefined;
        three?: string | undefined;
        four?: string | readonly string[] | undefined;
        five?: string | undefined;
        six?: string | undefined;
    }

    let {
        start,
        stop = false,
        header,
        two = undefined,
        three = undefined,
        four = undefined,
        five = undefined,
        six = undefined,
    }: Props = $props();

    let end = $derived(
        stop === null
            ? 'present'
            : stop === false
              ? ''
              : start !== stop
                ? stop
                : '',
    );
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
        flex-basis: calc(100% - var(--margin));
        margin-right: var(--margin);
        margin-bottom: var(--margin);
        page-break-after: auto;
    }

    @media only screen and (max-width: 600px) {
        .chunk {
            flex-basis: 100%;
        }
    }
</style>
