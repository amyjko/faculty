<script lang="ts">
</script>

<p class="alert">
    <slot />
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
    }
</style>
