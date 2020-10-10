import React from 'react';
import {Block} from './block';
import _ from 'lodash';

class Travel extends React.Component {

	getDateString(start, end) {

		var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		if(start.getTime() === end.getTime()) {
			return months[start.getMonth()] + " " + start.getDate() + ", " + start.getFullYear();
		} else {
			return months[start.getMonth()] + " " + start.getDate() + " - " + (start.getMonth() === end.getMonth() ? "" : months[end.getMonth()]) + " " + end.getDate() + ", " + end.getFullYear();
		}

	}

	render() {
		
		const renderTrips = (filter, sort) =>
			_.map(
				this.props.app.getProfile().getTravel(filter, sort), 
				(trip, index) =>
					<Block 
						image={
							<span>
								<em>{this.getDateString(trip.commitment.start, trip.commitment.end)}</em>
								{trip.report !== null ? <span><br/><a href={trip.report} target="_blank">trip report</a></span> : null}
							</span>
						}
						alt={null}
						key={"trip-" + index}
						link={trip.url}
						header={trip.title}
						content={". " + trip.details}
					/>
			);		

		return (
			<div>
				<div className='lead'>
					I frequently travel&mdash;or during a pandemic, teleport into video chats&mdash;to share my research, ideas, and experiences. Below are upcoming and past visits.
				</div>
				
				<h3>Upcoming trips</h3>
				{
					renderTrips(
						trip => trip.commitment.start.getTime() > Date.now(),
						trip => trip.commitment.start.getTime()
					)
				}

				<h3>Past trips</h3>
				{
					renderTrips(
						trip => trip.commitment.start.getTime() <= Date.now(),
						trip => -trip.commitment.start.getTime()
					)
				}
				
			</div>
		);
	}
}

export {Travel}