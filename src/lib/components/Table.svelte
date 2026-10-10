<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        /** Optional header rows, rendered in a thead. */
        head?: Snippet;
        /**
         * On narrow screens, keep the first column on the left and stack the
         * rest beside it, so the table never needs to scroll sideways.
         */
        stack?: boolean;
        children?: Snippet;
    }

    let { head, stack = false, children }: Props = $props();
</script>

<div class={['table', stack && 'stack']}>
    <table>
        {#if head}<thead>{@render head()}</thead>{/if}
        <tbody>
            {@render children?.()}
        </tbody>
    </table>
</div>

<style>
    /* Rows are padded only within, so this gives the table the same room
       below before whatever follows, such as a heading. */
    .table {
        width: 100%;
        overflow-x: auto;
        padding-bottom: var(--margin);
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    table :global(td),
    table :global(th) {
        text-align: left;
        vertical-align: top;
        padding-block: calc(2 * var(--padding));
        padding-inline-end: var(--margin);
    }

    /* The stripe shouldn't end flush with the text at the table's edges. */
    table :global(td:first-child),
    table :global(th:first-child) {
        padding-inline-start: calc(2 * var(--padding));
    }

    table :global(td:last-child),
    table :global(th:last-child) {
        padding-inline-end: calc(2 * var(--padding));
    }

    table :global(th) {
        font-size: 0.8em;
        font-weight: var(--bold-weight);
        opacity: 0.6;
    }

    /* Highlight is sized for a full-width column, not a table cell. */
    table :global(.annotation) {
        max-width: 100%;
    }

    /* Rows are separated by banding and space; there are no rules anywhere. */
    tbody :global(tr:nth-child(even)) {
        background: var(--stripe-color);
    }

    @media only screen and (max-width: 600px) {
        .stack {
            overflow-x: visible;
        }

        /* Column headings don't fit a stacked row, and its cells explain
           themselves. */
        .stack :global(thead) {
            display: none;
        }

        .stack :global(tbody tr) {
            display: grid;
            grid-template-columns: auto minmax(0, 1fr);
            padding-block: calc(2 * var(--padding));
        }

        .stack :global(td) {
            padding-block: 0;
        }

        .stack :global(td:first-child) {
            grid-column: 1;
            grid-row: 1 / span 9;
        }

        .stack :global(td:not(:first-child)) {
            grid-column: 2;
            padding-inline-start: 0;
        }
    }

    @media print {
        /* There is no scrolling on paper: let an over-wide table spill off the
           page rather than silently clip its last column. */
        .table {
            overflow-x: visible;
        }

        tbody :global(tr) {
            break-inside: avoid;
        }

        /* Browsers drop backgrounds when printing unless told otherwise, which
           would take the banding, the table's only structure, with it. */
        table {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
        }

        table :global(td),
        table :global(th) {
            padding-inline-end: calc(var(--margin) / 2);
        }
    }
</style>
