<script lang="ts">
    import type Commit from "./Commit";



    export let commit: Commit;
    export let proportion: number=1;
    export let label: boolean=true;

    const maxEms = 12;
    const ems = Math.round(maxEms * commit.hours * proportion / 40);

    // Adjust the postfix based on size and duration of commitment.
    let postfix = 
        ems <= 3 ? "" :
        (!commit.annually && commit.end instanceof Date && commit.end.getTime() !== null && commit.start instanceof Date &&
        (commit.end.getTime() - commit.start.getTime()) / 1000 / 60 / 60 / 24 <= 7) ? 
            " hrs" :
            " hrs/wk";

</script>

<div 
    class={"bar " + commit.category}
    style={`width: ${ems} + "em"`}
>
    {#if label}
        <span>{commit.hours * proportion}{postfix}</span>
    {/if}
</div>