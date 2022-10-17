<script lang="ts">
    import { onMount } from "svelte";
    import Link from "./Link.svelte";
    import { page } from "$app/stores";

    export let id: string;

    function isLinked() {
        return typeof window === "undefined" ? undefined : window.location.hash.length > 0 && window.location.hash.substring(1) === id;
    }

    onMount(() => {
		// If this window has a hash and it matches this header's ID, scroll to this header.
		if(isLinked()) {
            let element = document.getElementById(id);
            if(element)
                window.scrollTo({ top: element.getBoundingClientRect().top - window.innerHeight / 2, behavior: 'smooth' })
		}
    });

</script>

<h3 id={id} class={isLinked() ? "linked" : null}>
    <slot />
    <Link
        to={$page.url.pathname + "#" + id}
    >
        <img class="link" alt="link icon" src={"/images/icons/link.png"} />
    </Link>
</h3>