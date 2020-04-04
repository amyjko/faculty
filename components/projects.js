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

class ProjectSummary extends React.Component {
	
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
		
		// Find the people on this project
		var people = [];
		_.each(this.props.people, (person) => {
			people.push(
				<Link key={person} to={person === "ajko" ? "bio" : "/students/" + person}>
					<img src={this.props.app.getWebRoot() + "/images/headshots/mug-" + person + ".jpg"} className="student-mug img-circle" style={{width:32}} />
				</Link>
			);
		});

		var moreDetails = "See " + (this.props.papers.length) + " papers" + (this.props.links.length > 0 ? ", " + this.props.links.length + " demo" + (this.props.links.length > 1 ? "s" : "") + ", " : "") + " and impact details..."
		
		var link = this.props.app.getWebRoot() + "/projects/" + this.props.id;

		return (
			<Block 
				image={this.props.app.getWebRoot() + "/images/projects/project-" + this.props.id + ".png"}
				alt={this.props.name}
				link={link}
				header={null}
				content=<span>
					<h4>{this.props.name} <small>({this.props.startdate}&ndash;{this.props.stopdate})</small></h4>
					<p>{people}</p>
					<p>{this.props.description}</p>
					<p><a href={link}>{moreDetails}</a></p>
				</span>

			/>
		);
		
	}
}

class Projects extends React.Component {
	render() {
		
		// Get the active projects
		var active = _.map(_.filter(projects, { 'active': true }), (project) => { return <ProjectSummary {...project} key={project.name} app={this.props.app} /> });

		// Get the inactive projects.
		var inactive = _.map(_.filter(projects, { 'active': false }), (project) => { return <ProjectSummary  {...project} key={project.name}  app={this.props.app} /> });
		
		return (
			<div>
				<div className="lead">
					I study effective, equitable, scalable ways for humanity to learn computing.
				</div>
				
				<p>
					I share my work with three research communities: <em>computing education</em> (see <Link to={"/cer"}>my FAQ</Link>), <em>human-computer interaction</em>, and <em>software engineering</em>.
					I work with many outstanding <Link to={"/students"}>students</Link> to <Link to={"/publications"}>publish</Link> our research, then <Link to={"/posts"}>blog it</Link>, <Link to={"/talks"}>present it</Link>, <Link to={"/teaching"}>teach it</Link>, <Link to={"/books"}>synthesize it</Link>, and <Link to={"/impact"}>apply it to practice</Link>. We do this work with several local communities:
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
				
				<p>
					In addition to my current focus on computing education, I also have expertise in <strong>HCI</strong>, <strong>software engineering</strong>, <strong>debugging</strong>, <strong>end-user programming</strong>, and <strong>explainability</strong>.
				</p>
					
				<p>Want to work with me? Read about my <Link to="/students">lab</Link>.</p>
				
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
