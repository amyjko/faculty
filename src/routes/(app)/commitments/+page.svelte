<script lang="ts">
    import External from '$lib/components/External.svelte';
    import { profile } from '$lib/models/stores';
    import Table from '$lib/components/Table.svelte';
    import Bar from './Bar.svelte';
    import DateRange from './DateRange.svelte';
    import months from './months';

    let commits = $profile.getCommits();
    let weeks = $profile.getWeeklyCommits();

    // Split up the committments into categories for display.
    let indefiniteWeekly = commits
        .filter(
            (commitment) =>
                commitment.end === null && commitment.category !== 'personal'
        )
        .sort((a, b) => b.hours - a.hours);

    let indefiniteAnnually = commits
        .filter(
            (commitment) =>
                commitment.annually && commitment.category !== 'personal'
        )
        .sort((a, b) =>
            a.start && 'month' in a.start && b.start && 'month' in b.start
                ? a.start.month * 12 +
                  a.start.date -
                  (b.start.month * 12 + b.start.date)
                : 0
        );

    let definiteResearch = commits
        .filter(
            (commitment) =>
                !commitment.annually &&
                commitment.end instanceof Date &&
                commitment.category === 'research' &&
                commitment.end.getTime() > Date.now()
        )
        .sort(
            (a, b) =>
                (a.start instanceof Date ? a.start.getTime() : Infinity) -
                (b.start instanceof Date ? b.start.getTime() : Infinity)
        );

    let definiteTeaching = commits
        .filter(
            (commitment) =>
                !commitment.annually &&
                commitment.end instanceof Date &&
                commitment.category === 'teaching' &&
                commitment.end.getTime() > Date.now()
        )
        .sort(
            (a, b) =>
                (a.start instanceof Date ? a.start.getTime() : Infinity) -
                (b.start instanceof Date ? b.start.getTime() : Infinity)
        );

    let definiteService = commits
        .filter(
            (commitment) =>
                !commitment.annually &&
                commitment.end instanceof Date &&
                commitment.category === 'service' &&
                commitment.end.getTime() > Date.now()
        )
        .sort(
            (a, b) =>
                (a.start instanceof Date ? a.start.getTime() : Infinity) -
                (b.start instanceof Date ? b.start.getTime() : Infinity)
        );
</script>

<h1> This is my commitment calendar. </h1>

<p>
    I use it to estimate how much work I've promised to do in the next few
    years. I use this to decide whether to say yes to new opportunities and
    brace myself for busy periods. I have a <External
        to="https://github.com/amyjko/faculty/blob/main/src/lib/models/Amy.ts"
        >list of commitments</External
    > with date ranges, from which I use some Typecript to create this page.
</p>

<hr />

<Table>
    <tbody>
        <tr><td colSpan="3"><h3>Weekly commitments</h3></td></tr>
        {#each indefiniteWeekly as commitment}
            <tr>
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
        <tr><td colSpan="3"><h3>Annual commitments</h3></td></tr>
        {#each indefiniteAnnually as commitment}
            <tr>
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
        <tr><td colSpan="3"><h3>One-time commitments</h3></td></tr>
        <tr><td colSpan="3"><h4>Research</h4></td></tr>
        {#each definiteResearch as commitment}
            <tr>
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
        {#each definiteTeaching as commitment}
            <tr>
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
        {#each definiteService as commitment}
            <tr>
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

<h3>Weekly workload</h3>

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
                              intersect.commitment.hours * intersect.overlap
                          )),
                0
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
