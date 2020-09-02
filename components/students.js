import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import {Block} from './block';

class Person extends React.Component {
	render() {
		
		return (
			<div className={(this.props.highlight ? "bg-info" : "")} name={this.props.id}>
				<Block 
					image={this.props.app.getWebRoot() + "/images/headshots/mug-" + this.props.id + ".jpg"}
					alt={"Photograph of " + this.props.name}
					link={this.props.url}
					header={null}
					content=<span>
						<a target="_blank" href={this.props.url}>{this.props.name}</a>
						&nbsp;
						<mark>{this.props.level}</mark>
						&nbsp;
						<small>{ this.props.dissertation ? <a href={this.props.app.getWebRoot() + "/dissertations/" + this.props.dissertation}>Dissertation</a> : null } { this.props.enddate ? " (" + this.props.enddate + ")" : null }</small>
						<br/>
						{this.props.bio}
					</span>
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

		var people = _.clone(this.props.app.getPeople());

		// Sort active students by increasing start date, inactive by decreasing start date.
		people.sort((a, b) => {
			if(a.active)
				return a.startdate - b.startdate;
			else
				return b.startdate - a.startdate;
		});

		// Render the active people.
		var activePeople = _.map(_.sortBy(_.filter(people, { 'active': true, 'advised': true }), ['level', 'startdate']), (person) => { return <Person {...person} key={person.id} highlight={personToHighlight === person.id} app={this.props.app}/>; });

		// Render the affiliated people.
		var affiliatedPeople = _.map(_.filter(people, { 'active': true, 'advised': false }), (person) => { return <Person {...person} key={person.id} highlight={personToHighlight === person.id} app={this.props.app}/>; });

		// Render the former Ph.D. students.
		var formerPhD = _.map(_.orderBy(_.filter(_.reject(people, {'enddate': null}), { 'active': false, 'advised': true, 'level': 'phd' }), ['enddate'], ['desc']), (person) => { return <Person {...person} key={person.id} highlight={personToHighlight === person.id} app={this.props.app} />; });

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
					My lab includes students from <a href="http://ischool.uw.edu">The Information School</a>, <a href="http://cs.washington.edu">The Paul G. Allen School of Computer Science & Engineering</a>, the <a href="https://education.uw.edu">College of Education</a>, and occasionally other units on campus.
					I run the lab in a doctoral student-centered manner: students define their own projects within the scope of my interests, and often move me into new research areas. 
					Read our <a href="https://docs.google.com/document/d/1LMHv0HdxXEgSNqICt3wtq8xWuH73kP7plZ_KeXyP6qM/edit?usp=sharing">onboarding document</a> for more details about the ever evolving culture of the lab.
				</p>

				<div className="row">
					<div className="col-sm-4">
						<strong>Current Ph.D. student?</strong>
						<p>Lurk on the <i>#codeandcognitionlab</i> channel on <a target="_blank" href="https://computinged-uw.slack.com">ComputingEd@UW Slack</a>.</p>
						<p>DM or email me about your interests.</p>
					</div>
					<div className="col-sm-4">
						<strong>Prospective Ph.D. student?</strong>
						<p>Read my <Link to="/cer">CER FAQ</Link> to ensure we share interests.</p>
						<p>Talk to my current students about their experiences.</p>
						<p>Apply to the <a href="http://ischool.uw.edu/phd" target="_blank">iSchool</a> or <a href="http://www.cs.washington.edu/education/grad/prospective.html" target="_blank">CSE</a> in Autumn.</p>
					</div>
					<div className="col-sm-4">
						<strong>Current UW undergrad?</strong>
						<p>Read about <a href="https://ischool.uw.edu/programs/informatics/research">engaging in undergrad research </a>.</p>
						<p><a href="https://docs.google.com/forms/d/e/1FAIpQLSdjcrMFAMUEv3SXXggXscg17sIZ6p7YFSpCkFPADkBZ8BZB9g/viewform?usp=sf_link" target="_blank">Apply</a> to my lab. I recruit for part-time researchers and in Winter for summer positions.</p>
					</div>
				</div>
				
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