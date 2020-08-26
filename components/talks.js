import React from 'react';
import _ from 'lodash';

import {Block} from './block';

class Talks extends React.Component {
	render() {
		
		var talks = this.props.app.getTalks();
		
		var blocks = _.map(talks, (talk, index) => {
			
				var link =
					talk.recording ? talk.recording :
					talk.practice ? talk.practice :
					talk.slides;			
			
				return <Block
					key={"talk" + index}
					image={this.props.app.getWebRoot() + "/images/talks/" + talk.image}
					alt={talk.alt}
					link={talk.recording ? talk.recording : talk.practice ? talk.practice : talk.slides }
					header={talk.title}
					content=
						<span>
							&nbsp; { talk.keynote ? <mark>keynote</mark> : null }
							<br/><small><em>{talk.url ? <a href={talk.url}>{talk.venue}</a> : talk.venue}</em></small>
							<br/>{talk.description} 
							<br/>
							<small>
								{talk.recording ? <a href={talk.recording}>Recording</a> : null } 
								&nbsp;
								{talk.practice ? <a href={talk.practice}>Rehearsal</a> : null } 
								&nbsp;
								{talk.slides ? <a href={talk.slides}>Slides</a> : null } 
							</small>
						</span>
				/>
		})
		
		return (
			<div>
				<div className='lead'>
					These are keynotes and invited talks I have given.
				</div>

				{ blocks }

			</div>
		);
	}
}

export {Talks}