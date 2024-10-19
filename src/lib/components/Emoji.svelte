<script lang="ts">
    interface Props {
        symbol: string;
    }

    let { symbol }: Props = $props();
</script>

<span class="emoji">{symbol + '\uFE0F'}</span>

<style>
    .emoji {
        font-family: 'Noto Emoji', emoji;
    }
</style>
