<script lang="ts">

    export let url: string;
    export let alt: string;

</script>

<img class='img-responsive img-thumbnail gap-bottom-right' src={url} alt={alt}/>

<style>
    .gap-bottom-right {
        margin-right: 20px;
        margin-bottom: 10px;
    }
</style>