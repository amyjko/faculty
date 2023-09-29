<script lang="ts">
    import type Commit from '../../../lib/models/Commit';

    export let commit: Commit;
    export let proportion: number = 1;
    export let label: boolean = true;

    $: maxEms = 12;
    $: ems = Math.round((maxEms * commit.hours * proportion) / 40);

    // Adjust the postfix based on size and duration of commitment.
    let postfix =
        ems <= 3
            ? ''
            : !commit.annually &&
              commit.end instanceof Date &&
              commit.end.getTime() !== null &&
              commit.start instanceof Date &&
              (commit.end.getTime() - commit.start.getTime()) /
                  1000 /
                  60 /
                  60 /
                  24 <=
                  7
            ? ' hrs'
            : ' hrs/wk';
</script>

<div class={'bar ' + commit.category} style={`width: ${ems}em`}>
    {#if label}
        <span>{commit.hours * proportion}{postfix}</span>
    {/if}
</div>

<style>
    .bar {
        display: inline-block;
        padding: 5px;
        font-size: 75%;
        min-height: 1em;
        min-width: 2em;
        overflow: hidden;
        margin-right: 1px;
        vertical-align: middle;
    }

    .bar.personal {
        background-color: var(--personal-color);
    }

    .bar.research {
        background-color: var(--research-color);
    }

    .bar.teaching {
        background-color: var(--teaching-color);
    }
    .bar.service {
        background-color: var(--service-color);
    }
</style>
