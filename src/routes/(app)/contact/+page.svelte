<script lang="ts">
    import Alert from '$lib/components/Alert.svelte';
    import Block from '$lib/components/Block.svelte';
    import External from '$lib/components/External.svelte';
    import Link from '$lib/components/Link.svelte';
    import Image from '$lib/components/Thumbnail.svelte';
    import Title from '$lib/components/Title.svelte';
</script>

<Title text="Contacting Me" />

<h1>Need to chat?</h1>

<p>
    Before you reach out, make sure you've read my website. It has a lot of
    answers! And if you want to talk about something sensitive, a few things to
    note:</p
>

<ul>
    <li
        >I am one of the school's <Link
            to="https://www.washington.edu/cssc/facultystaff/academic-misconduct/"
            >academic conduct officer</Link
        >. I fact find and make judgements about instructors' reports of
        cheating.</li
    >
    <li
        >I am one of the school's <Link
            to="https://ischool.uw.edu/about/conflict-resolution"
            >conflict facilitators</Link
        >. If you're facing conflict in the school, review the link above.</li
    >
    <li
        >I am one of the iSchool's Title IX
        <Link
            to="https://www.washington.edu/civilrights/making-a-report/employee-reporting-obligations/"
            >Officials Required to Report</Link
        >. If I learn of violence, harassment, or discrimination, I am required
        to
        <Link to="https://www.washington.edu/titleix/report/"
            >submit a report</Link
        >. Case managers will reach out to victims with supportive measures,
        resources, and how to submit a formal complaint.
    </li>
    <li
        >If you're unsure whether to reach out to me, I encourage you to contact
        a
        <Link to="https://livewell.uw.edu/survivor-support-advocacy/"
            >confidential advocate</Link
        >.
    </li>
</ul>

<Block link="https://goo.gl/maps/7c3irRBubGvXYEtZ8" header="Office hours">
    {#snippet image()}
        <Image
            url={'/images/contact/office.jpg'}
            alt="A photograph of my office."
        />
    {/snippet}
    <span>
        &mdash; If you're a current UW student, contact me via one of the
        channels below to see if a meeting makes sense. If you're in one my
        classes, see the syllabus for my course office hours. If you're not a UW
        student, write me an email; we'll meet if appropriate.
    </span>
</Block>

<Block link="mailto:ajko@uw.edu" header="Email">
    {#snippet image()}
        <Image url={'/images/contact/uw.jpg'} alt="The UW block logo." />
    {/snippet}
    &mdash; I primarily use email to communicate with people I don't know and occasionally
    with collaborators who refuse to use anything else. If you're a student, a potential
    collaborator, or anyone else, write me an email to connect. I read email once
    in the morning each weekday. I don't read on weekends unless I'm super engaged
    on a project.
</Block>

<Block link="https://uwdub.slack.com/" header="Slack">
    {#snippet image()}
        <Image url={'/images/contact/slack.jpg'} alt="The Slack logo." />
    {/snippet}
    <span>
        &mdash; Slack is my preferred medium for collaboration with my Ph.D.
        students and other collaborators at UW and beyond. During the work day I
        treat Slack like instant messaging, and after hours I treat it like
        email, reading it in the morning. If you're at UW, join one of the
        Slacks and DM me. I'm usually pretty responsive throughout the day.
        <ul>
            <li
                ><External to="https://computinged-uw.slack.com"
                    >ComputingEd@UW Slack</External
                >. Our Computing Education community.</li
            >
            <li
                ><External to="https://uwdub.slack.com">DUB Slack</External>.
                Our HCI + Design community.</li
            >
        </ul>
    </span>
</Block>

<Block link="https://twitter.com/amyjko" header="Twitter">
    {#snippet image()}
        <Image url={'/images/contact/twitter.jpg'} alt="The Twitter logo." />
    {/snippet}
    &mdash; I used to be fairly active on Twitter, but mostly left in June 2022.
    You can find me on <External to="https://bsky.app/profile/amyko.phd"
        >Bluesky</External
    >, Mastodon <External to="https://hci.social/@amyjko"
        >@amyjko@hci.social</External
    >. I mostly post on Bluesky, and mostly just links to my writing.
</Block>

<Block link="https://www.linkedin.com/in/ajko/" header="LinkedIn">
    {#snippet image()}
        <Image url={'/images/contact/linkedin.jpg'} alt="The LinkedIn logo." />
    {/snippet}
    &mdash; I use LinkedIn as my primary contact manager. I usually only accept connections
    from people I've met IRL and have a professional relationship with (students,
    collaborators, professional colleagues). I read my LinkedIn messages as part
    of my morning email routine.
</Block>

<Block link="https://www.facebook.com/amyjko" header="Facebook">
    {#snippet image()}
        <Image url={'/images/contact/facebook.jpg'} alt="The Facebook logo." />
    {/snippet}
    &mdash; I primarily use Facebook for non-work relationships (though that boundary
    is blurry). I usually only accept connections from people I've met IRL and have
    a social relationship with, so if I have a purely professional relationship with
    you, please don't be offended if I decline your friend request. Add me on LinkedIn
    instead.
</Block>

<Block link="http://github.com/amyjko" header="GitHub">
    {#snippet image()}
        <Image url={'/images/contact/github.jpg'} alt="The Github logo." />
    {/snippet}
    &mdash; I host a lot of my content and software projects on GitHub. Feel free
    to submit issues and pull requests to my various repositories.
</Block>

<Block header="Phone">
    {#snippet image()}
        <Image url={'/images/contact/phone.jpg'} alt="A telephone." />
    {/snippet}
    &mdash; Don't call me on the phone. It's never the right time. Write me on one
    of the platforms above first and we can schedule a call if necessary. If you
    somehow find my office phone number and leave a voicemail, I will get it eventually.
</Block>
