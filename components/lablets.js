import React from 'react';
import { Linkable } from './linkable';

class Lablets extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					Are you an undergraduate or masters student at UW that wants to join the Code and Cognition lab? Read on for details about our experimental <em>lablets</em> model.
				</div>

				<p className="alert alert-danger">
					Lablets are new, experimental model for engaging undergraduate and masters students research.
					Because it's an experiment, don't expect perfect processes or preparation.
					Have feedback?
					Email or Slack Amy!
				</p>

				<p>
					Every year, dozens of students reach out to my lab to participate, but we don't have the capacity to meaningfully mentor everyone who wants to join.
					To offer more students the opportunity to participate in research while respecting our limited attention, we're trying a new <strong>lablets</strong> model.
				</p>

				<p>
					Here are the goals of lablets:
				</p>

				<ul>
					<li><em>Help students develop interest in CS education research and teaching.</em> If you join a lablet, we commit to helping you develop your interests.</li>
					<li><em>Offer clear protocols for participation and pathways for deeper engagement.</em> It should always be clear what participation means; no hidden curriculum.</li>
					<li><em>Ensure any barriers we create are beneficial.</em> We'll have to create some barriers to avoid overwhelming Amy and her doctoral students, but any barriers do create should be helpful in some way.</li>
				</ul>

				<Linkable app={this.props.app} id="whatisalablet">What is a lablet?</Linkable>

				<p>
					A lablet is:
				</p>

				<ul>
					<li>A group of undergraduates and masters students who self-organize around a common interest, that...</li>
					<li>Meets weekly (or more frequently) to do research activities related to the focus of the Code &amp; Cognition lab, and that...</li>
					<li>Starts and ends on a quarterly basis, and that...</li>
					<li>Has 8 or fewer people, and is...</li>
					<li>Led by an undergraduate or masters leader elected by majority by the members of the lablet at the beginning of each quarter, and is...</li>
					<li>Supervised by either Amy or one of her postdocs or doctoral students.</li>
				</ul>

				<p>
					Lablets run separately from the main lab meetings, but engage in similar activities, including weekly meetings, reading groups, critiques, brainstorms, activism, tutorials, planning research, and conducting research.
					It's up to the leader and supervisor to ensure meaningful activities, maintaining a weekly agenda.
					We provide <a href="https://docs.google.com/spreadsheets/d/1ziwgmDBdCNY1AbhlQti8hgabwhVhwvRpL8xPjknywnQ/edit#gid=1849819586" target="_blank">meeting templates</a> for all of the above activities to help you understand roles and expectations.
					However, you're always welcome to deviate from them, or suggest improvements to them, by writing Amy a DM in <a href="http://computinged-uw.slack.com" target="_blank">Slack</a>.
				</p>

				<Linkable app={this.props.app} id="whatlablets">What lablets are being offered?</Linkable>
				<p>
					Here are the currently active lablets:
				</p>

				<iframe style={{ width: "100%", height: "20em" }} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRMKVkgWMGoC01z_W9Z9w1XQeMlsi6t6AjaAoTILCWOYqFRctsAzvh3fy78Dv2BvKYXIP3fT_ov8VoO/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>

				<p>
					You can see when the lablets (and main lab meeting) are scheduled by subscribing to our lab calendar (add <strong>codeandcognition@uw.edu</strong> if using UW G Suite, download this <a href="https://calendar.google.com/calendar/ical/codeandcognition%40uw.edu/public/basic.ics">ICS file</a> otherwise).
				</p>

				<Linkable app={this.props.app} id="whylablet">Why would I want to join a lablet?</Linkable>

				<p>
					There are many reasons!
				</p>

				<ul>
					<li><em>To learn about research</em>. By reading, talking about, and doing research, you'll learn the difference between research and practice.</li>
					<li><em>To find students with shared interests</em>. Lablets bringing together students with shared interests.</li>
					<li><em>To join the Code &amp; Cognition lab</em>. If you join a lablet that successfully proposes a research project, you'll be invited to join the main lab meetings and get advising from Amy and other lab members.</li>
					<li><em>To prepare for doctoral studies</em>. Doing research is the best way to prepare to apply to Ph.D. programs.</li>
				</ul>

				<p>Lablet members may:</p>

				<ul>
					<li>Participate in all lablet activities.</li>
					<li>Join the first main lab meeting of each quarter to meet Amy and the rest of her lab.</li>
					<li>Post in <a href="http://computinged-uw.slack.com" target="_blank">ComputingEd@UW Slack</a> #codeandcognitionlab</li>
					<li>Earn 1 credit by registering for <a href="https://ischool.uw.edu/programs/informatics/curriculum/experiential-learning/independent-study" target="_blank">INFO 499 Independent Study</a> with Amy. To sign up, write Amy in Slack. (Earning this credit only requires a short end of quarter reflection).</li>
					<li>Meet graduation requirements, such as research capstones or other requirements related to research.</li>
					<li>In certain cases, earn hourly or salaried pay, if funding is available.</li>
				</ul>

				<p>To encourage focus, you can only be part of <strong>one</strong> lablet at a time.</p>

				<Linkable app={this.props.app} id="howmuchtime">How much time does a lablet require?</Linkable>

				<p>
					Lablets are a minimum of 1 hour per week (a weekly 50 minute meeting).
					However, to make the most of them, you'll want to have at least a few hours a week to contribute to whatever activities a lablet decides to engage in.
					It's okay if you're busier some weeks and more available others, or unavailable sometimes.
					They are not intended to be intense high-commitment activities, just a gentle introduction to computing education research.
				</p>

				<Linkable app={this.props.app} id="howtojoin">How do I join a lablet?</Linkable>

				<p>
					Follow these steps:
				</p>

				<ol>
					<li>Review the <a href="https://docs.google.com/spreadsheets/d/1ziwgmDBdCNY1AbhlQti8hgabwhVhwvRpL8xPjknywnQ/edit#gid=0" target="_blank">active lablets</a>.</li>
					<li>Join the <a href="http://computinged-uw.slack.com">ComputingEd@UW Slack</a> (follow this link and use your UW address to create an account on the Slack).</li>
					<li>Fill out your profile, including a headshot, so people can learn about you.</li>
					<li>Join the <strong>#codeandcognitionlab</strong> channel so you get all updates about the lab. This is where we talk about lab and lablet activity.</li>
					<li>Write Amy a message in Slack and introduce yourself. If she has any concerns, she'll let you know; all UW students are eligible. If she doesn't, she'll give you access to the lablets folder in Google Drive, which will give you edit access to everything.</li>
					<li>Once you have access, add your name to the <a href="https://docs.google.com/spreadsheets/d/1ziwgmDBdCNY1AbhlQti8hgabwhVhwvRpL8xPjknywnQ/edit#gid=772195334" target="_blank">students</a> sheet.</li>
					<li>Join the Slack channel corresponding to the lablet you joined. You'll find the channel in the spreadsheet.</li>
					<li>If you signed up for a lablet in the middle of a quarter, write the lablet leader and supervisor a joint message in Slack and introduce yourself. They'll welcome you to the lablet and tell you what's next for the lablet. If you signed up for the next quarter</li>
				</ol>

				<Linkable app={this.props.app} id="howtocreate">When do lablets run?</Linkable>

				<p>
					We will try to have at least one lablet each Autumn, Winter, and Spring quarters.
					This depends on the availability and interest of lablet supervisors.
					We do not have plans to run lablets over summer; we reserve that for a few full-time undergraduate researchers.
					Lablets are a good way to prepare for summer research opportunities!
				</p>

				<p>
					You can join a lablet at any time.
					These aren't classes, just informal gatherings.
				</p>

				<Linkable app={this.props.app} id="howtocreate">Do lablet topics change?</Linkable>

				<p>
					Always! They shift based on the interests of the supervisor and of the participants.
					In fact, we might even rename them in the middle of the quarter if a topic goes beyond its title.
					This is the nature of research.
				</p>

				<Linkable app={this.props.app} id="howtocreate">How do I create a lablet?</Linkable>

				<p>
					Follow these steps:
				</p>

				<ol>
					<li>First join a lablet. (There's always at least one.)</li>
					<li>First check the <a href="https://docs.google.com/spreadsheets/d/1ziwgmDBdCNY1AbhlQti8hgabwhVhwvRpL8xPjknywnQ/edit#gid=0" target="_blank">active lablets</a> to ensure there isn't a suitable lablet to join already.</li>
					<li>If you see a need for a new lablet, read the responsibilities in the question below to ensure you are willing to commit to the job.</li>
					<li>If you're willing, write Amy with your lablet proposal and she'll try to find a supervisor for it.</li>
					<li>If the lablet is approved by Amy and she finds a supervisor, she will introduce you to your supervisor, who will share an onboarding.</li>
					<li>Ask your supervisor to create a room in the <a href="https://ohyay.co/s/codeandcognition">Code and Cognition Ohyay</a> and give you admin permissions to design it.</li>
					<li>Run your lablet, recruiting other students to join! You're welcome to use #codeandcognition to recruit.</li>
				</ol>

				<p>
					A good lablet should have a clear purpose. 
					Why does it exist?
					Who does it serve?
					Does it have a particular goal, such as starting a research project, networking, or learning?
					Communicate all of these things at the beginning of a lablet, whenever new students join, and whenever the goals change.
				</p>

				<Linkable app={this.props.app} id="labletleaders">What does a lablet leader have to do?</Linkable>

				<p>
					Lablet leaders must:
				</p>

				<ul>
					<li>Host weekly meetings, facilitate lablet activities, and communicate regularly with lablet members.</li>
					<li>Talk regularly with the lablet supervisor to brainstorm activities (DMs in Slack are okay).</li>
					<li>Set a quarterly goal when forming the lablet.</li>
					<li>Post a weekly progress report about lablet activities in #codeandcognition. This helps other lab and lablet members identify opportunities to talk.</li>
				</ul>

				<p>Lablet leaders may:</p>

				<ul>
					<li>Join the main lab meetings.</li>
					<li>Propose research projects to the lab.</li>
				</ul>

				<Linkable app={this.props.app} id="labletsupervisors">What does a lablet supervisor do?</Linkable>

				<p>
					Lablet supervisors must:
				</p>

				<ul>
					<li>Be a postdoc, doctoral student, or UW faculty member engaged in computing education research or practice.</li>
					<li>Facilitate selecting a lablet leader. Avoid co-leaders, as this results in diffuse responsibility, but consider rotating leaders every few weeks if multiple students are interested.</li>
					<li>Check in weekly with the lablet leader.</li>
					<li>Participate in lablet meetings, acting as an on-demand resource, consultant, expert, and perhaps notetaker, allowing the lablet leader to take the leadership role.</li>
					<li>Intervene in groups to offer advice, question assumptions, offer suggestions.</li>
					<li>Offer guidance on research, research design, research methods, and reading research papers.</li>
					<li>Meet with Amy before each quarter to set expectations.</li>
					<ii>Check in weekly on #lablets-supervisors with other supervisor on lablets activities, offering suggestions for improvement.</ii>
				</ul>

				<p>
					About 3 weeks before each quarter, lablet leaders should:
				</p>
				<ul>
					<li>Ensure that there's an Ohyay meeting space for the lablet with a link to the meeting minutes.</li>
					<li>Ensure that there's a channel in Slack for the lablet and that everyone signed up for it is added to the channel.</li>
					<li>Ensure that there's a meeting minutes document for the lablet.</li>
					<li>Post a poll in the Slack to determine a meeting time for the next quarter. (Avoid Mondays since those are often university holidays).</li>
					<li>Announce the meeting time no later than 1 week before the quarter.</li>
					<li>Add the meeting to the Code and Cognition lab calendar so that everyone can discover the meeting time.</li>
				</ul>				

				<Linkable app={this.props.app} id="research">How does our lablet propose a research project?</Linkable>
				<p>
					Any lablet can conduct research without anyone's permission.
					However, if you want the help of a Amy or her postdocs or doctoral students, you'll need to write a project proposal, which must include:
				</p>

				<ul>
					<li><strong>Authors</strong>. A list of people involved in the research, in order of contribution. (The first author in the list is in charge of leading the project and bringing it to completion).</li>
					<li><strong>Phenomena</strong>. A paragraph describing the phenomena of interest.</li>
					<li><strong>Prior work</strong>. A paragraph, with citations, describing what prior research has discovered about the phenomenon.</li>
					<li><strong>Question</strong>. A carefully-worded sentence describing the research question you would like to answer.</li>
					<li><strong>Method</strong>. A paragraph describing the method(s) you would use for answering the research question.</li>
				</ul>

				<p>The proposal should be a Google Doc in the <em>Lablets &gt; Proposals</em> folder, set to allow comments from anyone.</p>

				<p>
					You can submit a proposal at any time to your lablet supervisor via DM in Slack, who will offer you feedback, and may circulate it for feedback to Amy and others.
					Your lablet might have to iterate several times before it's approved; we might even reject it entirely if it's not a well-formed research project.
					If it's accepted, however, you'll earn your Amy and your supervisor's attention to bring your project to completion.
					Everyone who was included on the proposal is welcome to join the main lab meetings to discuss research.
				</p>

				<Linkable app={this.props.app} id="leave">How do I leave a lablet or move to a new one?</Linkable>
				<p>
					If at any point you no longer want to be in your lablet, you may write your leader to let them know.
					At the end of each quarter, Amy will post a lablet refresh request to solicit updates to lablet membership.
					If you don't reply, we'll mark you inactive and consider you withdrawn.
					If everyone leaves the lablet, then the lablet is over.
				</p>

				<Linkable app={this.props.app} id="evaluate">How do you monitor lablet activity?</Linkable>

				<p>
					Supervisors will conduct a quarterly lablet health check, sending a report to Amy each quarter.
					The report will comment on lablet engagement, clarity of focus, and confidence in lablet leadership.
					Amy may use this information to restructure lablets for the following quarter.
				</p>

				<Linkable app={this.props.app} id="codeofconduct">How am I expected to behave in a lablet?</Linkable>

				<p>
					All lablet members are subject to the following code of conduct:
				</p>
					
				<ul>
					<li>Respect people's name, pronouns, identity, health, wellbeing, agency, worth, dignity, and safety.</li>
					<li>Respect for the above should come before before lab activities and priorities; learning and research cannot happen without the psychological safety conferred by the above.</li>
					<li>All lab activities must be conducted with integrity: there shall be no plagiarism of writing, no fabrication of data, no misrepresentation of results, no sharing of ideas without proper attribution and credit.</li>
					<li>
						If anyone in a lablet notices violations of the code above, they can and should report it to either the lablet leader, the lablet supervisor, Amy, or anyone else in the lab they trust.
						No one should struggle through conflicts in isolation; we want to help.
					</li>
				</ul>

				<Linkable app={this.props.app} id="recommendation">Can I get a letter of recommendation for participating?</Linkable>
				<p>
					Letters of recommendation are a common request for scholarships, recognitions, and graduate school, and unfortunately they can be very hard to acquire!
					And there's a reason for this: faculty like Amy are asked to write hundreds a year, and if she said yes to all of them, she'd have no time to do the rest of her job.
					Therefore, Amy has generally reserved letters for students with whom she's had sustained, direct interactions with over a significant period of time.
				</p>

				<p>
					Do lablets count? Here's the policy we're going to try:
				</p>

				<ul>
					<li>If you <em>participated</em> in a lablet, but did not interact with Amy in a sustained way over a significant period of time, she will write a <strong>templated</strong> letter that explains what lablets are, confirms that you participated in one, and include a personalized statement from your lablet supervisor. This won't be a very helpful letter, since it will read as a slightly personalized form letter, but it will at least indicate participation, interest, and help you meet whatever unreasonable and oppressive requirements some employer or school has set about letters.</li>
					<li>If you <em>led</em> a lablet, Amy will meet with you, discuss your experiences and interests, and write a short letter. This will be more valuable than the templated letter above.</li>
					<li>If you <em>collaborated</em> with Amy on research or another project, she will write a detailed, personalized letter, as she's always done for undergraduates who engage in research with her.</li>
				</ul>

				<Linkable app={this.props.app} id="otherparticipation">Are there other ways I can participate in the lab other than lablets?</Linkable>
				
				<p>
					Yes, there are several!
				</p>
				
				<ul>
					<li>
						We recruit undergraduates for full-time paid summer research positions each Winter through the <a href="https://dub.washington.edu/gettinginvolved.html#tab_prospective" target="_blank">DUB REU program</a>. 
						Participating in a lablet is a great way to be competitive for one of those slots.
					</li>
					<li>
						We will occasionally hire undergraduates and masters students for focused work on a project such as development, maintenance, or data analysis.
						We'll post announcements about that to the #codeandcognitionlab channel and elsewhere.
					</li>
					<li>
						Other members of the lab may organize informal research activities or recruit volunteers.
						You can always ask to see if there are opportunities.
					</li>
				</ul>

				<hr/>

				<p>
					If any part of that policy isn't clear, let Amy know and she will clarify it.
				</p>

			</div>
		);
	}
}

export { Lablets }