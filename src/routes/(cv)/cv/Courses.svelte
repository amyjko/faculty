<script lang="ts">
    import type { Class } from '../../../data/Classes';
    import Highlight from '$lib/components/Highlight.svelte';
    import Evaluations from './Evaluations.svelte';

    interface Props {
        courses: Class[];
        /** The page's id allocator, so each row keeps a stable deep-link anchor. */
        anchor: (id: string) => string;
    }

    let { courses, anchor }: Props = $props();

    /** Shortened, so the level never widens a column sized by the course number. */
    function level(course: Class): string {
        return course.level === 'undergraduate' ? 'undergrad' : course.level;
    }

    /** The first and last year a course ran, computed without sorting the data in place. */
    function span(course: Class): string {
        const years = course.offerings.map((offering) => offering.year);
        const start = Math.min(...years);
        const stop = Math.max(...years);
        return start === stop ? `${start}` : `${start}–${stop}`;
    }
</script>

<!-- The table is wider than a phone, so it scrolls; tabindex makes that
     scrolling reachable from the keyboard. -->
<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div class="scroll" tabindex="0" role="region" aria-label="Courses taught">
    <table>
        <thead>
            <tr>
                <th scope="col" class="years">Years</th>
                <th scope="col" class="number">Course</th>
                <th scope="col" class="about">Title</th>
                <th scope="col" class="evaluations">Evaluations</th>
            </tr>
        </thead>
        <tbody>
            {#each courses as course}
                <tr id={anchor(course.id)}>
                    <td class="years"><small>{span(course)}</small></td>
                    <td class="number">
                        <div><small>{course.number}</small></div>
                        <div class="level"><small>{level(course)}</small></div>
                    </td>
                    <td class="about">
                        <strong>{course.title}</strong>
                        <div class="description"
                            ><small>{course.description}</small></div
                        >
                        {#if course.annotation}<Highlight
                                year={course.annotation.year}
                                >{course.annotation.text}</Highlight
                            >{/if}
                    </td>
                    <td class="evaluations"
                        ><Evaluations
                            offerings={course.offerings}
                            number={course.number}
                        /></td
                    >
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .scroll {
        width: 100%;
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th,
    td {
        text-align: left;
        /* Top, so the plot sits beside the title rather than beside the middle
           of a six-line description. */
        vertical-align: top;
        padding-block: calc(2 * var(--padding));
        padding-inline-end: var(--margin);
    }

    /* The stripe shouldn't end flush with the text at the table's edges. */
    th:first-child,
    td:first-child {
        padding-inline-start: calc(2 * var(--padding));
    }

    th:last-child,
    td:last-child {
        padding-inline-end: calc(2 * var(--padding));
    }

    th {
        font-size: 0.8em;
        font-weight: var(--bold-weight);
        opacity: 0.6;
    }

    /* Rows are separated by banding and space; there are no rules anywhere. */
    tbody tr:nth-child(even) {
        background: var(--stripe-color);
    }

    /* Every column but the title shrinks to its content; the title takes the
       slack, so the table only overflows when the content genuinely can't fit. */
    .years,
    .number,
    .evaluations {
        width: 1%;
        white-space: nowrap;
    }

    .about {
        width: 99%;
        min-width: 12em;
    }

    /* The level sits under the course number rather than beside it, so it
       costs no width at all — the column is sized by the number either way.
       Each line is its own div so it keeps the cell's font-size strut, which
       is what puts the number's baseline on the title's and the year's. */
    .number .level {
        opacity: 0.6;
    }

    .description {
        line-height: 1.35;
    }

    /* Highlight is sized for a full-width column, not a table cell. */
    .about :global(.annotation) {
        max-width: 100%;
    }

    @media print {
        /* There is no scrolling on paper: let an over-wide table spill off the
           page rather than silently clip its last column. */
        .scroll {
            overflow-x: visible;
        }

        tbody tr {
            break-inside: avoid;
        }

        /* Browsers drop backgrounds when printing unless told otherwise, which
           would take the banding — the table's only structure — with it. */
        table {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
        }

        th,
        td {
            padding-inline-end: calc(var(--margin) / 2);
        }
    }
</style>
