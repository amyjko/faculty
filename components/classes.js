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
					this.props.app.getProfile().getClasses().map(course => {
						const nextOfferings = course.offerings.filter(offer => offer.score === null).sort((a, b) => (a.year === b.year ? a.term - b.term : a.year - b.year))
						const latestOfferings = course.offerings.filter(offer => offer.score !== null).sort((a, b) => (a.year === b.year ? b.term - a.term : b.year - a.year))
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
											{course.links.map( 
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