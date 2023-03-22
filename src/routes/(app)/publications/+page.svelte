<script lang="ts">
    import { onMount } from 'svelte';

    import External from '$lib/components/External.svelte';
    import Facets from '$lib/components/Facets.svelte';
    import Paper from '$lib/components/Paper.svelte';

    import { profile } from '$lib/models/stores';
    import { scrollToHash } from '$lib/models/utilities';
    import Alert from '../../../lib/components/Alert.svelte';

    let selection: Record<string, string> = {};

    onMount(() => {
        scrollToHash();

        if (
            typeof window !== 'undefined' &&
            window.location.search.length > 0
        ) {
            filter({
                tag: window.location.search.substring(1).replaceAll('%20', ' '),
            });
        }
    });

    function filter(newSelection: Record<string, string>) {
        selection = newSelection;
    }

    // Sort the publications by decreasing year, then by decreasing pages
    $: pubs = $profile
        .getPublications((paper) =>
            $profile.tagsMatch(selection, $profile.getPaperTags(paper))
        )
        .sort((a, b) =>
            // First sort by year
            b.year !== a.year
                ? b.year - a.year
                : // Put unpublished first
                b.pages === 'to appear'
                ? 1
                : a.pages === 'to appear'
                ? -1
                : // If there's no DOI, put last
                a.doi === null
                ? 1
                : b.doi === null
                ? -1
                : // Sort by DOI, since those are usually chronological
                  -a.doi.localeCompare(b.doi)
        );
</script>

<h1> These are my academic publications. </h1>

<p>
    For the bean counters, there are {$profile.getPublications().length} of them.
    You can see who's citing them on
    <External to="https://scholar.google.com/citations?user=otmdDLoAAAAJ&hl=en"
        >Google Scholar</External
    >,
    <External to="https://www.semanticscholar.org/author/Amy-J.-Ko/1441987875"
        >Semantic Scholar</External
    >, or
    <External to="https://dl.acm.org/profile/81100500360">ACM</External>. Note
    that {$profile.getPublications((pub) => pub.deadname === true).length} are still
    under my deadname, and thousands cite me by my deadname. Publishers refuse to
    fix these citations, so please cite me
    <strong>Amy J. Ko</strong>, regardless of how you might find my prior work
    in reference lists and scholarly search engines. And if you're reviewing a
    paper that cites me incorrectly, please demand they fix it.
</p>

<hr />

<p><em>Filter by publication topic and awards.</em></p>

<Facets facets={$profile.getPublicationFacets()} update={filter} {selection} />

<!-- // Create a list of publications, inserting year headers when the year changes. -->
{#each pubs as pub, index}
    {#if index === 0 || pubs[index - 1].year !== pub.year}
        <h3
            >{pub.year}{#if $profile.getYearContexts()[pub.year]}<small>
                    &mdash; <em>{$profile.getYearContexts()[pub.year]}</em
                    ></small
                >{/if}</h3
        >
    {/if}

    <div id={pub.id}>
        <Paper
            paper={pub}
            highlight={typeof window !== 'undefined' &&
                window.location.hash.substring(1) === pub.id}
        />
    </div>
{:else}
    <Alert>No matching publications.</Alert>
{/each}
