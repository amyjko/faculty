<script lang="ts">
    import Emoji from './Emoji.svelte';

    interface Props {
        awards: readonly string[];
    }

    let { awards }: Props = $props();
</script>

<!-- Monochrome, so it prints legibly without color. -->
<span class="award"><Emoji symbol="🏆" /> {awards.join(' + ')}</span>

<style>
    .award {
        display: inline-block;
        font-size: 0.85em;
        font-variant: small-caps;
        line-height: 1.2;
        padding: 0 var(--padding);
        border: 1px solid currentColor;
        border-radius: 3px;
        color: inherit;
        background: transparent;
        margin-bottom: var(--padding);
    }
</style>
