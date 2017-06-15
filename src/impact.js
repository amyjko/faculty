import React from 'react';
import _ from 'lodash';

var projects = require('./projects.json');

projects = projects.slice(0).sort((a, b) => {
	return b.startdate - a.startdate;
});

class Impact extends React.Component {
	render() {
		
		// Get the non-empty impact statements.
		var impacts = _.map(
			// Filter the empty impacts
			_.filter(projects, (project) => { return project.impact }), 
			(project, index) => { 
				return <p key={index}><strong>{project.name}</strong>. <span dangerouslySetInnerHTML={{__html: project.impact}}></span></p>;
			}
		);
		
		return (
			<div>

				<div className="lead">
					Most faculty jobs are defined by research, teaching, and service. I work hard to ensure that I also invest in <em>impact</em>, looking for ways to disseminate both my discoveries and others into practice. Below is a catalog of some of my larger efforts to do this.
				</div>

				<p><strong>Books</strong>. I synthesize my research and others into books that summarize our best knowledge. I have written short books about <a href="books/design-methods">HCI+Design</a> and <a href="books/cooperative-software-development">Cooperative Software Development</a></p> 
				<p><strong>K-12 Computing Education Policy</strong>. I <a href="http://blogs.uw.edu/ajko/2017/04/03/a-glimpse-into-state-level-cs-education-policy-implementation/">participate</a> in the development of <a href="http://www.k12.wa.us/ComputerScience/ImplentationPlanning.aspx">Washington State policy on K-12 computing education</a>.</p>
				<p><strong>Podcasts</strong>. I contribute to podcasts about my expertise; for example, listen to my thoughts on the software industry on the <a target="_blank" href="http://softwareengineeringdaily.com/2016/02/24/academia-to-industry-in-computer-science-with-andy-ko/">on the Software Engineering Daily podcast</a>.</p>
				<p><strong>Keynotes</strong>. I share larger visions about my work as in my SPLASH 2016 keynote on <a href="https://www.youtube.com/watch?v=TjkzAls5fsI">a human view of programming languages</a>.</p>
				
				{impacts}

			</div>
		)
	}
}

export { Impact };