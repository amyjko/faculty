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
		return <div className='row'>
		
			<div className="col-xs-12 col-sm-3 col-md-3">
				<img className='img-thumbnail' alt='Photograph of Andrew J. Ko' src='/ajko/images/mug-ajko.jpg'/>
				<br/>
				<br/>
			</div>

			<div className="col-xs-6 col-sm-5 col-md-5">
				<span className="lead">Andrew J. Ko, Ph.D.</span>
				<small>
					<br/>Associate Professor
					<br/>Chair, <a href="https://ischool.uw.edu/academics/informatics">Informatics</a>
					<br/><a href="http://ischool.uw.edu" target="_blank">The Information School</a>
					<br/><a href='http://cs.washington.edu' target="_blank">Computer Science & Engr.</a> (adjunct)
					<br/><a href="http://www.washington.edu" target="_blank">University of Washington</a>
					<br/>
					<br/>Chief Scientist + Co-Founder
					<br/><a href="http://www.answerdash.com" target="_blank">AnswerDash</a>
				</small>
			</div>

			<div className="col-xs-4 col-sm-4 col-md-4">

				<small>

					<p>ajko@uw.edu
						<br/><a href="https://www.google.com/maps/place/Mary+Gates+Hall.+University+of+Washington/@47.6549552,-122.3101087,994m/data=!3m2!1e3!4b1!4m2!3m1!1s0x549014f2a95c2899:0xb2525ccd291489c!6m1!1e1" target="_blank">Mary Gates Hall 015E</a>
						<br/>Box 352840
						<br/>Seattle, WA 98195
	
					</p>
					
					<p>Office hours: Tue/Thu 330-430, but verify by email.</p>

				</small>
				
				<a href="https://twitter.com/andyjko" className="twitter-follow-button" data-show-count="false" ref="follow"></a>
				
				<p><a target="_blank" href="https://github.com/andyjko"><img style={{height: "1em"}} src="images/GitHub-Mark-120px-plus.png" /> GitHub</a></p>
		
			</div>		
		</div>
	}
}



export { ContactInfo };