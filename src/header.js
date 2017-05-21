import React from 'react';
import { Link } from 'react-router-dom';
import { ContactInfo } from './contact';

class Header extends React.Component {
	render() {
		
		var path = this.props.path || "";
		
		return (
			<div>
				<ContactInfo/>
				<div className="header">
			        <nav>
						<ul className="nav nav-pills">
							<li role="presentation" className={path === "/" ? "active" : ""}><Link to="/">Research</Link></li>
							<li role="presentation" className={path.startsWith("/publications") ? "active" : ""}><Link to="/publications">Papers</Link></li>
							<li role="presentation" className={path.startsWith("/impact") ? "active" : ""}><Link to="/impact">Impact</Link></li>
							<li role="presentation" className={path.startsWith("/students") ? "active" : ""}><Link to="/students">Students</Link></li>
							<li role="presentation" className={path.startsWith("/advice") ? "active" : ""}><Link to="/advice">Advice</Link></li>
							<li role="presentation" className={path.startsWith("/teaching") ? "active" : ""}><Link to="/teaching">Teaching</Link></li>
							<li role="presentation" className={path.startsWith("/books") ? "active" : ""}><Link to="/books">Books</Link></li>
							<li role="presentation" className={path.startsWith("/bio") ? "active" : ""}><Link to="/bio">Bio</Link></li>
							<li role="presentation"><Link to="/cv">CV</Link></li>
							<li role="presentation"><a href="https://medium.com/bits-and-behavior" target='_blank'>Blog</a></li>
						</ul>
			        </nav>
			    </div>
			</div>
	    )
	}
}

export { Header };