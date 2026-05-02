<script lang="ts">
    import type { TravelInfo } from '../../data/Travel';
    import Block from '$lib/components/Block.svelte';
    import Link from '$lib/components/Link.svelte';
    import { parseDate } from '../models/Profile';

    interface Props {
        trip: TravelInfo;
    }

    let { trip }: Props = $props();

    function getDateString(start: Date, end: Date) {
        var months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
        if (start.getTime() === end.getTime()) {
            return (
                months[start.getMonth()] +
                ' ' +
                start.getDate() +
                ', ' +
                start.getFullYear()
            );
        } else {
            return (
                months[start.getMonth()] +
                ' ' +
                start.getDate() +
                ' - ' +
                (start.getMonth() === end.getMonth()
                    ? ''
                    : months[end.getMonth()]) +
                ' ' +
                end.getDate() +
                ', ' +
                end.getFullYear()
            );
        }
    }
</script>

<Block link={trip.url} header={trip.title}>
    {#snippet image()}
        <em
            >{trip.commitment.start === null || trip.commitment.end === null
                ? 'TBD'
                : getDateString(
                      parseDate(trip.commitment.start),
                      parseDate(trip.commitment.end),
                  )}</em
        >
        {#if trip.report}<span
                ><br /><Link to={trip.report}>trip report</Link></span
            >{/if}
    {/snippet}
    <br />{trip.details}
</Block>
