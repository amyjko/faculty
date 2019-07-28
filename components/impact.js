import React from 'react';
import _ from 'lodash';

import {Block} from './block';

var populations = require('../data/impact.json');

class Impact extends React.Component {
	render() {

		var blocks = _.map(
			populations,
			(population, index) => {
				return (
					<Block 
						key={population.id}
						image={"images/population-" + population.id + ".jpg"}
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
					This is the impact of my research and expertise.
				</div>

				{ blocks }

			</div>
		)
	}
}

export { Impact };