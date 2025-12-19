<script lang="ts">
    import { asset } from '$app/paths';
    import type Person from '$lib/models/Person';
    import Block from './Block.svelte';
    import Image from './Thumbnail.svelte';

    interface Props {
        highlight: boolean;
        person: Person;
    }

    let { highlight, person }: Props = $props();
</script>

<div id={person.id}>
    <Block link={person.url}>
        {#snippet image()}
            <Image
                url={`/images/headshots/${person.id}.jpg`}
                alt={'Photograph of ' + person.name}
                {highlight}
            />
        {/snippet}
        <span>
            <a href={person.url}>{person.name}</a>
            &nbsp;
            <mark>{person.level}</mark>
            &nbsp;
            <small
                >{person.startdate}{person.enddate
                    ? person.startdate !== person.enddate
                        ? ' - ' + person.enddate
                        : ''
                    : ' - present'}</small
            >
            <br />
            {person.bio}
            <ul>
                {#if person.dissertation}
                    <li>
                        <small>
                            <a
                                href={asset(
                                    '/dissertations/' + person.dissertation,
                                )}>Dissertation</a
                            >
                        </small>
                    </li>
                {/if}
                {#if person.achievements.length > 0}
                    <small>
                        {#each person.achievements as achievement}
                            <li>{achievement}</li>
                        {/each}
                    </small>
                {/if}
            </ul>
        </span>
    </Block>
</div>
