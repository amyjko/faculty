<script lang="ts">

    import External from "$lib/components/External.svelte";
    import { profile } from "$lib/models/stores";
    import { parseDate, parseMonthDate, type MonthDate } from "$lib/models/utilities";
    import Bar from "./Bar.svelte";
    import type Commit from "./Commit";
    import DateRange from "./DateRange.svelte";
    import months from "./months";

    const colors = {
        "research": "rgb(210,210,255)",
        "teaching": "rgb(195,240,195)",
        "service": "rgb(255,222,162)",
        "personal": "rgb(220,220,220)"
    };

    // Build a huge list of commitments from the profile
    let commitments: Commit[] = [];

    function commit(name: string, description: string, category: string, priority: number, hours: number, annually: boolean, start: Date | MonthDate | null, end: Date | MonthDate | null) {

        commitments.push({
            name: name,
            description: description,
            category: category,
            priority: priority,
            hours: hours,
            annually: annually,
            start: start,
            end: end
        });

    }

    function getDateOrNull(date: string | null) {
        return date === null ? null : parseDate(date)
    }

    function getPreviousMonday() {
				
        const date = new Date();
        const day = date.getDay();
        let prevMonday;
        if(date.getDay() === 1) {
            prevMonday = new Date().setDate(date.getDate() - 7);
        }
        else {
            prevMonday = new Date().setDate(date.getDate() - day + 1);
        }
    
        return new Date(prevMonday);

    }

    function datesIntersect(date1Start: Date, date1End: Date, date2Start: Date, date2End: Date) {
        // The beginning of the second range is within the first range.
        // Compute the proportion of a week.
        if(date2Start.getTime() >= date1Start.getTime() && date2Start.getTime() < date1End.getTime()) {
            return (date1End.getTime() - date2Start.getTime()) / 1000 / 60 / 60 / 24 / 7;
        }
        // The second range completely subsumes the first range.
        else if(date2Start.getTime() < date1Start.getTime() && date2End.getTime() >= date1End.getTime()) {
            return 1;
        }
        // The end of the second range is within the first range.
        else if(date2End.getTime() >= date1Start.getTime() && date2End.getTime() < date1End.getTime()) {
            return (date2End.getTime() - date1Start.getTime()) / 1000 / 60 / 60 / 24 / 7;
        }
        // If none of the above apply, then there is no intersection. Return 0% overlap.
        else {
            return 0;
        }        
    }



    const thisYear = (new Date()).getFullYear();

    // Start with an list of miscellaneous commitments.
    $profile.getCommitments().map(
        com => commit(com.title, com.description, com.category, com.commitment.priority, com.commitment.hours, com.annually, getDateOrNull(com.commitment.start), getDateOrNull(com.commitment.end)));

    // Add editing responsibilities.
    $profile.getEditing().forEach(editing =>
        commit(
            editing.venue, editing.title, "service", 
            editing.commitment.priority, editing.commitment.hours, false, 
            getDateOrNull(editing.commitment.start), getDateOrNull(editing.commitment.end)
        )
    );

    // Add service responsibilities.
    $profile.getService().forEach(service =>
        commit(
            service.committee, service.title, "service", 
            service.commitment.priority, service.commitment.hours, false, 
            getDateOrNull(service.commitment.start), getDateOrNull(service.commitment.end)
        )
    );

    // Add funding responsibilities.
    $profile.getFunding().forEach(funding =>
        commit(
            funding.title, "Research, collaboration, reporting", funding.category, 
            funding.commitment.priority, funding.commitment.hours, false, 
            getDateOrNull(funding.commitment.start), getDateOrNull(funding.commitment.end)
        )
    );

    // Add travel responsibilities.
    $profile.getTravel().forEach(trip =>
        commit(
            trip.title, trip.details, trip.category, 
            trip.commitment.priority, trip.commitment.hours, false, 
            getDateOrNull(trip.commitment.start), getDateOrNull(trip.commitment.end)
        )
    );

    // Add talk prep responsibilities (start prep 90 days beforehand)
    $profile.getTalks().forEach(talk => {
        let start = new Date(parseDate(talk.date).getTime());
        start.setDate(start.getDate() - 90);
        commit(
            talk.title, talk.description, "research", 
            1, 1, false, 
            start, parseDate(talk.date)
        )
    });

    // Add reviewing responsibilities.
    $profile.getReviewing().forEach(reviewing => {
        // If this has a commitment, add commitments for all current and future years.
        if(reviewing.commitment !== undefined) {
            reviewing.years.filter(year => year >= thisYear).forEach(year => {
                if(reviewing.commitment !== undefined && reviewing.commitment.start && reviewing.commitment.end)
                    commit(
                        reviewing.title ? reviewing.title : "Reviewer", reviewing.venue, "service", 
                        reviewing.commitment.priority, reviewing.commitment.hours, false, 
                        new Date(year, parseMonthDate(reviewing.commitment.start).month, parseMonthDate(reviewing.commitment.start).date),
                        // Handle the year wraparound for end months that are before start months.
                        new Date(year + (parseMonthDate(reviewing.commitment.end).month < parseMonthDate(reviewing.commitment.start).month ? 1 : 0), parseMonthDate(reviewing.commitment.end).month, parseMonthDate(reviewing.commitment.end).date)
                    )
            })
        }
    });

    // Add teaching responsibilities
    $profile.getClasses().forEach(course => {
        course.offerings.forEach(offering => {
            // If this course is going to be offered this year, add commitments for it
            if(offering.year >= thisYear) {
                // Add time for preparing to teach the quarter before.
                commit(
                    course.number + " Prep", "Curriculum design", "teaching",
                    1, 2, false,
                    new Date(offering.year - (offering.term === 2 ? 1 : 0), [6, 9, 0][offering.term - 1], [1, 5, 5][offering.term - 1]),
                    new Date(offering.year - (offering.term === 2 ? 1 : 0), [8, 11, 3][offering.term - 1], [15, 15, 15][offering.term - 1])
                );
                // Add time for teaching the class the quarter before.
                commit(
                    course.number, "Teaching and grading", "teaching",
                    1, course.hours, false,
                    new Date(offering.year, [8, 0, 3][offering.term - 1], [15, 1, 1][offering.term - 1]),
                    new Date(offering.year, [11, 2, 5][offering.term - 1], [15, 15, 15][offering.term - 1])
                );
            }
        });
    });

    // Split up the committments into categories for display.
    let indefiniteWeekly = 
        commitments
            .filter(commitment => commitment.end === null && commitment.category !== "personal")
            .sort((a, b) => b.hours - a.hours);

    let indefiniteAnnually = 
        commitments
            .filter(commitment => commitment.annually && commitment.category !== "personal")
            .sort((a, b) => a.start && "month" in a.start && b.start && "month" in b.start ? (a.start.month * 12 + a.start.date) - (b.start.month * 12 + b.start.date) : 0);

    let definiteResearch = 
        commitments
            .filter(commitment => !commitment.annually && commitment.end instanceof Date && commitment.category === "research" && commitment.end.getTime() > Date.now())
            .sort((a, b) => (a.start instanceof Date ? a.start.getTime() : Infinity) - (b.start instanceof Date ? b.start.getTime() : Infinity));

    let definiteTeaching = 
        commitments
            .filter(commitment => !commitment.annually && commitment.end instanceof Date && commitment.category === "teaching" && commitment.end.getTime() > Date.now())
            .sort((a, b) => (a.start instanceof Date ? a.start.getTime() : Infinity) - (b.start instanceof Date ? b.start.getTime() : Infinity));

    let definiteService = 
        commitments
            .filter(commitment => !commitment.annually && commitment.end instanceof Date && commitment.category === "service" && commitment.end.getTime() > Date.now())
            .sort((a, b) => (a.start instanceof Date ? a.start.getTime() : Infinity) - (b.start instanceof Date ? b.start.getTime() : Infinity));

</script>

<div class="lead">
    This is my commitment calendar, which estimates how much work I've promised to do in the next few years. 
    I use this to decide whether to say yes to new opportunities and brace myself for busy periods.
</div>

<p>
    Curious how I maintain this page? I have a <External to="https://github.com/amyjko/faculty/blob/master/profile/profile.json">list of commitments</External> with date ranges, 
    from which I <External to="https://github.com/amyjko/faculty/blob/master/components/commitments.js">automatically generate</External> this page.
</p>

<hr/>

<div class="bar personal">personal</div>
<div class="bar research">research</div>
<div class="bar teaching">teaching</div>
<div class="bar service">service</div>

<table class="table">
    <tbody>
        <tr><td colSpan="3"><h3>Weekly commitments</h3></td></tr>
        {#each indefiniteWeekly as commitment}
            <tr>
                <td>
                    <em class={commitment.category}>{commitment.name}</em>
                    <br/><small>{commitment.description}</small>
                </td>
                <td>
                    <em>weekly</em>
                </td>
                <td>
                    <Bar commit={commitment}/>
                </td>
            </tr>                            
        {/each}
        <tr><td colSpan="3"><h3>Annual commitments</h3></td></tr>
        {#each indefiniteAnnually as commitment}
            <tr>
                <td>
                    <em class={commitment.category}>{commitment.name}</em>
                    <br/><small>{commitment.description}</small>
                </td>
                <td>
                    {#if commitment.start && commitment.end && "month" in commitment.start && "month" in commitment.end}
                        {#if commitment.start.month === commitment.end.month}
                            <em>{months[commitment.start.month]}</em>
                        {:else}
                            <span><em>{months[commitment.start.month]}</em> - <em>{months[commitment.end.month]}</em></span>
                        {/if}
                    {/if}
                </td>
                <td>
                    <Bar commit={commitment}/>
                </td>
            </tr>
        {/each}
        <tr><td colSpan="3"><h3>One-time commitments</h3></td></tr>
        <tr><td colSpan="3"><h4>Research</h4></td></tr>
        {#each definiteResearch as commitment}
            <tr>
                <td>
                    <em class={commitment.category}>{commitment.name}</em>
                    <br/><small>{commitment.description}</small>
                </td>
                <td>
                    {#if commitment.start instanceof Date && commitment.end instanceof Date}
                        <DateRange start={commitment.start} end={commitment.end}/>
                    {/if}
                </td>
                <td>
                    <Bar commit={commitment}/>
                </td>
            </tr>                            
        {/each}
        <tr><td colSpan="3"><h4>Teaching</h4></td></tr>
        {#each definiteTeaching as commitment}
            <tr>
                <td>
                    <em class={commitment.category}>{commitment.name}</em>
                    <br/><small>{commitment.description}</small>
                </td>
                <td>
                    {#if commitment.start instanceof Date && commitment.end instanceof Date}
                        <DateRange start={commitment.start} end={commitment.end}/>
                    {/if}
                </td>
                <td>
                    <Bar commit={commitment}/>
                </td>
            </tr>                            
        {/each}
        <tr><td colSpan="3"><h4>Service</h4></td></tr>
        {#each definiteService as commitment}
            <tr>
                <td>
                    <em class={commitment.category}>{commitment.name}</em>
                    <br/><small>{commitment.description}</small>
                </td>
                <td>
                    {#if commitment.start instanceof Date && commitment.end instanceof Date}
                        <DateRange start={commitment.start} end={commitment.end}/>
                    {/if}
                </td>
                <td>
                    <Bar commit={commitment}/>
                </td>
            </tr>                            
        {/each}
    </tbody>
</table>

<!--

<h3>Weekly workload</h3>

<p>
    Here's an estimate of how busy I'll be per week in the next two years. 
    You might notice from the wiggles that I don't like working more than 45 hours a week.
    Do big numbers mean I work obscene hours?
    No: I take shortcuts to make my work fit into 45 hours a week.
    For example, it might mean being less prepared for class, missing a meeting, or making less progress on a grant or service responsibility.
</p>

<table class="table">
    <tbody>


var weeks = [];

// Start a date counter with last Monday.
var currentMonday = this.getPreviousMonday();
const yearsToDisplay = 2;

// Iterate through the next 2 years, week by week.
for(var count = 1; count < 52 * yearsToDisplay; count++) {
    
    // Start a list of intersecting commitments
    var intersectingCommitments = [];

    // Compute Sunday.
    var nextSunday = new Date(currentMonday.getTime() + 6 * 24 * 60 * 60 * 1000);

    // Which promises occur in this week?
    this.commitments.forEach(commitment => {
        // If this is an annual commitment, is this week in it's month range?
        if(commitment.annually) {
            let startMonth = new Date(currentMonday.getFullYear(), commitment.start.month - 1, commitment.start.date);
            let endMonth = new Date(currentMonday.getFullYear() + (commitment.end.month < commitment.start.month ? 1 : 0), commitment.end.month - 1, commitment.end.date);
            let overlap = this.datesIntersect(currentMonday, nextSunday, startMonth, endMonth);
            if(overlap > 0)
                intersectingCommitments.push({
                    commitment: commitment,
                    overlap: overlap
                });
        }
        // If this is a weekly commitment...
        else {
            // Does it have a start and end time and does it intersect with the
            if(commitment.start !== null && commitment.end !== null) {
                let overlap = this.datesIntersect(currentMonday, nextSunday, commitment.start, commitment.end);
                if(overlap > 0)
                    intersectingCommitments.push({
                        commitment: commitment,
                        overlap: overlap
                    });
            }
            // If it doesn't have a start or end time, then add it.
            else 
                intersectingCommitments.push({
                    commitment: commitment,
                    overlap: 1
                });
        }                
    });

    // Are there any prime commitments this week? If so, remove the flexible commitments.
    if(intersectingCommitments.filter(intersect => intersect.commitment.priority === 2).length > 0)
        intersectingCommitments = intersectingCommitments.filter(intersect => intersect.commitment.priority !== 0);

    // Add these dcommitments to this week for rendering.
    weeks.push({
        date: currentMonday,
        intersects: intersectingCommitments.sort((a, b) => {
            if(a.commitment.category !== b.commitment.category)
                return a.commitment.category.localeCompare(b.commitment.category);
            else
                return a.commitment.hours * a.overlap > b.commitment.hours * b.overlap;
        })
    });

    // Add a week to the current Monday.
    currentMonday = new Date(currentMonday.getTime() + 7 * 24 * 60 * 60 * 1000);

}

// Finally, map the weeks to table rows.
var rows = [];
var lastWeek = null;
weeks.forEach((week, index) => {
    
    // Add a month header when we start or it changes.
    if(lastWeek === null || lastWeek.date.getMonth() !== week.date.getMonth())
        rows.push(
            <tr key={"week-" + index}>
                <td colSpan="2"><h4>{this.months[week.date.getMonth() + 1]} {week.date.getFullYear()}</h4></td>
            </tr>)
    lastWeek = week;

    let hours = 
        week.intersects.reduce((sum, intersect) => sum + (intersect.commitment.category === "personal" ? 0 : Math.round(intersect.commitment.hours * intersect.overlap)), 0);

    // Add the commitments, then a total hours
    rows.push(
        <tr key={"week-" + index + "-commitments"}>
            <td>
                <div class={hours > 45 ? "shake" : ""} style={{animationDelay: "-" + Math.round(10 * Math.random()) / 10 + "s"}}>
                {
                    week.intersects.map((intersect, index) => this.renderBar(intersect.commitment, intersect.overlap, false, "commitment-" + index))
                }
                </div>
                {
                    <div class="commitment-notes">
                        {
                            week.intersects.map(
                                (intersect, index) => 
                                    <span 
                                        class={intersect.commitment.category}
                                        key={"name-" + index} 
                                    >
                                            {/* {index > 0 && week.intersects[index - 1].commitment.category !== intersect.commitment.category ? <br/> : null} */}
                                            {intersect.commitment.name}
                                            {index < week.intersects.length - 1 ? <span> &sdot; </span> : null}
                                    </span>
                            )
                        }
                    </div>
                }
            </td>
            <td key="total"><div class={hours > 45 ? "shake" : ""}  style={{animationDelay: "-" + Math.round(10 * Math.random()) / 10 + "s"}}>{hours + " hrs"}</div></td>
        </tr>
    );

});

    </tbody>
</table>

-->