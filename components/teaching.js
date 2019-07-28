import React from 'react';
import {Block} from './block';

class Teaching extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					These are courses I teach.
				</div>

				<Block
					image={this.props.app.getWebRoot() + "/images/course-info360.png"}
					alt="A line drawing of two people discussing a sketch"
					link = "https://canvas.uw.edu/courses/1118283"
					header="INFO 360 Design Methods"
					content=". This undergraduate class teaches students design thinking skills in the domain of information and computing. It leverages multiple forms of active learning, involves a significant amount of studio-based learning, and helps students develop creative confidence."
				/>

				<Block
					image={this.props.app.getWebRoot() + "/images/course-info442.jpg"}
					alt="A tesselation of squares and triangles"
					link="https://canvas.uw.edu/courses/1273825"
					header="INFO 442 Cooperative Software Development"
					content=". This undergraduate software engineering class teaches foundations of team-based software development, leveraging the latest research on coordination, cooperation, and human cognition in software development. Students leave ready to become meaningful contributors to teams big and small, but also to understand the processes that teams use and how they can improve them."
				/>

				<Block
					image={this.props.app.getWebRoot() + "/images/course-hcid520.jpg"}
					alt="A black and white photograph of a woman operating the ENIAC, the first computer"
					link="https://canvas.uw.edu/courses/1256337"
					header="HCID 520 User Interface Software and Technology"
					content=". This graduate course teaches students they history, theory, and foundations of user interfaces. Students acquire a literacy for communicating and reasoning about interfaces."
				/>

				<Block
					image={this.props.app.getWebRoot() + "/images/course-info200.png"}
					alt="A black and white version of an old painting with a child reading a newspaper"
					link="https://canvas.uw.edu/courses/1223117"
					header="INFO 200 Intellectual Foundations of Informatics"
					content=
						<span>
							. This survey course covers big ideas in information, information technology, information systems, and human-computer interaction. Students learn the history of information, foundational concepts in information, the relationship between information and computing, skills in analyzing and designing information systems, and the role of information systems in society. See <a href="https://medium.com/bits-and-behavior/big-ideas-about-information-c09e4d9c60bd">my Medium post on the big ideas in the course</a>.
						</span>
				/>

			</div>
		);
	}
}

export {Teaching}