import React from 'react';
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
		
		let paperToHighlight = this.props.match.params.paper;
		let highlight = document.getElementsByName(paperToHighlight);
		
		// Now scroll to the highlight, if there is one.
		if(highlight.length > 0)
			this.props.app.scrollToElement(highlight[0]);

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
				<div className="lead">
					These are my {this.props.app.getProfile().getPublications().length} academic publications. 
					You can see who's citing them on <a href="https://scholar.google.com/citations?user=otmdDLoAAAAJ&hl=en" target="_blank">Google Scholar</a>, <a href="https://www.semanticscholar.org/author/Amy-J.-Ko/1441987875" target="_blank">Semantic Scholar</a>, or <a href="https://dl.acm.org/profile/81100500360" target="_blank">ACM</a>.
				</div>
				
				<p>
					<small>
						Of these, {this.props.app.getProfile().getPublications(pub => pub.deadname).length} are still under my deadname, and thousands cite me by my deadname.
						Publishers refuse to fix these, so please <strong>cite me as Amy J. Ko</strong>, regardless of how you might find my prior work in reference lists and scholarly search engines.
					</small>
				</p>	
				
				<hr/>
				
				<p>
					Filter by publication type, source, award type, or project.
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