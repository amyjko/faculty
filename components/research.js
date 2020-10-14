import React from 'react';
import _ from "lodash";

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
		
		var moreDetails = "See " + (this.props.papers.length) + " papers" + (this.props.links.length > 0 ? ", " + this.props.links.length + " demo" + (this.props.links.length > 1 ? "s" : "") + ", " : "") + " and impact details..."
		
		var link = "/projects/" + this.props.id;

		return (
			<Block 
				image={this.props.app.getWebRoot() + "/images/projects/project-" + this.props.id + ".png"}
				alt={this.props.name}
				link={this.props.app.getWebRoot() + link}
				header={null}
				content={
					<span>
						<h4>{this.props.name} <small>({this.props.startdate}&ndash;{this.props.stopdate})</small></h4>
						<p>
						{
							_.map(this.props.people, person => 
								<Link key={"person-" + person.id} to={person.id === "ajko" ? "/bio" : "/students/" + person.id}>
									<img 
										src={this.props.app.getWebRoot() + this.props.app.getProfile().getPersonImagePath(person.id)} 
										className="student-mug img-circle" 
										style={{width:32}} />
								</Link>
							)
						}
						</p>
						<p>{this.props.description}</p>
						<p><Link to={link}>{moreDetails}</Link></p>
					</span>
				}
			/>
		);
		
	}
}

class Research extends React.Component {
	render() {
		
		return (
			<div>
				<div className="lead">
					I study our individual and collective struggle to understand computing and harness it for justice.
				</div>

				<p>
					I'm particularly interested in helping youth understand the limits of code, data, and machine learning, and empowering educators to teach these limits in inclusive and equitable ways.
					I work with many outstanding <Link to={"/students"}>students</Link> and <Link to={"/communities"}>communities</Link> on this work, <Link to={"/publications"}>publishing</Link>, <Link to={"/posts"}>blogging</Link>, <Link to={"/talks"}>presenting</Link>, <Link to={"/teaching"}>teaching</Link>, <Link to={"/books"}>synthesizing</Link>, and <Link to={"/impact"}>applying</Link> it in the world. 
					We share our work with three research communities: <strong>computing education</strong> (see my <Link to={"/cer"}>Computing Education Research FAQ</Link>), <strong>human-computer interaction</strong>, and <strong>software engineering</strong>.
					Throughout, I leverage my expertise in <em>debugging</em>, <em>explainability</em>, <em>end-user programming</em>, <em>program understanding</em>, <em>design education</em>, <em>human aspects of software engineering</em>, and <em>broadening participation in computing</em>.
				</p>
				
				<p>
					Want to join us? 
					Read about my <Link to="/students">lab</Link>.
				</p>
								
				<h3>Active Projects</h3>
	
				<p>These are areas we've recently published in.</p>
						
				{
					_.map(
						this.props.app.getProfile().getProjects(project => project.active), 
						project => <ProjectSummary {...project} key={project.name} app={this.props.app} />
					)
				}
	
				<br/>
				<h3>Past Projects</h3>
				
				<p>I'm not actively working on the topics below, but I'm happy to answer questions about them. And who knows, new students might join my lab and bring them back to life!</p>

				{
					_.map(
						this.props.app.getProfile().getProjects(project => !project.active), 
						project => <ProjectSummary {...project} key={project.name} app={this.props.app} />
					)
				}
				
			</div>
	    )
	}
}

export { Research };
