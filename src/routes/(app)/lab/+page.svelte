<script lang="ts">
    import Person from '$lib/components/Person.svelte';
    import Link from '$lib/components//Link.svelte';
    import { profile } from '$lib/models/stores';
    import External from '$lib/components/External.svelte';
    import { onMount } from 'svelte';
    import { scrollToHash } from '$lib/models/utilities';
    import Title from '$lib/components/Title.svelte';
    import Linkable from '$lib/components/Linkable.svelte';
    import Emoji from '$lib/components/Emoji.svelte';

    onMount(() => {
        scrollToHash();
    });

    function isPersonHighlighted(id: string) {
        return (
            typeof window !== 'undefined' &&
            window.location.hash.substring(1) === id
        );
    }

    let affiliated = $derived($profile.getPeople(
        (person) =>
            person.active && !person.advised && person.level !== 'faculty',
        (person) => -person.startdate
    ));
</script>

<Title text="Lab" />

<h1>
    I mentor PhD students, undergraduates, postdocs, and teachers on research as
    part of the broader <Link to="https://computinged.uw.edu/"
        >Center for Learning, Computing, and Imagination</Link
    >.
</h1>

<p>
    My students are typically from <External to="http://ischool.uw.edu"
        >The Information School</External
    >,
    <External to="http://cs.washington.edu"
        >The Paul G. Allen School of Computer Science & Engineering</External
    >, the <External to="https://education.uw.edu"
        >College of Education</External
    >, and occasionally other units on campus. I run the lab in a doctoral
    student-centered manner: students define their own projects within the scope
    of my interests, and often move me into new research areas. I work hard to
    be a better mentor and advisor every year. In fact, in 2021, my students
    nominated me for the <External
        to="https://grad.uw.edu/for-faculty-and-staff/list-of-recipients/"
        >Marsha L. Landolt Distinguished Graduate Mentor Award</External
    >, and I won honorable mention.
</p>

<p
    >I'm always recruiting new doctoral students. For this 2024 admissions
    cycle, I'd like to work with new students on:</p
>

<ul>
    <li
        ><em
            >How can programmable media support all learners' abilities and
            language fluencies?</em
        >
        For example, I work on <External to="https://wordplay.dev"
            ><Emoji symbol="💬" /> <strong>Wordplay</strong></External
        >, an accessible, multilingual educational programming language for
        creating interactive typography. I'd love to collaborate with you on
        that, or create new media with you, in partnership with teachers.</li
    >
    <li
        ><em
            >How can teachers be culturally responsive and sustaining at scale?</em
        > Teachers consistently share how hard it is to be responsive with the incredible
        diversity of student needs, identities, interests, and assets. How can we
        make that easier, through new teaching methods, new learning technologies,
        and new media?</li
    >
</ul>

<p
    >Read our <External
        to="https://docs.google.com/document/d/1LMHv0HdxXEgSNqICt3wtq8xWuH73kP7plZ_KeXyP6qM/edit?usp=sharing"
        >onboarding document</External
    > for context on ever-evolving culture of the lab.</p
>

<p>
    <strong>Current UW Ph.D. student?</strong> Lurk in
    <i>#research</i>
    on <External to="https://computinged-uw.slack.com">LCI</External> Slack. DM or
    email me about your interests. I'm always open to chatting, collaborating, serving
    on committees, and when I have capacity, advising. You're also welcome to visit
    a <External to="https://computinged.uw.edu/">LCI research meeting</External
    >, meeting the many computing education scholars on campus.
</p>
<p>
    <strong>Prospective UW Ph.D. student?</strong>
    Read my <Link to="/cer">CER FAQ</Link> and <Link to="/publications"
        >recent publications</Link
    > to ensure we share interests. Don't write me to ask if I'm admitting students
    in the coming year; I'm always considering new students unless this page says
    otherwise. Don't ask me to evaluate your CV (I don't have capacity to evaluate
    your application twice). Don't ask me for a meeting (I can't meet with every
    prospective outside of our review process,
    <em>and</em>
    meet with students during our review process.) <em>Do</em> write if you have
    specific questions about my lab's recent research that aren't answered on my
    website. Apply to the <External to="http://ischool.uw.edu/phd"
        >iSchool</External
    > or <External
        to="http://www.cs.washington.edu/education/grad/prospective.html"
        >CSE</External
    > in Autumn.
</p>
<p>
    <strong>Current UW undergrad or masters student?</strong>
    Read about <External
        to="https://ischool.uw.edu/programs/informatics/research"
        >engaging in undergrad research</External
    >. If that sounds interesting, read about <Link to={'/wordplay'}
        >Wordplay</Link
    >, and follow the instructions there to join. I also recruit for full-time
    summer research assistants in Winter through the <External
        to="https://dub.washington.edu/gettinginvolved.html#tab_prospective"
        >DUB REU program</External
    >.
</p>

<Linkable id="current-postdoc">Current Postdocs</Linkable>

{#each $profile.getPeople((person) => person.active && person.advised && person.id !== 'ajko' && person.level === 'postdoc') as person}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}

<Linkable id="current-advisees">Current Advisees</Linkable>

{#each $profile.getPeople( (person) => person.active && person.advised && person.id !== 'ajko' && person.level !== 'faculty' && person.level !== 'postdoc', (person) => {
        return { undergrad: 6, masters: 5, teacher: 4, phd: 3, postdoc: 2, faculty: 1, director: 0 }[person.level] * 10000 + person.startdate;
    } ) as person}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}

{#if affiliated.length > 0}
    <Linkable id="affiliate-phd">Affiliated Ph.D. students</Linkable>

    {#each affiliated as person}
        <Person {person} highlight={isPersonHighlighted(person.id)} />
    {/each}
{/if}

<Linkable id="collaborators">Active Faculty Collaborators</Linkable>

<p
    ><em
        >This isn't a complete list of collaborators, just those I've gotten
        around to adding.</em
    ></p
>

{#each $profile.getPeople( (person) => person.active && person.level === 'faculty', (person) => -person.startdate ) as person}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}

<Linkable id="former-phd">Former Ph.D. students</Linkable>

{#each $profile.getPeople( (person) => !person.active && person.advised && person.level === 'phd', (person) => (person.enddate === null ? -Infinity : -person.enddate) ) as person}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}

<Linkable id="former-affiliated-phd">Former Affiliated Ph.D. students</Linkable>

{#each $profile.getPeople( (person) => !person.active && !person.advised && person.level === 'phd', (person) => -person.startdate ) as person}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}

<Linkable id="former-postdoc">Former Postdocs</Linkable>

{#each $profile.getPeople( (person) => !person.active && person.level === 'postdoc', (person) => -person.startdate ) as person}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}

<Linkable id="former-masters">Former Masters</Linkable>

{#each $profile.getPeople( (person) => !person.active && person.level === 'masters', (person) => -person.startdate ) as person}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}

<Linkable id="former-undergrad">Former Undergrads</Linkable>
{#each $profile.getPeople( (person) => !person.active && person.level === 'undergrad', (person) => -person.startdate ) as person}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}
