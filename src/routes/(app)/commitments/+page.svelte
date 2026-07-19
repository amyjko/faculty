<script lang="ts">
    import Link from '$lib/components/Link.svelte';
    import { profile } from '$lib/models/stores';
    import Table from '$lib/components/Table.svelte';
    import Bar from './Bar.svelte';
    import DateRange from './DateRange.svelte';
    import months from './months';
    import Title from '$lib/components/Title.svelte';
    import Linkable from '$lib/components/Linkable.svelte';
    import { commitID, uniquer } from '$lib/models/anchors';

    let commits = $profile.getCommits();
    let weeks = $profile.getWeeklyCommits();

    // Split up the committments into categories for display.
    let indefiniteWeekly = commits
        .filter(
            (commitment) =>
                commitment.end === null && commitment.category !== 'personal',
        )
        .sort((a, b) => b.hours - a.hours);

    let indefiniteAnnually = commits
        .filter(
            (commitment) =>
                commitment.annually && commitment.category !== 'personal',
        )
        .sort((a, b) =>
            a.start && 'month' in a.start && b.start && 'month' in b.start
                ? a.start.month * 12 +
                  a.start.date -
                  (b.start.month * 12 + b.start.date)
                : 0,
        );

    let definiteResearch = commits
        .filter(
            (commitment) =>
                !commitment.annually &&
                commitment.end instanceof Date &&
                commitment.category === 'research' &&
                commitment.end.getTime() > Date.now(),
        )
        .sort(
            (a, b) =>
                (a.start instanceof Date ? a.start.getTime() : Infinity) -
                (b.start instanceof Date ? b.start.getTime() : Infinity),
        );

    let definiteTeaching = commits
        .filter(
            (commitment) =>
                !commitment.annually &&
                commitment.end instanceof Date &&
                commitment.category === 'teaching' &&
                commitment.end.getTime() > Date.now(),
        )
        .sort(
            (a, b) =>
                (a.start instanceof Date ? a.start.getTime() : Infinity) -
                (b.start instanceof Date ? b.start.getTime() : Infinity),
        );

    let definiteService = commits
        .filter(
            (commitment) =>
                !commitment.annually &&
                commitment.end instanceof Date &&
                commitment.category === 'service' &&
                commitment.end.getTime() > Date.now(),
        )
        .sort(
            (a, b) =>
                (a.start instanceof Date ? a.start.getTime() : Infinity) -
                (b.start instanceof Date ? b.start.getTime() : Infinity),
        );

    /**
     * Anchors for every commitment the page lists. One allocator across all
     * five lists, because a commitment that is both indefinite and annual is
     * rendered in two of them and each row needs its own anchor. The weekly
     * workload table below repeats these commitments and so gets none.
     */
    let nextID = uniquer();
    let weeklyIDs = indefiniteWeekly.map((c) => nextID(commitID(c)));
    let annualIDs = indefiniteAnnually.map((c) => nextID(commitID(c)));
    let researchIDs = definiteResearch.map((c) => nextID(commitID(c)));
    let teachingIDs = definiteTeaching.map((c) => nextID(commitID(c)));
    let serviceIDs = definiteService.map((c) => nextID(commitID(c)));
</script>

<Title text="Commitments" />

<h1> This is my commitment calendar. </h1>

<p>
    I use it to estimate how much work I've promised to do in the next few
    years. I use this to decide whether to say yes to new opportunities and
    brace myself for busy periods. I have a <Link
        to="https://github.com/amyjko/faculty/blob/main/src/lib/models/Amy.ts"
        >list of commitments</Link
    > with date ranges, from which I generate this page. You can use it to decide
    whether to ask me to do something :)
</p>

<hr />

<Table>
    <tbody>
        <tr
            ><td colSpan="3"
                ><Linkable id="weekly-commitments">Weekly commitments</Linkable
                ></td
            ></tr
        >
        {#each indefiniteWeekly as commitment, index}
            <tr id={weeklyIDs[index]}>
                <td>
                    <em class={commitment.category}>{commitment.name}</em>
                    <br /><small>{commitment.description}</small>
                </td>
                <td>
                    <em>weekly</em>
                </td>
                <td>
                    <Bar commit={commitment} />
                </td>
            </tr>
        {/each}
        <tr
            ><td colSpan="3"
                ><Linkable id="annual">Annual commitments</Linkable></td
            ></tr
        >
        {#each indefiniteAnnually as commitment, index}
            <tr id={annualIDs[index]}>
                <td>
                    <em class={commitment.category}>{commitment.name}</em>
                    <br /><small>{commitment.description}</small>
                </td>
                <td>
                    {#if commitment.start && commitment.end && 'month' in commitment.start && 'month' in commitment.end}
                        {#if commitment.start.month === commitment.end.month}
                            <em>{months[commitment.start.month]}</em>
                        {:else}
                            <span
                                ><em>{months[commitment.start.month]}</em> -
                                <em>{months[commitment.end.month]}</em></span
                            >
                        {/if}
                    {/if}
                </td>
                <td>
                    <Bar commit={commitment} />
                </td>
            </tr>
        {/each}
        <tr
            ><td colSpan="3"
                ><Linkable id="one-time">One-time commitments</Linkable></td
            ></tr
        >
        <tr><td colSpan="3"><h4>Research</h4></td></tr>
        {#each definiteResearch as commitment, index}
            <tr id={researchIDs[index]}>
                <td>
                    <em class={commitment.category}>{commitment.name}</em>
                    <br /><small>{commitment.description}</small>
                </td>
                <td>
                    {#if commitment.start instanceof Date && commitment.end instanceof Date}
                        <DateRange
                            start={commitment.start}
                            end={commitment.end}
                        />
                    {/if}
                </td>
                <td>
                    <Bar commit={commitment} />
                </td>
            </tr>
        {/each}
        <tr><td colSpan="3"><h4>Teaching</h4></td></tr>
        {#each definiteTeaching as commitment, index}
            <tr id={teachingIDs[index]}>
                <td>
                    <em class={commitment.category}>{commitment.name}</em>
                    <br /><small>{commitment.description}</small>
                </td>
                <td>
                    {#if commitment.start instanceof Date && commitment.end instanceof Date}
                        <DateRange
                            start={commitment.start}
                            end={commitment.end}
                        />
                    {/if}
                </td>
                <td>
                    <Bar commit={commitment} />
                </td>
            </tr>
        {/each}
        <tr><td colSpan="3"><h4>Service</h4></td></tr>
        {#each definiteService as commitment, index}
            <tr id={serviceIDs[index]}>
                <td>
                    <em class={commitment.category}>{commitment.name}</em>
                    <br /><small>{commitment.description}</small>
                </td>
                <td>
                    {#if commitment.start instanceof Date && commitment.end instanceof Date}
                        <DateRange
                            start={commitment.start}
                            end={commitment.end}
                        />
                    {/if}
                </td>
                <td>
                    <Bar commit={commitment} />
                </td>
            </tr>
        {/each}
    </tbody>
</Table>

<Linkable id="weekly">Weekly workload</Linkable>

<p>
    Here's an estimate of how busy I'll be per week in the next two years. You
    might notice from the wiggles that I don't like working more than 45 hours a
    week. Do big numbers mean I work obscene hours? No: I take shortcuts to make
    my work fit into 45 hours a week. For example, it might mean being less
    prepared for class, missing a meeting, or making less progress on a grant or
    service responsibility.
</p>

<Table>
    <tbody>
        {#each weeks as week, index}
            {#if index < 1 || weeks[index].date.getMonth() !== weeks[index - 1].date.getMonth()}
                <tr>
                    <td colSpan="2"
                        ><h4
                            >{months[week.date.getMonth() + 1]}
                            {week.date.getFullYear()}</h4
                        ></td
                    >
                </tr>
            {/if}
            {@const hours = week.intersects.reduce(
                (sum, intersect) =>
                    sum +
                    (intersect.commitment.category === 'personal'
                        ? 0
                        : Math.round(
                              intersect.commitment.hours * intersect.overlap,
                          )),
                0,
            )}
            <tr>
                <td>
                    <div
                        class={hours > 45 ? 'shake' : ''}
                        style={`animationDelay: ${
                            '-' + Math.round(10 * Math.random()) / 10 + 's'
                        }`}
                    >
                        {#each week.intersects as intersect}
                            <Bar
                                commit={intersect.commitment}
                                proportion={intersect.overlap}
                                label={false}
                            />
                        {/each}
                    </div>
                    <div class="commitment-notes">
                        {#each week.intersects as intersect, index}
                            <span class={intersect.commitment.category}>
                                {intersect.commitment.name}
                                {#if index < week.intersects.length - 1}<span>
                                        &sdot;
                                    </span>{/if}
                            </span>
                        {/each}
                    </div>
                </td>
                <td
                    ><div
                        class={hours > 45 ? 'shake' : ''}
                        style={`animationDelay: ${
                            '-' + Math.round(10 * Math.random()) / 10 + 's'
                        }`}>{hours + ' hrs'}</div
                    ></td
                >
            </tr>
        {/each}
    </tbody>
</Table>

<style>
    .shake {
        /* Start the shake animation and make the animation last for 0.5 seconds */
        animation: shake 0.5s;

        /* When the animation is finished, start again */
        animation-iteration-count: infinite;
    }

    @keyframes shake {
        0% {
            transform: translate(1px, 1px) rotate(0deg);
        }
        10% {
            transform: translate(-1px, -1px) rotate(-0.25deg);
        }
        20% {
            transform: translate(-1px, 0px) rotate(0.25deg);
        }
        30% {
            transform: translate(1px, 2px) rotate(0deg);
        }
        40% {
            transform: translate(1px, -1px) rotate(0.25deg);
        }
        50% {
            transform: translate(-1px, 1px) rotate(-0.25deg);
        }
        60% {
            transform: translate(-1px, 1px) rotate(0deg);
        }
        70% {
            transform: translate(1px, 1px) rotate(-0.25deg);
        }
        80% {
            transform: translate(-1px, -1px) rotate(0.25deg);
        }
        90% {
            transform: translate(1px, 1px) rotate(0deg);
        }
        100% {
            transform: translate(1px, -1px) rotate(-0.25deg);
        }
    }

    .commitment-notes {
        font-size: 8pt;
        line-height: 1.5em;
    }
</style>
