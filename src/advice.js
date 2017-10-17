import React from 'react';
import {Paper} from './paper';
import _ from "lodash";

var pubs = require('./pubs.json');

var practicalToolEvaluations = _.find(pubs, { id: "practicalguide" });

class Advice extends React.Component {
	render() {
		return (
			<div>
				<div className='lead'>
					When I was in grad school, I always found collections of advice to be incredibly helpful. These are some of my favorite resources, along with some of my own advice.
				</div>

				<h3>Other advice collections</h3>
				
				<ul>
					<li><a href="http://people.engr.ncsu.edu/txie/advice.htm">Tao Xie's advice collection</a> software engineering slant</li>
					<li><a href="http://www.cs.washington.edu/homes/mernst/advice/">Mike Ernst's advice collection</a> software engineering slant</li>
					<li><a href="http://www.cs.cmu.edu/~jasonh/advice.html">Jason Hong's advice collection</a> HCI slant</li>
				</ul>

				<h3>How do I get into a Ph.D. program?</h3>
				
				<ul>
					<li>A <a href="http://www.pgbovine.net/PhD-application-tips.htm">brutally honest glimpse</a> into how Philip and many others review Ph.D. applicants.</li>
				</ul>
				
				<h3>How do I be a good Ph.D. student?</h3>

				<ul>			
					<li><a href="http://pgbovine.net/PhD-memoir.htm"> A nice Ph.D. memoir</a> by Philip Guo, who was at Stanford CS. It has a definite slant toward CS and software engineering academic culture, but it's a useful read to anyone thinking about a Ph.D.</li>
					<li><a href="http://www.pgbovine.net/guo-faculty-job-search.pdf">A nice memoir on faculty job searches</a>, also by Philip Guo. This is also oriented toward a CS audience, but has many similar elements to other fields.</li>
					<li><a href="http://matt.might.net/articles/successful-phd-students/">Matt Might's advice on being a successful Ph.D. student</a></li>
					<li><a href="https://freedom-to-tinker.com/2010/09/27/advice-new-graduate-students/">Jennifer Rexford's view of Ph.D. life as individual growth by leveraging the group</a></li>
					<li>The Economist on <a href="http://www.economist.com/node/17723223?fsrc=scn/fb/wl/ar/mr/disposableacademic">Why doing a PhD is often a waste of time</a></li>
										<li>On saying <a href="http://chronicle.com/blogs/onhiring/right-of-refusal/31609?sid=at&utm_source=at&utm_medium=en">no</a></li>
					<li>Schwartz MA. <a href="http://jcs.biologists.org/cgi/content/full/121/11/1771">The importance of stupidity in scientific research</a>. J Cell Sci. 2008 Jun 1;121(Pt 11):1771.</li>
					<li><a href="http://www.phdcomics.com/comics.php">Ph.D. comics</a></li>

				</ul>

				<h3>How do I do statistics?</h3>
				
				<p>Never fear, my excellent friend and colleague <a href="https://faculty.washington.edu/wobbrock/">Jacob Wobbrock</a> is here to help:</p>
				
				<ul>
					<li>Read Wobbrock, J. O., & Kay, M. (2016). <a href="http://link.springer.com/chapter/10.1007/978-3-319-26633-6_7">Nonparametric Statistics in Human-Computer Interaction</a>. In Modern Statistical Methods for HCI (pp. 135-170). Springer International Publishing.</li>
					<li>Take his MOOC, <a href="https://www.coursera.org/learn/designexperiments">Designing, Running, and Analyzing Experiments</a></li>				
				</ul>
				
				<h3>How do I get things published?</h3>

				<ul>			
					<li><a href="http://matt.might.net/articles/shell-scripts-for-passive-voice-weasel-words-duplicates/">Matt Might's advice on technical writing</a></li>
					<li>A deconstruction of <a href="https://sites.umiacs.umd.edu/elm/2016/11/19/writing-rebuttals/">what makes a good rebuttal to conference reviews</a></li>
				</ul>
				
				<h3>Should I major in Computer Science or Informatics?</h3>
				
				<p>When UW undergraduates ask me to compare the majors, here's what I send them:</p>

				<blockquote>
				I think of Computer Science and Informatics like we think about Physics versus Engineering: the former concerns itself with a phenomenon as it occurs in nature and the latter is concerned with applications of it for humanity. CS fundamentally asks what is computing, what can be computed, how can it be computed. Informatics fundamentally asks what should be computed, how should computation be used, what role does computing play in society. If you find computing intrinsically interested and wouldn't mind talking about it endlessly, CS is a great major for you. If you just want use it as a tool to solve the world's problems, Informatics is a great major for you. Some people are interested in both. Maybe that's you! Both are competitive majors, both lead to wonderful jobs, and both will teach you a lot about the world, one from the perspective of computing, one from the perspective of humanity. Both perspectives are necessary and valuable.
				</blockquote>
				
				<h3 id="goodquestion">What makes a good research question?</h3>
				
				<p>Good questions are <b>feasible</b> to answer (you have some method by which you can answer it), <b>novel</b> (you've read enough prior work to know that the answer isn't known), and <b>important</b> (human beings in the world would care about the answer). It's non-trivial to find a question that satisfies all three.</p>
				
				<p>To assess feasibility, there are many considerations. Do you have the right skills to investigate it? Do you have access to the data you need? Does the technology support the prototype you want to make? Most importantly, do you have a special insight that gives you leverage into the program?</p>
				
				<p>To assess novelty, you have to read a lot, which takes time. To accelerate this, find experts. Talk to faculty who know about every dimension of the question you're curious about to discover the bleeding edge of knowledge on that topic. If possible, find survey articles, which synthesize large bodies of work for exactly this purpose.</p>
				
				<p>To assess importance, you have to know something about what the academic world and broader society thinks is important. Developing this sense takes time, and often requires submitting research for peer review. Trust your advisors instincts, but also develop your own. Go to conferences, discuss the ideas with people in your community and see how they react to your question. Do they find it interesting or important?</p>
				
				<p>If these three activities weren't hard enough, most of them lead to failure, requiring iteration: you may find out a question isn't feasible, that it's already been answered, or that no one thinks the question is important. This is why Ph.D. students, who may be expected to answer multiple "good" research questions to get a Ph.D., may take 5-7 years to complete their dissertation.</p>
				
				<h3 id="goodpaper">How do I write a good research paper?</h3>
				
				<p>Obviously, a few paragraphs on an advice page can't teach you this skill. That's what a getting a Ph.D. is for. But I'll do my best here to give you some concepts and strategies to scaffold your practice.</p>
				
				<p>First, let's consider a typical paper outline:</p>
				
				<ul>
					<li><b>Introduction</b>. The beginning of a research paper is essentially an <i>argument</i> that begins with the state of the world and makes a series of successively narrow <i>claims</i> about the state of the world, culminating in a question, hypothesis, or hypothetical that is <i>not</i> supported by evidence. These claims are typically the topic sentences of several paragraphs, where the content in each paragraph provides evidence for each claim. A good argument in an introduction has no logical flaws or inconsistencies and is well supported by solid evidence. If someone can find holes in your argument, the whole premise of the paper is unsound. For example, consider this completely sound argument:</li>
					<ol>
						<li>Most humans find kitties cute. [Evidence...]</li>
						<li>Cute things make people smile.  [Evidence...]</li>
						<li>Smiling makes people happy even when they're sad. [Evidence...]</li>
						<li>If there were a way humans could see kitties whenever they were sad, most humans could be happy [Evidence...]</li>
						<li>How can we empower humans to see kitties whenever they want?</li>
						<li>In this paper, we present such a way, which we call the "Internet"...</li>
					</ol>
					<li><b>Related work</b>. This section (which might be interleaved in the argument in the introduction, rather than as a separate section), makes another argument: even the best, most relevant evidence we have does not answer the question we posed in the introduction. To be good, a related work section must cite "all" of the evidence available (though "all" usually isn't feasible) and, like the introduction, be free of logical inconsistencies.</li>
					<li><b>Method</b>. Whether a paper presents empirical evidence or the design and implementation of a new system, algorithm, or technique, it must <i>describe</i> the process by which you arrived at the answer to your research question. In an empirical paper, the method is a reproducible series of steps that were followed to arrive at the answer. In a systems contribution, it's a technical description of the abstractions that were necessary to prototype something that answered the "how" question presented in the introduction. A good method section must be unambiguous, complete, and reproducible by someone with appropriate expertise (judging "appropriate" is hard, which makes it difficult to know how much detail to include; peer reviewers will help you with this).</li>
					<li><b>Results</b>. This section provides evidence for the answer to your research question. In an empirical study, this evidence might come in the form of qualitative or quantitative data. In a systems contribution, it might come in the form of several examples of what the system is capable of, proving that it exists and does what was claimed. A good results section is also logically sound, uses accepted techniques for producing evidence (e.g., best practices in statistics or qualitative analysis).</li>
					<li><b>Discussion</b>. The discussion returns to the claims and question in the introduction. Now that you've answered the question and provided evidence that the answer is sound, so what? Does the answer raise new research questions (the answer is always yes!)? What implications does the answer have for the world? The discussion is a reprisal of the related work, but reinterpreted in light of the new evidence, with a discussion of the new questions revealed by the discovery. Reveal what is most surprising about the discovery.</li>
				</ul>
				
				<p>Now that we've covered what a research paper consists of, how does one go about writing one? Part of this question is how one goes about doing research. I see research paper writing and research as interwined. Here's the algorithm I follow for doing research and research paper writing:</p>
				
				<ol>
					<li><b>Define a research question</b>. Write a bulleted list of claims that lead to a research question and iterate on it until it is (roughly) logically sound. (Don't write full prose yet, just single sentences that form an argument)</li>
					<li><b>Test your question against the literature</b>. Read all of the relevant literature to see what support there is for your claims. (How? Out of scope for this question!).</li>
					<li><b>Refine your research question</b>. When the evidence inevitably modifies, invalidates, or refines your claims and research question, return to step (1) and iterate until your argument <i>is</i> supported by your claims (this process may take weeks or months).</li>
					<li><b>Derive a method that answers your question</b>. Now that you have a sound argument and a well-defined research question, derive a method that will answer the question. The nature of the question will determine the appropriate method ("why" and "how" questions require qualitative work, "who"/"what"/"when"/"where" questions require either quantitative or qualitative work, "how can" questions require design and invention, and "what is" questions require argumentation).</li>
					<li><b>Detail an analysis plan</b>. Based on your method, write an analysis plan that you will follow to take the results of your method and produce the answer to your research question (the statistics you will calculate, the interpretations you will make, the kinds of demos you will create, etc). This analysis plan will help you verify that your method provides the sufficient evidence for producing an answer to your research question. You'll inevitably find that your method doesn't support your analysis, so return to step 4 until it does.</li>
					<li><b>Refine your method and analysis</b>. Show your method and analysis plan to people with expertise with the method. Can they find any flaws in its application or its ability to answer your question? Yes they can. Iterate until they can't. You'll never be expert enough to see all of these flaws yourself. Note that you may find that there is no such method and analysis that feasibly answers your question; if this happens, return to step (1) and find a new research question.</li>
					<li><b>Execute your method</b>. At this point, you should have a draft of your introduction, related work, method, and analysis plan. Next, execute your method plan. This may take anywhere from a few days to years depending on your methods. And if your method is to invent or design something, you may <i>never</i> discover an answer to your question. Therefore, you need a "timeout" that determines when you'll stop trying and return to step (1).</li>
					<li><b>Execute your analysis</b>. Once you're done executing your method and analysis plan, you should have the answer you were looking for: some data, a prototype, or an argument that answers your question. Execute your analysis plan. Once you're done with this, you should have a draft of your results section, full of stats, proofs of concept, writing about your qualitative interpretations of data, or an argument.</li>
					<li><b>Write your discussion</b>. Sorry, no algorithm for this. It's hard to say something meaningful!</li>
					<li><b>Polish for clarity.</b>. Find the best possible form for your results: the best words, the right tables, figures, and diagrams, the most compelling screenshots, the clearest, most concise sentences. If your reader can't understand any of the above, it's almost as if you didn't do it!</li>
					<li><b>Submit</b>. If you do all of the above well <i>and</i> you had a research question that the audience finds interestings and important, you'll have a high chance of the paper being accepted for publication.</li>
				</ol>
						
				<p>Now, this is not the process that every researcher follows. Some people do the above in an entirely different order, and sometimes that works out. This is particularly true of invention, where you might just start with an interesting "what if", spend months or years inventing, and then return to the rest of the steps above to figure out what the problem was, what the related work is, etc. All of these alternatives are a perfectly reasonable alternative to the process I sketch out above, but I find that any deviation from the process above tends to be less reliable at producing good research. I use the approach above, and out of the ~90 papers I've submitted in my career so far, only 10 were never published. Something's working!</p>
				
				<p>Bured in the advice above is also the small matter how to actually go about drafting a paper. Here are some steps that I follow.</p>
				
				<ol>
					<li><b>Outline</b>. Start by creating a detailed outline of the paper with top level headers for each major section and, for each section, a bulleted list containing the topic sentences of each paragraph you would write. Live in this document. Treat it like a prototype. Get feedback on the argumentation and topic sentences from experts and iterate on it like hell. Make sure every argument is clear before ever try to write a complete paragraph. Cut everything that doesn't support the central claim of the paper, which is that you have rigorously answered the questions you posed. Estimate if you're going to go over length by counting your topic sentences throughout the paper. Each one will be about 200 words and a typical conference paper is 10,000 words. If you're working on an outline full time, you should be able to have a solid one in a few days.</li>
					<li><b>Draft</b>. Take those topic sentences you wrote and start supporting each of them with evidence, examples, data, etc. Don't worry yet about figures. Just focus on supporting the claims in each of your topic sentences with words. Don't worry about them being perfect words. Just make sure they support the topic sentence. Don't change the topic sentences. Stick to what you verified was a good argument. Trust the work you did. One way to do this is to keep the topic sentences in bold so you can visually remind yourself of what the point of a paragraph was and remember not to change it. Maybe in the process of writing you find a better way to phrase your topic sentence, but if you really find yourself changing the overarching structure of your argument, something's wrong. This can take longer depending on your ability to construct sentences. Estimate two weeks for a full draft.</li>
					<li><b>Polish</b>. Now that you have a draft, get feedback on the words and on better ways of presenting and supporting arguments other than words (e.g., figures, tables). Keep giving it to coauthors and addressing their feedback until the only thing they're finding is spelling and grammar problems. The polish phase can go on forever. Give it at least a week of full-time writing effort to get into submittable shape. It sometimes takes 2-3 weeks, especially if you're rendering complex figures or tables.</li>
				</ol>

				<h3>How should I evaluate the fancy new developer tool I invented?</h3>
				
				<p>I often get questions from CS and software engineering researchers asking for help to design studies to evaluate what they've built. I could write a whole book on this (and <a href="http://www.amazon.com/Research-Methods-Statistics-Psychology-Coolican/dp/0340812583">several</a> <a href="http://www.amazon.com/Research-Methods-Psychology-John-Shaughnessy/dp/007128351X/ref=sr_1_1?s=books&ie=UTF8&qid=1281625862&sr=1-1">people</a> <a href="http://www.socialresearchmethods.net/">have</a>, just not on the topic of CS research).</p>
				
				<p>For my part, I wrote a journal paper that walks through several practical details of evaluating developer tools:</p>

				<hr/>
				<Paper {...practicalToolEvaluations} />				
				<hr/>
				
				<p>Several of my colleagues in software engineering and programming languages also wrote a well reasoned analysis of <em>claims</em> in evaluations called <a href="http://dl.acm.org/citation.cfm?id=2983574">The Truth, The Whole Truth, and Nothing But the Truth: A Pragmatic Guide to Assessing Empirical Evaluations</a>. This is a great lens through which to evaluate the validity of your evaluation.</p>
				
				<h3>Common mistakes in technical writing</h3>
				
				<p>When writing and reviewing scientific papers, there are a lot of mistakes one can make. I've been trying to gather a list of these mistakes, both for my benefit and yours. Disagree with any of these? Have any other scientific reporting pet peeves? Let me know!</p>
				
				<ul>
				
					<li><b>Normal distributions</b>. Do the authors cite means of distributions that may not be normally distributed? Skew, floor effects, ceiling affects, and multi-modal distributions can make some aggregate statistics meaningless. My favorite solution is to put a distribution inline in text, such as a histogram or box plot.</li>
							
					<li><b>Correlation vs. causation</b>. Do the authors use causality language like "influence", "causes", or "leads to" for an experiment in which they can make no causal claims? If so, they should use language such as "correlates" or "is related" instead.</li>
							
					<li><b>Unsubstantiated claims</b>. Do the authors make statements about non-obvious phenomena without sufficient evidence (either data or some citation)? Scour the paper for these statements and point them all out. It's a bit nit-picky, but this is science. We're supposed to obsess about these things!</li>
	
					<li><b>Assumptions of statistical tests</b>. Do the authors violate any assumptions of the statistical tests that they use? For example, do they use linear regression on categorical data or chi-squared tests on variables that are not independent? If so, see if you can find a more appropriate test for them.</li>
					
					<li><b>Care with qualifiers</b>. When it comes to descriptions of numerical distributions, be careful with words like "some", "many", "several", and "few". Any use of adjectives and adverbs should be backed up with evidence, if stated as evidence.</li>
					
					<li><b>Tense indicates generality</b>. When describing results, especially of studies involving people, tense is the difference between what <i>happened</i> in the experiment and what <i>happens</i> in general. Make sure the tense matches the claim.</li>
					
					<li><b>Theory, model, framework, etc.</b>. People don't seem to have a common understanding of what these words mean from a scientific perspective. If used, be sure to say precisely what you mean.</li>
					
					<li><b>Tentative language</b>. Perhaps, maybe, might, could, may. Words like these usually mean that the author is speculating. Speculation is fine, as long as it occurs in a section of the paper that deserves spectulation.</li>
				
				</ul>
				
				<h3>How do I write a paper on simple system?</h3>
				
				<p>I've been asked a few times for advice on publishing work on techniques with subtle, but simple design choices. I'm definitely not the expert on this, but I have a few pointers. First, publishing this work is all about setting up your claims and supporting them. Which subtle design decisions were important and what evidence do you have of this? One class of work that comes to mind is Luis von Ahn's human computation work. None of the games he's written about have intrinsically interesting technical properties, but most are subtle design choices (see <a href="http://portal.acm.org/citation.cfm?id=1124782">Peekaboom</a>). I also think of Julie Kientz work, since most of her papers are about applications with fairly simple features, but composed in domain-significant ways (see <a href="http://portal.acm.org/citation.cfm?id=1180909">Abaris</a>). Caitlin Kelleher's dissertation work also had several nice measurements. She was interested in motivating middle school girls to program and made several subtle design choices to do this. The key to her work was finding ways to measure motivation; she decided to inject breaks into her sessions and see if the kids would sneak in extra time, sacrificing their breaks (see <a href="http://portal.acm.org/citation.cfm?id=1240844">Storytelling Alice</a>).</p>
								
				<h3>Should I review this paper?</h3>
				
				<p>My Ph.D. students often ask me whether they should accept a paper review request. Here's some of the advice I give them for doing or not doing it:</p>
				
				<p>Reasons to do it:</p>
				
				<ul>
					<li>You're an expert. Academia is small, expertise is rare, it's your duty to volunteer.</li>
					<li>You need practice reviewing papers.</li>
					<li>If you plan a career in research, it's important to show that you've reviewed for prestigious journals and conferences.</li>
					<li>If it's relevant to your research, you have an incentive to read it and find out what other people are doing.</li>
				</ul>
				
				<p>Reasons not to do it:</p>
				
				<ul>
					<li>You really don't have the expertise.</li>
					<li>You've done too much reviewing in the past year and have earned the right to say no.</li>
					<li>You're an experienced paper reviewer and don't need the practice.</li>
					<li>You honestly don't have the time because of some exceptional circumstance.</li>
					<li>You're overloaded on other service commitments.</li>
				</ul>
								
				<h3>I have some work at the intersection of HCI and software engineering; where should I submit it?</h3>
				
				<p>There is single no premier venue dedicated for this work, but there are many fantastic conferences that are open to submissions on this work:</p>
				
				<ul>
					<li><b>ACM/IEEE International Conference on Software Engineering (ICSE)</b>. One of the top software engineering conferences, this community is mostly interested in human aspects of professional software engineering and innovative new software development tools.</li>
					<li><b>IEEE Visual Languages and Human-Centric Computing (VL/HCC)</b>. This community is mostly interested in innovative interactive programming tools, whether for novices, end-user programmers, or professionals.</li>
					<li><b>ACM Conference on Human Factors in Computing (CHI)</b>. This is a massive, top tier HCI conference that really covers anything related to people interacting with computers.</li>
					<li><b>ACM Symposium on User Interface Software and Technology (UIST)</b>. This community is most interested in new ways of interacting with computers, including innovative new ways to interact with programs.</li>
					<li><b>ACM International Conference on Computing Education (ICER)</b>. This community is strictly interested in the teaching and learning of computing construed broadly. If your research is related to learning, this is the premier venue for it.</li>
				</ul>

			</div>
		);
	}
}

export {Advice}