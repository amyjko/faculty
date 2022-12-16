<script lang="ts">

    import { base } from "$app/paths";
	import { page } from "$app/stores";

    export let to: string;
    export let at: string | undefined = undefined;

	$: path = $page.url.pathname;

</script>

{#if at && (at === "/" ? path === `${base}` : path ===`${base}${at}`) }
    <span class="at"><slot></slot></span>
{:else if to.startsWith("http")}
    <a href={to} target="_blank" rel="noreferrer"><slot></slot></a>
{:else}
    <a href={`${base}${to}`}><slot></slot></a>
{/if}

<style>
    /* So that components can style it. */
    span, a {
        display: inline-block;
    }
</style>