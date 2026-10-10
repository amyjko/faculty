<script lang="ts">
    import type { Class } from '../../../data/Classes';
    import Highlight from '#lib/components/Highlight.svelte';
    import Evaluations from './Evaluations.svelte';
    import Link from '#lib/components/Link.svelte';
    import Table from '#lib/components/Table.svelte';
    import Years from './Years.svelte';

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
    function span(course: Class): [number, number] {
        const years = course.offerings.map((offering) => offering.year);
        return [Math.min(...years), Math.max(...years)];
    }
</script>

<Table stack>
    {#snippet head()}
        <tr>
            <th scope="col" class="years">Years</th>
            <th scope="col" class="number">Course</th>
            <th scope="col" class="about">Title</th>
            <th scope="col" class="evaluations">Evaluations</th>
        </tr>
    {/snippet}
    {#each courses as course}
        {@const [start, end] = span(course)}
        <tr id={anchor(course.id)}>
            <td class="years"><Years {start} {end} /></td>
            <td class="number">
                <div><small>{course.number}</small></div>
                <div class="level"><small>{level(course)}</small></div>
            </td>
            <td class="about">
                <strong
                    >{#if course.link}<Link to={course.link} annotate={false}
                            >{course.title}</Link
                        >{:else}{course.title}{/if}</strong
                >
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
</Table>

<style>
    /* Every column but the title shrinks to its content; the title takes the
       slack. */
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

    /* Stacked beside the years on a phone: the title may narrow, and the plot
       shrinks to fit rather than overflow. */
    @media only screen and (max-width: 600px) {
        .about {
            min-width: 0;
        }

        .evaluations :global(svg) {
            max-width: 100%;
        }
    }
</style>
