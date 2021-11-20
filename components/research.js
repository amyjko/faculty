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
								<Link key={"person-" + person.id} to={person.id === "ajko" ? "/bio" : "/lab/" + person.id}>
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
					Whether it's youth debugging an animation, a developer auditing a classifier for bias, or a teacher linking code to oppression, I study our individual and collective struggle to understand computing and harness it for equity and justice.
				</div>

				<p>
					I work with outstanding <Link to={"/lab"}>students</Link> and <Link to={"/communities"}>communities</Link> on this work, <Link to={"/publications"}>publishing</Link>, <Link to={"/essays"}>blogging</Link>, <Link to={"/talks"}>presenting</Link>, <Link to={"/classes"}>teaching</Link>, <Link to={"/books"}>synthesizing</Link>, and <Link to={"/impact"}>applying</Link> it in the world. 
					We publish our work in three research communities: <Link to={"/cer"}>Computing Education</Link>, <a href="https://www.google.com/books/edition/Human_Computer_Interaction_Handbook/dVrRBQAAQBAJ?hl=en&gbpv=0" target="_blank">Human-Computer Interaction</a>, and <a href="https://link.springer.com/article/10.1007/s10664-020-09858-z" target="_blank">Software Engineering</a>.
				</p>

				<p>
					I have expertise in debugging, program understanding, explainability, end-user programming, human aspects of software engineering, broadening participation in computing, assessment, and HCI education. 
					I also have broad methodological expertise, including the design and implementation of user interfaces, programming languages, and developer tools; HCI methods; multivariate null hypothesis significance testing; Bayesian modeling; qualitative methods such as interviews, surveys, content analysis, and fieldwork; data science methods; and argumentation.
				</p>
				
				<p>
					Want to do research with me?
					Read about my <Link to="/lab">lab</Link>.
				</p>
								
				<h3>Active Topics</h3>
	
				<p>These are topics that people in my lab are actively investigating.</p>
						
				{
					_.map(
						this.props.app.getProfile().getProjects(project => project.active), 
						project => <ProjectSummary {...project} key={project.name} app={this.props.app} />
					)
				}
	
				<br/>
				<h3>Inactive Topics</h3>
				
				<p>These are topics that my lab has investigated in the past, but that no one in the lab is actively investigating now. New students might join my lab and bring them back to life!</p>

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
