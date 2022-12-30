<script lang="ts">
    import Person from '$lib/components/Person.svelte';
    import Link from '$lib/components//Link.svelte';
    import { profile } from '$lib/models/stores';
    import External from '$lib/components/External.svelte';
    import { onMount } from 'svelte';
    import { scrollToHash } from '$lib/models/utilities';

    onMount(() => {
        scrollToHash();
    });

    function isPersonHighlighted(id: string) {
        return (
            typeof window !== 'undefined' &&
            window.location.hash.substring(1) === id
        );
    }
</script>

<h1>
    I direct the <em>Code & Cognition Lab</em>.
</h1>

<p>
    My lab includes students from <External to="http://ischool.uw.edu"
        >The Information School</External
    >,
    <External to="http://cs.washington.edu"
        >The Paul G. Allen School of Computer Science & Engineering</External
    >, the <External to="https://education.uw.edu"
        >College of Education</External
    >, and occasionally other units on campus. I run the lab in a doctoral
    student-centered manner: students define their own projects within the scope
    of my interests, and often move me into new research areas.
</p>

<ul>
    <li
        >Our weekly lab meetings are open to any doctoral students or postdocs
        at UW.</li
    >
    <li
        >Read our <Link to={'/lablets'}>lablets</Link> page for details on how we
        engage undergraduates in research.</li
    >
    <li
        >Read our <External
            to="https://docs.google.com/document/d/1LMHv0HdxXEgSNqICt3wtq8xWuH73kP7plZ_KeXyP6qM/edit?usp=sharing"
            >onboarding document</External
        > for context on ever-evolving culture of the lab.</li
    >
    <li>
        Subscribe to our lab calendar (add <strong
            >codeandcognition@uw.edu</strong
        >
        if using UW G Suite, download this <External
            to="https://calendar.google.com/calendar/ical/codeandcognition%40uw.edu/public/basic.ics"
            >ICS file</External
        > otherwise) to see when lab meetings, lablet meetings, and other activities
        are scheduled.
    </li>
</ul>

<p>
    I work hard to be a better mentor and advisor every year. In fact, in 2021,
    my students nominated me for the <External
        to="https://grad.uw.edu/for-faculty-and-staff/list-of-recipients/"
        >Marsha L. Landolt Distinguished Graduate Mentor Award</External
    >, and I won one of two honorable mentions. I guess I'm doing something
    right?
</p>

<div>
    <div>
        <p>
            <strong>Current UW Ph.D. student?</strong> Lurk in
            <i>#codeandcognitionlab</i>
            on <External to="https://computinged-uw.slack.com"
                >ComputingEd@UW</External
            > Slack. DM or email me about your interests. I'm always open to chatting,
            collaborating, serving on committees, and when I have capacity, advising.
            You're also welcome to visit any of our lab meetings. Check out our lab
            calendar (linked above) to see when we're meeting.
        </p>
    </div>
    <div>
        <p>
            <strong>Future UW Ph.D. student?</strong>
            Read my <Link to="/cer">CER FAQ</Link> and <Link to="/publications"
                >recent publications</Link
            > to ensure we share interests. Don't write me to ask if I'm admitting
            students in the coming year; I'm always considering new students unless
            this page says otherwise. Don't ask me to evaluate your CV; I don't have
            time to evaluate your application twice; <em>do</em> write if you
            have specific questions about my lab's recent research. Apply to the <External
                to="http://ischool.uw.edu/phd">iSchool</External
            > or <External
                to="http://www.cs.washington.edu/education/grad/prospective.html"
                >CSE</External
            > in Autumn.
        </p>
    </div>
    <div>
        <p>
            <strong>Current UW undergrad or masters student?</strong>
            Read about <External
                to="https://ischool.uw.edu/programs/informatics/research"
                >engaging in undergrad research</External
            >. If that sounds interesting, read about my lab's
            undergraduate/masters research model, <Link to={'/lablets'}
                >lablets</Link
            >, and follow the instructions there to join. I also recruit for
            full-time summer research assistants in Winter through the <External
                to="https://dub.washington.edu/gettinginvolved.html#tab_prospective"
                >DUB REU program</External
            >.
        </p>
    </div>
</div>

<h3>Current Postdocs</h3>

{#each $profile.getPeople((person) => person.active && person.advised && person.id !== 'ajko' && person.level === 'postdoc') as person}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}

<h3>Current Advisees</h3>

{#each $profile.getPeople( (person) => person.active && person.advised && person.id !== 'ajko' && person.level !== 'faculty' && person.level !== 'postdoc', (person) => {
        return { undergrad: 5, masters: 4, phd: 3, postdoc: 2, faculty: 1, director: 0 }[person.level] * 10000 + person.startdate;
    } ) as person}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}

<h3>Affiliated Ph.D. students</h3>

{#each $profile.getPeople( (person) => person.active && !person.advised && person.level !== 'faculty', (person) => -person.startdate ) as person}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}

<h3 id="collaborators">Faculty Collaborators</h3>

<p
    ><em
        >This isn't a complete list of collaborators, just those I've gotten
        around to adding.</em
    ></p
>

{#each $profile.getPeople( (person) => person.active && person.level === 'faculty', (person) => -person.startdate ) as person}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}

<h3>Former Ph.D. students</h3>

{#each $profile.getPeople( (person) => person.enddate !== null && !person.active && person.advised && person.level === 'phd', (person) => (person.enddate === null ? -Infinity : -person.enddate) ) as person}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}

<h3>Former Affiliated Ph.D. students</h3>

{#each $profile.getPeople( (person) => !person.active && !person.advised && person.level === 'phd', (person) => -person.startdate ) as person}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}

<h3>Former Postdocs</h3>

{#each $profile.getPeople( (person) => !person.active && person.level === 'postdoc', (person) => -person.startdate ) as person}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}

<h3>Former Masters</h3>

{#each $profile.getPeople( (person) => !person.active && person.level === 'masters', (person) => -person.startdate ) as person}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}

<h3>Former Undergrads</h3>
{#each $profile.getPeople( (person) => !person.active && person.level === 'undergrad', (person) => -person.startdate ) as person}
    <Person {person} highlight={isPersonHighlighted(person.id)} />
{/each}
