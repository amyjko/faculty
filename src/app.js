import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Biography } from './bio';
import { Publications } from './publications';
import { Impact } from './impact';
import { Students } from './students';
import { Header } from './header';
import { Projects } from './projects';
import { Reading } from './reading';
import { Advice } from './advice';
import { Teaching } from './teaching';
import { Books } from './books';
import { Vita } from './cv';
import { CER } from './cer';
import { Unknown } from './unknown';

import 'bootstrap';

var webRoot = "/ajko";

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
					<Route path="/impact" component={Impact}/>
					<Route path="/reading" component={Reading}/>
					<Route path="/advice" component={Advice}/>
					<Route path="/teaching" component={Teaching}/>
					<Route path="/books" component={Books}/>
					<Route path="/students/:student?" component={Students}/>
					<Route path="/cv" component={Vita}/>
					<Route path="/cer" component={CER}/>
					<Route path="*" component={Unknown}/>
				</Switch>
			</div>
		)
	}
}

ReactDOM.render((
	<BrowserRouter basename={webRoot}>
		<Route path="/" component={App} />
	</BrowserRouter>
), document.getElementById('app'));