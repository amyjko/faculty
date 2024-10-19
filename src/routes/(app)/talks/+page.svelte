<script lang="ts">
    import External from '$lib/components/External.svelte';
    import Block from '$lib/components/Block.svelte';
    import { profile } from '$lib/models/stores';
    import { parseDate } from '$lib/models/Profile';
    import Image from '$lib/components/Thumbnail.svelte';
    import Link from '$lib/components/Link.svelte';
    import Title from '$lib/components/Title.svelte';
    import Linkable from '$lib/components/Linkable.svelte';

    let talks = $derived($profile.getTalks(
        undefined,
        (talk) => -parseDate(talk.date).getTime()
    ));

    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
</script>

<Title text="Talks" />

<h1> These are my upcoming and past keynotes and invited talks. </h1>

{#each talks as talk, index}
    {@const date = parseDate(talk.date)}
    {#if index === 0 || date.getFullYear() !== parseDate(talks[index - 1].date).getFullYear()}
        <Linkable id={`${date.getFullYear()}`}>
            {date.getFullYear()}</Linkable
        >
    {/if}

    <Block
        link={talk.recording
            ? talk.recording
            : talk.practice
            ? talk.practice
            : talk.slides?.startsWith('http')
            ? talk.slides
            : `/slides/${talk.slides}`}
        header={talk.title}
    >
        {#snippet image()}
                <Image
                
                url={'/images/talks/' + talk.image}
                alt={talk.alt}
            />
            {/snippet}
        <span>
            &nbsp; {#if talk.keynote}<span class="award">&#x2605; Keynote</span
                >{/if}
            <br /><small
                ><em
                    >{#if talk.url}<External to={talk.url}
                            >{talk.venue}</External
                        >{:else}{talk.venue}{/if}</em
                ></small
            >
            <br /><small
                >{#if date instanceof Date}{months[date.getMonth()] +
                        ' ' +
                        date.getDate() +
                        ', ' +
                        date.getFullYear()}{/if}</small
            >
            <br /><small>{talk.description}</small>
            <br />
            <div>
                <small>
                    {#if talk.recording}
                        <External to={talk.recording}>Recording</External>
                    {/if}
                    {#if talk.practice}
                        {#if talk.recording} &sdot; {/if}
                        <External to={talk.practice}>Rehearsal</External>
                    {/if}
                    {#if talk.slides}
                        {#if talk.recording || talk.practice} &sdot; {/if}
                        <Link
                            to={talk.slides.startsWith('http')
                                ? talk.slides
                                : `/slides/${talk.slides}`}>Slides</Link
                        >
                    {/if}
                    {#if talk.blog}
                        {#if talk.recording || talk.practice || talk.slides}
                            &sdot;
                        {/if}
                        <External to={talk.blog}>Blog</External>
                    {/if}
                </small>
            </div>
        </span>
    </Block>
{/each}
