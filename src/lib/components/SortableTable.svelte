<script lang="ts" generics="T">
    import { untrack, type Snippet } from 'svelte';
    import Table from './Table.svelte';
    import SearchField from './SearchField.svelte';

    interface Column {
        label: string;
        /** The value this column sorts by. */
        key: (row: T) => string | number;
    }

    interface Props {
        rows: T[];
        columns: Column[];
        /** Renders one <tr> for a row. */
        row: Snippet<[T]>;
        /** If given, shows a filter field, keeping rows whose text contains the query. */
        filter?: (row: T) => string;
        /** The filter field's label, e.g. "Filter by expertise". */
        label?: string;
        /** The column the rows are already ordered by, if any, so its header shows that. */
        sorted?: number;
    }

    let {
        rows,
        columns,
        row,
        filter,
        label = 'Filter',
        sorted,
    }: Props = $props();

    type Direction = 'ascending' | 'descending';

    let sort = $state<{ column: number; direction: Direction } | null>(
        untrack(() =>
            sorted === undefined
                ? null
                : { column: sorted, direction: 'ascending' },
        ),
    );
    let query = $state('');

    const id = $props.id();

    const visible = $derived.by(() => {
        const needle = query.trim().toLocaleLowerCase();
        const kept =
            filter && needle.length > 0
                ? rows.filter((r) =>
                      filter(r).toLocaleLowerCase().includes(needle),
                  )
                : rows.slice();
        if (sort === null) return kept;
        const { key } = columns[sort.column];
        const sign = sort.direction === 'ascending' ? 1 : -1;
        return kept.sort((a, b) => sign * compare(key(a), key(b)));
    });

    function compare(a: string | number, b: string | number): number {
        if (typeof a === 'number' && typeof b === 'number') return a - b;
        return `${a}`.localeCompare(`${b}`, undefined, {
            sensitivity: 'base',
            numeric: true,
        });
    }

    /** Sorts ascending by a new column, or flips the direction of the current one. */
    function toggle(column: number) {
        sort =
            sort?.column === column
                ? {
                      column,
                      direction:
                          sort.direction === 'ascending'
                              ? 'descending'
                              : 'ascending',
                  }
                : { column, direction: 'ascending' };
    }
</script>

{#if filter}
    <div class="filter">
        <SearchField
            id="{id}-filter"
            {label}
            placeholder={label.toLocaleLowerCase()}
            bind:value={query}
        />
        <small aria-live="polite"
            >Showing {visible.length} of {rows.length}</small
        >
    </div>
{/if}

<Table>
    <thead>
        <tr>
            {#each columns as column, index (column.label)}
                {@const direction =
                    sort?.column === index ? sort.direction : undefined}
                <th scope="col" aria-sort={direction ?? 'none'}>
                    <button type="button" onclick={() => toggle(index)}
                        >{column.label}<span
                            class="indicator"
                            class:unsorted={direction === undefined}
                            aria-hidden="true"
                            >{direction === 'ascending'
                                ? '▲'
                                : direction === 'descending'
                                  ? '▼'
                                  : '↕'}</span
                        ></button
                    >
                </th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each visible as r (r)}
            {@render row(r)}
        {:else}
            <tr><td colspan={columns.length}><em>No matches.</em></td></tr>
        {/each}
    </tbody>
</Table>

<style>
    .filter {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        gap: calc(var(--padding) / 2) var(--padding);
    }

    /* Grows to fill the row, leaving the count beside it. */
    .filter :global(input) {
        flex: 1;
        min-width: 10em;
    }

    button {
        all: unset;
        cursor: pointer;
        font-weight: inherit;
        white-space: nowrap;
    }

    button:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 2px;
    }

    .indicator {
        font-size: 0.7em;
        margin-inline-start: 0.4em;
    }

    .indicator.unsorted {
        opacity: 0.4;
    }

    @media print {
        .filter,
        .indicator {
            display: none;
        }
    }
</style>
