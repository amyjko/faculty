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
						let latestOffering = _.orderBy(course.offerings, ["year", "term"], ["desc", "desc"])[0];
						let currentYear = (new Date()).getFullYear();
						let currentMonth =(new Date()).getMonth() + 1;
						let currentQuarter = currentMonth <= 3 ? 2 : currentMonth <= 6 ? 3: 1;
						let future = latestOffering.year >= currentYear && currentQuarter >= currentQuarter;
						return <Block
								key={"course-" + course.id}
								image={this.props.app.getWebRoot() + "/images/courses/" + course.id + ".png"}
								alt={course.alt}
								link={course.link}
								header={course.number + " " + course.title}
								content={
									<span> (<em>{future ? "Next" : "Latest"} offering {["Autumn", "Winter", "Spring"][latestOffering.term - 1] + " " + latestOffering.year}</em>). {course.description}
										<br/>
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