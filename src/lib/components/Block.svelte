<script lang="ts">
	export let header: string | null = null;
	export let link: string | null = null;

</script>

<div class="project row">
	<div class="col-xs-3 col-md-3">
		{#if link }
			<a href={link} target="_blank" rel="noreferrer"><slot name="image">no image</slot></a>
		{:else}
			<slot name="image"></slot>
		{/if}
	</div>
	<div class="col-xs-9 col-md-9">
		{#if header }
			{#if link}
				<a href={link} target="_blank" rel="noreferrer">{ header }</a>
			{:else}
					<strong>{header}</strong>
			{/if}
		{/if}
		<slot></slot>
	</div>
</div>