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

    createBar(commitment, proportion=1, label=true, key=null) {

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

    createWeeks(commitments) {

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
            _.each(commitments, commitment => {
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
            if(_.filter(intersectingCommitments, intersect => intersect.commitment.priority === "prime").length > 0)
                intersectingCommitments = _.filter(intersectingCommitments, intersect => intersect.commitment.priority !== "flexible");

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
                        _.map(week.intersects, (intersect, index) => this.createBar(intersect.commitment, intersect.overlap, false, "commitment-" + index))
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
                                            {index < week.intersects.length - 1 ? ", " : null}
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

	render() {

        var indefiniteWeekly = this.props.app.getProfile().getCommitments(
            commitment => commitment.start === null && commitment.category !== "personal",
            commitment => -commitment.hours
        );

        var indefiniteAnnually = this.props.app.getProfile().getCommitments(
            commitment => commitment.annually && commitment.category !== "personal",
            commitment => commitment.start.month * 12 + commitment.start.date
        );

        var definiteResearch = this.props.app.getProfile().getCommitments(
            commitment => !commitment.annually && commitment.start !== null && commitment.category === "research" && commitment.end.getTime() > Date.now(),
            commitment => commitment.start.getTime()
        );

        var definiteTeaching = this.props.app.getProfile().getCommitments(
            commitment => !commitment.annually && commitment.start !== null && commitment.category === "teaching" && commitment.end.getTime() > Date.now(),
            commitment => commitment.start.getTime()
        );

        var definiteService = this.props.app.getProfile().getCommitments(
            commitment => !commitment.annually && commitment.start !== null && commitment.category === "service" && commitment.end.getTime() > Date.now(),
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
                                        {this.createBar(commitment)}
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
                                        {this.createBar(commitment)}
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
                                        {this.createBar(commitment)}
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
                                        {this.createBar(commitment)}
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
                                        {this.createBar(commitment)}
                                    </td>
                                </tr>                            
                            )
                        }
                    </tbody>
                </table>

                <h3>Weekly workload</h3>

                <table className="table">
                    <tbody>
                    { this.createWeeks(this.props.app.getProfile().getCommitments()) }
                    </tbody>
                </table>
            </div>
		)
		
	}

}

export { Commitments };