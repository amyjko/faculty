import React from 'react';
import _ from 'lodash';

import {Block} from './block';

class Talks extends React.Component {
	render() {
		
		var blocks = _.map(this.props.app.getProfile().getTalks(), (talk, index) => {
			
			var links = [];

			if(talk.recording)
				links.push(<a key="talk" href={talk.recording} target="_blank">Recording</a>);
			if(talk.practice) {
				if(links.length > 0)
					links.push(<span key="talk-dot"> &sdot; </span>);
				links.push(<a href={talk.practice} target="_blank">Rehearsal</a>);
			}
			if(talk.slides) {
				if(links.length > 0)
					links.push(<span key="slides-dot"> &sdot; </span>);
				links.push(<a href={talk.slides} target="_blank">Slides</a>);
			}
			if(talk.blog) {
				if(links.length > 0)
					links.push(<span key="talk-dot"> &sdot; </span>);
				links.push(<a href={talk.blog} target="_blank">Blog post</a>);
			}

			return <Block
				key={"talk" + index}
				image={talk.image ? this.props.app.getWebRoot() + "/images/talks/" + talk.image: null}
				alt={talk.alt}
				link={talk.recording ? talk.recording : talk.practice ? talk.practice : talk.slides }
				header={talk.title}
				content={
					<span>
						&nbsp; { talk.keynote ? <span className="award">&#x2605; Keynote</span> : null }
						<br/><small><em>{talk.url ? <a href={talk.url}>{talk.venue}</a> : talk.venue}</em></small>
						<br/><small>{talk.date}</small>
						<br/><small>{talk.description}</small>
						<br/>
						<div className="border-top"><small>{links}</small></div>
					</span>
				}
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