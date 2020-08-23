import React from 'react';
import _ from 'lodash';

import {Block} from './block';

class Impact extends React.Component {
	render() {

		var blocks = _.map(
			this.props.app.getImpacts(),
			(population, index) => {
				return (
					<Block 
						key={population.id}
						image={"images/populations/population-" + population.id + ".jpg"}
						alt={population.alt}
						link={null}
						header=<span><strong>{population.population}</strong>. {population.description}. </span>
						content=
							<ul>
							{
								_.map(
									population.impacts,
									(impact, index) => {
										return <li key={index} dangerouslySetInnerHTML={{__html: impact}}></li>
									}
								)
							}
							</ul>
					/>
				)
				
			}
		);
		
		return (
			<div>

				<div className="lead">
					I actively share my research and expertise with the world.
				</div>

				{ blocks }

			</div>
		)
	}
}

export { Impact };