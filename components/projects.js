import React from 'react';
import _ from "lodash";

import { Paper } from "./paper";
import { Link } from 'react-router-dom';
import { Block } from './block';

var projects = require('../data/projects.json');
var pubs = require('../data/pubs.json');

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
			_.reverse(_.sortBy(_.filter(pubs, (paper) => { return _.indexOf(this.props.papers, paper.id) >= 0; }), (paper) => { return paper.year; })),
			(paper) => { return <Paper {...paper} key={paper.id} link={true} app={this.props.app} />; }
		);
		
		var initialCount = 3;
		
		var firstPapers = papers.slice(0, initialCount);
		var remainingPapers = papers.slice(initialCount);
		
		var buttonStyle = "btn btn-xs btn-default";
		
		// A "see it" button if there's a video.
		var links = this.props.links ? 
			_.map(this.props.links, (link, index) => {
				return <span key={this.props.id + "link" + index}><a className={buttonStyle} href={link.url} target="_blank">{link.title}</a>&nbsp;</span>;
			}) : 
			null;

		// A papers button if we have more than a few
		var showRemainingPapers = remainingPapers.length > 0 ?
			<small><a className="" onClick={this.showDetail}>Show {remainingPapers.length} more...</a></small> : null;

		// Information if there's impact.
		var impact = this.props.impact ? 
			<p><small><b>Impact</b> <span dangerouslySetInnerHTML={{__html: this.props.impact}}></span></small></p> : 
			null;
		
		// Find the people on this project
		var people = [];
		_.each(this.props.people, (person) => {
			var path = person === "ajko" ? "bio" : "students/" + person;
			people.push(<Link key={person} to={path}><img src={"images/mug-" + person + ".jpg"} className="student-mug img-circle" style={{width:32}} /></Link>);
		});

		return (
			<Block 
				image={this.props.app.getWebRoot() + "/images/project-" + this.props.id + ".png"}
				alt={this.props.name}
				link={this.props.url}
				header={null}
				content=<span>
					<h4>{this.props.name} <small>({this.props.startdate}&ndash;{this.props.stopdate})</small></h4>
					<p>{links}</p>
					<p>{people}</p>
					<p>{this.props.description}</p>
					{impact}
					{firstPapers}
					{ 
						this.state.collapsed ? 
						showRemainingPapers : 
						remainingPapers
					}
				</span>

			/>
		);
		
		return (
			<div className="project row">
				<div className="col-md-2">
					<img className='img-responsive img-thumbnail gap-bottom-right' alt={this.props.name} src={"images/project-" + this.props.id + ".png"} style={{width: 140}} />
				</div>
				<div className="col-md-10">
					<h4>{this.props.name} <small>({this.props.startdate}&ndash;{this.props.stopdate})</small></h4>
					<p>{links}</p>
					<p>{people}</p>
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
		var active = _.map(_.filter(projects, { 'active': true }), (project) => { return <Project {...project} key={project.name} app={this.props.app} /> });

		// Get the inactive projects.
		var inactive = _.map(_.filter(projects, { 'active': false }), (project) => { return <Project  {...project} key={project.name}  app={this.props.app} /> });
		
		return (
			<div>
				<div className="lead">
					I study effective, equitable, scalable ways for humanity to learn computing.
				</div>
				
				<p>
					I share my work with three research communities: <em>computing education</em> (see <Link to={"/cer"}>my FAQ</Link>), <em>human-computer interaction</em>, and <em>software engineering</em>.
					I work with many outstanding <Link to={"/students"}>students</Link> to <Link to={"/publications"}>publish</Link> our research, <Link to={"/posts"}>share it online</Link>, and <Link to={"/impact"}>apply it to practice</Link>. We do this work with several local communities:
				</p>
				
				<ul>
					<li><a target="_blank" href="http://computinged.uw.edu/">ComputingEd@UW</a>. Computing education researchers + teachers @ UW.</li>
					<li><a target="_blank" href="http://dub.uw.edu/">DUB</a>. HCI+Design researchers + teachers @ UW.</li>
					<li><a target="_blank" href="http://uwplse.org/">PLSE</a>. Programming languages + software engineering researchers @ UW.</li>
					<li><a href="https://digitalyouth.ischool.uw.edu/" target="_blank">Digital Youth Lab</a>. Youth + tech researchers @ UW.</li>
					<li><a target="_blank" href="http://soundcsed.org">Sound CS Ed</a>. CS teachers + researchers + makers in Puget Sound.</li>
					<li><a target="_blank" href="http://csforallwa.org">CS for All Washington</a>. A K-12 CS advocacy coalition for Washington state.</li>
					<li>And formerly, the <a href="http://eusesconsortium.org/" target="_blank">EUSES consortium</a>. End-user programming researchers.</li>
				</ul>

				<p>Read my <Link to="/students">lab</Link> page to learn how to work with me.</p>
				
				<h3>Active Projects</h3>
	
				<p>These are areas we've recently published in.</p>
						
				{active}
	
				<br/>
				<h3>Past Projects</h3>
				
				<p>I'm not actively working on the topics below, but I'm happy to answer questions about them. And who knows, new students might join my lab and bring them back to life!</p>
	
				{inactive}
				
			</div>
	    )
	}
}

export { Projects };
