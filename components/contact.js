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
					Write me an email at <strong>ajko&nbsp;@&nbsp;uw&nbsp;.&nbsp;edu</strong>. I try read in the morning each weekday, but I don't read on weekends.
					</li>
					<li>
						My office is <a href="https://www.google.com/maps/place/Mary+Gates+Hall.+University+of+Washington/@47.6549552,-122.3101087,994m/data=!3m2!1e3!4b1!4m2!3m1!1s0x549014f2a95c2899:0xb2525ccd291489c!6m1!1e1" target="_blank">Mary Gates Hall 015E</a>. It's a locked suite, but you can knock and a friendly student will let you in. My office hours are currently <strong>by appointment</strong>.
					</li>					
					<li>
						Write me on <a href="https://uwdub.slack.com/" target="_blank">DUB Slack</a>. I'm usually pretty responsive throughout the day.
					</li>
					<li>
						Direct message me on <a href="https://twitter.com/andyjko" target="_blank">Twitter</a>.
					</li>
					<li>
						Submit issues and PRs to my <a href="http://github.com/andyjko" target="_blank">GitHub</a>.
					</li>
				</ul>
			</div>
			
		)
		
	}

}

export { ContactInfo };