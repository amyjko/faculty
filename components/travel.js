import React from 'react';
import {Block} from './block';
import _ from 'lodash';

function mapTrips(trips) {
	
	return _.map(trips, (trip, index) => {
		return (
			<Block 
				image=<span>
					<em>{["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][trip.month - 1] + " " + trip.day + ", " + trip.year}</em>
					{trip.report !== null ? <span><br/><a href={trip.report} target="_blank">trip report</a></span> : null}
				</span>
				alt={null}
				key={"trip-" + index}
				link={trip.url}
				header={trip.title}
				content={". " + trip.details}
			/>
		);
	});
	
}

class Travel extends React.Component {
	render() {
		
		var future = true;
		
		// Compute months and dates from strings.
		var trips = _.each(this.props.app.getTravel(), (trip) => {
			var parts = trip.date.split(".");
			trip.year = parseInt(parts[0]);
			trip.month = parseInt(parts[1]);
			trip.day = parseInt(parts[2]);
			trip.d = new Date(trip.year, trip.month - 1, trip.day);
		});
		
		// Sort the trips by date
		trips = trips.sort((a, b) => {
			return b.d.getTime() - a.d.getTime();
		});
		
		var upcomingTrips = _.filter(trips, (trip) => {
			return trip.d.getTime() > Date.now();
		})
		
		var pastTrips = _.filter(trips, (trip) => {
			return trip.d.getTime() <= Date.now();
		})
		
		var upcoming = mapTrips(upcomingTrips);
		var past = mapTrips(pastTrips);
		
		return (
			<div>
				<div className='lead'>
					I frequently travel&mdash;or during a pandemic, teleport into video chats&mdash;to share my research, ideas, and experiences. Below are upcoming and past visits.
				</div>
				
				<h3>Upcoming trips</h3>

				{upcoming}

				<h3>Past trips</h3>

				{past}
				
			</div>
		);
	}
}

export {Travel}