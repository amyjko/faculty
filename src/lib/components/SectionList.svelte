<script lang="ts">
    import Link from './Link.svelte';

    interface Props {
        path: string;
    }

    let { path }: Props = $props();

    type Header = { id: string; text: string | null };

    let sections: Header[] = $state([]);

    $effect(() => {
        if (typeof document === 'undefined') return;

        sections = Array.from(document.getElementsByClassName('section')).map(
            (section) => {
                return { id: section.id, text: section.textContent };
            },
        );
    });
</script>

<hr />
<ul>
    {#each sections as section}
        <li
            ><Link to={`${path}#${section.id}`}
                >{section.text?.replaceAll('🔗', '')}</Link
            ></li
        >
    {/each}
</ul>
<hr />
