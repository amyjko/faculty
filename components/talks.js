import React from 'react';
import {Block} from './block';

class Talks extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					These are keynotes and invited talks I have given.
				</div>

				<Block
					image={this.props.app.getWebRoot() + "/images/talks/studyingmaking.jpg"}
					alt="A screenshot of the first slide of the presentation, with the title Studying Programming through Making"
					link="https://docs.google.com/presentation/d/1L72wv7Lv7oWqbHbw62mISiSWFKFSSyYl65HNXpSmjCU/edit?usp=sharing"
					header="Studying Programming through Making"
					content=
						<span>
							. I gave this invited presentation on August 3rd, to open the <a href="https://shriram.github.io/pl-hci-school-2020/">2020 PL+HCI "Swimmer" School</a>. The overarching goal was to explain how user studies shape our understanding of what we make; it also served as a retrospective of my dissertation work on the Whyline.
						</span>
				/>

				<Block
					image={this.props.app.getWebRoot() + "/images/talks/msftcsed.jpg"}
					alt="A photograph of students on the campus of Howard University, 1870"
					link="https://docs.google.com/presentation/d/15UxfJnjI8P0N33xGlTqY1A39SQdxBUwQ2jflkVMmF7Q/edit#slide=id.gc6f980f91_0_0"
					header="CS education in higher education"
					content=
						<span>
							. I gave this presentation to Microsoft on June 15th; they were engaging in design envisioning to support CS teaching and wanted some background on it and how the pandemic was affecting it. I used it as an opportunity to talk about the racist and sexist history of higher education, of CS in higher education, the ways that CS pedagogy have failed to include all students, and how the pandemic has amplified these failures. I <a href="https://twitter.com/amyjko/status/1272929048188956672?s=20">shared it on Twitter</a>, which led to considerable sharing, solidatory, and outrage. I intentionally did not include citations for my claims because scientific evidence tends to be weaponized by those do not believe that racism or sexism exists; instead, I included a link pointing to the body of literature supporting the claims.
						</span>
				/>

				<Block
					image={this.props.app.getWebRoot() + "/images/talks/koli2019.jpg"}
					alt="A screenshot of the first slide of the keynote, showing title and Koli national park."
					link="https://www.youtube.com/watch?v=mjX3yLPKjvE"
					header="21st Century Grand Challenges in Computing Education"
					content=
						<span>
							. I gave this keynote at the 2019 <a href="http://kolicalling.fi">Koli Calling</a> conference, a computing education research conference in beautiful Koli National Park. In it, I argue that to address epistemic challenges such as climate change and stabilizing democracies, everyone in the world needs to learn the limits of computing, social responsibility with computing, data literacy, and diversity literacy. Watch the <a href="https://www.youtube.com/watch?v=mjX3yLPKjvE">recorded talk</a>, <a href="https://www.youtube.com/watch?v=m9sqJz1oM-M">a rehearsal</a> I recorded prior to the keynote, view <a href="slides/Koli2019Keynote.pdf">the slides</a>, or <a href="https://medium.com/bits-and-behavior/21st-grand-challenges-for-computing-education-f5e937d57155"> read the blog post</a>.
						</span>
				/>

				<Block
					image={this.props.app.getWebRoot() + "/images/talks/eth2019.jpg"}
					alt="A screenshot of the first slide of the keynote."
					link="https://www.youtube.com/watch?v=-crfoC6NtaE"
					header="Programming: What it is and How to Teach it"
					content=
						<span>
							. I gave this invited talk in 2019 at ETH Zurich's CS department. I shared my lab's latest research on programming, including programming language learning, API learning, programming problem solving, and programming strategies. See <a href="slides/ETHZurich2019Programming.pdf">the slides</a> or the <a href="https://www.video.ethz.ch/speakers/d-infk/2019/spring/251-0100-00L.html">recording of my ETH talk</a>.
						</span>
				/>

				<Block
					image={this.props.app.getWebRoot() + "/images/talks/icse2018.png"}
					alt="A screenshot of the first slide of the keynote."					link="https://www.youtube.com/watch?v=lx7g-T10WxQ"
					header="Big Ideas Behind the Whyline"
					content=
						<span>
							. I gave this talk in 2018 in recognition for my most influential paper award on my dissertation work on the Whyline. I reflected on the ideas, both technical, scientific, and otherwise that have shaped my discoveries. See <a href="slides/ICSE2018MIP.pdf">the slides</a>.
						</span>
				/>

				<Block
					image={this.props.app.getWebRoot() + "/images/talks/msricpc18.png"}
					alt="A screenshot of the first slide of the keynote."					link="https://youtu.be/Oh5NuyTMB4A"
					header="Mining the Mind, Minding the Mine: Grand Challenges in Comprehension and Mining"
					content=
						<span>
							. I gave this invited joint keynote at the 2018 <a href="https://2018.msrconf.org/">International Conference on Mining Software Repositories</a>, and the <a href="https://conf.researchr.org/home/icpc-2018">International Conference on Program Comprehension</a>. I argued that the two areas need each other, that they both need theory, and that they both need to ask more relevant questions. See <a href="slides/MSRICPC2018Keynote.pdf">the slides</a>.
						</span>
				/>

				<Block
					image={this.props.app.getWebRoot() + "/images/talks/stanford18.png"}
					alt="An image of me presenting at Stanford."	
					link="https://www.youtube.com/watch?v=mkzHIhKaUX4&feature=youtu.be"
					header="Learning to Code: Why We Fail, How We Flourish"
					content=
						<span>
							. In 2017 and early 2018 I gave a series of invited talks at <a href="https://medium.com/bits-and-behavior/a-visit-to-northwestern-university-cs-for-all-cs-x-and-interdisciplinary-learning-2d4b56fe709b">Northwestern</a>, the <a href="https://medium.com/bits-and-behavior/a-visit-to-the-university-of-michigans-interactive-and-social-computing-group-526b32a9970a">University of Michigan</a>, and <a href="https://medium.com/bits-and-behavior/a-visit-to-stanford-hci-8a392a8b774c">Stanford</a>, in which I summarized our latest research on the learning to code. See my <a href={this.props.app.getWebRoot() + "/slides/LearningToCode.pdf"}>slides</a> and <a href="https://www.youtube.com/watch?v=mkzHIhKaUX4&feature=youtu.be">recorded talk</a> from Stanford.
						</span>
				/>

				<Block
					image={this.props.app.getWebRoot() + "/images/talks/splash16.png"}
					alt="A screenshot of the first slide of the keynote."
					link="https://www.youtube.com/watch?v=TjkzAls5fsI&t=84s"
					header="A Human View of Programming Languages"
					content=
						<span>
							. I gave this invited keynote at <a href="https://2016.splashcon.org/">SPLASH 2016</a>, in which I built upon Seymour Papert's arguments about computing culture and the need for embracing multiple views of what programming is. See <a href={this.props.app.getWebRoot() + "/slides/SPLASH2016Keynote.pdf"}>my slides</a> and <a href="https://www.youtube.com/watch?v=TjkzAls5fsI&t=84s">a recording of my talk</a>.
						</span>
				/>

			</div>
		);
	}
}

export {Talks}