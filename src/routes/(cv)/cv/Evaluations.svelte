<script lang="ts">
    import type { Class } from '../../../data/Classes';

    interface Props {
        offerings: Class['offerings'];
        /** The course number, so the text alternative can name what it describes. */
        number: string;
    }

    let { offerings, number }: Props = $props();

    /**
     * The geometry is in SVG user units, and the viewBox height matches the
     * rendered height in the CV's 12pt context, so one unit is one pixel on
     * screen and every number here is checkable in a browser.
     */

    /** Horizontal space per offering. Narrow enough that fourteen fit a CV column. */
    const STEP = 11;
    /** The left gutter, holding the 0-5 tick marks and their labels. */
    const AXIS = 10;
    /** The right gutter, so the last mark and year label aren't clipped. */
    const RIGHT = 5;
    /** The top gutter, so a 5.0 mark isn't clipped. */
    const TOP = 4;
    /** The units spanned by the full 0-5 range. */
    const SCALE = 66;
    /** The bottom gutter, sized to hold a rotated four-digit year. */
    const YEARS = 26;
    /** The radius of an offering's mark, kept under half a step so marks never touch. */
    const DOT = 3;
    /** Scores below this are drawn in the alert color. */
    const THRESHOLD = 4;
    /** The top of the evaluation scale. */
    const MAX = 5;
    /** The gap between the baseline and the year labels hanging below it. */
    const GAP = 4;

    const HEIGHT = TOP + SCALE + YEARS;

    /** The center of an offering's slot. */
    const x = (index: number) => AXIS + STEP * (index + 0.5);
    /** Where a score sits on the full 0-5 range. */
    const y = (score: number) => TOP + SCALE * (1 - score / MAX);

    /**
     * Terms in calendar order within a year: winter, spring, autumn. The data
     * numbers them 1 = autumn, 2 = winter, 3 = spring, and pairs each with the
     * calendar year the term falls in, so autumn sorts last.
     */
    const calendar = (term: 1 | 2 | 3) => (term + 1) % 3;

    /** Names for those term numbers, also spelled out in classes/+page.svelte. */
    const TERMS = ['Autumn', 'Winter', 'Spring'];

    /** Offerings left to right in the order they happened, without sorting the data in place. */
    let ordered = $derived(
        offerings
            .slice()
            .sort(
                (a, b) => a.year - b.year || calendar(a.term) - calendar(b.term),
            ),
    );

    let width = $derived(AXIS + ordered.length * STEP + RIGHT);

    /**
     * One entry per distinct year, with the first and last slot it occupies, so
     * a year taught several times gets a single label centered under the group
     * rather than the same year repeated once per offering.
     */
    let groups = $derived(
        ordered.reduce<{ year: number; first: number; last: number }[]>(
            (groups, offering, index) => {
                const previous = groups.at(-1);
                if (previous !== undefined && previous.year === offering.year)
                    previous.last = index;
                else
                    groups.push({
                        year: offering.year,
                        first: index,
                        last: index,
                    });
                return groups;
            },
            [],
        ),
    );

    /**
     * The text alternative. An empty slot is ambiguous to look at — is it a zero,
     * or was the course not taught? — so this is where that gets disambiguated.
     */
    let description = $derived(
        `Student evaluations of ${number} out of 5, by offering: ` +
            ordered
                .map(
                    (offering) =>
                        `${TERMS[offering.term - 1]} ${offering.year}, ` +
                        (typeof offering.score === 'number'
                            ? offering.score.toFixed(1)
                            : typeof offering.score === 'string'
                              ? `no score, ${offering.score}`
                              : 'no score on record'),
                )
                .join('; ') +
            '.',
    );
</script>

<svg
    viewBox="0 0 {width} {HEIGHT}"
    role="img"
    aria-label={description}
    style:aspect-ratio="{width} / {HEIGHT}"
>
    <!-- The 0-5 axis, so scores are read against the scale rather than each other. -->
    <line x1={AXIS} y1={y(MAX)} x2={AXIS} y2={y(0)} />
    {#each [0, 1, 2, 3, 4, 5] as score}
        <line x1={AXIS - 2} y1={y(score)} x2={AXIS} y2={y(score)} />
    {/each}
    <!-- Only the ends and the threshold are labeled; the ticks carry the rest. -->
    {#each [MAX, THRESHOLD, 0] as score}
        <text
            class="tick"
            x={AXIS - 4}
            y={y(score)}
            text-anchor="end"
            dominant-baseline="middle">{score}</text
        >
    {/each}

    <!-- Marks the red threshold, so a low score is legible without relying on color. -->
    <line
        class="threshold"
        x1={AXIS}
        y1={y(THRESHOLD)}
        x2={width}
        y2={y(THRESHOLD)}
    />

    {#each ordered as offering, index}
        {#if typeof offering.score === 'number'}
            <circle
                class:low={offering.score < THRESHOLD}
                cx={x(index)}
                cy={y(offering.score)}
                r={DOT}
                ><title
                    >{TERMS[offering.term - 1]}
                    {offering.year}: {offering.score.toFixed(1)}</title
                ></circle
            >
        {:else if typeof offering.score === 'string'}
            <!-- Rises from the baseline into the plot, so a stated reason for a
                 missing score never reads as an axis label. -->
            <text
                class="reason"
                transform="rotate(-90 {x(index)} {y(0)})"
                x={x(index)}
                y={y(0)}
                text-anchor="start"
                dominant-baseline="middle">{offering.score}</text
            >
        {/if}
    {/each}

    <!-- Year labels hang below the axis, one per year however many times it was taught. -->
    {#each groups as group}
        {@const center = (x(group.first) + x(group.last)) / 2}
        <text
            class="year"
            transform="rotate(-90 {center} {y(0) + GAP})"
            x={center}
            y={y(0) + GAP}
            text-anchor="end"
            dominant-baseline="middle">{group.year}</text
        >
    {/each}
</svg>

<style>
    /* Height sets the whole plot's scale, since the viewBox is in the same
       units. At the CV's 12pt this is 96px, matching the viewBox exactly, so
       one user unit is one pixel and the geometry above is what you measure. */
    svg {
        display: block;
        height: 6em;
        width: auto;
    }

    circle {
        fill: var(--text-color);
    }

    circle.low {
        fill: var(--alert-color);
    }

    /* The axis is needed to read the marks, so it stays above 3:1 against the
       background. The threshold line is only a reading aid, redundant with the
       labeled 4, so it stays quieter. Per-element rather than a group opacity,
       which would multiply the two. */
    line {
        stroke: var(--text-color);
        stroke-width: 0.75;
        opacity: 0.55;
    }

    line.threshold {
        stroke-dasharray: 2 2;
        opacity: 0.35;
    }

    text {
        font-family: var(--text-font-family);
        fill: var(--text-color);
        font-size: 9px;
    }

    text.tick {
        opacity: 0.55;
    }

    text.year,
    text.reason {
        opacity: 0.7;
    }

    text.reason {
        font-style: italic;
    }
</style>
