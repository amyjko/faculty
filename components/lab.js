import React from 'react';
import { Link } from 'react-router-dom';
import { Block } from './block';

class Person extends React.Component {
	render() {
		
		return (
			<div className={(this.props.highlight ? "bg-info" : "")} name={this.props.id}>
				<Block 
					image={this.props.app.getWebRoot() + "/images/headshots/mug-" + this.props.id + ".jpg"}
					alt={"Photograph of " + this.props.name}
					link={this.props.url}
					header={null}
					content={
						<span>
							<a target="_blank" href={this.props.url}>{this.props.name}</a>
							&nbsp;
							<mark>{this.props.level}</mark>
							&nbsp;
							<small>{ this.props.startdate }{ this.props.enddate ? (this.props.startdate !== this.props.enddate ? " - " + this.props.enddate : null) : " - present" }</small>
							<br/>
							{this.props.bio}
							{
								this.props.dissertation ?
									<div className="border-top">
										<small>
											{ this.props.dissertation ? <a href={this.props.app.getWebRoot() + "/dissertations/" + this.props.dissertation}>Dissertation</a> : null }
										</small>
									</div> : null
							}
						</span>
					}
				/>
			</div>
		);
		
	}
}

class Lab extends React.Component {

	componentDidMount() {
		
		let highlight = document.getElementsByName(this.props.match.params.person);
		if(highlight.length > 0)
			this.props.app.scrollToElement(highlight[0]);
		
	}

	render() {
		
		var personToHighlight = this.props.match.params.person;

		const renderPeople = (filter, sort) =>
			this.props.profile.getPeople(filter, sort).map(
				person => 
					<Person {...person} 
						key={person.id} 
						highlight={personToHighlight === person.id} 
						app={this.props.app}
					/>
			);

		return (
			<div>
			
				<div className="lead">
					I direct the <em>Code & Cognition Lab</em>.
				</div>
				
				<p>
					My lab includes students from <a href="http://ischool.uw.edu">The Information School</a>, <a href="http://cs.washington.edu">The Paul G. Allen School of Computer Science & Engineering</a>, the <a href="https://education.uw.edu">College of Education</a>, and occasionally other units on campus.
					I run the lab in a doctoral student-centered manner: students define their own projects within the scope of my interests, and often move me into new research areas. 
				</p>
				
				<ul>
					<li>Read our <a href="https://docs.google.com/document/d/1LMHv0HdxXEgSNqICt3wtq8xWuH73kP7plZ_KeXyP6qM/edit?usp=sharing">onboarding document</a> for more details about the ever evolving culture of the lab.</li>
					<li>Read our <Link to={"/lablets"}>lablets</Link> page for details on how we engage undergraduates in research at scale.</li>
					<li>Subscribe to our lab calendar (add <strong>codeandcognition@uw.edu</strong> if using UW G Suite, download this <a href="https://calendar.google.com/calendar/ical/codeandcognition%40uw.edu/public/basic.ics">ICS file</a> otherwise) to see when lab meetings, lablet meetings, and other activities are scheduled.</li>
				</ul>

				<p>
					I work hard to be a better mentor and advisor every year.
					In fact, in 2021, my students nominated me for the <a href="https://grad.uw.edu/for-faculty-and-staff/list-of-recipients/">Marsha L. Landolt Distinguished Graduate Mentor Award</a>, and I won one of two honorable mentions.
					I guess I'm doing something right?
				</p>

				<div className="row">
					<div className="col-sm-4">
						<p><strong>Current UW Ph.D. student?</strong> Lurk in <i>#codeandcognitionlab</i> on <a target="_blank" href="https://computinged-uw.slack.com">ComputingEd@UW</a> Slack. DM or email me about your interests. I'm always open to chatting, collaborating, serving on committees, and when I have capacity, advising. You're also welcome to visit any of our lab meetings. Check out our lab calendar (linked above) to see when we're meeting .</p>
					</div>
					<div className="col-sm-4">
						<p><strong>Future UW Ph.D. student?</strong> Read my <Link to="/cer">CER FAQ</Link> to ensure we share interests. Talk to my current students about their experiences. Apply to the <a href="http://ischool.uw.edu/phd" target="_blank">iSchool</a> or <a href="http://www.cs.washington.edu/education/grad/prospective.html" target="_blank">CSE</a> in Autumn. Assume I'm admitting students in the coming year; no need to write me to confirm.</p>
					</div>
					<div className="col-sm-4">
						<p>
							<strong>Current UW undergrad or masters student?</strong> Read about <a href="https://ischool.uw.edu/programs/informatics/research">engaging in undergrad research</a>.
							If that sounds interesting, read about my lab's undergraduate/masters research model, <Link to={"/lablets"}>lablets</Link>, and follow the instructions there to join.
							I also recruit for full-time summer research assistants in Winter through the <a href="https://dub.washington.edu/gettinginvolved.html#tab_prospective" target="_blank">DUB REU program</a>.
						</p>
					</div>
				</div>
				
				<h3>Current Postdocs</h3>
				{ 
					renderPeople(
						person => person.active && person.advised && person.id !== "ajko" && person.level === "postdoc"
					)
				}

				<h3>Current Advisees</h3>
				{ 
					renderPeople(
						person => person.active && person.advised && person.id !== "ajko" && person.level !== "faculty" && person.level !== "postdoc", 
						person => {
							return { "undergrad": 5, "masters": 4, "phd": 3, "postdoc": 2, "faculty": 1 }[person.level] * 10000 + person.startdate
						}
					)
				}

				<h3>Affiliated Ph.D. students</h3>
				{ 
					renderPeople(
						person => person.active && !person.advised && person.level !== "faculty", 
						person => -person.startdate
					)
				}

				<h3 id="collaborators">Faculty Collaborators</h3>

				<p><em>This isn't a complete list of collaborators, just those I've gotten around to adding.</em></p>
				{ 
					renderPeople(
						person => person.active && person.level === "faculty", 
						person => -person.startdate
					) 
				}

				<h3>Former Ph.D. students</h3>
				{ 
					renderPeople(
						person => person.enddate !== null && !person.active && person.advised && person.level === "phd", 
						person => -person.enddate
					)
				}

				<h3>Former Affiliated Ph.D. students</h3>
				{
					renderPeople(
						person => !person.active && !person.advised && person.level === "phd",
						person => -person.startdate
					)
				}

				<h3>Former Postdocs</h3>
				{
					renderPeople(
						person => !person.active && person.level === "postdoc",
						person => -person.startdate
					)
				}

				<h3>Former Masters</h3>
				{
					renderPeople(
						person => !person.active && person.level === "masters",
						person => -person.startdate
					)
				}

				<h3>Former Undergrads</h3>
				{
					renderPeople(
						person => !person.active && person.level === "undergrad",
						person => -person.startdate
					)
				}
				
			</div>
		);
	}
}

export { Lab };