import _ from 'lodash';
import React from 'react';

class Commitments extends React.Component {

    constructor() {
        
        super();

        this.colors = {
            "research": "rgb(210,210,255)",
            "teaching": "rgb(195,240,195)",
            "service": "rgb(255,222,162)",
            "personal": "rgb(220,220,220)"
        };

        this.months = {
            1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr",
            5: "May", 6: "Jun", 7: "Jul", 8: "Aug",
            9: "Sept", 10: "Oct", 11: "Nov", 12: "Dec"
        };

    }

    renderBar(commitment, proportion=1, label=true, key=null) {

        var maxEms = 12;
        var ems = Math.round(maxEms * commitment.hours * proportion / 40);
        
        // Adjust the postfix based on size and duration of commitment.
        var postfix = 
            ems <= 3 ? "" :
            (!commitment.annually && commitment.end.getTime() !== null &&
            (commitment.end.getTime() - commitment.start.getTime()) / 1000 / 60 / 60 / 24 <= 7) ? " hrs" :
            " hrs/wk";

        return (
            <div 
                className={"bar " + commitment.category}
                key={key}
                style={
                    {
                        width: ems + "em"
                    }
                }
            >
                {label ? <span>{commitment.hours * proportion}{postfix}</span> : null}
            </div>
        );

    }

    toDateString(date, showYear=true) {
        return this.months[date.getMonth() + 1] + " " + date.getDate() + (showYear ? ", '" + date.getFullYear().toString().substr(-2) : "");
    }
    
    toDateRange(start, end) {

        var range = end.getTime() - start.getTime();
        var yearInMilliseconds = 1000 * 60 * 60 * 24 * 7 * 52;
        var weekInMilliseconds = 1000 * 60 * 60 * 24 * 7;

        // If it's longer than a year, do years
        if(range >= yearInMilliseconds) {
            return <span><em>{Math.round(10 * range / yearInMilliseconds) / 10} years</em><br/>starting <em>{this.toDateString(start)}</em></span>;
        }
        // If it's longer than a week, do weeks
        else if(range >= weekInMilliseconds) {
            return <span><em>{Math.round(range / weekInMilliseconds)} weeks</em><br/>starting <em>{this.toDateString(start)}</em></span>;
        }
        // If it's less than a week, just do the dates
         else {
            return <span><em>{this.toDateString(start, false)}</em> -<br/><em>{this.toDateString(end)}</em></span>;
         }

    }

    getPreviousMonday() {
				
        var date = new Date();
        var day = date.getDay();
        var prevMonday;
        if(date.getDay() === 1) {
            prevMonday = new Date().setDate(date.getDate() - 7);
        }
        else{
            prevMonday = new Date().setDate(date.getDate() - day + 1);
        }
    
        return new Date(prevMonday);

    }

    datesIntersect(date1Start, date1End, date2Start, date2End) {
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

    renderWeeks() {

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
            _.each(this.commitments, commitment => {
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
            if(_.filter(intersectingCommitments, intersect => intersect.commitment.priority === 2).length > 0)
                intersectingCommitments = _.filter(intersectingCommitments, intersect => intersect.commitment.priority !== 0);

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
        _.each(weeks, (week, index) => {
            
            // Add a month header when we start or it changes.
            if(lastWeek === null || lastWeek.date.getMonth() !== week.date.getMonth())
                rows.push(
                    <tr key={"week-" + index}>
                        <td colSpan="2"><h4>{this.months[week.date.getMonth() + 1]} {week.date.getFullYear()}</h4></td>
                    </tr>)
            lastWeek = week;

            // Add the commitments, then a total hours
            rows.push(
                <tr key={"week-" + index + "-commitments"}>
                    <td>
                    {
                        _.map(week.intersects, (intersect, index) => this.renderBar(intersect.commitment, intersect.overlap, false, "commitment-" + index))
                    }
                    <br/>
                    {
                        <small>
                            {_.map(
                                week.intersects, 
                                (intersect, index) => 
                                    <span 
                                        className={intersect.commitment.category}
                                        key={"name-" + index} 
                                    >
                                            {index > 0 && week.intersects[index - 1].commitment.category !== intersect.commitment.category ? <br/> : null}
                                            {intersect.commitment.name}
                                            {index < week.intersects.length - 1 ? <span> &sdot; </span> : null}
                                    </span>
                            )}
                        </small>
                    }
                    </td>
                    <td key="total">{_.reduce(week.intersects, (sum, intersect) => sum + (intersect.commitment.category === "personal" ? 0 : Math.round(intersect.commitment.hours * intersect.overlap)), 0)} hrs</td>
                </tr>
            );

        });

        return rows;

    }

    commit(name, description, category, priority, hours, annually, start, end) {

        this.commitments.push({
            "name": name,
            "description": description,
            "category": category,
            "priority": priority,
            "hours": hours,
            "annually": annually,
            "start": start,
            "end": end
        });

    }

    generateCommitments() {

        this.commitments = [];

        var profile = this.props.app.getProfile();
        var thisYear = (new Date()).getFullYear();

        // Start with an list of miscellaneous commitments.
        _.map(profile.getCommitments(), 
            com => 
                this.commit(com.title, com.description, com.category, com.commitment.priority, com.commitment.hours, com.annually, com.commitment.start, com.commitment.end))

        // Add editing responsibilities.
        _.each(profile.getEditing(), editing =>
            this.commit(
                editing.venue, editing.title, "service", 
                editing.commitment.priority, editing.commitment.hours, false, 
                editing.commitment.start, editing.commitment.end
            )
        );

        // Add service responsibilities.
        _.each(profile.getService(), service =>
            this.commit(
                service.committee, service.title, "service", 
                service.commitment.priority, service.commitment.hours, false, 
                service.commitment.start, service.commitment.end
            )
        );

        // Add funding responsibilities.
        _.each(profile.getFunding(), funding =>
            this.commit(
                funding.title, "Research, collaboration, reporting", funding.category, 
                funding.commitment.priority, funding.commitment.hours, false, 
                funding.commitment.start, funding.commitment.end
            )
        );

        // Add travel responsibilities.
        _.each(profile.getTravel(), trip =>
            this.commit(
                trip.title, trip.details, trip.category, 
                trip.commitment.priority, trip.commitment.hours, false, 
                trip.commitment.start, trip.commitment.end
            )
        );

        // Add talk prep responsibilities (start prep 90 days beforehand)
        _.each(profile.getTalks(), talk => {
            let start = new Date(talk.date.getTime());
            start.setDate(start.getDate() - 90);
            return this.commit(
                talk.title, talk.description, "research", 
                1, 1, false, 
                start, talk.date
            )
        });

        // Add reviewing responsibilities.
        _.each(profile.getReviewing(), reviewing => {
            // If this has a commitment, add commitments for all current and future years.
            if(reviewing.commitment) {
                _.each(
                    _.filter(reviewing.years, year => year >= thisYear),
                    year => 
                        this.commit(
                            reviewing.title ? reviewing.title : "Reviewer", reviewing.venue, "service", 
                            reviewing.commitment.priority, reviewing.commitment.hours, false, 
                            new Date(year, reviewing.commitment.start.getMonth(), reviewing.commitment.start.getDate()),
                            new Date(year, reviewing.commitment.end.getMonth(), reviewing.commitment.end.getDate()),
                        )
                )
            }
        });

        // Add teaching responsibilities
        _.each(profile.getClasses(), course => {
            _.each(course.offerings, offering => {
                // If this course is going to be offered this year, add commitments for it
                if(offering.year >= thisYear) {
                    // Add time for preparing to teach the quarter before.
                    this.commit(
                        course.number + " Prep", "Curriculum design", "teaching",
                        1, 2, false,
                        new Date(offering.year - (offering.term === 2 ? 1 : 0), [6, 9, 0][offering.term - 1], [1, 5, 5][offering.term - 1]),
                        new Date(offering.year - (offering.term === 2 ? 1 : 0), [8, 11, 3][offering.term - 1], [15, 15, 15][offering.term - 1])
                    );
                    // Add time for teaching the class the quarter before.
                    this.commit(
                        course.number, "Teaching and grading", "teaching",
                        1, course.hours, false,
                        new Date(offering.year, [8, 0, 3][offering.term - 1], [15, 1, 1][offering.term - 1]),
                        new Date(offering.year, [11, 2, 5][offering.term - 1], [15, 15, 15][offering.term - 1])
                    );
                }
            });
        });

    }

	render() {

        this.generateCommitments();

        // Split up the committments into categories for display.
        var indefiniteWeekly = _.sortBy(_.filter(this.commitments, 
            commitment => commitment.end === null && commitment.category !== "personal"),
            commitment => -commitment.hours);

        var indefiniteAnnually = _.sortBy(_.filter(this.commitments,
            commitment => commitment.annually && commitment.category !== "personal"),
            commitment => commitment.start.month * 12 + commitment.start.date
        );

        var definiteResearch = _.sortBy(_.filter(this.commitments, 
            commitment => !commitment.annually && commitment.end !== null && commitment.category === "research" && commitment.end.getTime() > Date.now()),
            commitment => commitment.start.getTime()
        );

        var definiteTeaching = _.sortBy(_.filter(this.commitments, 
            commitment => !commitment.annually && commitment.end !== null && commitment.category === "teaching" && commitment.end.getTime() > Date.now()),
            commitment => commitment.start.getTime()
        );

        var definiteService = _.sortBy(_.filter(this.commitments,
            commitment => !commitment.annually && commitment.end !== null && commitment.category === "service" && commitment.end.getTime() > Date.now()),
            commitment => commitment.start.getTime()
        );

		return (
			<div>
				<div className="lead">
					This is my commitment calendar, with estimates of how busy I'll be each week in the next two years. I use this to decide whether to say yes to new opportunities.
				</div>

                <p>Curious how I maintain this page? I have a list of commitments with date ranges, from which I automatically generate this page.</p>

                <div className="bar personal">personal</div>
                <div className="bar research">research</div>
                <div className="bar teaching">teaching</div>
                <div className="bar service">service</div>

                <table className="table">
                    <tbody>
                        <tr><td colSpan="3"><h3>Weekly commitments</h3></td></tr>
                        {
                            _.map(indefiniteWeekly, (commitment, index) =>
                                <tr key={"weekly-commitment-" + index}>
                                    <td>
                                        <em className={commitment.category}>{commitment.name}</em>
                                        <br/><small>{commitment.description}</small>
                                    </td>
                                    <td>
                                        <em>weekly</em>
                                    </td>
                                    <td>
                                        {this.renderBar(commitment)}
                                    </td>
                                </tr>                            
                            )
                        }
                        <tr><td colSpan="3"><h3>Annual commitments</h3></td></tr>
                        {
                            _.map(indefiniteAnnually, (commitment, index) =>
                                <tr key={"annual-commitment-" + index}>
                                    <td>
                                        <em className={commitment.category}>{commitment.name}</em>
                                        <br/><small>{commitment.description}</small>
                                    </td>
                                    <td>
                                        {
                                            this.months[commitment.start.month] === this.months[commitment.end.month] ?
                                                <em>{this.months[commitment.start.month]}</em> :
                                                <span><em>{this.months[commitment.start.month]}</em> - <em>{this.months[commitment.end.month]}</em></span>
                                        }                             
                                    </td>
                                    <td>
                                        {this.renderBar(commitment)}
                                    </td>
                                </tr>                            
                            )
                        }
                        <tr><td colSpan="3"><h3>One-time commitments</h3></td></tr>
                        <tr><td colSpan="3"><h4>Research</h4></td></tr>
                        {
                            _.map(definiteResearch, (commitment, index) =>
                                <tr key={"fixed-commitment-" + index}>
                                    <td>
                                        <em className={commitment.category}>{commitment.name}</em>
                                        <br/><small>{commitment.description}</small>
                                    </td>
                                    <td>
                                        {this.toDateRange(commitment.start, commitment.end)}
                                    </td>
                                    <td>
                                        {this.renderBar(commitment)}
                                    </td>
                                </tr>                            
                            )
                        }
                        <tr><td colSpan="3"><h4>Teaching</h4></td></tr>
                        {
                            _.map(definiteTeaching, (commitment, index) =>
                                <tr key={"fixed-commitment-" + index}>
                                    <td>
                                        <em className={commitment.category}>{commitment.name}</em>
                                        <br/><small>{commitment.description}</small>
                                    </td>
                                    <td>
                                        {this.toDateRange(commitment.start, commitment.end)}
                                    </td>
                                    <td>
                                        {this.renderBar(commitment)}
                                    </td>
                                </tr>                            
                            )
                        }
                        <tr><td colSpan="3"><h4>Service</h4></td></tr>
                        {
                            _.map(definiteService, (commitment, index) =>
                                <tr key={"fixed-commitment-" + index}>
                                    <td>
                                        <em className={commitment.category}>{commitment.name}</em>
                                        <br/><small>{commitment.description}</small>
                                    </td>
                                    <td>
                                        {this.toDateRange(commitment.start, commitment.end)}
                                    </td>
                                    <td>
                                        {this.renderBar(commitment)}
                                    </td>
                                </tr>                            
                            )
                        }
                    </tbody>
                </table>

                <h3>Weekly workload</h3>

                <table className="table">
                    <tbody>
                    { this.renderWeeks() }
                    </tbody>
                </table>
            </div>
		)
		
	}

}

export { Commitments };