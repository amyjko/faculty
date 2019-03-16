import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';


class Posts extends React.Component {

	render() {

		/*
		
		Personal posts that probably don't belong here:
		
		https://medium.com/bits-and-behavior/a-better-fit-cf25ec180115			
		https://medium.com/bits-and-behavior/my-iphone-hates-you-599c39a9258f			
		https://medium.com/bits-and-behavior/trouble-is-twitching-6e7435451ad9
		https://medium.com/bits-and-behavior/in-idle-2d7aca79e10b
		https://medium.com/bits-and-behavior/draught-907693a0443a
		https://medium.com/bits-and-behavior/mr-god-c7694437dc56
		https://medium.com/bits-and-behavior/hit-and-miss-fd5985586851			
		https://medium.com/bits-and-behavior/cracker-5f2b8d66ac6a
		https://medium.com/bits-and-behavior/honk-cea345fb0d35		
		https://medium.com/bits-and-behavior/wake-59db3863e5c9
		https://medium.com/bits-and-behavior/three-hundred-ninety-two-creepy-crawly-bug-legs-2f6a641bf7c1
		https://medium.com/bits-and-behavior/a-still-pond-1d1effdfc9d6
		https://medium.com/bits-and-behavior/departure-7e4e02537064
		https://medium.com/bits-and-behavior/dying-9bb77ec1a6e3
		https://medium.com/bits-and-behavior/race-me-ecb52664f70e
		https://medium.com/bits-and-behavior/why-do-we-perceive-music-676fbfd8132e
		https://medium.com/bits-and-behavior/what-does-it-mean-to-communicate-an-idea-57c4d63dfd1a
		
		*/

		return (
			<div>
				<div className="lead">I <a href='https://medium.com/bits-and-behavior'>blog on Medium</a>. I've organized my posts below, since Medium doesn't do a great job making the entire history of my posts visible.</div>
				
				<p>I write on several topics related to software and academia:</p>
				
				<ul>
					<li><a href="#csed">Computing education</a></li>
					<li><a href="#softengr">Software engineering and design</a></li>
					<li><a href="#society">Software and society</a></li>
					<li><a href="#trips">University and conference trip reports</a></li>
					<li><a href="#teaching">Teaching</a></li>
					<li><a href="#academia">Academia</a></li>
					<li><a href="#funding">Funding</a></li>
					<li><a href="#productivity">Productivity</a></li>
					<li><a href="#politics">Politics</a></li>
				</ul>
								
				<h2 id="csed">Computing education</h2>
				
				<ul>
					<li><a href="https://medium.com/bits-and-behavior/cs-education-policymaking-how-a-state-bill-becomes-a-state-law-839f62a6977c" target="_blank">CS education policy: how a (state) bill becomes a (state) law</a> (January 2019)</li>
					<li><a href="https://medium.com/bits-and-behavior/big-ideas-about-information-c09e4d9c60bd" target="_blank">Big ideas about information</a> (December 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/a-rant-about-journalism-on-learning-to-code-da9a11dd9866" target="_blank">A rant about journalism on learning to code</a> (December 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/the-invisible-work-of-equity-in-higher-education-computing-and-information-science-6d0d36d78cf8" target="_blank">The invisible work of equity in higher education computing and information science</a> (June 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/how-i-learned-to-code-2acb503c9f84" target="_blank">How I learned to code</a> (February 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/why-people-shouldnt-learn-to-code-1aaa43c31c9d" target="_blank">Why people shouldn't learn to code</a> (January 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/on-toys-that-teach-coding-5a6de92e6ad3" target="_blank">On toys that teach coding
</a> (December 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/we-need-to-learn-how-to-teach-machine-learning-acc78bac3ff8" target="_blank">We need to learn how to teach machine learning</a> (August 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/a-parenting-guide-to-cs-learning-f87867ce1470" target="_blank">A parenting guide to CS learning</a> (March 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/whats-wrong-with-blocks-languages-according-to-ben-shapiro-7a74dd77b43b" target="_blank">What's wrong with blocks langauges according to Ben Shapiro</a> (September 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/how-upward-bound-guides-bootstrapping-teens-into-higher-education-a87cb34367ac" target="_blank"></a> (August 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/the-role-of-informal-computing-mentors-in-teens-interest-in-computing-9ae642f42ba8" target="_blank">Informal mentors and teen interest in learning computing</a> (August 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/mindstorms-what-did-papert-argue-and-what-does-it-mean-for-learning-and-education-c8324b58aca4" target="_blank">Mindstorms: what did Papert argue and what does it mean for learning and education?</a> (July 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/coding-tutorials-the-good-the-bad-and-the-ugly-b45afc8821f6" target="_blank">Coding tutorials: the good, the bad, and the ugly</a> (June 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/programming-problem-solving-is-still-more-of-an-art-than-a-science-5e002aaa9dd9" target="_blank">Support programming problem solving with contextual help</a> (May 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/why-learn-to-code-113810a89491" target="_blank">Why learn to code?</a> (June 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/a-glimpse-into-state-level-cs-education-policy-implementation-4e4b23501746" target="_blank">A glimpse into state-level CS education policy implementation</a> (April 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/assessment-is-a-computing-education-grand-challenge-6a49900601e3" target="_blank">Assessment is a computing education grand challenge</a> (December 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/the-invisibility-of-prior-knowledge-e9ea1811b5e0" target="_blank">The invisibility of prior knowledge</a> (July 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/my-sabbatical-stretch-goal-teaching-high-school-cs-b98fc08524dd" target="_blank">My sabbatical stretch goal: teaching high school CS</a> (September 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/my-sabbatical-research-pivot-436a3e586e5c" target="_blank">My sabbatical research pivot</a> (May 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/if-learning-to-code-were-like-learning-to-write-f9022fa0eb7d" target="_blank">If learning to code were like learning to write...</a> (March 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/the-invisibility-of-failure-in-computing-education-61b88631bc86" target="_blank">The invisibility of failure in computing education</a> (February 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/privilege-and-cs1-70f9298272c4" target="_blank">Privilege and CS1</a> (December 2015)</li>
					<li><a href="https://medium.com/bits-and-behavior/gidget-a-21st-century-approach-to-programming-literacy-85d74dd5a368" target="_blank">Gidget, a 21st century approach to programming literacy</a> (September 2014)</li>
					<li><a href="https://medium.com/bits-and-behavior/computer-science-information-science-and-the-ti-82-2b810e68d333" target="_blank">Computer science, information science, and the TI-82</a> (June 2014)</li>
					<li><a href="https://medium.com/bits-and-behavior/the-economics-of-computing-for-all-bdd9e17e313a" target="_blank">The economics of computing for all</a> (April 2013)</li>
				</ul>
				
				<h2 id="softengr">On software engineering and design</h2>
				
				<ul>
					<li><a href="https://medium.com/bits-and-behavior/the-problem-with-learnability-in-human-computer-interaction-91e598aed795" target="_blank">‪The problem with learnability in human-computer interaction</a> (February 2019)</li>
					<li><a href="https://medium.com/bits-and-behavior/ten-years-after-the-whyline-a965d3233909" target="_blank">Ten years after the Whyline</a> (June 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/grand-challenges-in-program-comprehension-and-software-repository-mining-my-keynote-on-7bf2cfc182a5" target="_blank">Grand challenges in program comprehension and software repository mining: my keynote on interdisciplinarity and research relevance</a> (May 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/designing-learnable-teachable-and-productive-programming-languages-dagstuhl-trip-report-81e41bde84bd" target="_blank">Designing and evaluating programming languages: Dagstuhl trip report</a> (February 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/i-wrote-a-short-book-about-human-and-social-aspects-of-software-engineering-96e662c9b5fa" target="_blank">I wrote a short book about human and social aspects of software engineering</a> (September 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/managing-software-teams-in-academia-and-industry-92f3989b20a6" target="_blank">Managing software teams in academia and industry</a> (June 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/nine-factors-that-shape-software-evolution-78112ee79b3c" target="_blank">Nine factors that shape software evolution</a> (May 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/what-makes-software-developers-great-cross-disciplinary-collaborators-590f94f2f722" target="_blank">What makes software developers great cross-disciplinary collaborators?</a> (May 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/genie-input-retargeting-on-the-web-through-command-reverse-engineering-f9c7a294b23f" target="_blank">Genie: Automatically adding mouse, keyboard, speech, and other input to websites</a> (May 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/review-of-grudins-from-tool-to-partner-the-evolution-of-hci-8e2155feeffd" target="_blank">Review of Grudin's "From Tool to Partner: The Evolution of HCI"</a> (January 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/my-splash-2016-keynote-81cc802f5f6e" target="_blank">My SPLASH 2016 keynote: A human view of programming languages</a> (November 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/what-makes-a-great-software-engineer-e8cbb25cfac0" target="_blank">What makes a great software engineer?</a> (June 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/accessibility-diversity-and-software-teams-e81a4cc04f9" target="_blank">Why hire people with disabilities? The value of diversity in software teams</a> (June 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/coding-bootcamps-versus-universities-3c50ea111b57" target="_blank">Coding bootcamps versus universities</a> (March 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/design-and-the-limits-of-automation-8b8b46ecd7c" target="_blank">Design and the limits of automation</a> (January 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/startup-good-and-evil-106a202a7f60" target="_blank">Startup good and evil</a> (December 2015)</li>
					<li><a href="https://medium.com/bits-and-behavior/the-black-hole-of-software-engineering-research-fea1c9dc698d" target="_blank">The black hole of software engineering research</a> (October 2015)</li>
					<li><a href="https://medium.com/bits-and-behavior/programming-languages-are-the-least-usable-but-most-powerful-human-computer-interfaces-ever-invented-7509348dedc" target="_blank">Programming languages are the least usable, but most powerful human-computer interfaces ever invented</a> (March 2014)</li>
					<li><a href="https://medium.com/bits-and-behavior/apple-maps-a35505296b4" target="_blank">Apple Maps</a> (September 2012)</li>
					<li><a href="https://medium.com/bits-and-behavior/john-carmack-discusses-the-art-and-science-of-software-engineering-a56e100c27aa" target="_blank">John Carmack discusses the art and science of software engineering</a> (August 2012)</li>
					<li><a href="https://medium.com/bits-and-behavior/decision-making-in-software-engineering-eb97d2c939bd" target="_blank">Decision making in software engineering</a> (December 2010)</li>
					<li><a href="https://medium.com/bits-and-behavior/software-quality-and-ideology-dac3a1c48271" target="_blank">Software quality and ideology</a> (August 2010)</li>
					<li><a href="https://medium.com/bits-and-behavior/mozilla-summit-2010-and-dev-culture-6f1de9839b81" target="_blank">Mozilla Summit 2010 and dev culture</a> (July 2010)</li>
					<li><a href="https://medium.com/bits-and-behavior/my-juxtaposition-on-the-ipad-5ef097a15897" target="_blank">My juxtaposition on the ipad</a> (March 2010)</li>
					<li><a href="https://medium.com/bits-and-behavior/emerson-murphy-hill-interviews-me-part-1-58cf105568e5" target="_blank">Emerson Murphy-Hill interviews me on software engineering research (part 1)</a> (September 2009)</li>
					<li><a href="https://medium.com/bits-and-behavior/emerson-interview-part-2-writing-for-hci-venues-6f6578cfe0d4" target="_blank">Emerson interview (part 2); writing software engineering research for HCI venues</a> (October 2009)</li>
					<li><a href="https://medium.com/bits-and-behavior/sketching-with-words-b4c6ce1d402d" target="_blank">Sketching with words</a> (December 2008)</li>
					<li><a href="https://medium.com/bits-and-behavior/on-the-static-versus-dynamic-typing-debate-415e51404528" target="_blank">On the static versus dynamic typing debate</a> (October 2006)</li>
				</ul>

				<h2 id="society">Software and society</h2>
				
				<ul>
					<li><a href="https://medium.com/bits-and-behavior/2018-masters-in-hci-design-commencement-speech-design-values-and-organizations-fd122b612563" target="_blank">2018 Masters in HCI+Design commencement speech: design, values, and organizations</a> (August 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/meow-wolf-the-art-of-immersive-ubiquitous-computing-c00d27323ace" target="_blank">Meow Wolf: the art of immersive, ubiquitous computing</a> (April 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/what-makes-software-valuable-36a1335ad1f7" target="_blank">What makes software valuable?</a> (November 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/automation-education-and-the-looming-skills-deficit-a509c7647afb" target="_blank">Automation, education, and the looming skills deficit</a> (June 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/software-and-globalism-sitting-in-a-tree-k-i-s-s-i-n-g-7f8ba9f18133" target="_blank">Software and globalism sitting in a tree, k-i-s-s-i-n-g</a> (June 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/programming-power-and-responsibility-4f3b4e1d9ea8" target="_blank">Programming, power, and responsibility</a> (May 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/the-watch-3c50e66a1409" target="_blank">The watch</a> (May 2015)</li>
					<li><a href="https://medium.com/bits-and-behavior/off-the-grid-a293f942388f" target="_blank">Off the grid</a> (September 2013)</li>
					<li><a href="https://medium.com/bits-and-behavior/computing-jobs-and-lumps-of-labor-e4318ff64c24" target="_blank">computing, jobs, and lumps of labor</a> (July 2012)</li>
					<li><a href="https://medium.com/bits-and-behavior/machining-is-now-coding-f9aa9b4fc3b3" target="_blank">Machining is now coding</a> (March 2012)</li>
					<li><a href="https://medium.com/bits-and-behavior/the-double-edged-sword-of-efficiency-58a92741f1ff" target="_blank">The double-edged sword of efficiency</a> (January 2012)</li>
					<li><a href="https://medium.com/bits-and-behavior/whats-in-a-frame-5f90f08d7bd3" target="_blank">What's in a frame?</a> (January 2012)</li>
					<li><a href="https://medium.com/bits-and-behavior/abstraction-appropriation-6a95416dd50d" target="_blank">Abstraction appropriation</a> (April 2011)</li>
					<li><a href="https://medium.com/bits-and-behavior/does-automation-free-us-or-enslave-us-a66df3901e7a" target="_blank">Does automation free us or enslave us?</a> (January 2011)</li>
					<li><a href="https://medium.com/bits-and-behavior/what-makes-code-different-than-other-media-b2b8441b7aa" target="_blank">What makes code different than other media?</a> (November 2010)</li>
					<li><a href="https://medium.com/bits-and-behavior/what-the-ipad-is-and-isnt-2188e1820697" target="_blank">What the iPad is and isn't</a> (April 2010)</li>
					<li><a href="https://medium.com/bits-and-behavior/spreadsheet-error-costs-time-and-money-yet-again-3df493504643" target="_blank">Spreadsheet error costs time and money, yet again</a> (March 2010)</li>
					<li><a href="https://medium.com/bits-and-behavior/what-up-blog-906f340b2dcc" target="_blank">What up, blog?</a> (January 2009)</li>
					<li><a href="https://medium.com/bits-and-behavior/bits-c65c20ac6a86" target="_blank">Bits (a poem)</a> (January 2008)</li>
				</ul>

				<h2 id="trips">Trip reports</h2>

				<ul>
					<li><a href="https://medium.com/bits-and-behavior/sigcse-2019-trip-report-celebrating-50-years-b3460835a09a‬">SIGCSE 2019 Trip Report</a> (March 2019)</li>
					<li><a href="https://medium.com/bits-and-behavior/the-2018-acm-international-computing-education-research-conference-espoo-finland-ed548572cca5">The 2018 ACM International Computing Education Research Conference in Espoo, Finland</a> (August 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/2018-acm-education-council-meeting-a8d371e62034">2018 ACM Education Council meeting</a> (August 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/icse-2018-trip-report-50-years-of-software-engineering-4944992c5b" target="_blank">ICSE 2018 trip report: 50 years of software engineering</a> (June 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/iconference-2018-trip-report-information-science-computing-education-and-hci-converge-fe521ba42b99" target="_blank">iConference 2018 trip report: information science, computing education, and HCI converge</a> (March 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/sigcse-2018-trip-report-cs-for-all-57f1cf94155f" target="_blank">SIGCSE 2018 trip report: CS for All!</a> (February 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/a-visit-to-stanford-hci-8a392a8b774c" target="_blank">A visit to Stanford HCI
</a> (January 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/a-visit-to-northwestern-university-cs-for-all-cs-x-and-interdisciplinary-learning-2d4b56fe709b" target="_blank">A visit to Northwestern University: CS for All, CS+X, and Interdisciplinary Learning</a> (2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/vl-hcc-2017-trip-report-programming-and-play-e36681f9fd74" target="_blank">VL/HCC 2017 trip report: programming and play</a> (2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/the-bleeding-edge-of-computing-education-research-icer-2017-trip-report-dc403ba2760a" target="_blank">The bleeding edge of computing education research: ICER 2017 trip report</a> (2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/accessibility-101-an-afternoon-at-the-teachaccess-bootcamp-ee317f426022" target="_blank">Accessibility 101: An afternoon at the TeachAccess bootcamp</a> (May 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/icse-2017-trip-report-people-process-and-program-analysis-6553dec82637" target="_blank">ICSE 2017 trip report: people, process, and program analysis</a> (May 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/chi-2017-automation-agency-and-learning-c6e4590ec7bf" target="_blank">CHI 2017: Automation, Agency, and Learning</a> (May 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/icer-2016-trip-report-5f3924668e4f" target="_blank">ICER 2016 trip report</a> (September 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/snowbird-trip-report-automation-education-and-academia-7888451118c" target="_blank">Snowbird trip report: automation, education, and academia</a> (July 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/uw-msr-summer-institute-on-crowdsourcing-personalized-online-education-9b7a65c848c8" target="_blank">UW MSR Summer Institute on Crowdsourcing Personalized Online Education</a> (July 2012)</li>
					<li><a href="https://medium.com/bits-and-behavior/mozilla-summit-2010-day-0-470ce575b77d" target="_blank">Mozilla Summit 2010, day 0</a> (July 2010)</li>
					<li><a href="https://medium.com/bits-and-behavior/tough-t-b45431f07b33" target="_blank">On Edward Tufte's flat teaching</a> (April 2009)</li>
					<li><a href="https://medium.com/bits-and-behavior/halfway-home-1e16e59f26fd" target="_blank">Halfway home: The India Software Engineering Conference</a> (February 2009)</li>
					<li><a href="https://medium.com/bits-and-behavior/halfway-to-india-8d9b0b0a9a96" target="_blank">Halfway to India</a> (February 2009)</li>
				</ul>

				<h2 id="teaching">Teaching</h2>
				
				<ul>
					<li><a href="https://medium.com/bits-and-behavior/grading-is-ineffective-harmful-and-unjust-lets-stop-doing-it-52d2ef8ffc47" target="_blank">Grading is ineffective, harmful, and unjust &mdash; let's stop doing it</a> (March 2019)</li>
					<li><a href="https://medium.com/bits-and-behavior/its-easier-to-ignore-diversity-in-schools-22eb20d56667" target="_blank">It's easier to ignore diversity in schools</a> (July 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/how-to-design-a-class-a1c8b419b9f5" target="_blank">How to design a class</a> (July 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/how-to-be-a-great-cs-teacher-b8a0a2a3600f" target="_blank">How to be a great (CS) teacher</a> (May 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/how-i-applied-learning-sciences-to-undergraduate-design-education-f0c46846ca13" target="_blank">How I applied learning sciences to undergraduate design education</a> (January 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/textbooks-are-awesome-b0f9b6af7105" target="_blank">Textbooks are awesome</a> (July 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/feedback-learning-and-massive-open-online-courses-28c128039728" target="_blank">feedback, learning, and massive open online courses</a> (June 2012)</li>
					<li><a href="https://medium.com/bits-and-behavior/dealing-with-teacher-guilt-db9e4a66d7ab" target="_blank">Dealing with teacher guilt</a> (June 2010)</li>
					<li><a href="https://medium.com/bits-and-behavior/teaching-and-presenting-with-the-ipad-is-broken-83579bd0cf28" target="_blank">Teaching and presenting with the iPad is broken</a> (April 2010)</li>				
				</ul>

				<h2 id="academia">Academia</h2>

				<ul>
					<li><a href="https://medium.com/bits-and-behavior/competing-tensions-in-doctoral-student-advising-9ebf6af0c626" target="_blank">Competing priorities in doctoral student advising</a> (January 2019)</li>
					<li><a href="‪https://medium.com/bits-and-behavior/a-critique-of-academic-criticism-fce30c73947d‬" target="_blank">A critique of academic criticism</a> (January 2019)</li>
					<li><a href="https://medium.com/bits-and-behavior/credit-versus-discovery-in-academia-f4312ac7f596" target="_blank">Credit versus discovery in academia</a> (November 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/my-peer-review-wishlist-e783c1eccd61" target="_blank">My peer review wishlist</a> (November 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/the-state-of-dub-human-computer-interaction-at-the-university-of-washington-17abaa954566" target="_blank">The State of DUB: Human-Computer Interaction at the University of Washington</a> (October 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/reflections-on-a-decade-of-professoring-2b996ee75af7" target="_blank">Reflections on a decade of professoring</a> (September 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/how-should-one-year-of-academic-work-be-judged-796ca1847680" target="_blank">How should one year of academic work be judged?</a> (March 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/on-academic-split-attention-d64e5533f32" target="_blank">On academic split attention</a> (April 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/the-joys-and-perils-of-teaching-doctoral-students-bad67cb76701" target="_blank">The joys and perils of teaching doctoral students</a> (April 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/defending-truth-one-dissertation-at-a-time-83f87b6e8626" target="_blank">Defending truth, one dissertation at a time</a> (May 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/research-teaching-and-service-oh-my-577932dda684" target="_blank">Research, teaching, and service, oh my</a> (June 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/on-the-short-half-life-of-research-prototypes-in-computing-c8311c1be3b2" target="_blank">On the short half-life of research prototypes in computing</a> (November 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/on-the-public-in-public-intellectual-34285333bed" target="_blank">On the public in public intellectual</a> (2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/most-ph-d-s-arent-professors-13a741ef6868" target="_blank">Most PhDs aren't professors</a> (2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/what-is-it-like-to-chair-an-undergraduate-program-in-an-information-school-5ccfbd8c3537" target="_blank">What is it like to chair an undergraduate program in an Information School?</a> (2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/a-defense-of-sabbatical-3257a544aaf3" target="_blank">A defense of sabbatical</a> (September 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/making-money-versus-making-knowledge-4c0d0d48ce4e" target="_blank">Making money versus making knowledge</a> (February 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/the-service-implications-of-interdisciplinarity-5e5296b9d413" target="_blank">The service implications of interdisciplinarity</a> (January 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/learning-contexts-across-the-lifetime-1e9f798f1a82" target="_blank">Learning contexts across the lifetime</a> (January 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/i-am-tenured-a3df1bbda47" target="_blank">I am tenured</a> (October 2014)</li>
					<li><a href="https://medium.com/bits-and-behavior/startup-life-versus-faculty-life-f53f209eacd3" target="_blank">Startup life versus faculty life</a> (January 2014)</li>
					<li><a href="https://medium.com/bits-and-behavior/reflections-on-conference-papers-and-journals-71dc4a40d573" target="_blank">Reflections on conference papers and journals</a> (September 2012)</li>
					<li><a href="https://medium.com/bits-and-behavior/ageism-in-academia-d38dbe2b9f4a" target="_blank">Ageism in academia</a> (July 2012)</li>
					<li><a href="https://medium.com/bits-and-behavior/what-do-professors-do-all-day-a67905b4583f" target="_blank">What do professors do all day?
</a> (November 2011)</li>
					<li><a href="https://medium.com/bits-and-behavior/whats-surprising-ba0d8eba6036" target="_blank">What's surprising?</a> (September 2009)</li>
					<li><a href="https://medium.com/bits-and-behavior/the-semblance-of-objectivity-in-numbers-b9e397662cb0" target="_blank">The semblance of objectivity in numbers</a> (May 2009)</li>
					<li><a href="https://medium.com/bits-and-behavior/why-do-researchers-choose-the-disciplines-they-do-bea5b18cf6a4" target="_blank">Why do researchers choose the disciplines they do?</a> (January 2009)</li>
					<li><a href="https://medium.com/bits-and-behavior/grading-rant-dbb1bb01ee17" target="_blank">Grading rant</a> (November 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/on-the-role-of-empiricism-in-applied-sciences-ccb85c5ec8f3" target="_blank">On the role of empiricism in applied sciences</a> (December 2006)</li>
				</ul>
			
				<h2 id="funding">Funding</h2>
				
				<ul>
					<li><a href="https://medium.com/bits-and-behavior/four-years-of-studying-exploratory-programming-4656586b1d3b" target="_blank">Four years of studying exploratory programming</a> (July 2018)</li>
					<li><a href="https://medium.com/bits-and-behavior/what-five-years-of-early-career-research-funding-buys-the-world-bb49bb3c08b0" target="_blank">What five years of early career research funding buys the world</a> (April 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/what-does-600k-in-nsf-research-funding-buy-86c1d66848a" target="_blank">What does $600K in NSF research funding buy?</a> (October 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/rhetorical-devices-9c2eb2a25071" target="_blank">Rhetorical devices</a> (November 2008)</li>
				</ul>
				
				<h2 id="productivity">Productivity</h2>
				
				<ul>
					<li><a href="https://medium.com/bits-and-behavior/how-i-sometimes-achieve-academic-work-life-balance-4bbfc1769820" target="_blank">How I (sometimes) achieve academic work life balance</a> (May 2017)</li>
					<li><a href="https://medium.com/bits-and-behavior/managing-time-management-424608e7f9eb" target="_blank">Managing time management
</a> (December 2009)</li>
					<li><a href="https://medium.com/bits-and-behavior/future-me-gets-all-the-attention-8ac6c2824e49" target="_blank">Future me gets all the attention</a> (August 2010)</li>
				</ul>
				
				<h2 id="politics">Politics</h2>
				
				<ul>
					<li><a href="https://medium.com/bits-and-behavior/fifty-privileges-aa62968d8cc">Fifty privileges</a> (February 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/two-truths-4c2709779dd2" target="_blank">Two truths: how science masked rural decay</a> (November 2016)</li>
					<li><a href="https://medium.com/bits-and-behavior/a-personal-note-on-public-funding-for-education-69735e8fe1e" target="_blank">A personal note on public funding for education</a> (August 2012)</li>
					<li><a href="https://medium.com/bits-and-behavior/mediated-living-48d80aa3b7f2" target="_blank">Mediated living</a> (January 2007)</li>
				</ul>
			
			</div>
		);
			
	}
}

export { Posts };