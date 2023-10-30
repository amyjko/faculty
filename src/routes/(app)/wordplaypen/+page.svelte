<script lang="ts">
    import External from '$lib/components/External.svelte';
    import Linkable from '$lib/components/Linkable.svelte';
    import Alert from '$lib/components/Alert.svelte';
    import Link from '../../../lib/components/Link.svelte';
</script>

<h1>
    Are you a University of Washington undergraduate interested in making
    programming languages more playful, global, and accessible?
</h1>

<Alert
    >Autumn 2023 we meet in <strong
        >BLD 070 on Tuesdays from 5:30-6:30 pm</strong
    >, starting the first Tuesday of each quarter. Winter 2023 will be
    Wednesdays 5:30-6:20.</Alert
>

<p
    >I'm recruiting students to join our <strong>Wordplaypen</strong>, a team
    that helps design, build, and maintain <External to="https://wordplay.dev"
        >Wordplay</External
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
        team. Because of the number of students contributing, I'll need you're
        help writing these, so I'm not overwhelmed by letter requests. See the <Link
            to="/faq#recommendations">guidelines in my FAQ</Link
        > and additionally send me one paragraph describing in detail what you contributed
        to the project and how you view it's level of quality.
    </li></ul
>

<Linkable id="howcontribute">How do I join the team?</Linkable>

<p
    >First, ensure you are available at the day, time, and location listed at
    the top of this page. Attendance is mandatory unless ill. (In-person is
    preferred, as this time is 95% collaboration time.)</p
>

<p
    >Then, <External
        to="https://ischool.uw.edu/programs/informatics/curriculum/experiential-learning/independent-study"
        >register for INFO 499</External
    > for anywhere from <strong>1-5 credits</strong> by the start of the quarter.
    As part of your proposal, indicate:
</p>

<ul
    ><li>Why you want to participate,</li>
    <li>What skills and lived experience you would bring to the project, and</li
    ><li>How much time you are willing to commit.</li>
</ul>

<p
    >The INFO 499 proposal form (which I don't control) doesn't quite align with
    the questions above. Just put answers wherever they fit best. I'm the only
    one who reviews these, so you're not going to be rejected for filling it
    "wrong" because there is no wrong.</p
>

<p
    >iSchool student services can be slow to process these, but I expect to
    approve all proposals. Don't worry about trying to convince me, or writing
    some big epic essay, or being rejected. This isn't a competitive admissions
    process, I just want some context for your goals and availability, so I can
    prepare a good experience.</p
>

<p>
    Your proposal can be very short; just a few sentences in each section would
    suffice.</p
>

<p>Participation is quarterly and at a minimum will involve: </p>

<ul>
    <li><strong>Onboarding</strong>, if you haven't yet done it.</li>
    <li
        ><strong>A weekly sprint planning meeting</strong> with Amy to build
        community, identify and assign issues, and offer guidance. The first
        meeting we will identify issues in
        <External to="https://github.com/amyjko/wordplay/issues"
            >Wordplay's GitHub repository</External
        > that are suitable for your time commitment and skills.</li
    >
    <li
        ><strong>Asynchronous collaboration</strong> on Slack and GitHub on issues.</li
    >
    <li
        >An end of quarter <strong>celebration</strong> of everyone's contributions!</li
    >
</ul>

<p
    >More credits just means more commitments, so sign up for how much time you
    want to commit. Your INFO 499 grade can be graded or credit/no credit; your
    final assessment will be based on meeting the milestones you set in the
    first week of the quarter, but mostly as a disincentive to overcommit.</p
>

<p
    >I do welcome students on a <strong>volunteer</strong> basis if they can make
    a time commitment, and demonstrate that they actually have capacity to follow
    through with it. It doesn't help the project to promise contributions that you
    can't keep.</p
>

<Linkable id="expectations">What will I be expected to do?</Linkable>

<p>
    Independent studies are _independent_: that generally means that much of
    this quarter will be you, working with others, with minimal guidance. Of
    course, I will provide much guidance. I am the lead on this project, after
    all. But my expectation is that you work independently from until you can't,
    and that you depend on others before you depend on me.
</p>

<p>
    For example, if you don't understand some aspect of the system, first read
    the documentation, if there is any. If there isn't any, ask someone else in
    the #wordplay channel of our Discord. If they don't know, then you should
    probably tag me so I can answer. That's what I mean by "independent".
</p>

<p
    >In terms of roles, you'll be expected to take one or more of the following
    roles:</p
>

<ul>
    <li
        ><strong>Engineering</strong>. Choose an issue ready for fixing or
        buliding, and build it.</li
    >
    <li
        ><strong>Managing</strong>. Make sure everyone has the resources and
        information they need to excel.</li
    >
    <li
        ><strong>Design</strong>. Envision what we will make in collaboration
        with who will make it.</li
    >
    <li
        ><strong>Localization</strong>. Improve existing locales and write new
        ones. Adadpt existing languages for new regions. Build communities of
        students working on the same language to divide up the localization work
        while maintaiing a shared voice. Manage out of date translations.</li
    >
    <li
        ><strong>Verification</strong>. Manually test and learn to write
        automated tests.</li
    >
    <li
        ><strong>Curation</strong>. Write Wordplay examples that help others
        learn the language and find inspiration. Moderate content and online
        community.</li
    >
</ul>

<p>
    Remember: you could do more than one of the above. Your quarter could be a
    bit of localization, some testing, or maybe one big design project plus some
    project management. There's no reason to limit yourself to a single role if
    you want to try multiple. Just make sure the work you commit to is feasible
    for the time you've committed, and that you actually follow through on you
    work.
</p>

<Linkable id="schedule">What's the schedule for the quarter?</Linkable>

Because this is structured as a quarterly independent study, there's a certain
rhythm to our work:

<ul>
    <li
        ><strong>Week 1: Onboarding</strong>. If you're new to the project,
        learn and read everything you need to know to contribute. If you've
        already contributed in one quarter, you'll help train. By the end of the
        first week, everyone should have high level knowledge of everything in
        this document and of the platform's design and implementation.</li
    >
    <li
        ><strong>Week 2: Assignments</strong>. By the end of this week, everyone
        should choose one or more roles, and begin their role (e.g., engineering
        and design roles should choose some issues to work on, project managers
        should choose a set of issues to improve and begin coordinating work on
        Slack). The goal is to pick enough work that it fills the five weeks,
        but not so much that you won't finish it. We'll create a milestone for
        all selected issues.</li
    >
    <li
        ><strong>Weeks 3-9: Work</strong>. Throughout the quarter, work will
        complete at different rates, and we will release continuously, as fixes
        and features are ready.</li
    >
    <li
        ><strong>Week 10: Celebrate</strong>. In the last week of the quarter,
        we celebrate everyone's work by having everyone describe or demo what
        they accomplished. Your presentation is how you earn credit.</li
    >
</ul>

After the quarter, maybe you'll do it all again the next quarter! In summer,
I'll recruit a couple students to work full time on bigger features that take
more time.

<Linkable id="otherquestiosn">I have more questions!</Linkable>

<p
    >First, ensure your question isn't answered on this page. Then, find me on
    Wordplay's <External to="https://discord.gg/Jh2Qq9husy">Discord</External> and
    DM me (do not write me an email). I know it's scary to write professors! But
    I'm friendly, I promise :) Include your name and student status at UW (or set
    up your Discord server profile with this information), so I have context for
    who you are.</p
>
