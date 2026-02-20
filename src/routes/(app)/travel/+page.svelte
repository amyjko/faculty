<script lang="ts">
    import Trip from '$lib/models/Trip.svelte';
    import { profile } from '$lib/models/stores';
    import { parseDate } from '$lib/models/Profile';
    import Title from '$lib/components/Title.svelte';
</script>

<Title text="Travel" />

<h1> Below are upcoming and past trips. </h1>

<p> I frequently travel to share my research, ideas, and experiences. </p>

<h3>Upcoming trips</h3>

{#each $profile.getTravel( (trip) => trip.commitment.end !== null && parseDate(trip.commitment.end).getTime() >= Date.now(), (trip) => (trip.commitment.start === null ? Infinity : parseDate(trip.commitment.start).getTime()), ) as trip}
    <Trip {trip} />
{/each}

<h3>Past trips</h3>

{#each $profile.getTravel( (trip) => trip.commitment.end !== null && parseDate(trip.commitment.end).getTime() < Date.now(), (trip) => (trip.commitment.start === null ? Infinity : -parseDate(trip.commitment.start).getTime()), ) as trip}
    <Trip {trip} />
{/each}

<p><em>Obviously I traveled before 2019 :) I just didn't track it here.</em></p>
