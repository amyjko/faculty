import React from 'react';

class Books extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					After my first sabbatical in 2014, I started writing short, accessible online books as an alternative to lectures. Feel free to use them for your classes. These are living documents, so if you see something that I should fix or add, let me know!
				</div>

				<div className="project row">
					<div className="col-md-3">
						<img className='img-responsive gap-bottom-right' src="/ajko/books/design-methods/images/cover.jpg" style={{width: 140}} />
					</div>
					<div className="col-md-9">
						<div className='lead'><a target="_blank" href="/ajko/books/design-methods">Design Methods</a>. <small>This book covers interaction design, design methods, and HCI fundamentals. I have my students read it in the first five weeks of class, then launch into a five week design project.</small></div>	
					</div>
				</div>

				<div className="project row">
					<div className="col-md-3">
						<img className='img-responsive gap-bottom-right' src="/ajko/books/cooperative-software-development/images/cover.jpg" style={{width: 140}} />
					</div>
					<div className="col-md-9">
						<div className='lead'><a target="_blank" href="/ajko/books/cooperative-software-development/">Cooperative Software Development</a>. <small>This book covers software engineering fundamentals, but from a human, social, collaborative, and organizational perspective, rather than from a technical perspective. </small></div>	
					</div>
				</div>

				<div className="project row">
					<div className="col-md-3">
						<img className='img-responsive gap-bottom-right' src="/ajko/books/uist/images/cover.jpg" style={{width: 140}} />
					</div>
					<div className="col-md-9">
						<div className='lead'><a target="_blank" href="/ajko/books/uist/">User Interface Software and Technology</a>. <small>This book covers the history, theory, and innovations in user interface software and technology. </small></div>	
					</div>
				</div>
				
			</div>
		);
	}
}

export {Books}