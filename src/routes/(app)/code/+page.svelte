<script lang="ts">
    import Block from '$lib/components/Block.svelte';
    import Link from '$lib/components/Link.svelte';
    import Image from '$lib/components/Thumbnail.svelte';
    import Title from '$lib/components/Title.svelte';
</script>

<Title text="Code" />

<h1>These are open source projects I maintain.</h1>

<p>
    I enjoy creating and maintaining software projects that serve my research,
    teaching, and academic service, and engaging communities and students in
    evolving them.
</p>

<Block link="https://wordplay.dev" header="Wordplay">
    {#snippet image()}
        <Image  url="/images/code/wordplay.png" alt="A chat bubble" />
    {/snippet}

    &nbsp;is a free platform for creative expression with text and typography;
    it aspires to radically center accessibility, language, and culture, and to
    support youth learning in families and classrooms. It is also a playground
    for many of my ongoing research questions about power, governance, and
    programming language justice in computing education.
    <ul>
        <li>See the <Link to="https://github.com/wordplaydev">source</Link>.</li
        >
    </ul>
</Block>

<Block link="https://bookish.press" header="Bookish.press">
    {#snippet image()}
        <Image
            
            url="/images/code/bookish.png"
            alt="The word Bookish"
        />
    {/snippet}&nbsp;is a platform for publishing accessible online multi-chapter books
    for the web. I use it to maintain and publish the textbooks I've written for
    my teaching.
    <ul>
        <li
            >See the <Link to="https://github.com/amyjko/bookish">source</Link
            >.</li
        >
    </ul>
</Block>

<Block link="https://reciprocal.reviews/" header="Reciprocal Reviews">
    {#snippet image()}
        <Image
            
            url="/images/code/reciprocal.png"
            alt="Two circular arrows pointing to each other."
        />
    {/snippet}&nbsp;is a platform for enabling peer review volunteering and review
    activity tracking, to enable more sustainable and equitable peer review in
    conferences and journals.
    <ul>
        <li
            >See the <Link to="https://github.com/reciprocalreviews"
                >source</Link
            >.</li
        >
    </ul>
</Block>

<Block link="https://adminima.app" header="Adminima">
    {#snippet image()}
        <Image
            
            url="/images/code/adminima.png"
            alt="A 12 point star."
        />
    {/snippet}&nbsp;is a platform for improving organization's onboarding, transparency,
    and agility by defining work processes and managing requests for change. I
    designed it because I couldn't find anything that was simple and not
    designed for very large enterprises. I think it would work well for
    not-for-profits and small orgs of &lt; 100 people trying to define roles and
    responsibilities.
    <ul>
        <li
            >See the <Link to="https://github.com/reciprocalreviews"
                >source</Link
            >.</li
        >
    </ul>
</Block>
