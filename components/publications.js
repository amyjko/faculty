import React from 'react';
import $ from 'jquery';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { Paper }  from './paper';
		
class Topic extends React.Component {
	
	constructor(props) {

		super(props);
		this.filter = this.filter.bind(this);
		
	}
	
	filter() {
		
		this.props.pubs.filter(this.props.selected ? null : this.props.topic);
		
	}

	render() {
		return (
			<mark className={"clickable topic" + (this.props.selected ? " selected" : "")} onClick={this.filter}>
				{this.props.topic}
			</mark>
		);
	}
	
}

class Publications extends React.Component {

	constructor(props) {
		
		super(props);
    		
	    this.state = {filter: null};

	}

	filter(topic) {
		
		this.setState({filter: topic});
		
	}

	componentDidMount() {
		
		var paperToHighlight = this.props.match.params.paper;

		var highlight = $('[name=' + paperToHighlight + ']');
		
		// Now scroll to the highlight, if there is one.
		if(highlight.length > 0)
			$('html,body').animate({scrollTop:highlight.offset().top - $(window).height() / 2}, 300);
		
	}

	render() {

		// Sort the publications by decreasing year, then by decreasing pages
		var pubs = this.props.app.getProfile().getPublications(
			pub => this.state.filter === null || pub.tags.includes(this.state.filter)
		).sort((a, b)=>{ 
			if(b["year"] !== a["year"])
				return b["year"] - a["year"];
			else if(b["pages"] === "to appear")
				return 1;
			else if(a["pages"] === "to appear")
				return -1;
			else
				return a["source"].localeCompare(b["source"]); 
		});

		var paperToHighlight = this.props.match.params.paper;

		// Create a list of publications, inserting year headers.
		var lastYear = null;
		var rows = [];
		for (var i = 0; i < pubs.length; i++) {
			
			var pub = pubs[i];
			
			if(lastYear === null || lastYear !== pub.year)
				rows.push(
					<h3 key={pub.year}>{pub.year}{this.props.app.getProfile().getYearContexts()[pub.year] ? <small> &mdash; <em>{this.props.app.getProfile().getYearContexts()[pub.year]}</em></small> : null}</h3>);
			lastYear = pub.year;
			
			rows.push(<Paper {...pub} key={"paper" + i} highlight={ paperToHighlight === pub.id } app={this.props.app} />);
			
		}
		return (
			<div>
				<div className="lead">These are my {this.props.app.getProfile().getPublications().length} academic publications. See <a href="https://scholar.google.com/citations?user=otmdDLoAAAAJ&hl=en" target="_blank">who's citing them.</a></div>
				
				<p>
					<small>
						Of these, {this.props.app.getProfile().getPublications(pub => pub.deadname).length} are still under my former name because publishers refuse to let me fix it. 
						Instead of perpetuating this unjust disregard for my name, <strong>cite all of my publications as Amy J. Ko</strong>, as I do below. 
						Include a DOI in your citation if you are worried about helping academic search engines.
						Thank you for respecting my gender, name, and pronouns in your work.
					</small>
				</p>	
				
				<hr/>
				
				<p>
					Choose a topic below to filter.
				</p>
				<p>
					{ 
						_.map(
							_.keys(this.props.app.getProfile().getPublicationTags()).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())),
							(tag, index) => 
								<Topic 
									topic={tag} 
									key={"topic" + index} 
									pubs={this} 
									selected={this.state.filter === tag} 
								/>
						) 
					}
				</p>
				<div>
					{rows}
				</div>
			</div>
		);
			
	}
}

export { Publications };