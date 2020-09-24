import React from 'react';
import {Block} from './block';
import _ from 'lodash';

class Travel extends React.Component {
	render() {
		
		const renderTrips = (filter, sort) =>
			_.map(
				this.props.app.getProfile().getTravel(filter, sort), 
				(trip, index) =>
					<Block 
						image={
							<span>
								<em>{["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][trip.month - 1] + " " + trip.day + ", " + trip.year}</em>
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
						trip => trip.time > Date.now(),
						trip => trip.time
					)
				}

				<h3>Past trips</h3>
				{
					renderTrips(
						trip => trip.time <= Date.now(),
						trip => -trip.time
					)
				}
				
			</div>
		);
	}
}

export {Travel}