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
    >I'm recruiting students to join our <strong>Wordplaypen</strong>, a
    community that helps design, build, and maintain <External
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
    I'm excited to work with any University of Washington undergraduate excited
    about that vision and who has:
</p>

<ul
    ><li>A passion for equity and justice.</li>
    <li
        >(Optionally) lived experience with disability and/or fluency in
        non-English languages. This is because a major goal of Wordplay is
        accessibility and global inclusion, and we can't meaningfully achieve
        that without your knowledge and lived experience.</li
    ><li
        >Basic knowledge of git, programming, and optionally design (e.g. from
        INFO 201, CSE 154, INFO 340, INFO 360, or other experience). And I do
        mean basic &mdash; it's okay if you're still just learning. This is an
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
    >First, ensure you are available at the <Link to="/wordplaypen/#meetups"
        >day, time, and location</Link
    > listed at on this page. Attendance is mandatory unless ill. (In-person is preferred,
    as this time is 95% collaboration time.)</p
>

<p
    >Next, decide of you want to volunteer or get credit. Both are the same
    activity, but for credit, you'll have to do a bit more to earn the credit.
    If you just want to volunteer, you can skip to the <Link
        to="/wordplaypen#volunteer">next question</Link
    >.</p
>

<p
    >If you want credit and are a University of Washington student, register <External
        to="https://ischool.uw.edu/programs/informatics/curriculum/experiential-learning/independent-study"
        >INFO 499 independent study credit</External
    > or for <External
        to="https://www.cs.washington.edu/academics/ugrad/research#registration"
        >CSE 499</External
    > research credit before the quarter starts. In both cases, I approve it, and
    then advisors send you an add code. You can register for anywhere from
    <strong>1-5 credits</strong>; think about how much time you want to
    contribute (1 credit = 3 hours/week). For the INFO form, answer these
    questions anywhere on the proposal form:
</p>

<ul
    ><li>Why you want to participate,</li>
    <li>What skills and lived experience you would bring to the project, and</li
    ><li>How much time you are willing to commit.</li>
</ul>

<p
    >Just put answers wherever they fit best. I'm the only one who reviews
    these, so you're not going to be rejected for filling it "wrong" because
    there is no wrong.</p
>

<p
    >Advising teams process these manually, so be patient, and if you want an
    update, write them, not me. And don't worry about trying to convince me, or
    writing some big epic essay, or being rejected. This isn't a competitive
    admissions process, I just want some context for your goals and
    availability, so I can prepare a good experience.</p
>

<p
    >Registration for credit is quarterly. If you want to participate again,
    you'll need to register again, or continue as a volunteer (see below).</p
>

<Linkable id="volunteer">Can I volunteer instead?</Linkable>

<p
    >Yes! The project is open source, and so anyone in the world may volunteer.
    Just follow the <Link
        to="https://github.com/wordplaydev/wordplay/wiki/contribute"
        >contributor guidelines</Link
    > to learn how. You may volunteer if you can make a time commitment, and demonstrate
    that they actually have capacity to follow through with it. (It doesn't help
    the project to promise contributions that you can't keep.)</p
>

<p
    >If you're at UW or around Puget Sound and volunteering, you're welcome to
    join the Wordplaypen meetups.
</p>

<Linkable id="meetups">When do we meet?</Linkable>

This changes quarterly:

<Alert>
    <ul>
        <li
            >Winter 2024 meets in <strong
                >BLD 070 Wednesdays 5:30-6:30 pm</strong
            >, starting January 3rd</li
        >
        <li
            >Spring 2024 meets in <strong
                >BLD 070 Wednesdays 5:30-6:30 pm</strong
            >, starting March 27th</li
        >
        <li>Summer 2024 will happen! Location and time TBD. </li>
        <li>Wordplaypen will almost certainly continue through AY 2024-205.</li
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
        Discord #updates)</li
    >
    <li
        >Everyone will post a 1-sentence update in Discord #updates, so we can
        celebrate accomplishments and identify needs. Updates should include
        things like: 1) something you accomplished that you're proud of, 2) help
        that you need, 3) progress that you made</li
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

<p>In the last meeting of the quarter (during finals week), we will: </p>

<ul>
    <li>Have snacks of your choice!</li>
    <li>Share something they're proud of this quarter</li>
    <li
        >Clean up any remaining work: 1) commit and push uncommited code, 2)
        comment on issues to document where you left the work, and 3) unassign
        yourself from issues you will not finish</li
    >
</ul>

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
    >To keep assessments at a minimum, our current practice is that every week,
    by the time of our gathering, we expect you to submit a progress report to
    the Discord channel of the team you're on (e.g., if you're working on
    verification, you should submit to #verification. It should follow this
    format:</p
>

<pre>
    Week [#, where the first week of the quarter is week 1] 
    • What I learned: [insert details] 
    • Progress: [insert issue #s you worked on ] 
    • Help I need: [insert any help you need] 
    • Collaboration I did: [who did you work with?] 
    • Work I got approved: [issues triaged, designs approved, PRs merged, etc.]
</pre>

<p
    >If you have nothing to report, you should say so, and why. Your manager
    will mark these for credit, and use them to facilitate your work with Amy
    and others in the community.</p
>

<p>You only have to do two things for credit:</p>

<ul
    ><li
        >Submit your weekly reports, starting in week 2 of the quarter, with
        your last report the last week before finals week. If you submit on time
        and have something to report, then you get 1 point per report. If its
        late or you have nothing to report, then you get 0 points.
    </li><li
        >Before our last meeting during finals week, submit a ~500 word
        reflection to Discord <strong>#reflections</strong>, detailing what
        worked well about this quarter's workflow, and what should be improved.
        Make sure your server Nickname is your real name, so I can give you
        credit. Amy will read these all in detail to revise the design of the
        workflow for the next quarter.</li
    >
</ul>

<p
    >Possible points sum to 10; we'll convert to a percent, and then convert to
    a grade point using the Informatics grading scale. If you're registered for
    credit/no credit, you'll receive credit if: 1) you earned at least 8 points,
    and 2) you submitted the final reflection.</p
>

<Linkable id="start">How do I get started?</Linkable>

<p
    >Everything you need to start is on Wordplay the <External
        to="https://github.com/wordplaydev/wordplay/wiki/contribute"
        >contribute</External
    > page, which is the same onboarding for any contributor. You can read that before
    the quarter starts, but be warned that we revise between each quarter, so you
    might want to wait until the quarter starts to avoid having to re-read.</p
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
