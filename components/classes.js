import _ from 'lodash';
import React from 'react';
import { Block } from './block';

class Classes extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					These are classes I teach.
				</div>

				{
					_.map(this.props.app.getProfile().getClasses(), course => {
						let nextOfferings = _.orderBy(_.filter(course.offerings, offer => offer.score === null), ["year", "term"], ["asc", "asc"]);
						let latestOfferings = _.orderBy(_.filter(course.offerings, offer => offer.score !== null), ["year", "term"], ["desc", "desc"]);
						let currentYear = (new Date()).getFullYear();
						let currentMonth =(new Date()).getMonth() + 1;
						let currentQuarter = currentMonth <= 3 ? 2 : currentMonth <= 6 ? 3: 1;
						return <Block
								key={"course-" + course.id}
								image={this.props.app.getWebRoot() + "/images/courses/" + course.id + ".png"}
								alt={course.alt}
								link={course.link}
								header={course.number + " " + course.title}
								content={
									<span> (
										<em>
										{latestOfferings.length === 0 ? null : "last taught " + ["Autumn", "Winter", "Spring"][latestOfferings[0].term - 1] + " " + latestOfferings[0].year }
										{nextOfferings.length === 0 ? null : (latestOfferings.length > 0 ? ", " : "") + "next offering likely " + ["Autumn", "Winter", "Spring"][nextOfferings[0].term - 1] + " " + nextOfferings[0].year }
										</em>). {course.description}
										<ul>
											{_.map(
												course.links, 
												(link, index) => 
													<li key={index}>
														{
															<a href={link.link} target="_blank">{link.description}</a>
														}
													</li>
											)}
										</ul>
									</span>						
								}
							/>
					}
					)
				}
			</div>
		);
	}
}

export {Classes}