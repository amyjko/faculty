import React from 'react';

class Block extends React.Component {
	
	render() {

		return (
			<div className="project row">
				<div className="col-xs-3 col-md-3">
					<a href={this.props.link} target="_blank"><img className='img-responsive img-thumbnail gap-bottom-right' src={this.props.image} alt={this.props.alt}/></a>
				</div>
				<div className="col-xs-9 col-md-9">
					{this.props.header ?
						this.props.link ? 
							<a href={this.props.link} target="_blank">{this.props.header}</a> :
							this.props.header
						: null
					}
					{this.props.header ? ". " : null}
					{this.props.content}
				</div>
			</div>
		);

	}

}

export {Block};