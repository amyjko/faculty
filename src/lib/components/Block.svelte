<script lang="ts">
	import { base } from "$app/paths";

	export let header: string | null = null;
	export let link: string | null = null;

	$: url = link?.startsWith("/") ? `${base}${link}` : link

</script>

<div class="block">
	<div class="left">
		{#if url }
			<a href={url} target="_blank" rel="noreferrer"><slot name="image"></slot></a>
		{:else}
			<slot name="image"></slot>
		{/if}
	</div>
	<div class="right">
		{#if header }{#if url}<a href={url} target="_blank" rel="noreferrer">{ header }</a>{:else}<strong>{header}</strong>{/if}{/if}<slot></slot>
	</div>
</div>

<style>
	.block {
		margin-top: 20px;
		margin-bottom: 20px;
		display: flex;
	}

	.left {
		flex: 0 0 10em;
	}

	@media only screen and (max-width: 800px) {
		.left {
			flex: 0 0 5em;
		}
    }

</style>