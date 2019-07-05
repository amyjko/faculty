import React from 'react';
import {Block} from './block';

class Books extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					These are online books I maintain to support my teaching.
				</div>

				<Block 
					image="/ajko/books/design-methods/images/cover.jpg" 
					link="/ajko/books/design-methods"
					header="Design Methods"
					content="This book covers interaction design, design methods, and HCI fundamentals. I have my students read it in the first five weeks of class, then launch into a five week design project."					
				/>

				<Block
					image="/ajko/books/cooperative-software-development/images/cover.jpg"
					link="/ajko/books/cooperative-software-development/"
					header="Cooperative Software Development"
					content="This book covers software engineering fundamentals, but from a human, social, collaborative, and organizational perspective, rather than from a technical perspective."
				/>

				<Block
					image="/ajko/books/uist/images/cover.jpg"
					link="/ajko/books/uist/"
					header="User Interface Software and Technology"
					content="This book covers the history, theory, and innovations in user interface software and technology."
				/>

				<Block
					image="/ajko/books/informatics-teaching-guide/images/cover.jpg"
					link="/ajko/books/informatics-teaching-guide/"
					header="Informatics Teaching Guide"
					content="I wrote this book to support teachers new to the iSchool and/or new to teaching, including new faculty, guest faculty, doctoral student teachers, and teaching assistants."
				/>
				
			</div>
		);
	}
}

export {Books}