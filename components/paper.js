import React from 'react';
import { Link } from 'react-router-dom';
import _ from "lodash";

import { Block } from './block';

class Paper extends React.Component {
	
	constructor() {

		super();

		this.state = { apa: false }

	}

	toggle() {

		this.setState({apa: !this.state.apa}, () => {
			if(this.state.apa) {
				let node = document.getElementById("apa-" + this.props.id);
				if(node) {
					if (document.body.createTextRange) {
						const range = document.body.createTextRange();
						range.moveToElementText(node);
						range.select();
					} else if (window.getSelection) {
						const selection = window.getSelection();
						const range = document.createRange();
						range.selectNodeContents(node);
						selection.removeAllRanges();
						selection.addRange(range);
					}
				}
			}
		});

	}

	getLocalURL() {
		return this.props.app.getWebRoot() + "/papers/" + this.props['local']
	}

	getURL() {
	
		// If there's a local, show it first, since digital libraries have my deadname.
		if(this.props.local)
			return this.getLocalURL();
		// If we don't have one, but there's an ACM authorizer URL, return it, because visitors will be able to bypass the paywall.
		else if(this.props.authorizer)
			return this.props.authorizer;
		// Lastly, include the doi, which will not be as easily accessible.
		else if(this.props["doi"])
			return this.props["doi"];
		else
			return "";
		
	}
	
	renderSource(pages=false) {

		return this.props.source.name === undefined ? 
			<span className="alert alert-danger">unknown source</span> : 
			<span><em>{this.props.source.name}</em>{(pages && this.props.pages ? ", " + this.props.pages : null)}</span>;

	}

	renderAuthors(link=false) {

		return _.map(this.props.authors, (author, index) =>
			author === undefined ? 
				<span key={index} className="alert alert-danger">unknown author</span> :
			typeof author === "string" ?
				author + (index < this.props.authors.length - 1 ? ", " : "") :
				<span key={index}>
					{link ? 
						<Link to={author.id === "ajko" ? "/bio" : "/lab/" + author.id}>{author.name}</Link> :
						author.name
					}
					{index < this.props.authors.length - 1 ? ", " : ""}
				</span>
		);

	}

	renderActions() {
		return (
			<div className="border-top">
				<small>
					<span className="clickable" onClick={this.toggle.bind(this)}>{this.state.apa ? <strong>cite</strong> : "cite"}</span>
					{this.props.local ? <span> &sdot; <a href={this.getLocalURL()} target="_blank">pdf</a></span> : null }
					{this.props.doi ? <span> &sdot; <a href={this.props.doi} target="_blank">doi</a></span> : null }
					{this.props.blog ? <span> &sdot; <a href={this.props.blog} target="_blank">blog post</a></span> : null }
				</small>
			</div>
		);
	}

	// Just the text, in APA format.
	renderAPA(award=true) {

		return <div id={"apa-" + this.props.id}>
			{this.renderAuthors()} ({this.props.year}). <strong>{this.props.title}</strong>{this.props.title.charAt(this.props.title.length - 1) === "?" ? "" : "."} {this.renderSource(true)}. {award && this.props.award && this.props.award.length > 0 ? <u>{_.join(this.props.award, " + ")}</u> : ""}
		</div>

	}

	// All the bells and whistles
	renderInteractive() {

		const url = this.getURL();
		
		const source = this.renderSource(false);

		const award = this.props.award && this.props.award.length > 0 ? <span className="award">&#x2605; {_.join(this.props.award, " + ")}</span> : undefined;

		const title = !url ? 
			<strong>{this.props.title}</strong> : 
			<span><strong><a href={url} target="_blank">{this.props.title}</a></strong> <Link to={"/publications/" + this.props.id}><img className="link" src={this.props.app.getWebRoot() + "/images/icons/link.png"} /></Link></span>;

		const paper = (
			this.state.apa ?
				<div>
					{this.renderAPA(false)}
					{this.renderActions()}
				</div> :
				<div name={ this.props.id } className={"paper ws-bottom " + (this.props.highlight ? "bg-info" : "")}>
					{ award }
					{ award ? <br/> : null }
					<small>{this.renderAuthors(true)} ({this.props.year})</small>
					<br/>{title}
					<br/><small><em>{source}</em>{(this.props.pages === '' || this.props.pages === null) ? "." : ", " + this.props.pages + "."}</small>
					{this.props.contribution ? <span><br/><em className="text-muted small">{this.props.contribution}</em></span> : null}
					{this.renderActions()}
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

	render() {
		return this.props.static ? <div className="ws-bottom">{this.renderAPA()}</div> : this.renderInteractive();
	}

}

export {Paper};