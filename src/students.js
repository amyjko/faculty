import React from 'react';
import _ from 'lodash';

var people = require('./people.json');

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
			<div className={"row " + (this.props.highlight ? "bg-info" : "")} name={this.props.id}>
				<div className="col-md-3">
					{ this.props.id ? <img className='img-responsive img-thumbnail gap-bottom-right' alt={this.props.name} src={"/ajko/images/mug-" + this.props.id + ".jpg"} style={{width: 140}} /> : null }
				</div>
				<div className="col-md-9">
					<p><strong>{this.props.name}</strong> <mark>{this.props.level}</mark> { this.props.url ? <small><a href={this.props.url} target="_blank">homepage</a></small> : null }</p>
					<p>{this.props.bio}</p>
					{ this.props.thesis ? <p><a href={this.props.thesis}>Dissertation</a></p> : null }
				</div>
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
		var activePeople = _.map(_.filter(people, { 'active': true, 'advised': true }), (person) => { return <Person {...person} key={person.id} highlight={personToHighlight === person.id}/>; });

		// Render the affiliated people.
		var affiliatedPeople = _.map(_.filter(people, { 'active': true, 'advised': false }), (person) => { return <Person {...person} key={person.id} highlight={personToHighlight === person.id}/>; });

		// Render the former Ph.D. students.
		var formerPhD = _.map(_.filter(people, { 'active': false, 'level': 'phd' }), (person) => { return <Person {...person} key={person.id} highlight={personToHighlight === person.id} />; });

		// Render the former postdoc students.
		var formerPostdocs = _.map(_.filter(people, { 'active': false, 'level': 'postdoc' }), (person) => { return <Person {...person} key={person.id} highlight={personToHighlight === person.id} />; });

		var inactiveUndergrad = _.map(_.filter(people, { 'active': false, 'level': 'undergrad'}), (person) => { return <Person {...person} key={person.id} highlight={personToHighlight === person.id} />; });
		
		return (
			<div>
				<div className="lead">Are you interested in doing a Ph.D. with me? Apply to the <a href="http://ischool.uw.edu/phd" target="_blank">iSchool</a> or <a href="http://www.cs.washington.edu/education/grad/prospective.html" target="_blank">CSE</a>. I work with students in both units as part of <a href="http://dub.washington.edu/" target="_blank">dub</a>. Below are all of the students I'm currently working with, and all those who've graduated.</div>

				<h3>Current Advisees</h3>
				{activePeople}

				<h3>Affiliated Ph.D. students</h3>
				{affiliatedPeople}

				<h3>Former Ph.D. students</h3>
				{formerPhD}

				<h3>Former Postdocs</h3>
				{formerPostdocs}

				<h3>Former Undergrads</h3>
				{inactiveUndergrad}
				
			</div>
		);
	}
}

export { Students };