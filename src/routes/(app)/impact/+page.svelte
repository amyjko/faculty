<script lang="ts">
    import Block from '$lib/components/Block.svelte';
    import External from '$lib/components/External.svelte';
    import { profile } from '$lib/models/stores';
    import Image from '$lib/components/Thumbnail.svelte';
</script>

<h1> I actively share my research and expertise with the world. </h1>

{#each $profile.getPopulations() as population}
    <Block header={population.population}>
        <Image
            slot="image"
            url={'/images/populations/population-' + population.id + '.jpg'}
            alt={population.alt}
        />
        <p>{population.description}</p>
        <div>
            {#each $profile.getImpacts( (impact) => impact.who === population.id, (impact) => -impact.start ) as impact}
                <p>
                    <span style="font-variant: small-caps">{impact.kind}</span>
                    <small
                        >({impact.start}{impact.end == null
                            ? '-present'
                            : impact.start !== impact.end
                            ? '-' + impact.end
                            : ''})</small
                    >
                    {#if impact.url}<small
                            ><External to={impact.url}>evidence</External
                            ></small
                        >{/if}
                    <br />{impact.description}
                </p>
            {/each}
        </div>
    </Block>
{/each}
