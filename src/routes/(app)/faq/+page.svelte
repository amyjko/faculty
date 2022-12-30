<script lang="ts">
    import Section from '$lib/components/Section.svelte';
    import External from '$lib/components/External.svelte';
    import Link from '$lib/components/Link.svelte';
    import Paper from '$lib/components/Paper.svelte';
    import { profile } from '$lib/models/stores';
    import SectionList from '../../../lib/components/SectionList.svelte';

    $: guide = $profile.getPublication('practicalguide');
</script>

<h1> These are questions I'm frequently asked. </h1>

<SectionList path="/faq" />

<Section
    id="recommendations"
    header="Will you write me a letter of recommendation?"
>
    <p>
        Maybe. All of the following must be true before I commit to writing you
        a letter:
    </p>

    <ul>
        <li>You've asked for it two weeks in advance of the deadline.</li>
        <li
            >You've given me all of the information you have about what is
            expected in the letter.</li
        >
        <li>You've shared with me why you need the letter.</li>
        <li
            >You've explained why I'm one of the best people in your network to
            write the letter.</li
        >
        <li
            >I've had multiple conversations about things beyond the scope of a
            class and its requirements (e.g., in office hours, in research, or
            other settings).</li
        >
    </ul>

    <p>
        For many students, this is easy to satisfy. For example, postdocs,
        doctoral students, and undergraduate researchers in my research lab
        easily satisfy all of the criteria above. They don't even need to ask if
        I'll write; it's a given. But I receive many requests from students I've
        had in classes that I've <em>never</em> talked to. In these cases, what
        would I even say in the letter?
        <em>"They were in my class, but I don't know them?"</em>
        If you're in that situation, I would love to get to know you, but if I spent
        the time to do that with every student who asked for a letter, I would probably
        be spending more than a dozen hours a week meeting with students just to
        write letters. I definitely cannot do that; I have too many other responsibilities
        in research, teaching, and service.
    </p>

    <p>
        There are some exceptions to the policy above. If the "letter" you need
        is really just a form that I fill out attesting that I had you in class,
        I'm happy to do that. If you just need a reference for a job, I'm happy
        to be a reference; I rarely get called, and when I do, it's rarely
        onerous. And if you're a student in one of our <Link
            to={'/lablets#recommendation'}>lablets</Link
        >, there are specific conditions for earning a letter.
    </p>
</Section>

<Section
    id="csis"
    header="What is the difference between computer science and informatics at UW?"
>
    <p>
        I think of Computer Science and Informatics like we think about Physics
        versus Engineering: the former concerns itself with a phenomenon as it
        occurs in nature and the latter is concerned with applications of it for
        humanity. CS fundamentally asks what is computing, what can be computed,
        how can it be computed. Informatics fundamentally asks what should be
        computed, how should computation be used, what role does computing play
        in society. If you find computing intrinsically interesting and wouldn't
        mind talking about it endlessly, CS is a great major for you. If you
        just want use it as a tool to solve the world's problems, Informatics is
        a great major for you. Some people are interested in both. Maybe that's
        you! Both are competitive majors, both lead to wonderful jobs, and both
        will teach you a lot about the world, one from the perspective of
        computing, one from the perspective of people and society. Both
        perspectives are necessary and valuable.
    </p>

    <p>
        You can read more about my view of information and computing in a blog
        post I wrote about <External
            to="https://medium.com/bits-and-behavior/big-ideas-about-information-c09e4d9c60bd"
            >big ideas about information</External
        >.
    </p>
</Section>

<Section id="phdadmissions" header="How do I get into a Ph.D. program?">
    <p>
        Shriram Krishnamurthi has a wonderful guide on <External
            to="https://parentheticallyspeaking.org/articles/us-cs-phd-faq/"
            >Getting a Computer Science PhD</External
        >. It's focused on CS programs, but much of the advice is good for any
        discipline.
    </p>
</Section>

<Section id="phdstudent" header="What is it like to be a Ph.D. student?">
    <p>
        There are many resources on this. <External
            to="http://matt.might.net/articles/successful-phd-students/"
            >Matt Might's advice</External
        > has a sobering but practical look, including a <External
            to="https://matt.might.net/articles/phd-school-in-pictures/"
            >fun visual metaphor</External
        >> of what it means to do a PhD. I also like <External
            to="https://freedom-to-tinker.com/2010/09/27/advice-new-graduate-students/"
            >Jennifer Rexford's view of Ph.D. life as individual growth by
            leveraging the group</External
        >, because it complements more pragmatic views. The Economist also has
        some practical advice on <External
            to="http://www.economist.com/node/17723223?fsrc=scn/fb/wl/ar/mr/disposableacademic"
            >Why doing a PhD is often a waste of time</External
        >. And, for a lighter glimpse into Ph.D. life, there is always <External
            to="http://www.phdcomics.com/comics.php">Ph.D. comics</External
        >.
    </p>
</Section>

<Section id="goodquestion" header="What makes a good research paper?">
    <p>
        Learning to do research is hard! Developing good questions is just one
        of the many challenges in research. I wrote a book chapter that <Link
            to={'/papers/Ko2019StudyDesign.pdf'}
            >covers many aspects of developing good research questions</Link
        >. I use the same practices with the students in my lab.
    </p>
</Section>

<Section id="goodwriting" header="How can I become a good technical writer?">
    <p>
        When writing and reviewing scientific papers, there are a lot of
        mistakes one can make. Several have written helpful guide:
    </p>

    <ul>
        <li
            >Matt Might's <External
                to="http://matt.might.net/articles/shell-scripts-for-passive-voice-weasel-words-duplicates/"
                >advice on technical writing</External
            > is a helpful guide</li
        >
        <li
            >I like Niklas Elmqvist's deconstruction of <External
                to="https://sites.umiacs.umd.edu/elm/2016/11/19/writing-rebuttals/"
                >what makes a good rebuttal to conference reviews</External
            >.</li
        >
        <li
            >Chris Parnin's <External
                to="https://medium.com/@gameweld/error-codes-for-paper-introductions-8deb0d6825c2?fbclid=IwAR0SziEHps-ZD24FqLzG-yAGbk0wMblZ8dmC3r8KwsRsYdthVC6R0ylvWSg"
                >Error Codes for Paper Introductions</External
            > is a fun and helpful guide.</li
        >
        <li
            >Morgan Klause Scheuerman has an excellent guide on <External
                to="https://www.morgan-klaus.com/gender-guidelines.html"
                >reporting gender</External
            >.</li
        >
    </ul>
</Section>

<Section id="review" header="I was asked to review a paper. Should I?">
    <p>
        My Ph.D. students often ask me whether they should accept a paper review
        request. Here's some of the advice I give them for doing or not doing
        it:
    </p>

    <p>Reasons to do it:</p>

    <ul>
        <li>You want to read the paper!</li>
        <li>You need practice critically evaluating papers.</li>
        <li
            >You're one of a handful of people who has the expertise to evaluate
            it. (Academia is small, expertise is rare, it's your duty to
            volunteer).</li
        >
        <li
            >Early in an academic career, it's helpful to show that you've
            reviewed for prestigious journals and conferences.</li
        >
    </ul>

    <p>Reasons not to do it:</p>

    <ul>
        <li>You really don't have the expertise.</li>
        <li
            >You've done too much reviewing in the past year and have earned the
            right to say no.</li
        >
        <li
            >You're an experienced paper reviewer and don't need the practice.</li
        >
        <li>You don't have the time due to other reviewing commitments.</li>
        <li>You're overloaded on other service commitments.</li>
    </ul>
</Section>

<Section
    id="evaluation"
    header="How should I evaluate this developer tool I invented?"
>
    <p>
        I often get questions from researchers asking for help to design studies
        to evaluate the developer tool what they've built. I could write a whole
        book on this (and <External
            to="http://www.amazon.com/Research-Methods-Statistics-Psychology-Coolican/dp/0340812583"
            >several</External
        >
        <External
            to="http://www.amazon.com/Research-Methods-Psychology-John-Shaughnessy/dp/007128351X/ref=sr_1_1?s=books&ie=UTF8&qid=1281625862&sr=1-1"
            >people</External
        >
        <External to="http://www.socialresearchmethods.net/">have</External>,
        just not on the topic of CS research).
    </p>

    <p>
        For my part, I wrote a journal paper that walks through several
        practical details of evaluating developer tools:
    </p>

    <hr />

    {#if guide}<Paper paper={guide} />{:else}Hm, couldn't find the guide, sorry!{/if}

    <hr />

    <p>
        Several of my colleagues in software engineering and programming
        languages also wrote a well reasoned analysis of <em>claims</em> in
        evaluations called <External
            to="http://dl.acm.org/citation.cfm?id=2983574"
            >The Truth, The Whole Truth, and Nothing But the Truth: A Pragmatic
            Guide to Assessing Empirical Evaluations</External
        >. This is a great lens through which to evaluate the validity of your
        evaluation.
    </p>
</Section>

<Section id="copyright" header="Which ACM copyright option should I choose?">
    <p>
        Casey Fiesler has <External
            to="http://caseyfiesler.com/2014/10/02/acm-publication-copyright/"
            >a helpful blog post</External
        > about this decision. My own policy is to pay for open access if I believe
        it will actually increase access to audiences without digital library access.
        I always post a copy on my website so that search engines can find it.
    </p>
</Section>
