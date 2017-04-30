import React from 'react';

class Impact extends React.Component {
	render() {
		return (
			<div>

				<div className="lead">
					Most faculty jobs are defined by research, teaching, and service. I work hard to ensure that I also invest in <em>impact</em>, looking for ways to disseminate both my discoveries and others into practice. Below is a catalog of some of my larger efforts to do this.
				</div>

				<ul>
					<li>I <a href="http://blogs.uw.edu/ajko/2017/04/03/a-glimpse-into-state-level-cs-education-policy-implementation/">participate</a> in the development of <a href="http://www.k12.wa.us/ComputerScience/ImplentationPlanning.aspx">Washington State policy on K-12 computing education</a>.</li>
					<li>I synthesize my research and others into books that summarize our best knowledge. I've written short books about <a href="books/design-methods">HCI+Design</a> and <a href="books/cooperative-software-development">Cooperative Software Development</a>.</li>
					<li>I contribute to podcasts about my expertise; for example, listen to my thoughts on the software industry on the <a target="_blank" href="http://softwareengineeringdaily.com/2016/02/24/academia-to-industry-in-computer-science-with-andy-ko/">on the Software Engineering Daily podcast</a>.</li>
					<li>I share larger visions about my work as in my SPLASH 2016 keynote on <a href="https://www.youtube.com/watch?v=TjkzAls5fsI">a human view of programming langauges</a>.</li>
					<li>Our research on software engineering expertise have been used to frame soft skills instruction in the <a href='http://www.afsenyc.org/'>Academy for Software Engineering</a> curriculum in New York and have also reached over 10,000 academics and software engineers through an <a href='https://www.youtube.com/watch?v=OBlmLjeORUQ&feature=youtu.be&list=PLn0nrSd4xjjZa4KDqFBCMOnk52CItWqyU'>ACM Learning Center Webinar</a>.</li>
					<li>My lab's work on help retrieval was the basis for <a href="https://answerdash.com">AnswerDash</a>, a company I co-founded with former Ph.D. student <a href="http://hci.cs.sfu.ca/">Parmit Chilana</a> and my colleague <a href="https://faculty.washington.edu/wobbrock/">Jacob Wobbrock</a>.</li> 
					<li>My former student <a href="http://brrian.org/">Brian Burg</a> has been upstreaming his work on deterministic replay to WebKit, supporting new ways of reproducing and debugging failures.</li>
					<li><a href="http://helpgidget.org" target="_blank">Gidget</a> has been played by tens of thousands of people online, in summer camps, and in high schools. It has directly impacted the design of puzzle-based computing education online, including those offered by <a href="https://code.org" target="_blank">code.org</a>.</li>
					<li>My research on development environments partially inspired the <a href='http://research.microsoft.com/en-us/projects/debuggercanvas/'>Debugger Canvas</a> plugin for Visual Studio.</li>
				</ul>
				
			</div>
		)
	}
}

export { Impact };