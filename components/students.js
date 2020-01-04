import React from 'react';
import _ from 'lodash';

import {Block} from './block';

var people = require('../data/people.json');

// Sort active students by increasing start date, inactive by decreasing start date.
people.sort((a, b) => {
	if(a.active)
		return a.startdate - b.startdate;
	else
		return b.startdate - a.startdate;
});

class Person extends React.Component {
	render() {
		
		return (
			<div className={(this.props.highlight ? "bg-info" : "")} name={this.props.id}>
				<Block 
					image={this.props.app.getWebRoot() + "/images/headshots/mug-" + this.props.id + ".jpg"}
					alt={"Photograph of " + this.props.name}
					link={this.props.url}
					header={null}
					content=<span><a target="_blank" href={this.props.url}>{this.props.name}</a> <mark>{this.props.level}</mark> { this.props.thesis ? <small><a href={this.props.thesis}>Dissertation</a></small> : null }<br/>{this.props.bio}</span>
				/>
			</div>
		);
		
	}
}

class Students extends React.Component {

	componentDidMount() {
		
		var personToHighlight = this.props.match.params.student;

		var highlight = $('[name=' + personToHighlight + ']');
		
		// Now scroll to the highlight, if there is one.
		if(highlight.length > 0)
			$('html,body').animate({scrollTop:highlight.offset().top - $(window).height() / 2}, 300);
		
	}

	render() {
		
		var personToHighlight = this.props.match.params.student;

		// Render the active people.
		var activePeople = _.map(_.sortBy(_.filter(people, { 'active': true, 'advised': true }), ['level', 'startdate']), (person) => { return <Person {...person} key={person.id} highlight={personToHighlight === person.id} app={this.props.app}/>; });

		// Render the affiliated people.
		var affiliatedPeople = _.map(_.filter(people, { 'active': true, 'advised': false }), (person) => { return <Person {...person} key={person.id} highlight={personToHighlight === person.id} app={this.props.app}/>; });

		// Render the former Ph.D. students.
		var formerPhD = _.map(_.sortBy(_.filter(people, { 'active': false, 'advised': true, 'level': 'phd' }), ['startdate']), (person) => { return <Person {...person} key={person.id} highlight={personToHighlight === person.id} app={this.props.app} />; });

		// Render the former Ph.D. students.
		var formerAffiliatedPhD = _.map(_.filter(people, { 'active': false, 'advised': false, 'level': 'phd' }), (person) => { return <Person {...person} key={person.id} highlight={personToHighlight === person.id} app={this.props.app} />; });

		// Render the former postdoc students.
		var formerPostdocs = _.map(_.filter(people, { 'active': false, 'level': 'postdoc' }), (person) => { return <Person {...person} key={person.id} highlight={personToHighlight === person.id} app={this.props.app} />; });

		var inactiveUndergrad = _.map(_.filter(people, { 'active': false, 'level': 'undergrad'}), (person) => { return <Person {...person} key={person.id} highlight={personToHighlight === person.id} app={this.props.app} />; });
		
		return (
			<div>
			
				<div className="lead">
					I direct the <strong>Code & Cognition Lab</strong>.
				</div>
				
				<p>
					My lab includes doctoral and undergraduate students from <a href="http://ischool.uw.edu">The Information School</a>, <a href="http://cs.washington.edu">The Paul G. Allen School of Computer Science & Engineering</a>, and occasionally other units on campus.
					I run the lab in a doctoral student-centered manner: students define their own projects within the scope of my interests, and often move me into new research areas. 
					I typically write grants to support students' research, rather than make students work within the grant money I've raised. 
					Students frequently collaborate with each other and with students outside of the lab.
				</p>

				<ul>
					<li>Are you a <strong>current Ph.D. student</strong> at UW interested in working with me? Lurk on the <i>#codeandcognitionlab</i> channel on <a target="_blank" href="https://uwdub.slack.com">DUB's Slack</a>. Write me an email and let's chat about your interests.</li>
					<li>Are you a <strong>prospective Ph.D. student</strong> interested in working with me? Write me an email, share your interests, and ask if I'm taking new students. Reach out to my current students and ask about their experiences. Apply to the <a href="http://ischool.uw.edu/phd" target="_blank">Information School</a> or <a href="http://www.cs.washington.edu/education/grad/prospective.html" target="_blank">CSE</a>, but note that I have much more control over iSchool admissions.</li>
					<li>
						Are you a <strong>UW undergrad</strong> interested in working with me on research? Read <a href="https://ischool.uw.edu/programs/informatics/research">this page</a> about engaging in research as an undergraduate, and if you're still interested, <a href="https://docs.google.com/forms/d/e/1FAIpQLSdjcrMFAMUEv3SXXggXscg17sIZ6p7YFSpCkFPADkBZ8BZB9g/viewform?usp=sf_link" target="_blank">fill out an application</a>. I recruit year round for part-time researchers, and in Winter quarter for full-time summer research assistant positions.
					</li>
				</ul>
				
				<h3>Current Advisees</h3>
				{activePeople}

				<h3>Affiliated Ph.D. students</h3>
				{affiliatedPeople}

				<h3>Former Ph.D. students</h3>
				{formerPhD}

				<h3>Former Affiliated Ph.D. students</h3>
				{formerAffiliatedPhD}

				<h3>Former Postdocs</h3>
				{formerPostdocs}

				<h3>Former Undergrads</h3>
				{inactiveUndergrad}
				
			</div>
		);
	}
}

export { Students };