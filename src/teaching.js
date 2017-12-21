import React from 'react';

class Teaching extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					Here are some of the courses I teach regularly.
				</div>

				<ul>
					<li><a target="_blank" href="info360">INFO 360 Design Methods</a></li>
					<li><a target="_blank" href="info461">INFO 461 Cooperative Software Development</a></li>
					<li><a target="_blank" href="hcid520">HCID 520 User Interface Software and Technology</a></li>
				</ul>

			</div>
		);
	}
}

export {Teaching}