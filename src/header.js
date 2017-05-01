import React from 'react';
import { Link, IndexLink } from 'react-router';
import { ContactInfo } from './contact';

class Header extends React.Component {
	render() {
		
		var path = this.props.path || "";
		
		// <li role="presentation" className={path.startsWith("reading") ? "active" : ""}><Link to="reading">Reading</Link></li>
		
		return (
			<div>
				<ContactInfo/>
				<div className="header">
			        <nav>
						<ul className="nav nav-pills">
							<li role="presentation" className={path === "" ? "active" : ""}><IndexLink to="/">Research</IndexLink></li>
							<li role="presentation" className={path.startsWith("publications") ? "active" : ""}><Link to="publications">Papers</Link></li>
							<li role="presentation" className={path.startsWith("impact") ? "active" : ""}><Link to="impact">Impact</Link></li>
							<li role="presentation" className={path.startsWith("students") ? "active" : ""}><Link to="students">Students</Link></li>
							<li role="presentation" className={path.startsWith("advice") ? "active" : ""}><Link to="advice">Advice</Link></li>
							<li role="presentation" className={path.startsWith("teaching") ? "active" : ""}><Link to="teaching">Teaching</Link></li>
							<li role="presentation" className={path.startsWith("books") ? "active" : ""}><Link to="books">Books</Link></li>
							<li role="presentation" className={path.startsWith("bio") ? "active" : ""}><Link to="bio">Bio</Link></li>
							<li role="presentation"><Link to="cv">CV</Link></li>
						</ul>
			        </nav>
			    </div>
			</div>
	    )
	}
}

export { Header };