import React from 'react';
import { Link } from 'react-router-dom';
import _ from "lodash";

class Paper extends React.Component {
	
	getURL() {
	
		// If there's an ACM URL, return it, because people will be able to access it.
		if(this.props.authorizer)
			return this.props.authorizer;
		// If there's a local URL, show it.
		else if(this.props['local url'])
			return this.props.app.getWebRoot() + "/papers/" + this.props['local url'];
		// Lastly, include the digital library URL, which will not be easily accessible
		else if(this.props["digital library url"])
			return this.props["digital library url"];
		else
			return "";
		
	}
	
	render() {

		var url = this.getURL();
		var pdf = 
			this.props.authorizer ? <small><a href={this.props.authorizer} target="_blank">PDF</a></small> : 
			this.props["local url"] ? <small><a href={this.props.app.getWebRoot() + "/papers/" + this.props["local url"]} target="_blank">PDF</a></small> : 
			null;
		var dl = this.props["digital library url"] ? <small><a href={this.props["digital library url"]} target="_blank">Digital library</a></small> : null;
		
		var authors = this.props.authors.join(", ");

		var award = this.props.award && this.props.award.length > 0 ? <span className="award">&#x2605; {_.join(this.props.award, " + ")}</span> : undefined;
		
		var contribution = this.props.contribution && !this.props.hideContribution ? <i className="text-muted small">{this.props.contribution}</i> : undefined;

		if(this.props.link) {

			return (
				<small>
					<p title={this.props.contribution}>
						<Link to={this.props.app.getWebRoot() + "/publications/" + this.props.id}>{this.props.title}</Link> ({this.props.year})&nbsp;<small>{award}</small>
					</p>
				</small>
			);
			
		} else {

			let title = this.props.hideLink || !url ? 
				<b>{this.props.title}</b> : 
				<b><a href={url} target="_blank">{this.props.title}</a></b>;

			return (
				<div name={ this.props.id } className={"paper ws-bottom " + (this.props.highlight ? "bg-info" : "")}>
					{award}
					{award ? <br/> : null}
					{title} {this.props.hideLink ? null : <small>{pdf} {dl}</small>}
					<br/>{authors} ({this.props.year})
					<br/><small><i>{this.props.source}</i>{this.props.pages == '' ? "." : ", " + this.props.pages + "."}</small>
					<br/>{contribution}
				</div>
			)
			
		}

	}

}

export {Paper};