import _ from 'lodash';
import React from 'react';
import { Block } from './block';

class Classes extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					These are courses I teach.
				</div>

				{
					_.map(this.props.app.getProfile().getClasses(), course => {
						let latestOffering = _.orderBy(course.offerings, ["year", "term"], ["desc", "term"])[0];
						return <Block
								key={"course-" + course.id}
								image={this.props.app.getWebRoot() + "/images/courses/" + course.id + ".png"}
								alt={course.alt}
								link={course.link}
								header={course.number + " " + course.title}
								content={
									<span> (<em>last taught {["Autumn", "Winter", "Spring"][latestOffering.term] + " " + latestOffering.year}</em>). {course.description}
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