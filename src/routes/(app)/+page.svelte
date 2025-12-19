<script lang="ts">
    import Link from '$lib/components/Link.svelte';
    import External from '$lib/components/External.svelte';
    import { profile } from '$lib/models/stores';
    import Thumbnail from '$lib/components/Thumbnail.svelte';
    import Block from '$lib/components/Block.svelte';
    import getPersonImagePath from '$lib/components/getPersonImage';
    import Title from '$lib/components/Title.svelte';
    import Linkable from '$lib/components/Linkable.svelte';
</script>

<Title text="" />

<h1>
    My research imagines and enables equitable, joyous, liberatory learning
    about computing and information, in schools and beyond.
</h1>

<p>
    I work with outstanding <Link to={'/(app)/lab'}
        >postdocs, doctoral students, undergraduates, teachers</Link
    > and <Link to={'/(app)/communities'}>communities</Link> on this vision. My current
    projects within this goal are shaped by the faculty, students, and teachers in
    the <Link to="https://computinged.uw.edu"
        >Center for Learning, Computing, and Imagination</Link
    >, our partner teachers, school leaders, and families, and generous external <Link
        to="/(app)/funding">funding</Link
    >.
</p>

<p>
    We
    <Link to={'/(app)/publications'}>publish</Link>
    primarily in <Link to={'/(app)/cer'}>Computing Education</Link> and
    <External
        to="https://www.google.com/books/edition/Human_Computer_Interaction_Handbook/dVrRBQAAQBAJ?hl=en&gbpv=0"
        >Human-Computer Interaction</External
    >. I also work to broaden research discourse as Editor-in-Chief of <Link
        to="https://dl.acm.org/journal/toce">ACM TOCE</Link
    > and sustain peer review with <Link to="https://reciprocal.reviews/"
        >Reciprocal Reviews</Link
    >. We share our discoveries by <Link to={'/(app)/essays'}>blogging</Link>, <Link
        to={'/(app)/talks'}>presenting</Link
    >,
    <Link to={'/(app)/classes'}>teaching</Link>, <Link to={'/(app)/books'}
        >writing</Link
    >, and and connecting with community, including the <Link
        to="https://csforallwa.org">CS for All Washington</Link
    > advocacy community and the <Link to="https://www.pnwcsteach.org/"
        >PNW CS Teach</Link
    > consortium of teacher educators.
</p>
<p></p>

<p>
    Want to do research with me? Read about my <Link to="/(app)/lab">lab</Link>,
    and join us in creating a more equitable future of computing that includes
    <em>everyone</em>.
</p>

<Linkable id="discoveries">Discoveries</Linkable>

<p>
    My lab and I have discovered many things since I started doing research in
    1999. Here are some of the highlights from our work. How I describe these is
    always evolving as we learn more.
</p>

<!-- Create a list of discoveries from bundles of papers, sorted by the most recent publication on the discovery. -->
{#each $profile.getDiscoveries(undefined, (a) => -$profile.getDiscoveryRange(a)[1]) as discovery}
    {@const range = $profile.getDiscoveryRange(discovery)}
    {@const papers = $profile.getDiscoveryPapers(discovery)}
    {@const keyPaper = papers[0]}
    {#if keyPaper}
        <Block>
            {#snippet image()}
                <Thumbnail
                    url={`/images/papers/paper-${keyPaper.id}.jpg`}
                    alt="A clip from the paper's text or figure"
                />
            {/snippet}
            <strong>{discovery.contribution}</strong>
            <small
                >({range[0]}{range[0] !== range[1]
                    ? ` — ${range[1]}`
                    : ''})</small
            >
            <br />{discovery.detail}
            <p>
                {#each $profile.getPeopleFromPubs(papers.map((p) => p.id)) as person}
                    {#if person}
                        <Link
                            to={person.id === 'ajko'
                                ? '/(app)/bio'
                                : '/(app)/lab'}
                            id={person.id === 'ajko' ? undefined : person.id}
                        >
                            <img
                                src={`${getPersonImagePath(person.id)}`}
                                alt={`${person.name} headshot`}
                                class="mini-headshot"
                            />
                        </Link>
                    {/if}
                {/each}
            </p>
            <p>
                <small>
                    {#each discovery.tags as tag}<mark class={'topic'}
                            ><Link to={`/(app)/publications`} query={tag}
                                >{tag}</Link
                            ></mark
                        >{/each}
                    {#if discovery.video}
                        {#each discovery.video as video}
                            &nbsp; <span class="emoji">🎬</span>
                            <External to={video}>video</External>&nbsp;
                        {/each}
                    {/if}
                    {#if discovery.demo}&nbsp;<span class="emoji">🖥️</span>
                        <External to={discovery.demo}>demo</External>{/if}
                    {#if discovery.code}&nbsp;<code>{'{}'}</code>&nbsp;<External
                            to={discovery.code}>code</External
                        >{/if}
                </small>
            </p>
        </Block>
    {/if}
{/each}
