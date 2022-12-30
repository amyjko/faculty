<script lang="ts">
    export let start: string | number;
    export let end: string | number | null = null;
    export let header: string;
    export let detail: string;
    export let extra: string | null = null;
</script>

<tr>
    <td
        ><small class="date"
            >{start}{start === end
                ? ''
                : end === null
                ? ' — present'
                : ' - ' + end}</small
        ></td
    >
    <td><strong>{header}</strong></td>
    {#if detail}<td>{detail}</td>{/if}
    {#if extra}<td>{extra}</td>{/if}
</tr>
