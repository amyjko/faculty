import React from 'react';
import { Link } from 'react-router-dom';
import { ContactInfo } from './contact';

class Header extends React.Component {
	render() {
		
		var path = this.props.path || "";
		
		return (
			<div>

				<div className='row'>
		
					<div className="col-xs-2 col-sm-2 col-md-2">
						<img className='img-thumbnail' alt="Headshot of Andrew J. Ko" src={this.props.app.getWebRoot() + "/images/mug-ajko.jpg"} />
					</div>
		
					<div className="col-xs-5 col-sm-5 col-md-5">
						<span className="lead"><strong>Andrew J. Ko</strong>, Ph.D. <small>aka Andy</small></span>
						<small>
 							<br/>Associate Professor, <Link to="/cv">CV</Link>
							<br/><a href="https://ischool.uw.edu/academics/informatics">Informatics</a> Program Chair
						</small>
					</div>

					<div className="col-xs-5 col-sm-5 col-md-5">
						<small>
							<a href="http://ischool.uw.edu" target="_blank">The Information School</a>
							<br/><a href='http://cs.washington.edu' target="_blank">Computer Science & Engineering</a>
							<br/><a href="http://www.washington.edu" target="_blank">University of Washington, Seattle</a>
						</small>
					</div>
					
				</div>

				<div className="header">
			        <nav>
						<ul className="nav nav-pills">
							<li role="presentation" className={path === "/" ? "active" : ""}><Link to="/">Projects</Link></li>
							<li role="presentation" className={path.startsWith("/students") ? "active" : ""}><Link to="/students">Lab</Link></li>
							<li role="presentation" className={path.startsWith("/publications") ? "active" : ""}><Link to="/publications">Papers</Link></li>
							<li role="presentation" className={path.startsWith("/posts") ? "active" : ""}><Link to="/posts">Blog</Link></li>
							<li role="presentation" className={path.startsWith("/talks") ? "active" : ""}><Link to="/talks">Talks</Link></li>
							<li role="presentation" className={path.startsWith("/teaching") ? "active" : ""}><Link to="/teaching">Classes</Link></li>
							<li role="presentation" className={path.startsWith("/books") ? "active" : ""}><Link to="/books">Books</Link></li>
							<li role="presentation" className={path.startsWith("/impact") ? "active" : ""}><Link to="/impact">Impact</Link></li>
							<li role="presentation" className={path.startsWith("/advice") ? "active" : ""}><Link to="/advice">Tips</Link></li>
							<li role="presentation" className={path.startsWith("/bio") ? "active" : ""}><Link to="/bio">Bio</Link></li>
							<li role="presentation" className={path.startsWith("/contact") ? "active" : ""}><Link to="/contact">Contact</Link></li>
						</ul>
			        </nav>
			    </div>
			</div>
	    )
	}
}

export { Header };