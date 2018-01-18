import React from 'react';
import _ from "lodash";
import { Paper } from "./paper";
import { Link } from 'react-router-dom';

var projects = require('./projects.json');
var pubs = require('./pubs.json');

// Sort the projects by decreasing start date.
/*
projects = projects.slice(0).sort((a, b) => {
	return b.startdate - a.startdate;
});
*/

class Project extends React.Component {
	
	constructor() {
		
		super();
		
		this.state = {
			collapsed: true
		};
		
		this.showDetail = this.showDetail.bind(this);
		
	}
	
	showDetail() {
		
		this.setState({collapsed: false});
		
	}
	
	render() {

		// Find the publications that are in this project's list of papers and render a paper.
		var papers = _.map(
			_.filter(pubs, (paper) => { return _.indexOf(this.props.papers, paper.id) >= 0; }),
			(paper) => { return <Paper {...paper} key={paper.id} link={true} />; }
		);
		
		var initialCount = 3;
		
		var firstPapers = papers.slice(0, initialCount);
		var remainingPapers = papers.slice(initialCount);
		
		var buttonStyle = "btn btn-xs btn-default";
		
		// A "try it" button if there's a demo.
		var demo = this.props.demo ? 
			<a className={buttonStyle} href={this.props.demo} target="_blank">Try it</a> : 
			null;

		// A "see it" button if there's a video.
		var videos = this.props.video ? 
			_.map(this.props.video, (video, index) => {
				return <span key={this.props.id + "video" + index}><a className={buttonStyle} href={video.url} target="_blank">{video.title}</a>&nbsp;</span>;
			}) : 
			null;

		// A papers button if we have more than a few
		var showRemainingPapers = remainingPapers.length > 0 ?
			<small><a className="" onClick={this.showDetail}>Show {remainingPapers.length} more...</a></small> : null;
						
		// A "code" button if there's code.
		var code = this.props.code ? 
			<a className={buttonStyle} href={this.props.code} target="_blank">Source code</a> :
			null;

		// Information if there's impact.
		var impact = this.props.impact ? 
			<p><b>Impact</b> <span dangerouslySetInnerHTML={{__html: this.props.impact}}></span></p> : 
			null;
		
		// Find the people on this project
		var people = [];
		_.each(this.props.people, (person) => {
			var path = person === "ajko" ? "bio" : "students/" + person;
			people.push(<Link key={person} to={path}><img src={"images/mug-" + person + ".jpg"} className="student-mug img-circle" style={{width:32}} /></Link>);
		});
		
		return (
			<div className="project row">
				<div className="col-md-3">
					<img className='img-responsive img-thumbnail gap-bottom-right' alt={this.props.name} src={"images/project-" + this.props.id + ".jpg"} style={{width: 140}} />
				</div>
				<div className="col-md-9">
					<h4>{this.props.name} <small>({this.props.startdate}&ndash;{this.props.stopdate})</small> {people}
						<br/>{demo} {videos} {code}
					</h4>
					<p>{this.props.description}</p>
					{impact}
					{firstPapers}
					{ 
						this.state.collapsed ? 
						showRemainingPapers : 
						remainingPapers
					}
				</div>
			</div>
		)
	}
}

class Projects extends React.Component {
	render() {
		
		// Get the active projects
		var active = _.map(_.filter(projects, { 'active': true }), (project) => { return <Project {...project} key={project.name} /> });

		// Get the inactive projects.
		var inactive = _.map(_.filter(projects, { 'active': false }), (project) => { return <Project  {...project} key={project.name} /> });
		
		return (
			<div>
				<div className="lead">I research <strong>effective, equitable, and scalable ways for humanity to learn computing</strong>. To achieve this, I direct the <Link to={"/students"}>Code & Cognition Lab</Link>, working with many wonderful <Link to={"/students"}>students</Link> to <Link to={"/publications"}>publish</Link> and <Link to={"/impact"}>share</Link> research on computing education, human-computer interaction, and software engineering. Want to know more about the vibrant computing education research community? Read <Link to={"/cer"}>my computing education research FAQ</Link>.</div>
				
				<p>I do this work with several communities:</p>

				<ul>
					<li>I lead <a target="_blank" href="http://soundcsed.org">Sound CS Ed</a>, a community of Puget Sound computing education researchers and practioners. We have <a href="https://sites.google.com/uw.edu/soundcsed/meetups">quarterly meetups</a>.</li>
					<li>I'm a co-founder of <a target="_blank" href="http://dub.washington.edu/">DUB</a>, a grassroots alliance of HCI+Design faculty, student, and industry researchers. We have <a href="http://dub.washington.edu/calendar.html">weekly seminars</a>.</li>
					<li>I'm a member of <a target="_blank" href="http://uwplse.org/">PLSE</a>, UW CSE's Programming Languages and Software Engineering group. We have <a href="http://uwplse.org/colloquia/">frequent seminars</a>.</li>
					<li>I'm a member of the <a href="https://digitalyouth.ischool.uw.edu/" target="_blank">Digital Youth Lab</a>, which includes faculty and students studying the role of technology in the lives of young people. We hold quarterly meetups.</li>
					<li>I'm a former member and director of the <a href="http://eusesconsortium.org/" target="_blank">EUSES consortium</a>, a multi-institution collaboration on <a href="http://faculty.washington.edu/ajko/publications/eusessurvey">end-user software engineering</a>.</li>
				</ul>

				<h3>Active Projects</h3>

				<p>These are areas we're actively investigating, but I'm always exploring new topics!</p>
						
				{active}
	
				<br/>
				<h3>Past Projects</h3>
				
				<p>I'm no longer working on these projects, but I'm happy to answer questions about them.</p>

				{inactive}
				
			</div>
	    )
	}
}

export { Projects };
