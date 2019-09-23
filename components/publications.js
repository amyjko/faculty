import React from 'react';
import $ from 'jquery';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { Paper }  from './paper';

var pubs = require('../data/pubs.json');
var projects = require('../data/projects.json');

// Sort the publications by decreasing year.
pubs = pubs.slice(0).sort((a, b)=>{ 
	if(b["year"] !== a["year"])
		return b["year"] - a["year"]; 
	else
		return a["source"].localeCompare(b["source"]); 
});

var tags = {};

// Annotate publications with tags, including projects that reference a paper,
// award winning papers, papers published at particular conferences, journal/conference/chapter
_.each(pubs, (pub) => {

	pub.tags = [];
	// If there's one or more award...
	if(pub.award && pub.award.length > 0) pub.tags.push("award-winning");
	
	// If there's an acronymn in the source name
	if(pub.source.indexOf("(SIGCSE)") >= 0) pub.tags.push("SIGCSE");
	if(pub.source.indexOf("(CHI)") >= 0) pub.tags.push("CHI");
	if(pub.source.indexOf("(ICSE)") >= 0) pub.tags.push("ICSE");
	if(pub.source.indexOf("(ICER)") >= 0) pub.tags.push("ICER");
	if(pub.source.indexOf("(UIST)") >= 0) pub.tags.push("UIST");

	// Annotate the paper with all the projects that reference it.
	_.each(projects, (project) => {
		if(project.papers.indexOf(pub.id) >= 0)
			pub.tags.push(project.name);		
	});

	// Tally tags.
	_.each(pub.tags, (tag) => {
		if (!(tag in tags))
			tags[tag] = 1;
		else
			tags[tag]++;
	});
	
});

// Sort the display of tags by decreasing frequency.
var sortedTags = _.keys(tags).sort(function(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});

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
			<span className={"clickable topic" + (this.props.selected ? " selected" : "")} onClick={this.filter}>
				{this.props.topic}
			</span>
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

		var tagFilters = _.map(sortedTags, (tag, index) => {
			return (
				<Topic topic={tag} key={"topic" + index} pubs={this} selected={this.state.filter === tag} />
			);
		});

		var paperToHighlight = this.props.match.params.paper;

		var filteredPubs = _.filter(pubs, (pub) => { 
			return this.state.filter === null || pub.tags.includes(this.state.filter) 
		});

		// Create a list of publications, inserting year headers.
		var lastYear = null;
		var rows = [];
		for (var i = 0; i < filteredPubs.length; i++) {
			
			var pub = filteredPubs[i];
			
			if(lastYear === null || lastYear !== pub.year)
				rows.push(<h3 key={pub.year}>{pub.year}</h3>);
			lastYear = pub.year;
			
			rows.push(<Paper {...pub} key={"paper" + i} highlight={ paperToHighlight === pub.id } app={this.props.app} />);
			
		}
		return (
			<div>
				<div className="lead">These are my academic publications. See <a href="https://scholar.google.com/citations?user=otmdDLoAAAAJ&hl=en" target="_blank">who's citing them.</a></div>
				
				<p>
					<small>My publications prior to 2020 are under my former name Andrew J. Ko. However, I prefer that you <strong>cite all of my publications with my new name</strong>, as I do below. Don’t worry about reviewers getting confused; citation metadata will be otherwise identical, and you can always include a DOI to help bots identify the work. Thank you for respecting my gender identity and name.</small>					
				</p>	
				
				<hr/>
				
				<p>
					Choose a topic below to filter.
				</p>
				<p>
					{ tagFilters }
				</p>
				<div>
					{rows}
				</div>
			</div>
		);
			
	}
}

export { Publications };