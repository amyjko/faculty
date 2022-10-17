<script lang="ts">

	import Trip from "$lib/models/Trip.svelte";
	import { profile } from "$lib/models/stores";
    import { parseDate } from "$lib/models/utilities";

</script>
	
<div class='lead'>
	I frequently travel&mdash;or during a pandemic, teleport into video chats&mdash;to share my research, ideas, and experiences. 
	Below are upcoming and past visits.
</div>
				
<h3>Upcoming trips</h3>

{#each $profile.getTravel(
	trip => trip.commitment.end !== null && parseDate(trip.commitment.end).getTime() > Date.now(),
	trip => trip.commitment.start === null ? Infinity : parseDate(trip.commitment.start).getTime()
	) as trip }
	<Trip trip={trip} />
{/each}		

<h3>Past trips</h3>

{#each $profile.getTravel(
	trip => trip.commitment.end !== null && parseDate(trip.commitment.end).getTime() <= Date.now(),
	trip => trip.commitment.start === null ? Infinity : -parseDate(trip.commitment.start).getTime()
	) as trip }
	<Trip trip={trip} />
{/each}		
