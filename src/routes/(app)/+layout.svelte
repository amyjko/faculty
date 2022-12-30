<script lang="ts">
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<div class="page">
    <div class="header"><Header /></div>
    <div class="content">
        <slot />
        <Footer />
    </div>
</div>

<style>
    /* Small */
    @media only screen and (max-width: 800px) {
        :global(body) {
            margin: 1em;
        }

        .page {
            display: block;
        }
    }

    /* Large */
    @media only screen and (min-width: 800px) {
        :global(body) {
            margin: auto;
            max-width: 80em;
        }

        .page {
            margin: 3em;
            display: flex;
            flex-direction: row;
        }

        .header {
            margin-right: var(--margin);
            flex: 0 0 15em;
        }

        .content {
            margin-top: 10em;
            max-width: 40em;
        }
    }
</style>
