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

<Alert
    ><ul>
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
    </ul>
</Alert>

<p
    >I'm recruiting students to join our <strong>Wordplaypen</strong>, a team
    that helps design, build, and maintain <External to="https://wordplay.dev"
        ><Emoji symbol="💬" /> Wordplay</External
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
    >iSchool student services can be slow to process these, and I don't have
    visibility into their backlog or timeline. If you want an update, write
    them. However, I do expect to approve all proposals, so don't fret too much.
    And don't worry about trying to convince me, or writing some big epic essay,
    or being rejected. This isn't a competitive admissions process, I just want
    some context for your goals and availability, so I can prepare a good
    experience.</p
>

<p>
    Your proposal can be very short; just a few sentences in each section would
    suffice.</p
>

<p
    >Participation is quarterly. If you want to participate again, you'll need
    to register again, or continue as a volunteer. You may volunteer if you can
    make a time commitment, and demonstrate that they actually have capacity to
    follow through with it. It doesn't help the project to promise contributions
    that you can't keep.</p
>

<Linkable id="expectations">What will I be expected to do?</Linkable>

<p
    >See the <External
        to="https://github.com/wordplaydev/wordplay/wiki/wordplaypen"
        >Wordplaypen wiki</External
    > on the project's GitHub page for expectations.</p
>

<Linkable id="otherquestiosn">I have more questions!</Linkable>

<p
    >First, ensure your question isn't answered on this page or the <External
        to="https://github.com/wordplaydev/wordplay/wiki/wordplaypen"
        >Wordplaypen wiki</External
    > page. Then, find me on Wordplay's <External
        to="https://discord.gg/Jh2Qq9husy">Discord</External
    > and DM me (do not write me an email). I know it's scary to write professors!
    But I'm friendly, I promise :) Include your name and student status at UW (or
    set up your Discord server profile with this information), so I have context
    for who you are.</p
>
