<script lang="ts">
    import External from '$lib/components/External.svelte';
    import Linkable from '$lib/components/Linkable.svelte';
    import Alert from '$lib/components/Alert.svelte';
    import Link from '../../../lib/components/Link.svelte';
    import Emoji from '$lib/components/Emoji.svelte';
    import Title from '$lib/components/Title.svelte';
</script>

<Title text="Wordplaypen" />

<h1>
    Are you a University of Washington undergraduate interested in making
    programming languages more playful, global, and accessible?
</h1>

<p
    >I'm recruiting volunteers to join our <strong>Wordplaypen</strong>, an open
    source community that helps design, build, and maintain <External
        to="https://wordplay.dev"><Emoji symbol="💬" /> Wordplay</External
    >. Wordplay is a playful programming platform for creating accessible,
    interactive typography that celebrates the world's languages. Our vision is
    <em
        >to create a global platform for creative expression with language that
        celebrates every indivdual's culture, identity, and values, while also
        enabling youth to learn about the power and limits of computing</em
    >.
</p>

<p>
    I'm excited to work with anyone excited about that vision &mdash; especially
    students &mdash; and who has:
</p>

<ul
    ><li>A passion for equity and justice.</li>
    <li
        >(Optionally) lived experience with disability and/or fluency in
        non-English languages. This is because a major goal of Wordplay is
        accessibility and global inclusion, and we can't meaningfully achieve
        that without your knowledge and lived experience.</li
    ><li
        >Basic knowledge of Git, GitHub, programming, or design (e.g. from INFO
        201, CSE 154, INFO 340, INFO 360, or other experience). And I do mean
        basic &mdash; it's okay if you're still just learning. This is an
        opportunity to strengthen your skills with others.</li
    >
</ul>

<p
    >You don't need to know how programming languages are built, but you'll
    probably learn about it by contributing.</p
>

<p>Here are some things you might contribute:</p>

<ul>
    <li>Designing and redesigning the language and platform</li>
    <li>Implementing new user interface features </li>
    <li>Improving correctness and reliability of current features</li>
    <li>Localizing to one or more of the world's languages</li>
    <li>Writing automated tests</li>
    <li>Creating Wordplay examples</li>
    <li>Verifying accessibility</li>
    <li>Moderating an online community</li>
    <li
        >Teaching peers, including programming, testing, software engineering,
        and design skills</li
    >
    <li
        >If you are a student at UW, you may earn elective credit for
        participating.</li
    >
</ul>

<Linkable id="whycontribute">Why should I contribute?</Linkable>

<p>Many reasons!</p>

<ul>
    <li
        >Learn <External to="https://www.typescriptlang.org/"
            >TypeScript</External
        >, <External to="https://kit.svelte.dev/">SvelteKit</External>, and/or <External
            to="https://firebase.google.com/">Firebase</External
        >, and strengthen your knowledge in HTML, CSS, and JavaScript.</li
    >
    <li
        >Gain practical skills in software engineering, including bug triage,
        Git workflows, code reviews, verification, and programming languages.
        (INFO 442 is a great place to do that too, but unlike that course, this
        will be 100% hands-on.)
    </li>
    <li
        >Contribute to a programming platform that centers equity and inclusion,
        and research on how to achieve that.</li
    >
    <li
        >Be credited on the Wordplay website and repository as a contributor,
        which can be helpful for resume building.</li
    >
    <li
        >Get a letter of recommendation from me about your contributions to the
        community. Because of the number of students contributing, I'll need
        you're help writing these, so I'm not overwhelmed by letter requests.
        See the <Link to="/faq#recommendations">guidelines in my FAQ</Link> and additionally
        send me one paragraph describing in detail what you contributed to the project
        and how you view it's level of quality.
    </li></ul
>

<Linkable id="howcontribute">How do I join the community?</Linkable>

<p
    >Anyone that completes the steps below &mdash; not only UW students &mdash;
    is welcome to contribute.
</p>

<ol>
    <li
        ><strong>Check your calendar</strong>. First, ensure you are available
        to attend meetups at the <Link to="/wordplaypen/#meetups"
            >day, time, and location</Link
        > listed below. Attendance is not mandatory to volunteer, but highly encouraged,
        as our meetups are vibrant places to learn and collaborate. If you register
        for credit, attendance is mandatory unless ill.</li
    >
    <li
        ><strong>Apply</strong>. Next, fill out the <Link
            to="https://forms.gle/8iKs2CqAWzxNYVcG8"
            >Wordplaypen application</Link
        >. It is extensive, requiring reading, writing, and reflection, and some
        careful planning about your time and commitments. We recommend skimming
        the application first, seeing what's required, and making sure you
        actually want to commit to volunteering. The effort this application
        requires is intentional: we want volunteers who are invested in the
        vision and the project's success, and will be reliable, sustained
        contributors for at least 3 months, if not much longer. After you fill
        out the application, expect us to reach out either with a welcome email,
        or questions about your application.
    </li>

    <li
        ><strong>Join Discord</strong>. While you wait for a reply, join the <Link
            to="https://discord.gg/Jh2Qq9husy">Discord server</Link
        >, where contributors and creators connect. It's okay to join before
        your application is approved; it's an open server.</li
    >
    <li
        ><strong
            >Optionally register for credit during Autumn, Winter, or Spring
            quarter</strong
        >. If you are a UW student and you want credit for participation during
        the academic year (not summer), complete the steps above first, and then
        choose one of the these ways to register before the next quarter begins:
        <ul>
            <li
                ><strong>INFO 494 Research Studio</strong>
                <em>Justice-Centered Programming Languages</em>. Receive 2
                credits of elective credit as compensation for 6 hours/week of
                volunteer effort. Includes some minor additional work for
                credit.
            </li>
            <li
                ><strong>CSE 499</strong>. If you are a CSE student and do not
                want to register for INFO 494, you may register for 2-4 credits
                of <External
                    to="https://www.cs.washington.edu/academics/ugrad/research#registration"
                    >CSE 499</External
                > instead. In your proposal, you may simply refer to the application
                you filled out.</li
            >
        </ul>
    </li>
</ol>

<Linkable id="when">When do we meet?</Linkable>

This changes quarterly:

<Alert>
    <ul>
        <li
            >Summer 2024 meets in <strong
                >MGH 015 Tuesday + Thursday 4:00-5:30 pm</strong
            >, first day June 18th, last day August 27th.
        </li>
        <li
            >Autumn 2024 meets in <strong>DEN 303 Wednesdays 5:30-6:50pm</strong
            >, first day September 25th, last day December 4th.</li
        ></ul
    >
</Alert>

<p
    >We currently gather once a week, using the collocated time to build
    community, make friendships, and help each other. In person gathering is
    important, because it allows for trust building and learning that's not
    possible online. If we're doing it right, you should look forward to
    gathering and when you leave, you should have a sense of being supported,
    having community, and knowing more than you did before! As noted above, we
    expect you at every meeting unless you are ill or have a conflict.</p
>

<Linkable id="meetups">What happens at the meetups?</Linkable>

<p>At our first meeting:</p>

<ul>
    <li
        >Amy will share the vision of the project (see <Link
            to="https://docs.google.com/presentation/d/1TEUSsTXGW2y0yv9tt2KcoVQPbkUONejB1zms4H-bEJQ/edit#slide=id.g28dc14f0177_0_21"
            >slides for a preview)</Link
        ></li
    >
    <li
        >For those who signed up for credit, we'll discuss the assessments, so
        you know how to earn credit.</li
    >
    <li
        >We'll network briefly, to help you meet each other and make friends.
        You'll share your name, optional pronouns, affiliation, and why you
        joined the community.</li
    >
    <li
        >We'll identify returning contributors, who will act as mentors to help
        you orient in the community, and assign mentors to newcomers.</li
    >
</ul>

<p>At all other meetings: </p>

<ul>
    <li
        >Amy will give brief updates to the whole group (and also post these in
        Discord #weekly-highlights)</li
    >
    <li
        >Everyone will post a 1-sentence update in Discord #weekly-highlights,
        so we can celebrate accomplishments and identify needs. Updates should
        include things like: 1) something you accomplished that you're proud of,
        2) help that you need, 3) progress that you made</li
    >
    <li
        >Contributors will huddle by role (and if they don't have a role, huddle
        with other contributors without a role).</li
    >
    <li
        >After the role huddle, mentors will huddle with the faciliators,
        surfacing needs</li
    >
    <li
        >After huddles, people will work in small groups, collaborating,
        helping, asking questions, and making progress.</li
    >
</ul>

<p
    >In the last meeting of the quarter (the week before finals week), we will:
</p>

<ul>
    <li>Have snacks of your choice!</li>
    <li>Share something you're proud of this quarter</li>
    <li
        >Clean up any remaining work: 1) commit and push uncommited code, 2)
        comment on issues to document where you left the work, including any
        branches you created associated with an issue, and 3) unassign yourself
        from issues you will not finish</li
    >
</ul>

<p>We will not meet during finals week.</p>

<Linkable id="grades">How will I be graded?</Linkable>

<p
    >Wordplay is first and foremost a community, not a class. If you sign up for
    credit, think of the credit like something added on top of your community
    contributions, like a receipt for the contributions you made. Refer to the
    Canvas page for the INFO 494 or CSE 499 that you signed up for. It should be
    posted a few weeks before class starts.</p
>

<Linkable id="start">How do I get started?</Linkable>

<p
    >Once you've been invited into the community, everything you need to start
    is on Wordplay the <External
        to="https://github.com/wordplaydev/wordplay/wiki/contribute"
        >contribute</External
    > page, which is the same onboarding for any contributor. You can read that at
    any time.</p
>

<Linkable id="otherquestions">I have more questions!</Linkable>

<p
    >Everything else should be answered on the <External
        to="https://github.com/wordplaydev/wordplay/wiki/contribute"
        >contribute</External
    > page. If you don't find your answer, fid me on Wordplay's <External
        to="https://discord.gg/Jh2Qq9husy">Discord</External
    > and DM me (do not write me an email). I know it's scary to write professors!
    But I'm friendly, I promise :) Include your name and student status at UW (or
    set up your Discord server profile with this information), so I have context
    for who you are.</p
>
