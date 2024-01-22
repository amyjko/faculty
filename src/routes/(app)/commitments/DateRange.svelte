<script lang="ts">
    import months from './months';

    export let start: Date;
    export let end: Date;

    $: range = end.getTime() - start.getTime();
    const yearInMilliseconds = 1000 * 60 * 60 * 24 * 7 * 52;
    const weekInMilliseconds = 1000 * 60 * 60 * 24 * 7;

    function toDateString(date: Date, showYear: boolean = true) {
        return (
            months[date.getMonth() + 1] +
            ' ' +
            date.getDate() +
            (showYear
                ? ", " + date.getFullYear().toString().substring(-2)
                : '')
        );
    }
</script>

<!-- If it's longer than a year, do years -->
{#if range >= yearInMilliseconds}
    <span
        ><em>{Math.round((10 * range) / yearInMilliseconds) / 10} years</em><br
        />starting <em>{toDateString(start)}</em></span
    >
    <!-- If it's longer than a week, do weeks -->
{:else if range >= weekInMilliseconds}
    <span
        ><em>{Math.round(range / weekInMilliseconds)} weeks</em><br />starting
        <em>{toDateString(start)}</em></span
    >
{:else}
    <!-- If it's less than a week, just do the dates -->
    <span
        ><em>{toDateString(start, false)}</em> -<br /><em
            >{toDateString(end)}</em
        ></span
    >
{/if}
