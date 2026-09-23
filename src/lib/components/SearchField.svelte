<script lang="ts">
    interface Props {
        id: string;
        /** Read by screen readers; the placeholder labels the field visually. */
        label: string;
        placeholder: string;
        value?: string;
        onfocus?: () => void;
        /**
         * Called when the field's clear button is clicked, which fires a
         * `search` event Svelte doesn't type, so it's bound by hand here.
         */
        onsearch?: (event: Event) => void;
    }

    let {
        id,
        label,
        placeholder,
        value = $bindable(''),
        onfocus,
        onsearch,
    }: Props = $props();

    function listen(input: HTMLInputElement) {
        const handler = onsearch;
        if (handler === undefined) return;
        input.addEventListener('search', handler);
        return () => input.removeEventListener('search', handler);
    }
</script>

<label for={id}>{label}</label>
<input
    {id}
    type="search"
    {placeholder}
    bind:value
    {onfocus}
    {@attach listen}
/>

<style>
    /* Visible to screen readers only; the placeholder labels it visually. */
    label {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip-path: inset(50%);
        white-space: nowrap;
    }

    input {
        --clear-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3 3L13 13M13 3L3 13' stroke='%23000' stroke-width='2.5' stroke-linecap='round'/%3E%3C/svg%3E");
        width: 100%;
        box-sizing: border-box;
        font-family: inherit;
        font-size: var(--small-font-size);
        padding: calc(var(--padding) / 2);
        border: 1px solid var(--border-color);
        border-radius: var(--roundedness);
        background: none;
        color: inherit;
    }

    /* The browser default ring doesn't match anything else here. This borrows
       the link color, which is the site's existing "this is interactive" cue,
       and stays visible in both light and dark themes. */
    input:focus-visible {
        outline: 2px solid var(--link-color);
        /* Zero, so the border and outline read as one ring rather than two
           lines with a strip of background between them. */
        outline-offset: 0;
        border-color: var(--link-color);
    }

    /* WebKit's clear button is a grey circled x that matches nothing on the
       site. This replaces it with a plain stroke in the site's text color. */
    input::-webkit-search-cancel-button {
        -webkit-appearance: none;
        appearance: none;
        height: 0.7em;
        width: 0.7em;
        cursor: pointer;
        background-color: var(--text-color);
        -webkit-mask: var(--clear-icon) center / contain no-repeat;
        mask: var(--clear-icon) center / contain no-repeat;
    }
</style>
