import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Biography } from './components/bio';
import { Publications } from './components/publications';
import { Posts } from './components/posts';
import { Impact } from './components/impact';
import { Students } from './components/students';
import { Header } from './components/header';
import { Projects } from './components/projects';
import { Reading } from './components/reading';
import { Advice } from './components/advice';
import { Teaching } from './components/teaching';
import { Talks } from './components/talks';
import { Books } from './components/books';
import { Vita } from './components/cv';
import { CER } from './components/cer';
import { Unknown } from './components/unknown';
import { Footer } from './components/footer';

import 'bootstrap';

var webRoot = window.location.pathname;

// Polyfill startsWith
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      position = position || 0;
      return this.substr(position, searchString.length) === searchString;
  };
}

class App extends React.Component {
	render() {
		
		var currentRoute = this.props.location.pathname;
		
		return (
			<div className="container">
				{currentRoute === "/cv" ? null : <Header path={currentRoute}/>}
				<Switch>
					<Route exact path="/" component={Projects}/>
					<Route path="/bio" component={Biography}/>
					<Route path="/publications/:paper?" component={Publications}/>
					<Route path="/posts" component={Posts}/>
					<Route path="/impact" component={Impact}/>
					<Route path="/reading" component={Reading}/>
					<Route path="/advice" component={Advice}/>
					<Route path="/teaching" component={Teaching}/>
					<Route path="/talks" component={Talks}/>
					<Route path="/books" component={Books}/>
					<Route path="/students/:student?" render={(props) => <Students {...props} root={webRoot} />}/>
					<Route path="/cv" component={Vita}/>
					<Route path="/cer" component={CER}/>
					<Route path="*" component={Unknown}/>
				</Switch>
				<Footer/>
			</div>
		)
	}
}

ReactDOM.render((
	<BrowserRouter basename={webRoot}>
		<Route path="/" component={App} />
	</BrowserRouter>
), document.getElementById('app'));