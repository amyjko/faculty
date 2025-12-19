<script lang="ts">
    import Emoji from './Emoji.svelte';
    import Link from './Link.svelte';
</script>

<div class="emoji">
    <a href="mailto:ajko@uw.edu"><Emoji symbol="📧" /></a><span class="dot"
        >&sdot;</span
    ><Link to="https://amyjko.medium.com"><Emoji symbol="📝" /></Link><span
        class="dot">&sdot;</span
    ><Link to="https://bsky.app/profile/amyko.phd"><Emoji symbol="🦋" /></Link
    ><span class="dot">&sdot;</span><Link
        to="https://www.threads.net/@amyjensenko"><Emoji symbol="🧵" /></Link
    ><span class="dot">&sdot;</span><Link to="https://hci.social/@amyjko"
        ><Emoji symbol="🐘" /></Link
    >
</div>

<style>
    .emoji {
        font-family: 'Noto Emoji';
        margin-block-start: var(--padding);
    }

    .dot {
        display: inline-block;
        margin-inline-start: 0.25em;
        margin-inline-end: 0.25em;
    }
</style>
