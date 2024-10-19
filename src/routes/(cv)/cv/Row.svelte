<script lang="ts">
    interface Props {
        start: string | number;
        end?: string | number | null;
        header: string;
        detail: string;
        extra?: string | null;
    }

    let {
        start,
        end = null,
        header,
        detail,
        extra = null
    }: Props = $props();
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
