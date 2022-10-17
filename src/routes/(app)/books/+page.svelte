<script lang="ts">

	import Block from "$lib/components/Block.svelte";
	import Image from "$lib/components/Image.svelte";
	import { profile } from '$lib/models/stores'

</script>

<div class='lead'>
	These are books I've authored. Unlike print books, they are digital, searchable, interactive, and web accessible. They are also living documents: I update them regularly with new ideas, citations, and chapters, especially in response to feedback.
</div>

{#each $profile?.getPublications(pub => pub.kind === "book", pub => -pub.year) as book }
	<Block 
		link={book.doi ?? undefined}
		header={book.title}
	>
		<Image slot="image" url={"/images/papers/paper-" + book.id + ".jpg"} alt={"No book cover description, sorry"} />
		{". " + book.contribution}
	</Block>
{/each}