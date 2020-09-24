import React from 'react';
import _ from 'lodash';

import {Block} from './block';

class Impact extends React.Component {
	render() {
		
		return (
			<div>

				<div className="lead">
					I actively share my research and expertise with the world.
				</div>

				{
					_.map(
						this.props.app.getProfile().getImpacts(),
						population =>
							<Block 
								key={population.id}
								image={"images/populations/population-" + population.id + ".jpg"}
								alt={population.alt}
								link={null}
								header={population.population}
								content={<span>
									. {population.description}
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
								</span>
								}
							/>
					)
				}

			</div>
		)
	}
}

export { Impact };