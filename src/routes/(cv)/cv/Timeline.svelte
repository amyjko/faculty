<script lang="ts" module>
    /** The span of years every row in a timeline is drawn against. */
    export type TimelineRange = { from: number; to: number };

    /** Where a year begins along a track, as a percentage of its width. */
    export function position(range: TimelineRange, year: number): number {
        return ((year - range.from) / (range.to - range.from + 1)) * 100;
    }

    /** The years along the axis that get a tick: every fifth year. */
    export function ticks(range: TimelineRange): number[] {
        const years: number[] = [];
        for (let year = Math.ceil(range.from / 5) * 5; year <= range.to; year += 5)
            years.push(year);
        return years;
    }
</script>

<script lang="ts">
    import { setContext, type Snippet } from 'svelte';

    interface Props {
        from: number;
        to: number;
        children: Snippet;
    }

    let { from, to, children }: Props = $props();

    // A getter, so rows follow the props rather than a stale copy.
    setContext<TimelineRange>('timeline', {
        get from() {
            return from;
        },
        get to() {
            return to;
        },
    });
</script>

<div class="timeline">
    <div class="axis" aria-hidden="true">
        <div class="track">
            {#each ticks({ from, to }) as year}
                {@const left = position({ from, to }, year)}
                <!-- Every label sits right of its tick. One too close to the
                     end to fit is dropped rather than flipped left, where it
                     would collide with the label before it; its tick remains. -->
                <div class="tick" style:left="{left}%">
                    {#if left <= 90}<small class="label">{year}</small>{/if}
                </div>
            {/each}
        </div>
    </div>
    {@render children()}
</div>

<style>
    .timeline {
        padding-bottom: var(--margin);
    }

    /* Mirrors the row grid in TimelineRow, so the labels sit over the bars. */
    .axis {
        display: grid;
        grid-template-columns: 1fr 35%;
        column-gap: var(--margin);
        break-after: avoid;
    }

    .track {
        grid-column: 2;
        position: relative;
        height: 1.4em;
        border-bottom: 1px solid currentColor;
    }

    .tick {
        position: absolute;
        bottom: 0;
        height: 100%;
        border-left: 1px solid currentColor;
    }

    .label {
        position: absolute;
        bottom: 0;
        left: 2px;
        font-size: 0.7em;
        line-height: 1.4;
    }

    @media only screen and (max-width: 600px) {
        .axis {
            grid-template-columns: 1fr;
        }

        .track {
            grid-column: 1;
        }
    }
</style>
