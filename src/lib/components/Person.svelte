<script lang="ts">
    import type Person from '$lib/models/Person';
    import Block from './Block.svelte';
    import External from './External.svelte';
    import Link from './Link.svelte';
    import Image from './Thumbnail.svelte';

    export let highlight: boolean;
    export let person: Person;
</script>

<div id={person.id}>
    <Block link={person.url}>
        <Image
            slot="image"
            url={`/images/headshots/${person.id}.jpg`}
            alt={'Photograph of ' + person.name}
            {highlight}
        />
        <span>
            <External to={person.url}>{person.name}</External>
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
                            <Link to={'/dissertations/' + person.dissertation}
                                >Dissertation</Link
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
