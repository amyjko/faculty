<script lang="ts">

    import Linkable from './Linkable.svelte';

    export let id: string;
    export let header: string;

</script>

<Linkable id={id}>{header}</Linkable>
<slot></slot>