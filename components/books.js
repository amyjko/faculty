import _ from 'lodash';
import React from 'react';
import {Block} from './block';

class Books extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					These are books I wrote to support my teaching and others'.
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
					These are edited books I've contributed to.
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