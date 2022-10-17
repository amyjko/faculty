<script type="ts">

    export let to: string;

    // scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
</script>

<a href={to}><slot></slot></a>