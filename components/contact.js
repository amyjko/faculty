import React from 'react';
import {Block} from './block';

class ContactInfo extends React.Component {
		
	render() {
		return (
			<div>
			
				<div className="lead">
					There are many ways to reach me:
				</div>

				<Block 
					image={this.props.app.getWebRoot() + "/images/contact/office.jpg"}
					alt="A photograph of my office."
					link="https://goo.gl/maps/7c3irRBubGvXYEtZ8"
					header="Office hours"
					content=". I'm not holding Summer 2020 office hours, but you're welcome to email me requesting a meeting."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/contact/uw.jpg"}
					alt="The UW block logo."
					link="mailto:ajko@uw.edu"
					header="Email"
					content=". I primarily use email to communicate with people I don't know and occasionally with collaborators who refuse to use anything else. If you're a student, a potential collaborator, or anyone else, write me an email to connect. I read email once in the morning each weekday. I don't read on weekends unless I'm super engaged on a project."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/contact/slack.jpg"}
					alt="The Slack logo."
					link="https://uwdub.slack.com/"
					header="Slack"
					content=". Slack is my preferred medium for collaboration with my Ph.D. students and other collaborators at UW and beyond. During the work day I treat Slack like instant messaging, and after hours I treat it like email, reading it in the morning. If you're at UW, join DUB Slack and DM me. I'm usually pretty responsive throughout the day."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/contact/twitter.jpg"}
					alt="The Twitter logo."
					link="https://twitter.com/amyjko"
					header="Twitter"
					content=". I mostly broadcast on Twitter, and reply to other people's posts, but I do respond to direct messages from non-trolls. It's a good place to learn what's on my mind and when I have new writing to share."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/contact/github.jpg"}
					alt="The Github logo."
					link="http://github.com/amyjko"
					header="GitHub"
					content=". I host a lot of my content and software projects on GitHub. Feel free to submit issues and pull requests to my various repositories."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/contact/linkedin.jpg"}
					alt="The LinkedIn logo."
					link="https://www.linkedin.com/in/ajko/"
					header="LinkedIn"
					content=". I use LinkedIn as my primary contact manager. I usually only accept connections from people I've met IRL and have a professional relationship with (students, collaborators, professional colleagues). I read my LinkedIn messages as part of my morning email routine."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/contact/facebook.jpg"}
					alt="The Facebook logo."
					link="https://www.facebook.com/amyjko"
					header="Facebook"
					content=". I primarily use Facebook for non-work relationships (though that boundary is blurry). I usually only accept connections from people I've met IRL and have a social relationship with, so if I have a purely professional relationship with you, please don't be offended if I decline your friend request. Add me on LinkedIn instead."
				/>

			</div>
			
		)
		
	}

}

export { ContactInfo };