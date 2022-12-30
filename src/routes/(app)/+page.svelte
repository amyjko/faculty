<script lang="ts">
    import Link from '$lib/components/Link.svelte';
    import External from '$lib/components/External.svelte';
    import { profile } from '$lib/models/stores';
    import Thumbnail from '$lib/components/Thumbnail.svelte';
    import Block from '$lib/components/Block.svelte';
    import getPersonImagePath from '$lib/components/getPersonImage';
</script>

<h1>
    I study our individual and collective struggle to understand computing and
    harness it for play, power, equity, and justice.
</h1>

<p>
    I work with outstanding <Link to={'/lab'}>students</Link> and vibrant <Link
        to={'/communities'}>communities</Link
    > on this work,
    <Link to={'/publications'}>publishing</Link> it in <Link to={'/cer'}
        >Computing Education</Link
    >,
    <External
        to="https://www.google.com/books/edition/Human_Computer_Interaction_Handbook/dVrRBQAAQBAJ?hl=en&gbpv=0"
        >Human-Computer Interaction</External
    >, and
    <External to="https://link.springer.com/article/10.1007/s10664-020-09858-z"
        >Software Engineering</External
    > communities, and then <Link to={'/essays'}>blogging</Link>, <Link
        to={'/talks'}>presenting</Link
    >,
    <Link to={'/classes'}>teaching</Link>, <Link to={'/books'}
        >synthesizing</Link
    >, and
    <Link to={'/impact'}>applying</Link> it in the world.
</p>

<p>
    I have expertise in debugging, program understanding, explainability,
    end-user programming, human aspects of software engineering, broadening
    participation in computing, assessment, and HCI education. I also have broad
    methodological expertise, including the design and implementation of user
    interfaces, programming languages, and developer tools; HCI methods;
    multivariate null hypothesis significance testing; Bayesian modeling;
    qualitative methods such as interviews, surveys, content analysis, and
    fieldwork; data science methods; and argumentation.
</p>

<p>
    Want to do research with me? Read about my <Link to="/lab">lab</Link>.
</p>

<h2>Discoveries</h2>

<p>
    My lab and I have discovered many things since I started doing research in
    1999. Here are some of the highlights from our work. How I describe these is
    always evolving as we learn more.
</p>

<!-- Create a list of discoveries from bundles of papers, sorted by the most recent publication on the discovery. -->
{#each $profile.getDiscoveries(undefined, (a) => -$profile.getDiscoveryRange(a)[1]) as discovery}
    {@const range = $profile.getDiscoveryRange(discovery)}
    {@const keyPaper = $profile.getPublication(discovery.pubs[0])}
    {#if keyPaper}
        <Block>
            <Thumbnail
                url={`/images/papers/paper-${keyPaper.id}.jpg`}
                alt="A clip from the paper's text or figure"
                slot="image"
            />
            <strong>{discovery.contribution}</strong>
            <small
                >({range[0]}{range[0] !== range[1]
                    ? ` — ${range[1]}`
                    : ''})</small
            >
            <br />{discovery.detail}
            <p>
                {#each $profile.getPeopleFromPubs(discovery.pubs) as person}
                    {#if person}
                        <Link
                            to={person.id === 'ajko'
                                ? '/bio'
                                : '/lab/#' + person.id}
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
                            ><Link to={`/publications?${tag}`}>{tag}</Link
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
                    {#if discovery.tags.length > 0}&nbsp;<span class="emoji"
                            >📄</span
                        ><Link
                            to={`/publications?${discovery.tags[0].replaceAll(
                                ' ',
                                '%20'
                            )}`}>papers</Link
                        >{/if}
                </small>
            </p>
        </Block>
    {/if}
{/each}
