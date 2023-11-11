<script lang="ts">
    import External from './External.svelte';
</script>

<span class="emoji">
    <br /><a href="mailto:ajko@uw.edu">{'📧\uFE0E'}</a><span class="dot"
        >&sdot;</span
    ><External to="https://amyjko.medium.com">{'📝\uFE0E'}</External><span
        class="dot">&sdot;</span
    ><External to="https://hci.social/@amyjko">{'🐘\uFE0E'}</External><span
        class="dot">&sdot;</span
    ><External to="https://www.threads.net/@amyjensenko">{'🧵\uFE0E'}</External
    ><span class="dot">&sdot;</span><External to="https://twitter.com/amyjko"
        >{'🐥\uFE0E'}</External
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
