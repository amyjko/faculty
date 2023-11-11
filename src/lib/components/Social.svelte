<script lang="ts">
    import Emoji from './Emoji.svelte';
    import External from './External.svelte';
</script>

<span class="emoji">
    <br /><a href="mailto:ajko@uw.edu"><Emoji symbol="📧" /></a><span
        class="dot">&sdot;</span
    ><External to="https://amyjko.medium.com"><Emoji symbol="📝" /></External
    ><span class="dot">&sdot;</span><External to="https://hci.social/@amyjko"
        ><Emoji symbol="🐘" /></External
    ><span class="dot">&sdot;</span><External
        to="https://www.threads.net/@amyjensenko"
        ><Emoji symbol="🧵" /></External
    ><span class="dot">&sdot;</span><External to="https://twitter.com/amyjko"
        ><Emoji symbol="🐥" /></External
    >
</span>

<style>
    .emoji {
        font-family: 'Noto Emoji';
    }

    .dot {
        display: inline-block;
        margin-inline-start: 0.25em;
        margin-inline-end: 0.25em;
    }
</style>
