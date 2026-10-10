<script lang="ts">
    interface Props {
        start: number | string;
        /** null means ongoing; false or equal to start means a single year. */
        end?: number | string | null | false;
        /** Keep a range on one line, for places that aren't a narrow column. */
        inline?: boolean;
    }

    let { start, end = false, inline = false }: Props = $props();

    /** The second line of a range, or nothing for a single year. */
    let stop = $derived(
        end === null
            ? 'present'
            : end === false || `${end}` === `${start}`
              ? ''
              : `${end}`,
    );
</script>

<!-- Ranges break after the dash, so the year column stays narrow. -->
<small class="years"
    >{start}{#if stop}–{#if !inline}<br />{/if}{stop}{/if}</small
>

<style>
    .years {
        font-style: italic;
        white-space: nowrap;
    }
</style>
