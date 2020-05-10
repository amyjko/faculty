import React from 'react';

class Footer extends React.Component {
	render() {
		
		var path = this.props.path || "";
		
		return (
			<div>
				<hr/>
				<small>
					Copyright Amy J. Ko. See <a href="https://github.com/amyjko/faculty" target="_blank">this site's GitHub repository</a> to view source and provide feedback.
				</small>
			</div>
	    )
	}
}

export { Footer };