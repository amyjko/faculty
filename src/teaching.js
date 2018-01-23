import React from 'react';

class Teaching extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					These are the courses I teach regularly. My focus is on HCI, design, and software engineering.
				</div>

				<div className="project row">
					<div className="col-md-3">
						<img className='img-responsive gap-bottom-right' src="/ajko/info360/images/design-thinking.png" style={{width: 140}} />
					</div>
					<div className="col-md-9">
						<div className='lead'><a target="_blank" href="/info360">INFO 360 Design Methods</a>. <small>This undergraduate class teaches students design thinking skills in the domain of information and computing. It leverages multiple forms of active learning, involves a significant amount of studio-based learning, and helps students develop creative confidence.</small></div>	
					</div>
				</div>

				<div className="project row">
					<div className="col-md-3">
						<img className='img-responsive gap-bottom-right' src="/ajko/info461/images/tessellation.jpg" style={{width: 140}} />
					</div>
					<div className="col-md-9">
						<div className='lead'><a target="_blank" href="/info461">INFO 461 Cooperative Software Development</a>. <small>This undergraduate software engineering class teaches foundations of team-based software development, leveraging the latest research on coordination, cooperation, and human cognition in software development. Students leave ready to become meaningful contributors to teams big and small, but also to understand the processes that teams use and how they can improve them.</small></div>	
					</div>
				</div>

				<div className="project row">
					<div className="col-md-3">
						<img className='img-responsive gap-bottom-right' src="/ajko/hcid520/images/AVIDAC.jpg" style={{width: 140}} />
					</div>
					<div className="col-md-9">
						<div className='lead'><a target="_blank" href="/hcid520">HCID 520 User Interface Software and Technology</a>. <small> This graduate course teaches students they history, theory, and foundations of user interfaces. Students acquire a literacy for communicating and reasoning about interfaces.</small></div>	
					</div>
				</div>

			</div>
		);
	}
}

export {Teaching}