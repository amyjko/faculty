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
				<p><strong>K-12 Computing Education Policy</strong>. I <a href="http://blogs.uw.edu/ajko/2017/04/03/a-glimpse-into-state-level-cs-education-policy-implementation/">participate</a> in the development of <a href="http://www.k12.wa.us/ComputerScience/ImplentationPlanning.aspx">Washington State policy on K-12 computing education</a>. I also contribute to the <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1625224">WA Next Generation STEM Teacher Preparation Project</a> as a research consultant, helping to inform the teacher training programs and certifications for public schools in the state of Washington.</p>
				<p><strong>Computing Education Research Funding</strong>. I've consulted with Google, NSF, CRA, and Code.org about strategies for strengthening the pipeline of computing education research, researchers, and research funding, including writing a <a href="http://cra.org/ccc/wp-content/uploads/sites/2/2015/01/CSEdResearchWhitePaper2016.pdf">whitepaper about the importance of computing education research</a>.</p>
				<p><strong>Computing Education Peer Review</strong>. I helped revised the reviewing process for ACM Transactions on Computing Education, helped create the research track at the SIGCSE Technical Symposium, and wrote the reviewing form for the SIGCSE research track.</p> 
				<p><strong>Podcasts</strong>. I contribute to podcasts about my expertise:</p>
				<ul>
					<li><em>Software Engineering Daily</em>: <a target="_blank" href="http://softwareengineeringdaily.com/2016/02/24/academia-to-industry-in-computer-science-with-andy-ko/">Applying Software Research to Industry with Andy Ko</a>.</li>
					<li><em>Changing Academic Life</em>: <a target="_blank" href="http://www.changingacademiclife.com/blog/2017/6/18/andy-ko">Andy Ko on being reflectively self-aware, deliberately structured, & amazingly productive</a></li>
				</ul>
				<p><strong>Keynotes</strong>. I share larger visions about my work as in my SPLASH 2016 keynote on <a href="https://www.youtube.com/watch?v=TjkzAls5fsI">a human view of programming languages</a>.</p>
				
				{impacts}

			</div>
		)
	}
}

export { Impact };