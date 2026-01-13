<script lang="ts">
    interface Props {
        text: string;
    }

    let { text }: Props = $props();

    const title = $derived(`Amy J. Ko${text.length > 0 ? ' - ' + text : ''}`);
</script>

<svelte:head>
    <title>{title}</title>
    <meta property="og:description" content={title} />
</svelte:head>
