<script lang="ts">
    import Linkable from './Linkable.svelte';

    export let id: string;
    export let header: string;
</script>

<Linkable {id}>{header}</Linkable>
<slot />
