<script lang="ts">
    import Block from '$lib/components/Block.svelte';
    import Image from '$lib/components/Thumbnail.svelte';
    import { profile } from '$lib/models/stores';
    import Link from '$lib/components/Link.svelte';
</script>

<h1> These are books I've authored. </h1>

<p>
    Unlike print books, they are digital, searchable, interactive, and web
    accessible. I write them on <Link to="https://bookish.press"
        >Bookish.press</Link
    >, a platform I created to write simple, beautiful, accessible web-based
    books. The books are also living documents: I update them regularly with new
    ideas, citations, and chapters, especially in response to feedback.
</p>

{#each $profile?.getPublications( (pub) => pub.kind === 'book', (pub) => -pub.year ) as book}
    <Block link={book.doi ?? undefined} header={book.title}>
        <Image
            slot="image"
            url={'/images/papers/paper-' + book.id + '.jpg'}
            alt={'No book cover description, sorry'}
        />
        {'. ' + book.contribution}
    </Block>
{/each}
