import React from 'react';

import { Paper } from "./paper";
import { Link } from 'react-router-dom';
import { Block } from './block';

class ProjectDetails extends React.Component {
	
	componentDidMount() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
	
	render() {

		// Find the publications that are in this project's list of papers and render a paper.
		var papers =
			this.props.app.getProfile().getPublications(
				paper => this.props.papers.includes(paper.id),
				paper => -paper.year
			).map(paper => <Paper {...paper} key={paper.id} app={this.props.app} />
		);
	
		var buttonStyle = "btn btn-xs btn-default";
		
		var videos = this.props.links.filter(link => link.url.indexOf("youtube.com") >= 0).map((link, index) => {
			return <p key={"video-" + index} className="embed-responsive embed-responsive-16by9">
				<iframe width="560" height="315" src={"https://www.youtube.com/embed/" + link.url.substring(link.url.indexOf("=") + 1)} frameBorder="0" allowFullScreen=""></iframe>
			</p>;
		});

		var code = this.props.links.filter(link => link.url.indexOf("github.com") >= 0).map((link, index) => {
			return <span key={this.props.id + "link" + index}><a className={buttonStyle} href={link.url} target="_blank">{link.title}</a>&nbsp;</span>;
		});

		var demos = this.props.links.filter(link => link.title.indexOf("Try") >= 0).map((link, index) => {
			return <span key={this.props.id + "link" + index}><a className={buttonStyle} href={link.url} target="_blank">{link.title}</a>&nbsp;</span>;
		});
		
		return (
			<div>
				<div className="lead"><em>{this.props.name}</em> <small>({this.props.startdate}&ndash;{this.props.stopdate})</small></div>
				<Block 
					image={this.props.app.getWebRoot() + "/images/projects/project-" + this.props.id + ".png"}
					alt={this.props.name}
					header={null}
					content={<span><p>{this.props.description}</p></span>}
				/>

				<h3>Contributors</h3>
				<p>{this.props.people.map(person => 
					<Link key={"person-" + person.id} to={person.id === "ajko" ? "/bio" : "/lab/" + person.id}>
						<img 
							src={this.props.app.getWebRoot() + this.props.app.getProfile().getPersonImagePath(person.id)} 
							className="student-mug img-circle" 
							style={{width:32}} />
					</Link>)}
				</p>

				<h3>Funding</h3>
				{ 
					this.props.funding.map(
						(grant, index) => 
							<p key={"grant-" + index}>
								{grant.url ? <a href={grant.url} target="_blank">{grant.title}</a> : grant.title}
								<br/>
								<em><small>{grant.funder}</small></em></p>
					)
				}

				{ videos.length > 0 ? <div><h3>Videos</h3><p>{videos}</p></div> : null }
				{ demos.length > 0 ? <div><h3>Demos</h3><p>{demos}</p></div> : null }
				{ code.length > 0 ? <div><h3>Source</h3><p>{code}</p></div> : null }

				<h3>Impact</h3>

				{
					this.props.app.getProfile().getImpacts(
							impact => impact.projects.includes(this.props.id),
							impact => -impact.startdate
					).map((impact, index) =>
						<p key={index}>
							<span style={{fontVariant: "small-caps"}}>{impact.kind}</span> <small> ({impact.start}{impact.end == null ? "-present" : impact.start !== impact.end ? "-" + impact.end : "" })</small>
							<br/>{impact.description}{impact.url ? <small> <a href={impact.url}>evidence</a></small> : null}
						</p>
					)
				}

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
		var project = this.props.app.getProfile().getProject(projectIDToHighlight);
		
		if(project) {
			return <ProjectDetails {...project} app={this.props.app} />	
		}
		else {
			return <div className="alert alert-danger">I could not find a matching project.</div>;

		}
		
	}

}

export { Project };
