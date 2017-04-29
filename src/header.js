import React from 'react';
import { Link, IndexLink } from 'react-router';
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
							<li role="presentation" className={path === "" ? "active" : ""}><IndexLink to="/">Research</IndexLink></li>
							<li role="presentation" className={path.startsWith("publications") ? "active" : ""}><Link to="publications">Papers</Link></li>
							<li role="presentation" className={path.startsWith("students") ? "active" : ""}><Link to="students">Students</Link></li>
							<li role="presentation" className={path.startsWith("reading") ? "active" : ""}><Link to="reading">Reading</Link></li>
							<li role="presentation" className={path.startsWith("advice") ? "active" : ""}><Link to="advice">Advice</Link></li>
							<li role="presentation" className={path.startsWith("classes") ? "active" : ""}><Link to="classes">Classes</Link></li>
							<li role="presentation" className={path.startsWith("books") ? "active" : ""}><Link to="books">Books</Link></li>
							<li role="presentation" className={path.startsWith("bio") ? "active" : ""}><Link to="bio">Bio</Link></li>
							<li role="presentation" className={path.startsWith("cv") ? "active" : ""}><Link to="cv">CV</Link></li>
							<li role="presentation"><a href="http://blogs.uw.edu/ajko" target='_blank'>Blog</a></li>
						</ul>
			        </nav>
			    </div>
			</div>
	    )
	}
}

export { Header };