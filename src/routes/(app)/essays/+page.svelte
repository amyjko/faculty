<script lang="ts">
    import Block from '$lib/components/Block.svelte';
    import External from '$lib/components/External.svelte';
    import Facets from '$lib/components/Facets.svelte';
    import { profile } from '$lib/models/stores';
    import Image from '$lib/components/Thumbnail.svelte';

    let filter: Record<string, string> = {};

    function setFilter(tag: Record<string, string>) {
        filter = tag;
    }
</script>

<h1>
    I <External to="https://amyjko.medium.com">blog</External> on my lab's Medium
    publication, <External to="https://medium.com/bits-and-behavior"
        >Bits and Behavior</External
    >.
</h1>

<p> Filter by topic. </p>

<Facets facets={$profile.getPostTags()} update={setFilter} />

{#each $profile.getPosts( (post) => !('topic' in filter) || post.tags.includes(filter.topic), (post) => -($profile.getPostMonthYear(post).year * 12 + $profile.getPostMonthYear(post).month) ) as post}
    {@const date = $profile.getPostMonthYear(post)}
    <Block link={post.url} header={post.title}>
        <svelte:fragment slot="image">
            {#if post.img}
                <Image
                    url={'/images/posts/post-' + post.img + '.jpg'}
                    alt={post.alt ??
                        'Sorry, no description for this image yet!'}
                />
            {/if}
        </svelte:fragment>
        <br /><small>{date.month + '/' + date.year}</small>
        <br />
        {#each post.tags as tag}
            <mark class={'topic' + (filter.topic === tag ? ' selected' : '')}>
                <small>{tag}</small>
            </mark>
        {/each}
    </Block>
{/each}
