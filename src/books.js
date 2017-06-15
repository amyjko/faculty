import React from 'react';

class Books extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					I've written a few accessible online books to support my teaching. Feel free to use them for your classes. These are living documents, so if you see something that I should fix or add, let me know!
				</div>

				<div className="lead"><a target="_blank" href="/ajko/books/design-methods">Design Methods</a></div>
				<div className="lead"><a target="_blank" href="/ajko/books/cooperative-software-development">Cooperative Software Development</a></div>

			</div>
		);
	}
}

export {Books}