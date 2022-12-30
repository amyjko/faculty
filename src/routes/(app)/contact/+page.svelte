<script lang="ts">
    import Block from '$lib/components/Block.svelte';
    import External from '$lib/components/External.svelte';
    import Image from '$lib/components/Thumbnail.svelte';
</script>

<h1> There are many ways to reach me: </h1>

<Block link="https://goo.gl/maps/7c3irRBubGvXYEtZ8" header="Office hours">
    <Image
        slot="image"
        url={'/images/contact/office.jpg'}
        alt="A photograph of my office."
    />
    <span>
        &mdash; I'm on sabbatical until September 2023 and not holding office
        hours.
        <!-- If you're a current UW student 
		Contact me via one of the channels below to see if a meeting makes sense. 
		If you're in one my classes, see the syllabus for my course office hours.
		If you're not a UW student, write me an email; we'll meet if appropriate. -->
    </span>
</Block>

<Block link="mailto:ajko@uw.edu" header="Email">
    <Image
        slot="image"
        url={'/images/contact/uw.jpg'}
        alt="The UW block logo."
    />
    &mdash; I primarily use email to communicate with people I don't know and occasionally
    with collaborators who refuse to use anything else. If you're a student, a potential
    collaborator, or anyone else, write me an email to connect. I read email once
    in the morning each weekday. I don't read on weekends unless I'm super engaged
    on a project.
</Block>

<Block link="https://uwdub.slack.com/" header="Slack">
    <Image
        slot="image"
        url={'/images/contact/slack.jpg'}
        alt="The Slack logo."
    />
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
    <Image
        slot="image"
        url={'/images/contact/twitter.jpg'}
        alt="The Twitter logo."
    />
    &mdash; I used to be fairly active on Twitter, but mostly left in June 2022.
    I still broadcast writing, amplify others, and respond to DMs, but I'm generally
    not posting otherwise. You might find me on Mastadon @amyjko@hci.social saying
    things.
</Block>

<Block link="http://github.com/amyjko" header="GitHub">
    <Image
        slot="image"
        url={'/images/contact/github.jpg'}
        alt="The Github logo."
    />
    &mdash; I host a lot of my content and software projects on GitHub. Feel free
    to submit issues and pull requests to my various repositories.
</Block>

<Block link="https://www.linkedin.com/in/ajko/" header="LinkedIn">
    <Image
        slot="image"
        url={'/images/contact/linkedin.jpg'}
        alt="The LinkedIn logo."
    />
    &mdash; I use LinkedIn as my primary contact manager. I usually only accept connections
    from people I've met IRL and have a professional relationship with (students,
    collaborators, professional colleagues). I read my LinkedIn messages as part
    of my morning email routine.
</Block>

<Block link="https://www.facebook.com/amyjko" header="Facebook">
    <Image
        slot="image"
        url={'/images/contact/facebook.jpg'}
        alt="The Facebook logo."
    />
    &mdash; I primarily use Facebook for non-work relationships (though that boundary
    is blurry). I usually only accept connections from people I've met IRL and have
    a social relationship with, so if I have a purely professional relationship with
    you, please don't be offended if I decline your friend request. Add me on LinkedIn
    instead.
</Block>

<Block header="Phone">
    <Image slot="image" url={'/images/contact/phone.jpg'} alt="A telephone." />
    &mdash; Don't call me on the phone. It's never the right time, I'm rarely in
    my office when you want to reach me. Write me on one of the platforms above first
    and we can schedule a call if necessary.
</Block>
