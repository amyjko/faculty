<script lang="ts">
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<p class="alert">
    {@render children?.()}
</p>

<style>
    p {
        display: block;
        text-align: left;
        background-color: var(--annotation-color);
        padding: calc(2 * var(--padding));
        margin-top: var(--margin);
        margin-bottom: var(--margin);
        border-radius: var(--roundedness);
        font-size: var(--small-font-size);
        line-height: 1.4;
        box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.2);
        animation: 1s ease-out 0s 1 popIn;
    }

    @keyframes popIn {
        0% {
            box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);
            transform: translateY(-1em);
        }
        100% {
            box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.2);
            transform: none;
        }
    }
</style>
