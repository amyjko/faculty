<script lang="ts">
    import { afterUpdate } from "svelte";

    type Header = { id: string, text: string | null}

    let sections: Header[] = [];

    afterUpdate(() => {

        if(typeof document === "undefined")
            return;

        sections = Array.from(document.getElementsByClassName("section"))
            .map(section => { return { id: section.id, text: section.textContent }});

    });


</script>

<hr/>
<ul>
    {#each sections as section }
        <li><a href={`#${section.id}`}>{section.text}</a></li>
    {/each}
</ul>
<hr/>