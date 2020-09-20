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
					alt="A stylized rendering of website mockups"
					link="/ajko/books/design-methods"
					header="Design Methods"
					content=". This book covers interaction design, design methods, and HCI fundamentals. I have my students read it in the first five weeks of class, then launch into a five week design project."					
				/>

				<Block
					image="/ajko/books/cooperative-software-development/images/cover.jpg"
					alt="A stylized rendering of syntax highlighted code"
					link="/ajko/books/cooperative-software-development/"
					header="Cooperative Software Development"
					content=". This book covers software engineering fundamentals, but from a human, social, collaborative, and organizational perspective, rather than from a technical perspective."
				/>

				<Block
					image="/ajko/books/user-interface-software-and-technology/images/cover.jpg"
					alt="An illustration of a stick figure person sitting on a grid of 1's and 0's"
					link="/ajko/books/user-interface-software-and-technology/"
					header="User Interface Software and Technology"
					content=". This book covers the history, theory, and innovations in user interface software and technology."
				/>

				<Block
					image="/ajko/books/informatics-teaching-guide/images/cover.jpg"
					alt="Four stick figure drawings of teachers teaching differently sized groups of students."
					link="/ajko/books/informatics-teaching-guide/"
					header="Higher Education Teaching Guide"
					content=". I wrote this book to support new higher education teachers, including new faculty, guest faculty, doctoral student teachers, and teaching assistants. It uses our undergraduate Informatics program for examples, but is in essence a practical, but also research-informed introduction to teaching in a university."
				/>

				<div className='lead'>
					These are books I've contributed to.
				</div>

				<Block 
					image={this.props.app.getWebRoot() + "/images/books/book-computingedhandbook.jpg"}
					alt="The cover of The Cambridge Handbook of Computing Education Research, a strange arrangement of sharp objects pointing at a window."
					link="https://www.cambridge.org/core/books/cambridge-handbook-of-computing-education-research/F8CFAF7B81A8F6BF5C663412BA0A943D"
					header="The Cambridge Handbook of Computing Education Research"
					content=". This book surveys the entire history of computing education research up to 2018, and also covers research methods necessary for conducting computing education research. I contributed chapters on study design, informal learning, and tools and environments to support learning. If you're new to the field, it's a great way to rapidly learn most of what we know about teaching and learning computing concepts."					
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/books/book-productivity.jpg"}
					alt="The cover of the Rethinking Productivity in Software Engineering book, a picture of space."
					link="https://www.apress.com/gp/book/9781484242209"
					header="Rethinking Productivity in Software Engineering"
					content=". This book takes both a broad and deep look about what productivity on software development means and how we can productively think about it. I authored or co-authored chapters on human-centered methods for developing tools to boost productivity, a conceptual chapter on individual, team, organization, and market perspectives on productivity, and an analysis of why we shouldn't even try to measure productivity."
				/>

				<Block 
					image={this.props.app.getWebRoot() + "/images/books/book-makingsoftware.jpg"}
					alt="The cover of the Making Software book, showing a bridge, staring from the bottom looking up."
					link="https://www.amazon.com/Making-Software-Really-Works-Believe/dp/0596808321"
					header="Making Software: What Really Works, and Why We Believe It"
					content=". This book summarizes a collection of studies about software engineering, presenting them for a practitioner audience interested in the science of software development. I contributed a chapter on qualitative methods and why would should trust them, relative to quantitative methods."
				/>

				
			</div>
		);
	}
}

export {Books}