import React from 'react';
import { Link } from 'react-router-dom';
import _ from "lodash";

import { Block } from './block';

class Paper extends React.Component {
	
	getURL() {
	
		// If there's a local URL, show it first, since digital libraries have my deadname.
		if(this.props['local url'])
			return this.props.app.getWebRoot() + "/papers/" + this.props['local url'];
		// If we don't have one, but there's an ACM authorizer URL, return it, because visitors will be able to bypass the paywall.
		else if(this.props.authorizer)
			return this.props.authorizer;
		// Lastly, include the digital library URL, which will not be as easily accessible.
		else if(this.props["digital library url"])
			return this.props["digital library url"];
		else
			return "";
		
	}
	
	render() {

		var url = this.getURL();
		var pdf = 
			this.props["local url"] ? <small><a href={this.props.app.getWebRoot() + "/papers/" + this.props["local url"]} target="_blank">PDF</a></small> : 
			this.props.authorizer ? <small><a href={this.props.authorizer} target="_blank">PDF</a></small> : 
			null;
		var dl = this.props["digital library url"] ? <small><a href={this.props["digital library url"]} target="_blank">Digital library</a></small> : null;
		
		var authors = this.props.authors.join(", ");

		var award = this.props.award && this.props.award.length > 0 ? <span className="award">&#x2605; {_.join(this.props.award, " + ")}</span> : undefined;
		
		var contribution = this.props.contribution && !this.props.hideContribution ? <i className="text-muted small">{this.props.contribution}</i> : undefined;

		if(this.props.link) {

			return (
				<small>
					<p title={this.props.contribution}>
						<Link to={"/publications/" + this.props.id}>{this.props.title}</Link> ({this.props.year})&nbsp;<small>{award}</small>
					</p>
				</small>
			);
			
		} else {

			let title = this.props.hideLink || !url ? 
				<strong>{this.props.title}</strong> : 
				<span><strong><a href={url} target="_blank">{this.props.title}</a></strong> <Link to={"/publications/" + this.props.id}><img className="link" src={this.props.app.getWebRoot() + "/images/icons/link.png"} /></Link></span>;

			var paper = (
				<div name={ this.props.id } className={"paper ws-bottom " + (this.props.highlight ? "bg-info" : "")}>
					{ award }
					{ award ? <br/> : null }
					<small>{authors} ({this.props.year})</small>
					<br/>{title}
					<br/><small><em>{this.props.source}</em>{(this.props.pages === '' || this.props.pages === null) ? "." : ", " + this.props.pages + "."}</small>
					<br/>{contribution}
				</div>
			)
			
			return <Block 
					image={this.props.app.getWebRoot() + "/images/papers/paper-" + this.props.id + ".jpg"}
					alt="A snippet from the paper PDF."
					link={url}
					header={null}
					content={paper}
				/>
			
		}

	}

}

export {Paper};