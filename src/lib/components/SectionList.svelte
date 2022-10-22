<script lang="ts">
    import { afterUpdate } from "svelte";
    import Link from "./Link.svelte";

    export let path: string;

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
        <li><Link to={`${path}#${section.id}`}>{section.text?.replaceAll("🔗", "")}</Link></li>
    {/each}
</ul>
<hr/>