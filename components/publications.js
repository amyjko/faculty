import React from 'react';
import $ from 'jquery';
import _ from 'lodash';

import { Paper }  from './paper';
import { Facets } from './facets';

class Publications extends React.Component {

	constructor() {
			
		super();

	    this.state = {selection: {}};

		this.filter = this.filter.bind(this);

	}

	filter(selection) {
		
		this.setState({selection: selection});
		
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
			pub => this.props.app.getProfile().tagsMatch(this.state.selection, pub.tags)
		).sort((a, b) => 
				// First sort by year
				b.year !== a.year ? b.year - a.year :
				// Put unpublished first
				b.pages === "to appear" ? 1 :
				a.pages === "to appear" ? -1 :
				// If there's no DOI, put last
				a.doi === null ? 1 :
				b.doi === null ? -1 :
				// Sort by DOI, since those are usually chronological
				-a.doi.localeCompare(b.doi)
		);

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
					Choose a source, award type, or project to filter.
				</p>

				<Facets 
					facets={this.props.app.getProfile().getPublicationFacets()} 
					update={this.filter}
				/>

				<div>
					{rows}
				</div>
			</div>
		);
			
	}
}

export { Publications };