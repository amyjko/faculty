<script lang="ts">
    import Block from '$lib/components/Block.svelte';
    import External from '$lib/components/External.svelte';
    import Facets from '$lib/components/Facets.svelte';
    import { profile } from '$lib/models/stores';
    import Image from '$lib/components/Thumbnail.svelte';
    import type { PostTagType } from '../../../lib/models/Post';
    import Title from '$lib/components/Title.svelte';
    import Linkable from '$lib/components/Linkable.svelte';

    let filter: Record<string, PostTagType> = $state({});

    let posts = $derived($profile.getPosts(
        (post) => !('topic' in filter) || post.tags.includes(filter.topic),
        (post) =>
            -(
                $profile.getPostMonthYear(post).year * 12 +
                $profile.getPostMonthYear(post).month
            )
    ));

    function setFilter(tag: Record<string, PostTagType>) {
        filter = tag;
    }
</script>

<Title text="Essays" />

<h1>
    I <External to="https://amyjko.medium.com">blog</External> on my lab's Medium
    publication, <External to="https://medium.com/bits-and-behavior"
        >Bits and Behavior</External
    >.
</h1>

<p
    ><em
        >My beliefs change over time, because I love learning and changing.
        Don't assume something I wrote years ago reflects my beliefs now.
        Instead, think of this archive as a record of my reflection and growth.</em
    ></p
>

<p> Filter by topic. </p>

<Facets facets={$profile.getPostTags()} update={setFilter} />

{#each posts as post, index}
    {@const date = $profile.getPostMonthYear(post)}
    {#if index === 0 || date.year !== $profile.getPostMonthYear(posts[index - 1]).year}
        <Linkable id={`${date.year}`}>{date.year}</Linkable>
    {/if}
    <Block link={post.url} header={post.title}>
        {#snippet image()}
            
                {#if post.img}
                    <Image
                        url={'/images/posts/post-' + post.img + '.jpg'}
                        alt={post.alt ??
                            'Sorry, no description for this image yet!'}
                    />
                {/if}
            
            {/snippet}
        <br /><small>{date.month + '/' + date.year}</small>
        <br />
        {#each post.tags as tag}
            <mark class={'topic' + (filter.topic === tag ? ' selected' : '')}>
                <small>{tag}</small>
            </mark>
        {/each}
    </Block>
{/each}
