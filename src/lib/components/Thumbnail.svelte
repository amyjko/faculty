<script lang="ts">
    import localAsset from './localAsset';

    interface Props {
        url: string;
        alt: string;
        highlight?: boolean;
        /** Alternative sizes of the image, already resolved, with sizes for choosing among them. */
        srcset?: string;
        sizes?: string;
    }

    let { url, alt, highlight = false, srcset, sizes }: Props = $props();
</script>

<img
    class={`thumbnail ${highlight ? 'highlight' : ''}`}
    src={localAsset(url)}
    {srcset}
    {sizes}
    {alt}
/>

<style>
    img {
        width: calc(100% - 1em);
        padding: 0;
        border-radius: var(--roundedness);
        display: block;
        margin-right: 1em;
        margin-bottom: 1em;
        max-width: 10em;
    }

    img.highlight {
        outline: 5px solid var(--link-color);
        animation: throb 0.5s 3;
    }

    @keyframes throb {
        0% {
            outline-color: var(--link-color);
        }
        50% {
            outline-color: var(--back-color);
        }
        100% {
            outline-color: var(--link-color);
        }
    }
</style>
