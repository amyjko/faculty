import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHistory, useBasename} from 'history';

import { Biography } from './bio';
import { Publications } from './publications';
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

		var currentRoute = this.props.routes[this.props.routes.length - 1];

		return (
			<div className="container">
				{currentRoute.path === "cv" ? null : <Header path={currentRoute.path}/>}
				{this.props.children}
			</div>
		)
	}
}

// We make a browser history that prefixes the "ajko" subdirectory to every URL.
const browserHistory = useRouterHistory(createHistory)({ basename: webRoot });

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Projects}/>
			<Route path="bio" component={Biography}/>
			<Route path="publications(/:paper)" component={Publications}/>
			<Route path="reading" component={Reading}/>
			<Route path="advice" component={Advice}/>
			<Route path="teaching" component={Teaching}/>
			<Route path="books" component={Books}/>
			<Route path="students(/:student)" component={Students}/>
			<Route path="cv" component={Vita}/>
			<Route path="cer" component={CER}/>
			<Route path="*" component={Unknown}/>
		</Route>
	</Router>
), document.getElementById('app'));
