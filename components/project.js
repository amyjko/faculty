import React from 'react';
import _ from "lodash";

import { Paper } from "./paper";
import { Link } from 'react-router-dom';
import { Block } from './block';

var projects = require('../data/projects.json');
var pubs = require('../data/pubs.json');

class ProjectDetails extends React.Component {
	
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
			(paper) => { return <Paper {...paper} key={paper.id} app={this.props.app} />; }
		);
	
		var buttonStyle = "btn btn-xs btn-default";
		
		var videos = _.map(_.filter(this.props.links, (link) => { return link.url.indexOf("www.youtube.com") >= 0; }), (link, index) => {
			return <p key={"video-" + index} className="embed-responsive embed-responsive-16by9">
				<iframe width="560" height="315" src={"https://www.youtube.com/embed/" + link.url.substring(link.url.indexOf("=") + 1)} frameBorder="0" allowFullScreen=""></iframe>
			</p>;
		});

		var code = _.map(_.filter(this.props.links, (link) => { return link.url.indexOf("www.github.com") >= 0; }), (link, index) => {
			return <span key={this.props.id + "link" + index}><a className={buttonStyle} href={link.url} target="_blank">{link.title}</a>&nbsp;</span>;
		});

		var demos = _.map(_.filter(this.props.links, (link) => { return link.title.indexOf("Try") >= 0; }), (link, index) => {
			return <span key={this.props.id + "link" + index}><a className={buttonStyle} href={link.url} target="_blank">{link.title}</a>&nbsp;</span>;
		});
		
		// Information if there's impact.
		var impact = this.props.impact ? 
			<p><span dangerouslySetInnerHTML={{__html: this.props.impact}}></span></p> : 
			null;
		
		// Find the people on this project
		var people = [];
		_.each(this.props.people, (person) => {
			var path = (person === "ajko" ? "/bio" : ("/students/" + person));
			people.push(<Link key={person} to={path}><img src={this.props.app.getWebRoot() + "/images/headshots/mug-" + person + ".jpg"} className="student-mug img-circle" style={{width:32}} /></Link>);
		});

		return (
			<div>
				<div className="lead"><em>{this.props.name}</em> <small>({this.props.startdate}&ndash;{this.props.stopdate})</small></div>
				<Block 
					image={this.props.app.getWebRoot() + "/images/projects/project-" + this.props.id + ".png"}
					alt={this.props.name}
					header={null}
					content=<span>
					<p>{this.props.description}</p>
					</span>
				/>
				<h3>Contributors</h3>
				<p>{people}</p>
				{ videos.length > 0 ? <div><h3>Videos</h3><p>{videos}</p></div> : null }
				{ demos.length > 0 ? <div><h3>Demos</h3><p>{demos}</p></div> : null }
				{ code.length > 0 ? <div><h3>Source</h3><p>{code}</p></div> : null }
				<h3>Impact</h3>
				{impact}
				<h3>Publications</h3>
				{papers}
			</div>
		);
		
	}
}

class Project extends React.Component {

	render() {

		var projectIDToHighlight = this.props.match.params.id;

		// Find the project
		var project = _.find(projects, { 'id': projectIDToHighlight });
		
		if(project) {
			return <ProjectDetails {...project} app={this.props.app} />
			
		}
		else {
			return <div className="alert alert-danger">I could not find a matching project.</div>;

		}
		
	}

}

export { Project };
