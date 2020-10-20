import _ from 'lodash';
import React from 'react';
import {Block} from './block';

class Books extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					These are books I maintain to support my teaching. Unlike print books, they are digital, searchable, interactive, and web accessible. They are also living documents: I update them regularly with new ideas, citations, and chapters, especially in response to feedback.
				</div>

				{
					_.map(_.filter(this.props.app.getProfile().getBooks(), book => book.editor), (book, index) =>
						<Block 
							key={"book-" + index}
							image={this.props.app.getWebRoot() + "/images/books/" + book.image}
							alt={book.alt}
							link={book.link}
							header={book.title}
							content={". " + book.description}
						/>
					)
				}

				<div className='lead'>
					These are edited print books that I've contributed to.
				</div>

				{
					_.map(_.filter(this.props.app.getProfile().getBooks(), book => !book.editor), (book, index) =>
						<Block 
							key={"edited-book-" + index}
							image={this.props.app.getWebRoot() + "/images/books/" + book.image}
							alt={book.alt}
							link={book.link}
							header={book.title}
							content={". " + book.description}
						/>
					)
				}

			</div>
		);
	}
}

export {Books}