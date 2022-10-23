<script lang="ts">
    import { base } from "$app/paths";

    export let url: string;
    export let alt: string;
    export let highlight: boolean = false;

</script>

<img class={`thumbnail ${highlight ? "highlight" : ""}`} src={`${base}${url}`} alt={alt}/>

<style>

    img {
        width: calc(100% - 1em);
        padding: 0;
        border-radius: var(--roundedness);
        display: block;
        margin-right: 1em;
        margin-bottom: 1em;
        max-width: 10em;
    }

    img.highlight {
        outline: 5px solid var(--link-color);
        animation: throb 0.5s 3;
    }

    @keyframes throb {
        0% { outline-color: var(--link-color); }
        50% { outline-color: var(--back-color); }
        100% { outline-color: var(--link-color); }
    }
</style>