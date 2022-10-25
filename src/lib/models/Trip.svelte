<script lang="ts">
    import type { Travel } from "$lib/models/Travel";
    import Block from "$lib/components/Block.svelte";
    import External from "$lib/components/External.svelte";
    import { parseDate } from "./Profile";

    export let trip: Travel;

	function getDateString(start: Date, end: Date) {

        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        if(start.getTime() === end.getTime()) {
            return months[start.getMonth()] + " " + start.getDate() + ", " + start.getFullYear();
        } else {
            return months[start.getMonth()] + " " + start.getDate() + " - " + (start.getMonth() === end.getMonth() ? "" : months[end.getMonth()]) + " " + end.getDate() + ", " + end.getFullYear();
        }

    }

</script>


<Block 
    link={trip.url}
    header={trip.title}
    >
    <svelte:fragment slot="image">
        <em>{trip.commitment.start === null || trip.commitment.end === null ? "TBD" : getDateString(parseDate(trip.commitment.start), parseDate(trip.commitment.end))}</em>
        {#if trip.report }<span><br/><External to={trip.report}>trip report</External></span>{/if}
    </svelte:fragment>
    <br/>{trip.details }
</Block>