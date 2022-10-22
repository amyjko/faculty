<script type="ts">

    export let to: string;
    export let at: boolean=false;

</script>

{#if at}
    <span class="at"><slot></slot></span>
{:else}
    <a href={to}><slot></slot></a>
{/if}

<style>
    /* So that components can style it. */
    span, a {
        display: inline-block;
    }
</style>