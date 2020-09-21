import _ from 'lodash';
import React from 'react';
import {Block} from './block';

class Teaching extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					These are courses I teach.
				</div>

				{
					_.map(this.props.app.getClasses(), course =>
						<Block
							key={"course-" + course.id}
							image={this.props.app.getWebRoot() + "/images/courses/" + course.id + ".png"}
							alt={course.alt}
							link={course.link}
							header={course.title}
							content={
								<span>. (<em>taught {course.date}</em>). {course.description}
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
					)
				}
			</div>
		);
	}
}

export {Teaching}