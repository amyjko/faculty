<script lang="ts">
    import Section from '$lib/components/Section.svelte';
    import External from '$lib/components/External.svelte';
    import Link from '$lib/components/Link.svelte';
    import Paper from '$lib/components/Paper.svelte';
    import { profile } from '$lib/models/stores';
    import Title from '$lib/components/Title.svelte';

    let guide = $derived($profile.getPublication('practicalguide'));
</script>

<Title text="FAQ" />

<h1> These are questions I'm frequently asked. </h1>

<Section
    id="recommendations"
    header="Will you write me a letter of recommendation?"
>
    <p>
        Maybe. All of the following must be true before I commit to writing you
        a letter:
    </p>

    <ul>
        <li
            >I am one of the best person in your network to write the letter,
            relative to your other options.</li
        >
        <li
            >You've asked for it at least two weeks in advance of the deadline,
            preferably one month, so I have time to schedule writing.</li
        >
        <li
            >I've collaborated with you on a project, or if you were a student
            in my class, I've had multiple conversations about things beyond the
            scope of a class and its requirements (e.g., in office hours, in
            research, or other settings).</li
        >
    </ul>

    <p>
        For many students, this is easy to satisfy. For example, postdocs,
        doctoral students, and undergraduate researchers in my research lab
        easily satisfy all of the criteria above. They don't even need to ask if
        I'll write; it's a given. But I receive many requests from students I've
        had in classes that I've <em>never</em> talked to. In these cases, I'd have
        nothing to write in my recommendation.
    </p>

    <p>If you satisfy these requirements, write me with the following:</p>

    <ul>
        <li
            >Remind me how we know each other, in case I don't recognize your
            name.
        </li>
        <li
            >You've shared with me why you need the letter. What programs, jobs,
            or opportunities are you applying to and why?</li
        >
        <li
            >Provide me with specific details about these collaborations and
            conversations we've had, so I can write a letter that is specific
            about our interactions. The more detail, the better, as I cannot
            remember the details of all of our interactions, especially if our
            interactions were long ago or minimal, and a vague high level letter
            will hurt your prospects.</li
        >
        <li>When is the letter (or first letter in a batch) due?</li>
        <li
            >Many students requests a letter for "graduate school". There are
            two kinds of graduate school, masters programs and PhD programs.
            Please specify which kind of graduate school you are applying to.</li
        >
        <li
            >If there is a specific location to upload the letter, provide the
            location. (Most are invitations sent to me that I fill out
            independently, and this is not necessary in this case)</li
        >
    </ul>

    <p>
        There are some exceptions to the policy above. If the "letter" you need
        is really just a form that I fill out attesting that I had you in class,
        I'm happy to do that. If you just need a reference for a job, I'm happy
        to be a reference; I rarely get called, and when I do, it's rarely
        onerous.
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

<Section
    id="phdstudent"
    header="What is it like to be a Ph.D. student and how to I get into one?"
>
    <p> There are many great resources on this: </p>
    <ul>
        <li
            >CRA has a great collection of FAQs called <External
                to="https://sparc.cra.org/">SPARC</External
            > about doing research and applying to PhD programs. I helped create it.</li
        >
        <li>
            Shriram Krishnamurthi has a wonderful guide on <External
                to="https://parentheticallyspeaking.org/articles/us-cs-phd-faq/"
                >Getting a Computer Science PhD</External
            >. It's focused on CS programs, but much of the advice is good for
            any discipline.
        </li>
        <li
            ><External
                to="http://matt.might.net/articles/successful-phd-students/"
                >Matt Might's advice</External
            > has a sobering but practical look, including a <External
                to="https://matt.might.net/articles/phd-school-in-pictures/"
                >fun visual metaphor</External
            > of what it means to do a PhD.</li
        ><li
            >I also like <External
                to="https://freedom-to-tinker.com/2010/09/27/advice-new-graduate-students/"
                >Jennifer Rexford's view of Ph.D. life as individual growth by
                leveraging the group</External
            >, because it complements more pragmatic views.</li
        >
        <li
            >The Economist also has some practical advice on <External
                to="http://www.economist.com/node/17723223?fsrc=scn/fb/wl/ar/mr/disposableacademic"
                >Why doing a PhD is often a waste of time</External
            >.</li
        ><li
            >For a lighter glimpse into Ph.D. life, there is always <External
                to="http://www.phdcomics.com/comics.php">Ph.D. comics</External
            >.
        </li>
    </ul>
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

<Section id="coadvising" header="How should coadvising work?">
    <p
        >I advise a lot of doctoral students, but also advise a lot of faculty
        who advise doctoral students, and one of the most common areas of
        concern that comes up is how to do co-advising well. I wouldn't say I'm
        an expert on this, but I do feel like I know the challenges that arise.
        Here are the questions I think are key for everyone in a co-advising
        situation &mdash; co-advisors and co-advisees &mdash; to have shared
        agreement on:</p
    >

    <ul>
        <li
            ><strong
                >How does each advisor see their role in the student's work and
                success?</strong
            > Are they compatible? In conflict? Some advisors might see students as
            people who can accelerate their research focus; others might view them
            as students who they are mentoring. Others still might view students as
            collaborators. All three of these perspectives come with different expectations
            and relationships, and so it's important for co-advisors to come to some
            shared understanding about them.</li
        >
        <li
            ><strong
                >Who is responsible for the long term funding with the student?
                Is that fixed or dynamic?</strong
            > This is key, because it shapes who feels responsible for resourcing
            a PhD students' time, and offering the student certainty about their funding
            stability.</li
        >
        <li
            ><strong
                >Should both advisors always be a collaborator on a students'
                work</strong
            >. Or does that depend on the paper and project?. Authorship
            expectations are wildly different between researchers, so these
            should be stated and negotiated upfront.</li
        >
        <li
            ><strong
                >When advisors' disagree on how a student should proceed, is it
                the student's job to reconcile the disagreement?</strong
            >. Are they free to choose without consequence from either advisor?
            Or is it the advisors' job to come to consensus? Is that done with
            or without the students' involvement? Everyone should agree on how
            this happens.</li
        >
        <li
            ><strong
                >When there is interpersonal conflict between advisors, how is a
                student shielded from that?</strong
            > Or is a student expected to be the mediator? (Not recommended).</li
        >
    </ul>

    <p>What other questions do you think are important to answer?</p>
</Section>

<Section id="goodwriting" header="How can I become a good technical writer?">
    <p>
        When writing and reviewing scientific papers, there are a lot of
        mistakes one can make. Several have written helpful guide:
    </p>

    <ul>
        <li>
            Shomir Wilson's <External to="https://shomir.net/advice"
                >advice page</External
            >, which spans hidden curricula in CS.
        </li>
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
