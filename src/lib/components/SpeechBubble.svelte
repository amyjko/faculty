<script lang="ts">
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<p class="bubble">
    {@render children?.()}
</p>

<style>
    .bubble {
        position: relative;
        background-color: var(--annotation-color);
        border-radius: var(--roundedness);
        padding: calc(2 * var(--padding));
        margin: 0;
        font-size: var(--small-font-size);
        line-height: 1.4;
        filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.2));
        animation: 1s ease-out 0s 1 slideIn;
    }

    /* Left-pointing tail, vertically centered */
    .bubble::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 1px;
        margin-top: -0.5em;
        margin-left: -0.5em;
        width: 0;
        height: 0;
        border-width: 0.5em 0.5em 0.5em 0;
        border-style: solid;
        border-color: transparent var(--annotation-color) transparent
            transparent;
    }

    @media only screen and (max-width: 800px) {
        /* Tail moves to top-left, pointing up toward the headshot above */
        .bubble::before {
            top: 1px;
            left: calc(2 * var(--padding));
            margin-top: -0.5em;
            margin-left: 0;
            border-width: 0 0.5em 0.5em 0.5em;
            border-color: transparent transparent var(--annotation-color)
                transparent;
        }
    }

    @media only screen and (min-width: 800px) {
        /* Restore left-pointing tail for large layout */
        .bubble::before {
            top: 50%;
            left: 1px;
            margin-top: -0.5em;
            margin-left: -0.5em;
            border-width: 0.5em 0.5em 0.5em 0;
            border-color: transparent var(--annotation-color) transparent
                transparent;
        }
    }

    @keyframes slideIn {
        0% {
            opacity: 0;
            transform: translateX(-0.5em);
        }
        100% {
            opacity: 1;
            transform: none;
        }
    }
</style>
