import React from 'react';
import _ from "lodash";

import { Paper } from "./paper";
import { Link } from 'react-router-dom';
import { Block } from './block';

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
				content={
					<span>
						<h4>{this.props.name} <small>({this.props.startdate}&ndash;{this.props.stopdate})</small></h4>
						<p>{people}</p>
						<p>{this.props.description}</p>
						<p><a href={link}>{moreDetails}</a></p>
					</span>
				}
			/>
		);
		
	}
}

class Projects extends React.Component {
	render() {
		
		// Get the active projects
		var active = _.map(_.filter(this.props.app.getProjects(), { 'active': true }), (project) => { return <ProjectSummary {...project} key={project.name} app={this.props.app} /> });

		// Get the inactive projects.
		var inactive = _.map(_.filter(this.props.app.getProjects(), { 'active': false }), (project) => { return <ProjectSummary  {...project} key={project.name}  app={this.props.app} /> });
		
		return (
			<div>
				<div className="lead">
					I study equitable ways for humanity to learn the power and perils of computing. 
					Whether it is youth discovering the limits of machine learning, adults grasping a new API, or teachers shaping learners' conceptions of code, I'm fascinated by our individual and collective struggle to make sense of computing and harness it for justice.
				</div>
								
				<p>
					I share my work with three research communities: <em>computing education</em> (see my <Link to={"/cer"}>Computing Education Research FAQ</Link>), <em>human-computer interaction</em>, and <em>software engineering</em>.
					I work with many outstanding <Link to={"/students"}>students</Link> and <Link to={"/communities"}>communities</Link> to <Link to={"/publications"}>publish</Link>, <Link to={"/posts"}>blog</Link>, <Link to={"/talks"}>present</Link>, <Link to={"/teaching"}>teach</Link>, <Link to={"/books"}>synthesize</Link>, and <Link to={"/impact"}>apply</Link> our research. Throughout, I leverage my expertise in <em>debugging</em>, <em>explainability</em>, <em>end-user programming</em>, <em>program understanding</em>, <em>design education</em>, <em>software engineering teamwork</em>, and <em>broadening participation in computing</em>.
				</p>
				
				<p>
					Want to join us? 
					Read about my <Link to="/students">lab</Link>.
				</p>
								
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
