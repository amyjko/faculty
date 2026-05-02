<script lang="ts">
    import { run } from 'svelte/legacy';

    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { navigating } from '$app/stores';
    import { browser } from '$app/environment';
    import SpeechBubble from './SpeechBubble.svelte';
    import { profile } from '$lib/models/stores';
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();

    let headers: [string, string][] = $state([]);
    let closestID: string | undefined = $state(undefined);
    let scrollY: number = $state(0);

    $effect(() => {
        if (scrollY >= 0) {
            if (
                browser &&
                typeof document !== undefined &&
                $navigating === null
            ) {
                headers = Array.from(document.getElementsByTagName('h2'))
                    .map((a) =>
                        a instanceof HTMLElement
                            ? [a.innerText.replaceAll('🔗', '').trim(), a.id]
                            : undefined,
                    )
                    .filter((a): a is [string, string] => a !== undefined);
            }
            closestID = Array.from(document.getElementsByTagName('h2')).sort(
                (h1, h2) =>
                    Math.abs(h1.offsetTop - scrollY) -
                    Math.abs(h2.offsetTop - scrollY),
            )[0]?.id;
        }
    });
</script>

<div class="page">
    <div class="columns">
        <div class="header"><Header {headers} activeid={closestID} /></div>
        <div class="content">
            {#if $profile.json.announcement}
                <div class="desktop-bubble">
                    <SpeechBubble>{$profile.json.announcement}</SpeechBubble>
                </div>
            {/if}
            {@render children?.()}
            <Footer />
        </div>
    </div>
</div>

<svelte:window bind:scrollY />

<style>
    /* Small */
    @media only screen and (max-width: 800px) {
        :global(body) {
            margin: 1em;
        }

        .page {
            display: block;
        }

        .desktop-bubble {
            display: none;
        }
    }

    /* Large */
    @media only screen and (min-width: 800px) {
        :global(body) {
            margin: auto;
            max-width: 80em;
        }

        .page {
            margin: 3em;
        }

        .columns {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }

        .header {
            margin-right: var(--margin);
            flex: 0 0 12em;
        }

        .content {
            flex: 1;
            max-width: 40em;
        }

        .desktop-bubble {
            display: block;
        }
    }
</style>
