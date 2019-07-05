import React from 'react';
import { Link } from 'react-router-dom';

class ContactInfo extends React.Component {
	
	componentDidMount() {
		
		var follow = this.refs.follow;
		
		// Inject the Twitter script for the follow widget.
		var script = document.createElement("script");
		script.innerHTML = '!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="http://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");';
		follow.parentNode.appendChild(script);

	}
	
	render() {
		return (
			<div>
			
				<div className="lead">
					There are many ways to reach me.
				</div>

				<ul>
					<li>
					<strong>ajko&nbsp;@&nbsp;uw&nbsp;.&nbsp;edu</strong>. I read email once in the morning each weekday. I don't read on weekends.
					</li>
					<li>
						<a href="https://www.google.com/maps/place/Mary+Gates+Hall.+University+of+Washington/@47.6549552,-122.3101087,994m/data=!3m2!1e3!4b1!4m2!3m1!1s0x549014f2a95c2899:0xb2525ccd291489c!6m1!1e1" target="_blank">Mary Gates Hall 015E</a>. It's a locked suite, but you can knock and a friendly student will let you in. My office hours are currently <strong>by appointment</strong>, but you can always stop by to see if my door is open.
					</li>					
					<li>
						<a href="https://uwdub.slack.com/" target="_blank">DUB Slack</a>. DM me; I'm usually pretty responsive throughout the day.
					</li>
					<li>
						<a href="https://twitter.com/andyjko" target="_blank">Twitter</a>. DM me or reply to one of my tweets.
					</li>
					<li>
						<a href="http://github.com/andyjko" target="_blank">GitHub</a>. Submit issues and PRs to my various repositories.
					</li>
					<li>
						<a href="https://www.linkedin.com/in/ajko/" target="_blank">LinkedIn</a>. I usually only accept connections from people I've met IRL and have a professional relationship with (students, collaborators, professional colleagues).
					</li>
					<li>
						<a href="https://www.facebook.com/andyjko" target="_blank">Facebook</a>. I usually only accept connections from people I've met IRL and have a social relationship with (friends, family, Ph.D. students I advise, though many of my professional colleagues are also friends!).
					</li>
				</ul>
			</div>
			
		)
		
	}

}

export { ContactInfo };