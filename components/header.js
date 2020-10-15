import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	render() {
		
		var path = this.props.path || "";
		
		var hideHeader = path === "/cv";
		
		return (
			<div>
				<div className='row'>
		
					<div className="col-xs-3 col-sm-3 col-md-3">
						<Link to="/"><img className='img-thumbnail' alt="Headshot of Amy J. Ko" src={this.props.app.getWebRoot() + "/images/headshots/mug-ajko.jpg"} /></Link>
					</div>
		
					<div className="col-xs-9 col-sm-9 col-md-9" style={{lineHeight: "1.25em"}}>
						<div className="lead" style={{marginBottom: 0}}>Amy J. Ko, Ph.D. <small className="hidden-xs"><small><em><a href="https://www.mypronouns.org/she-her">she/her/hers</a></em></small></small></div>
						<small>
 							<a href="https://ap.washington.edu/ahr/academic-titles-ranks/professor/" target="_blank">Professor</a><span className="hidden-xs"> &sdot; <a href="https://ischool.uw.edu/academics/informatics">Informatics</a> <a href="https://ischool.uw.edu/about/leadership/committees" target="_blank">Program Chair</a></span>
							<br/><a href="http://ischool.uw.edu" target="_blank">The Information School</a>
							<span className="hidden-xs"><br/><a href="http://cs.uw.edu" target="_blank">Paul G. Allen School of Computer Science &amp; Engineering (courtesy)</a></span>
							<br/><a href="http://www.washington.edu" target="_blank">University of Washington<span className="hidden-xs">, Seattle</span></a>
							<br/><a href="mailto:ajko@uw.edu">email</a> &sdot; <a href="https://twitter.com/amyjko" target="_blank">twitter</a> &sdot; <a href="https://medium.com/@amyjko" target="_blank">blog</a>
						</small>
					</div>
					
				</div>

				{
					hideHeader ?
						<hr/> :
						<div className="header">
					        <nav>
								<ul className="nav nav-pills">
									<li role="presentation" className={path === "/" ? "active" : ""}><Link to="/">Research</Link></li>
									<li role="presentation" className={path.startsWith("/lab") ? "active" : ""}><Link to="/lab">Lab</Link></li>
									<li role="presentation" className={path.startsWith("/communities") ? "active" : ""}><Link to="/communities">Communities</Link></li>
									<li role="presentation" className={path.startsWith("/publications") ? "active" : ""}><Link to="/publications">Publications</Link></li>
									<li role="presentation" className={path.startsWith("/posts") ? "active" : ""}><Link to="/posts">Blog</Link></li>
									<li role="presentation" className={path.startsWith("/talks") ? "active" : ""}><Link to="/talks">Talks</Link></li>
									<li role="presentation" className={path.startsWith("/classes") ? "active" : ""}><Link to="/classes">Classes</Link></li>
									<li role="presentation" className={path.startsWith("/books") ? "active" : ""}><Link to="/books">Books</Link></li>
									<li role="presentation" className={path.startsWith("/impact") ? "active" : ""}><Link to="/impact">Impact</Link></li>
									<li role="presentation" className={path.startsWith("/funding") ? "active" : ""}><Link to="/funding">Funding</Link></li>
									<li role="presentation" className={path.startsWith("/travel") ? "active" : ""}><Link to="/travel">Travel</Link></li>
									<li role="presentation" className={path.startsWith("/bio") ? "active" : ""}><Link to="/bio">Bio</Link></li>
									<li role="presentation" className={path.startsWith("/commitments") ? "active" : ""}><Link to="/commitments">Commitments</Link></li>
									<li role="presentation" className={path.startsWith("/contact") ? "active" : ""}><Link to="/contact">Contact</Link></li>
									<li role="presentation" className={path.startsWith("/advice") ? "active" : ""}><Link to="/advice">Advice</Link></li>
									<li role="presentation" className={path.startsWith("/cer") ? "active" : ""}><Link to="/cer">CER FAQ</Link></li>
									<li role="presentation"><Link to="/cv">CV</Link></li>
								</ul>
					        </nav>
						</div>
				}
			</div>
	    )
	}
}

export { Header };