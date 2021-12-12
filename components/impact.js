import React from 'react';

import {Block} from './block';

class Impact extends React.Component {
	render() {
		
		return (
			<div>

				<div className="lead">
					I actively share my research and expertise with the world.
				</div>

				{
					this.props.app.getProfile().getPopulations().map(
						population =>
							<Block 
								key={population.id}
								image={"images/populations/population-" + population.id + ".jpg"}
								alt={population.alt}
								link={null}
								header={population.population}
								content={<span>
									<p>{population.description}</p>
									<div>
										{
											this.props.app.getProfile().getImpacts(
												impact => impact.who === population.id,
												impact => -impact.start
											).map((impact, index) =>
												<p key={index}>
													<span style={{fontVariant: "small-caps"}}>{impact.kind}</span> <small> ({impact.start}{impact.end == null ? "-present" : impact.start !== impact.end ? "-" + impact.end : "" })</small>
													<br/>{impact.description}{impact.url ? <small> <a href={impact.url}>evidence</a></small> : null}
												</p>
											)
										}
									</div>
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