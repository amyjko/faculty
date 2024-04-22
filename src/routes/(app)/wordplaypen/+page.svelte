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
        > listed below. Attendance is mandatory unless ill, traveling; it's okay
        to not attend occasionally when you have time conflicts, or if you are contributing
        remotely. We are not currently offering hybrid, just because the time is
        95% fluid collaboration time.</li
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
            >Spring 2024 meets in <strong
                >BLD 070 Wednesdays 5:30-6:30 pm</strong
            >, starting March 27th</li
        >
        <li
            >Summer 2024 meets in <strong
                >MGH 015 Monday + Wednesday 4:30-6:00 pm</strong
            >, starting June 17th and ending August 28th.
        </li>
        <li
            >Autumn 2024 meets in <strong>DEN 303 Wednesdays 5:30-6:50pm</strong
            >.</li
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
    <li>Share something they're proud of this quarter</li>
    <li
        >Clean up any remaining work: 1) commit and push uncommited code, 2)
        comment on issues to document where you left the work, and 3) unassign
        yourself from issues you will not finish</li
    >
</ul>

<p>We will not meet during finals week.</p>

<Linkable id="grades">How will I be graded?</Linkable>

<p
    >Wordplay is first and foremost a community, not a class, and so grades and
    credit are a very low priority. More important is that you meet the
    communities norms and expectations, which are detailed on the <External
        to="https://github.com/wordplaydev/wordplay/wiki/contribute"
        >contributor</External
    > page.</p
>

<Alert>
    <strong>Note</strong>: If you're reading this prior to the quarter you're
    joining, note that we may change assessments before each quarter, in order
    to improve the experience. Consider the current asssessments an example of
    how you might be evaluated. The official assessments for each quarter are
    announced at the beginning of each quarter.
</Alert>

<p
    >That said, if you have registered for credit, here is how we will determine
    whether you get credit:</p
>

<ul>
    <li
        >Before week 3 of the quarter, you'll submit a <strong>contract</strong>
        proposal to Canvas. The contract should include:</li
    >
    <ul>
        <li
            >The <strong>role(s)</strong> you would like to take on (as defined
            in the <Link
                to="https://github.com/wordplaydev/wordplay/wiki/contribute#choose-a-role"
                >contributor docs</Link
            >). You can have multiple roles!</li
        >
        <li
            >Your <strong>GitHub username</strong> (so we can give you relevant contributor
            permissions)</li
        >
        <li
            >A set of one or more <strong>goals</strong> you want to make by the
            end of the quarter, including things like:</li
        >
        <ul>
            <li>technologies you want to learn,</li>
            <li
                >specific issues you want to complete and get merged into
                production (including new issues you've submitted for work you
                want to contribute),
            </li>
            <li
                >anything else you do to help the community, within a role, or
                outside of pre-defined roles</li
            >
        </ul>
        <li
            >For each goal, the <strong>evidence</strong> you will provide of the
            accomplishment by the end of the quarter. Evidence includes things like
            closed issues, approved design proposals, Wordplay examples you created,
            feedback you received on your mentorship, explanations of concepts you
            learned, examples of things you created with skills you learned. I will
            not rigorously evaluate you on these &mdash; I trust you to be honest
            &mdash; but planning the evidence you gather will help focus your work.</li
        >
        <ul>
            <li
                >For any issue associated with a goal, <strong
                    >post a comment on issue</strong
                >
                itself describing the status of the issue, any work you completed
                on it, and whether you'll be continuing work on the issue past the
                end of the quarter. If you are not continuing work, make sure you've
                included all work materials in the issue so that others can resume
                where you left off, and <strong>unassign</strong> yourself from the
                issue, so others know they are free to work on it.</li
            >
        </ul>
        <li
            >The <strong>number of credits</strong> you registered for, and
            <strong>why</strong> you think the goals are possible in that amount
            of time committed.</li
        >
        <li
            ><em
                >Amy will iterate with you on these in Canvas until it seems
                like a reasonable scope, and once approved, will give you
                contributor privileges. Submit as early in the quarter as you
                like; no need to wait until the third week.</em
            ></li
        >
    </ul>
    <li
        >Before the last meetup of the quarter (the week before finals week), a
        document submitted to Canvas providing:</li
    >
    <ul>
        <li
            >An updated version of the contract that including any evidence of
            your accomplishments. If there were accomplishments you did not
            complete, why, and what remains to accomplish them.</li
        >
        <li
            >A ~500 word reflection detailing what worked well about this
            quarter's workflow and what should be improved.</li
        ></ul
    >
</ul>

<p
    >Both of these are graded <strong>satisfactory/unsatisfactory</strong>. The
    only way to get an unsatisfactory on either is to 1) not submit it on time
    or 2) not include a required element. For those registering for credit/no
    credit, you'll receive credit if both elements are satisfactory. For those
    registering for graded credit, getting satisfactory on one is a 2.0 and on
    both is a 4.0.</p
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
