import React from 'react';
import _ from 'lodash';

import { Block } from './block';

class Topic extends React.Component {
	
	constructor(props) {

		super(props);
		this.filter = this.filter.bind(this);
		
	}
	
	filter() {
		
		this.props.posts.filter(this.props.selected ? null : this.props.topic);
		
	}

	render() {
		return (
			<mark className={"clickable topic" + (this.props.selected ? " selected" : "")} onClick={this.filter}>
				{this.props.topic}
			</mark>
		);
	}
	
}

class Posts extends React.Component {

	constructor(props) {
		
		super(props);
    		
	    this.state = {filter: null};

	}

	filter(topic) {
		
		this.setState({filter: topic});
		
	}

	render() {
	
		return (
			<div>
				<div className="lead">
					I <a href="https://medium.com/@amyjko/">blog</a> on my lab's Medium publication, <a href="https://medium.com/bits-and-behavior">Bits and Behavior</a>.
				</div>
				
				<p>
					Choose a topic below to filter.
				</p>
	
				<p>
				{  
					_.map(
						_.keys(this.props.app.getProfile().getPostTags()).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())),
						(tag, index) => 
							<Topic 
								topic={tag} 
								key={"topic" + index} 
								posts={this} 
								selected={this.state.filter === tag} 
							/>
					)
				}
				</p>
	
				{
					_.map(
						this.props.app.getProfile().getPosts(
							post => this.state.filter === null || post.tags.includes(this.state.filter),
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
													<mark key={index} className={"topic" + (this.state.filter === tag ? " selected" : "")}>
														{tag}
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