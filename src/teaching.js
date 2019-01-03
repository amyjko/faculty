import React from 'react';

class Teaching extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					These are the courses I teach regularly. My focus is on HCI, design, software engineering, and foundations of information science.
				</div>

				<div className="project row">
					<div className="col-md-3">
						<img className='img-responsive gap-bottom-right' src="/ajko/info360/images/design-thinking.png" style={{width: 140}} />
					</div>
					<div className="col-md-9">
						<div className='lead'><a target="_blank" href="/ajko/info360">INFO 360 Design Methods</a>. <small>This undergraduate class teaches students design thinking skills in the domain of information and computing. It leverages multiple forms of active learning, involves a significant amount of studio-based learning, and helps students develop creative confidence.</small></div>	
					</div>
				</div>

				<div className="project row">
					<div className="col-md-3">
						<img className='img-responsive gap-bottom-right' src="/ajko/info461/images/tessellation.jpg" style={{width: 140}} />
					</div>
					<div className="col-md-9">
						<div className='lead'><a target="_blank" href="/ajko/info461">INFO 461 Cooperative Software Development</a>. <small>This undergraduate software engineering class teaches foundations of team-based software development, leveraging the latest research on coordination, cooperation, and human cognition in software development. Students leave ready to become meaningful contributors to teams big and small, but also to understand the processes that teams use and how they can improve them.</small></div>	
					</div>
				</div>

				<div className="project row">
					<div className="col-md-3">
						<img className='img-responsive gap-bottom-right' src="/ajko/hcid520/images/AVIDAC.jpg" style={{width: 140}} />
					</div>
					<div className="col-md-9">
						<div className='lead'><a target="_blank" href="https://canvas.uw.edu/courses/1256337">HCID 520 User Interface Software and Technology</a>. <small> This graduate course teaches students they history, theory, and foundations of user interfaces. Students acquire a literacy for communicating and reasoning about interfaces.</small></div>	
					</div>
				</div>

				<div className="project row">
					<div className="col-md-3">
						<img className='img-responsive gap-bottom-right' src="/ajko/images/info200.png" style={{width: 140}} />
					</div>
					<div className="col-md-9">
						<div className='lead'><a target="_blank" href="https://canvas.uw.edu/courses/1223117">INFO 200 Intellectual Foundations of Informatics</a>. <small>This survey course covers big ideas in information, information technology, information systems, and human-computer interaction. Students learn the history of information, foundational concepts in information, the relationship between information and computing, skills in analyzing and designing information systems, and the role of information systems in society. See <a href="https://medium.com/bits-and-behavior/big-ideas-about-information-c09e4d9c60bd">my Medium post on the course's big ideas</a>.</small></div>	
					</div>
				</div>

			</div>
		);
	}
}

export {Teaching}