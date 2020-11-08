import React from 'react';
import _ from 'lodash';

import { Block } from './block';
import { Facets } from './facets';

class Posts extends React.Component {

	constructor() {
		
		super();
    		
		this.state = {filter: {}};
		this.filter = this.filter.bind(this);

	}

	filter(topic) {
		
		this.setState({filter: topic});
		
	}

	render() {
	
		return (
			<div>
				<div className="lead">
					I <a href="https://amyjko.medium.com">blog</a> on my lab's Medium publication, <a href="https://medium.com/bits-and-behavior">Bits and Behavior</a>.
				</div>
				
				<p>
					Filter by topic.
				</p>
	
				<Facets
					facets={this.props.app.getProfile().getPostTags()}
					update={this.filter}
				/>

				{
					_.map(
						this.props.app.getProfile().getPosts(
							post => !("topic" in this.state.filter) || post.tags.includes(this.state.filter.topic),
							post => -(post.year * 12 + post.month)
						),
						(post, index) => 
							<Block
								key={"post-" + index}
								image={post.img === null ? null : this.props.app.getWebRoot() + "/images/posts/post-" + post.img + ".jpg"}
								alt={post.alt}
								link={post.url}
								header={post.title}
								content={
									<p>
										<small>{ post.month + "/" + post.year }</small>
										<br/>
										{
											_.map(
												post.tags, 
												(tag, index) => 
													<mark key={index} className={"topic" + (this.state.filter.topic === tag ? " selected" : "")}>
														<small>{tag}</small>
													</mark>
											)
										}
									</p>
								}
							/>
					)				
				}
				
			</div>
		);
			
	}
}

export { Posts };