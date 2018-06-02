import React from 'react';

class Talks extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					I've given a few keynotes and invited talks that share my thoughts at a bigger level than my papers.
				</div>

				<div className="project row">
					<div className="col-md-3">
						<a href="https://www.youtube.com/watch?v=lx7g-T10WxQ"><img className='img-responsive gap-bottom-right' src="/ajko/images/icse2018mip.png" style={{width: 140}} /></a>
					</div>
					<div className="col-md-9">
						<div className='lead'><a href="https://www.youtube.com/watch?v=lx7g-T10WxQ">Big Ideas Behind the Whyline</a> (2018). <small>This was an invited talk for my most influential paper award on my dissertation work on the Whyline. I reflect on the ideas, both technical, scientific, and otherwise that have shaped my discoveries. See <a href="slides/ICSE2018MIP.pdf">the slides</a>.</small></div>
					</div>
				</div>

				<div className="project row">
					<div className="col-md-3">
						<a href="https://youtu.be/Oh5NuyTMB4A"><img className='img-responsive gap-bottom-right' src="/ajko/images/msricpc18.png" style={{width: 140}} /></a>
					</div>
					<div className="col-md-9">
						<div className='lead'><a href="https://youtu.be/Oh5NuyTMB4A">Mining the Mind, Minding the Mine: Grand Challenges in Comprehension and Mining</a> (2018). <small>This was an invited joint keynote at the <a href="https://2018.msrconf.org/">International Conference on Mining Software Repositories</a>, and the <a href="https://conf.researchr.org/home/icpc-2018">International Conference on Program Comprehension</a>. I argue that the two areas need each other, that they both need theory, and that they both need to ask more relevant questions. See <a href="slides/MSRICPC2018Keynote.pdf">the slides</a>.</small></div>
					</div>
				</div>

				<div className="project row">
					<div className="col-md-3">
						<a href="https://www.youtube.com/watch?v=mkzHIhKaUX4&feature=youtu.be"><img className='img-responsive gap-bottom-right' src="/ajko/images/stanford18.png" style={{width: 140}} /></a>
					</div>
					<div className="col-md-9">
						<div className='lead'><a href="https://www.youtube.com/watch?v=mkzHIhKaUX4&feature=youtu.be">Learning to Code: Why We Fail, How We Flourish</a> (2017). <small>In 2017 and early 2018 I gave a series of invited talks at <a href="https://medium.com/bits-and-behavior/a-visit-to-northwestern-university-cs-for-all-cs-x-and-interdisciplinary-learning-2d4b56fe709b">Northwestern</a>, the <a href="https://medium.com/bits-and-behavior/a-visit-to-the-university-of-michigans-interactive-and-social-computing-group-526b32a9970a">University of Michigan</a>, and <a href="https://medium.com/bits-and-behavior/a-visit-to-stanford-hci-8a392a8b774c">Stanford</a>, in which I summarized my lab's latest research on the learning to code. See my <a href="/ajko/slides/LearningToCode.pdf">slides</a> and <a href="https://www.youtube.com/watch?v=mkzHIhKaUX4&feature=youtu.be">recorded talk</a> from Stanford.</small></div>
					</div>
				</div>

				<div className="project row">
					<div className="col-md-3">
						<a href="https://www.youtube.com/watch?v=TjkzAls5fsI&t=84s"><img className='img-responsive gap-bottom-right' src="/ajko/images/splash16.png" style={{width: 140}} /></a>
					</div>
					<div className="col-md-9">
						<div className='lead'><a href="https://www.youtube.com/watch?v=TjkzAls5fsI&t=84s">A Human View of Programming Languages</a> (2016). <small>This was an invited keynote at <a href="https://2016.splashcon.org/">SPLASH 2016</a>, in which I built upon Seymour Papert's arguments about computing culture and the need for embracing multiple views of what programming is. See <a href="/ajko/slides/SPLASH2016Keynote.pdf">my slides</a> and <a href="https://www.youtube.com/watch?v=TjkzAls5fsI&t=84s">a recording of my talk</a>.</small></div>
					</div>
				</div>

			</div>
		);
	}
}

export {Talks}