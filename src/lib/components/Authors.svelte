<script lang="ts">
    import Link from '$lib/components/Link.svelte';
    import type Paper from '$lib/models/Paper';
    import { profile } from '$lib/models/stores';

    interface Props {
        link?: boolean;
        paper: Paper;
    }

    let { link = false, paper }: Props = $props();

    let equalFirst = $derived(paper.equalfirst && paper.authors.length >= 2);
</script>

{#each paper.authors as author, index}
    {@const person = $profile.getPerson(author)}
    {#if person === undefined}{author}{:else if link}<Link
            to={person.id === 'ajko' ? '/bio' : '/lab/#' + person.id}
            >{person.name}</Link
        >{:else}{person.name}{/if}{index < paper.authors.length - 1
        ? equalFirst && index === 0
            ? ' + '
            : ', '
        : ''}
{/each}
