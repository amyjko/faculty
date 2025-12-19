<script lang="ts">
    interface Props {
        text: string;
    }

    let { text }: Props = $props();
</script>

<svelte:head>
    <title>Amy J. Ko - {text}</title>
    <meta
        property="og:description"
        content={`Amy J. Ko${text.length > 0 ? ' - ' + text : ''}`}
    />
</svelte:head>
