import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch, withRouter } from 'react-router-dom';

import { Biography } from './components/bio';
import { ContactInfo } from './components/contact';
import { Communities } from './components/communities';
import { Funding } from './components/funding';
import { Publications } from './components/publications';
import { Posts } from './components/posts';
import { Impact } from './components/impact';
import { Students } from './components/students';
import { Header } from './components/header';
import { Projects } from './components/projects';
import { Project } from './components/project';
import { Reading } from './components/reading';
import { Advice } from './components/advice';
import { Teaching } from './components/teaching';
import { Talks } from './components/talks';
import { Books } from './components/books';
import { Travel } from './components/travel';
import { Vita } from './components/cv';
import { CER } from './components/cer';
import { Unknown } from './components/unknown';
import { Footer } from './components/footer';

import 'bootstrap';

// Polyfill startsWith
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
  };
}

class App extends React.Component {

	constructor(props) {

		super(props);
		
		this.ref = React.createRef();

		this.handleKeyPress = this.handleKeyPress.bind(this);
		
		this.links = [
			"/",
			"/students",
			"/communities",
			"/publications",
			"/posts",
			"/talks",
			"/teaching",
			"/books",
			"/impact",
			"/funding",
			"/travel",
			"/advice",
			"/bio",
			"/cer",
			"/contact",
			"/cv"
		];
		
		// Start data as undefined, rending a loading state until it changes.
		this.state = {
			data: undefined
		};
		
		fetch(this.getWebRoot() + "/data/data.json")
			.then(response => response.json())
			.then(data => {
				// Yay, we got data! Set the state so the page renders.
				this.setState({ data: data });
			})
			.catch(err => { 
				// Uh oh, something bad happened. Set data to null to render an error.
				this.setState({ data: null });
				console.error(err);
			});
		
	}
	
	getWebRoot() { return this.props.root; }
	
	handleKeyPress(event) {

		var oldIndex = this.links.indexOf(this.props.location.pathname);
		var newIndex = oldIndex;

		if(event.keyCode === 37) { newIndex = oldIndex === 0 ? this.links.length - 1 : oldIndex - 1; }
		if(event.keyCode === 39) { newIndex = oldIndex === this.links.length - 1 ? 0 : oldIndex + 1; }

		if(oldIndex !== newIndex)
			this.props.history.push(this.links[newIndex]);
		
	}
	
	componentDidMount() {
		this.focusApp();
	}
	
	componentDidUpdate() {
	    this.focusApp();
	}
	
	focusApp() {
		if(this.ref.current)
			this.ref.current.focus();
	}

	render() {
		
		var currentRoute = this.props.location.pathname;
		
		// Return the single page app.
		return (
			<div className="container" onKeyDown={this.handleKeyPress} tabIndex="0" ref={this.ref}>
				<Header path={currentRoute} app={this} />
				{
					this.state.data === undefined ? 
						<center><img src="images/icons/loading.gif" /></center> :
					this.state.data === null ?
						<div className='alert alert-danger'>There was a problem loading the site content. Amy will fix it right away!</div> :
						<Switch>
							<Route exact path="/" render={(props) => <Projects {...props} app={this} />} />
							<Route path="/bio" render={(props) => <Biography {...props} app={this} />} />
							<Route path="/publications/:paper?" render={(props) => <Publications {...props} app={this} />} />
							<Route path="/posts" render={(props) => <Posts {...props} app={this} />} />
							<Route path="/impact" render={(props) => <Impact {...props} app={this} />} />
							<Route path="/reading" component={Reading}/>
							<Route path="/advice" render={(props) => <Advice {...props} app={this} />} />
							<Route path="/teaching" render={(props) => <Teaching {...props} app={this} />} />
							<Route path="/talks" render={(props) => <Talks {...props} app={this} />} />
							<Route path="/books" render={(props) => <Books {...props} app={this} />} />
							<Route path="/travel" render={(props) => <Travel {...props} app={this} />} />
							<Route path="/contact" render={(props) => <ContactInfo {...props} app={this} />} />
							<Route path="/communities" render={(props) => <Communities {...props} app={this} />} />
							<Route path="/funding" render={(props) => <Funding {...props} app={this} />} />
							<Route path="/lab" render={(props) => <Students {...props} app={this} />} />
							<Route path="/students/:student?" render={(props) => <Students {...props} app={this} />} />
							<Route path="/projects/:id" render={(props) => <Project {...props} app={this} />} />
							<Route path="/cv" render={(props) => <Vita {...props} app={this} />} />
							<Route path="/cer" component={CER}/>
							<Route path="*" component={Unknown}/>
						</Switch>					
				}
				{currentRoute === "/cv" ? null : <Footer/>}
			</div>
		)
	}
	
	getPeople() { return this.state.data.people; }	
	getTravel() { return this.state.data.travel; }	
	getProjects() { return this.state.data.projects; }
	getImpacts() { return this.state.data.impacts; }
	getPosts() { return this.state.data.posts; }
	getCV() { return this.state.data.cv; }
	getPublications() { return this.state.data.pubs; }
	
}


var AppWithRouter = withRouter(App);
	
var webRoot = "/ajko" + (window.location.pathname.includes("/test") ? "/test" : "");	
	
// Construct the app, passing it the data.
ReactDOM.render((
	<BrowserRouter basename={webRoot}>
		<Route path="/" render={(props) => <AppWithRouter {...props} root={webRoot} /> } />
	</BrowserRouter>
), document.getElementById('app'));
