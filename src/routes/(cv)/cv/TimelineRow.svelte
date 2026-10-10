<script lang="ts">
    import { getContext } from 'svelte';
    import type Annotation from '#lib/models/Annotation.ts';
    import Highlight from '#lib/components/Highlight.svelte';
    import Years from './Years.svelte';
    import { position, ticks, type TimelineRange } from './Timeline.svelte';

    interface Props {
        /** An anchor for the record this renders, for deep linking. */
        id?: string;
        header: string;
        two?: string;
        three?: string;
        start: number;
        /** null means ongoing. */
        end: number | null;
        /** Discrete years of service, drawn as dots rather than a bar. */
        years?: readonly number[];
        annotation?: Annotation;
    }

    let {
        id,
        header,
        two,
        three,
        start,
        end,
        years,
        annotation,
    }: Props = $props();

    const range = getContext<TimelineRange>('timeline');

    /** Ongoing roles run to the end of the axis. */
    let stop = $derived(end ?? range.to);
</script>

<div class="row" {id}>
    <div class="text">
        <strong>{header}</strong>
        <small>&sdot;</small>
        <Years {start} {end} inline />
        {#if two}<div>{two}</div>{/if}
        {#if three}<div class="description"><small>{three}</small></div>{/if}
        {#if annotation}<Highlight year={annotation.year}
                >{annotation.text}</Highlight
            >{/if}
    </div>
    <!-- The years are in the text; the track only shows them at a glance. -->
    <div class="track" aria-hidden="true">
        {#each ticks(range) as year}
            <div class="grid" style:left="{position(range, year)}%"></div>
        {/each}
        {#if years}
            {#each years as year}
                <div
                    class="dot"
                    style:left="{position(range, year + 0.5)}%"
                ></div>
            {/each}
        {:else}
            <div
                class={['bar', end === null && 'ongoing']}
                style:left="{position(range, start)}%"
                style:width="calc({position(range, stop + 1) -
                    position(range, start)}% - {end === null ? 0.4 : 0}em)"
            ></div>
        {/if}
    </div>
</div>

<style>
    .row {
        display: grid;
        grid-template-columns: 1fr 35%;
        grid-template-areas: 'text track';
        column-gap: var(--margin);
        padding-block: calc(var(--padding) * 1.5);
        break-inside: avoid;
    }

    .text {
        grid-area: text;
        line-height: 1.35;
    }

    /* Highlight is sized for a full-width column, not this narrower one. */
    .text :global(.annotation) {
        max-width: 100%;
    }

    .description {
        line-height: 1.3;
    }

    .track {
        grid-area: track;
        position: relative;
        /* Centers the marks on the header's first line. */
        height: 1.35em;
    }

    .grid {
        position: absolute;
        top: 0;
        bottom: 0;
        border-left: 1px solid currentColor;
        opacity: 0.12;
    }

    /* Marks are drawn with borders rather than backgrounds, because browsers
       drop backgrounds when printing but keep borders. */
    /* A pill: borders on every side fill it, so its ends round like the dots. */
    .bar {
        position: absolute;
        top: calc(50% - 0.25em);
        box-sizing: border-box;
        height: 0.5em;
        min-width: 0.5em;
        border: 0.25em solid currentColor;
        border-radius: 0.25em;
    }

    /* Square where it meets the arrowhead. */
    .bar.ongoing {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    /* An arrowhead past the axis's last year: the role continues. Offsets are
       from the padding box, which sits inside the 0.25em border. */
    .bar.ongoing::after {
        content: '';
        position: absolute;
        top: -0.25em;
        right: -0.65em;
        border-top: 0.25em solid transparent;
        border-bottom: 0.25em solid transparent;
        border-left: 0.4em solid currentColor;
    }

    .dot {
        position: absolute;
        top: calc(50% - 0.25em);
        width: 0;
        height: 0;
        margin-left: -0.25em;
        border: 0.25em solid currentColor;
        border-radius: 50%;
    }

    /* On a phone the track spans the full width above the text, so the bars
       keep enough length to compare. */
    @media only screen and (max-width: 600px) {
        .row {
            grid-template-columns: 1fr;
            grid-template-areas: 'track' 'text';
            row-gap: var(--padding);
        }
    }

    @media print {
        .row {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
        }
    }
</style>
