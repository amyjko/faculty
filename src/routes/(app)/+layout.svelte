<script lang="ts">
    
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";

</script>

<div class="container">
    <Header />
        <slot></slot>
    <Footer />
</div>