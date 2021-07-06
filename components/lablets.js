import _ from 'lodash';
import React from 'react';

class Lablets extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					Are you an undergraduate at UW that wants to join the Code and Cognition lab? Read on for details about our experimental <em>lablets</em> model.
				</div>

				<p className="alert alert-danger">This is not yet final. However, if you read this and have feedback, do send it! We hope to launch it in Autumn 2021.</p>

				<p>
					Every year, I have dozens of students reach out to participate in the lab, but my doctoral students and I only have capacity to meaningfully mentor a few students at a time.
					To offer more students the opportunity to participate in research while respecting our limited attention, we're trying a new <strong>lablets</strong> model.
					This idea has three core principles:
				</p>

				<ul>
					<li><em>Help students develop interest in CS education research and teaching.</em> If you join a lablet, we commit to helping you develop your interests.</li>
					<li><em>Offer clear protocols for participation and pathways for deeper engagement.</em> It should always be clear what participation means; no hidden curriculum.</li>
					<li><em>Ensure any barriers we create are beneficial.</em> We'll have to create some barriers to avoid overwhelming Amy and her doctoral students, but any barriers do create should be helpful in some way.</li>
				</ul>

				In the spirit of those principles, here's how lablets work:

				<h3>What is a lablet?</h3>
				<p>					
					During any given academic quarter, our main lab will run as normal.
					This includes once or twice weekly between Amy, her Ph.D. students, and any other research collaborators.
					This is intentionally a small group, which keeps the core culture of the lab intact.
				</p>
				
				<p>				 
					However, in addition to the lab, there will also be one or more lablets running in parallel to the lab.
				</p>

				<ul>
					<li>
						Lablets should be fewer than 8 people. We encourage the creation of new ones each quarter if a lablet gets too big.
						</li>
					<li>
						Each lablet has an undergraduate <strong>leader</strong>, elected by majority by the members of the lablet at the beginning of each quarter, and approved by Amy.
						Their job is to host weekly meetings, facilitate lablet activities, and communicate regularly with lablet members.
						Lablet leaders are eligible to join the main lab meetings.
					</li>
					<li>
						Each lablet also has a doctoral student <strong>supervisor</strong>, whose responsibility it is to check in weekly with the lablet leader and participate in lablet meetings.
					</li>
				</ul>

				<p>
					Lablet activities can include a variety of things, at the discussion of the leader, supervisor, and group.
					These can include weekly meetings, reading groups, critiques, brainstorms, activism, tutorials, planning research, and conducting research.
					It's up to the leader and supervisor to ensure meaningful activities.
					We'll provide meeting templates for all of the above activities to help you understand roles and expectations.
					However, you're always welcome to deviate from them, or suggest improvements to them.
					All lablet members are welcome to post in #codeandcognitionlab regardless of their status.
					Lablet leaders are required to post a weekly progress report about lablet activities in #codeandcognition to help other lab and lablet members identify opportunities to talk.
				</p>

				<h3>How do I join a lablet?</h3>
				<p>
					You can see active lablets on this spreadsheet, with their focus, membership, and leadership.
					Anyone can join a lablet by filling out this form.
					To fill out the form, you'll have to read a paper from the reading list and indicate what interested you about it.
					You'll also have to make a pledge to Amy with the amount of time you commit for the coming quarter.
					After you submit, Amy will receive a notification, then add your information to the lablets spreadsheet, and notify the lablet leader and supervisor.					
				</p>

				<h3>How do we do research with you from a lablet?</h3>
				<p>
					Any lablet can conduct research without anyone's permission.
					However, if you want the help of a Amy or doctoral student on a project, you'll need to write a project proposal.
					We'll offer a proposal template to help you structure your proposal.
					You can submit a proposal at any time to your lablet supervisor, who will offer you feedback.
					Your lablet might have to iterate several times before it's approved; we might even reject it if it's not a well formed project.
					If it's accepted, however, you'll earn your Amy and your supervisor's full attention to bring your project to completion.
					Everyone who was included on the proposal is welcome to join the main lab meetings to discuss research.
				</p>

				<h3>Can we get credits or pay?</h3>
				<p>
					There are many ways to account for your time. 
					You can request independent study credit with Amy.
					If you're leading a research project, you can request hourly compensation, subject to availability.
					You can request capstone or thesis credit that aligns with your graduation requirements.
				</p>

				<h3>How do I leave a lablet or move to a new one?</h3>
				<p>
					If at any point you no longer want to be in your lablet, you may write your supervisor to let them know.
					At the end of each quarter, Amy will post a lablet refresh request to solicit updates to lablet membership.
					If you don't reply, we'll mark you inactive and consider you withdrawn.
					If everyone leaves the lablet, then the lablet is over.
				</p>

				<h3>How do you monitor lablets?</h3>
				<p>
					Supervisors will conduct a quarterly lablet health check, sending a report to Amy each quarter
					The report will comment on lablet engagement, clarity of focus, and confidence in lablet leadership.
					Amy may use this information to restructure lablets.
				</p>

			</div>
		);
	}
}

export { Lablets }