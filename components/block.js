import React from 'react';

class Block extends React.Component {
	
	render() {

		return (
			<div className="project row">
				<div className="col-md-3">
					<a href={this.props.link} target="_blank"><img className='img-responsive img-thumbnail gap-bottom-right' src={this.props.image} style={{width: 140}} /></a>
				</div>
				<div className="col-md-9">
					{this.props.link ? 
						<a href={this.props.link} target="_blank">{this.props.header}</a> :
						this.props.header
					}. {this.props.content}
				</div>
			</div>
		);

	}

}

export {Block};