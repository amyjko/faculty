import React from 'react';
import { Block } from './block';

class Books extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					These are books I've authored. Unlike print books, they are digital, searchable, interactive, and web accessible. They are also living documents: I update them regularly with new ideas, citations, and chapters, especially in response to feedback.
				</div>

				{
					this.props.app.getProfile().getPublications(pub => pub.kind === "book", pub => -pub.year).map((book, index) =>
						<Block 
							key={"book-" + index}
							image={this.props.app.getWebRoot() + "/images/papers/paper-" + book.id + ".jpg"}
							link={book.doi}
							header={book.title}
							content={". " + book.contribution}
						/>
					)
				}
			</div>
		);
	}
}

export {Books}