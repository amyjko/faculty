<script lang="ts">
    import { profile } from '$lib/models/stores';
    import { parseDate } from '$lib/models/Profile';
    import { asset } from '$app/paths';
    import Title from '$lib/components/Title.svelte';
    import Linkable from '$lib/components/Linkable.svelte';
    import Link from '$lib/components/Link.svelte';
    import Emoji from '$lib/components/Emoji.svelte';

    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    const minYear = currentYear - 4;

    // Term 1=Autumn (starts Sept 15), 2=Winter (Jan 1), 3=Spring (Apr 1)
    function termStart(year: number, term: number) {
        const month = [8, 0, 3][term - 1];
        const day = [15, 1, 1][term - 1];
        return new Date(year, month, day);
    }

    type FeedItem = {
        label: string;
        emoji: string;
        kindRank: number;
        externalUrl: string | null;
        route: string | null;
        anchor: string | null;
        fallbackRoute: string;
        imageUrl: string | null;
        imageAlt: string | null;
    };

    // Order determines display sequence within each year group
    const kinds: Record<
        string,
        { emoji: string; rank: number; fallbackRoute: string }
    > = {
        publication: {
            emoji: '📄',
            rank: 0,
            fallbackRoute: '/(app)/publications',
        },
        essay: { emoji: '✍', rank: 1, fallbackRoute: '/(app)/essays' },
        travel: { emoji: '✈', rank: 2, fallbackRoute: '/(app)/travel' },
        talk: { emoji: '🎤', rank: 3, fallbackRoute: '/(app)/talks' },
        class: { emoji: '🎓', rank: 4, fallbackRoute: '/(app)/classes' },
        person: { emoji: '👤', rank: 5, fallbackRoute: '/(app)/lab' },
        impact: { emoji: '📢', rank: 6, fallbackRoute: '/(app)/impact' },
    };

    let feedByYear = $derived.by(() => {
        const byYear = new Map<number, FeedItem[]>();

        function addExternal(
            year: number,
            label: string,
            url: string | null,
            kind: string,
            imageUrl: string | null = null,
            imageAlt: string | null = null,
        ) {
            if (year >= minYear && kind in kinds) {
                if (!byYear.has(year)) byYear.set(year, []);
                const { emoji, rank } = kinds[kind];
                byYear.get(year)!.push({
                    label,
                    emoji,
                    kindRank: rank,
                    externalUrl: url,
                    route: null,
                    anchor: null,
                    fallbackRoute: kinds[kind].fallbackRoute,
                    imageUrl,
                    imageAlt,
                });
            }
        }

        function addInternal(
            year: number,
            label: string,
            route: string,
            anchor: string,
            kind: string,
            imageUrl: string | null = null,
            imageAlt: string | null = null,
        ) {
            if (year >= minYear && kind in kinds) {
                if (!byYear.has(year)) byYear.set(year, []);
                const { emoji, rank } = kinds[kind];
                byYear.get(year)!.push({
                    label,
                    emoji,
                    kindRank: rank,
                    externalUrl: null,
                    route,
                    anchor,
                    fallbackRoute: kinds[kind].fallbackRoute,
                    imageUrl,
                    imageAlt,
                });
            }
        }

        // Classes — one entry per (class, year) to avoid duplicating across terms
        const seenClasses = new Set<string>();
        for (const cls of $profile.getClasses()) {
            for (const offering of cls.offerings) {
                const key = `${cls.id}-${offering.year}`;
                if (
                    offering.year >= minYear &&
                    !seenClasses.has(key) &&
                    termStart(offering.year, offering.term) <= now
                ) {
                    seenClasses.add(key);
                    addExternal(offering.year, cls.title, cls.link, 'class');
                }
            }
        }

        // Impact — year is the start field
        for (const impact of $profile.getImpacts(
            () => true,
            () => 0,
        )) {
            if (impact.start > currentYear) continue;
            addExternal(
                impact.start,
                impact.title ?? impact.description,
                impact.url,
                'impact',
            );
        }

        // Posts — year parsed from YYYY.MM date string
        for (const post of $profile.getPosts(
            () => true,
            () => 0,
        )) {
            const { year, month } = $profile.getPostMonthYear(post);
            if (
                year > currentYear ||
                (year === currentYear && month > currentMonth)
            )
                continue;
            addExternal(
                year,
                post.title,
                post.url,
                'essay',
                post.img ? `/images/posts/post-${post.img}.jpg` : null,
                post.alt ?? null,
            );
        }

        // Publications — deep-link to the anchor on the publications page
        for (const pub of $profile.getPublications()) {
            if (pub.year > currentYear) continue;
            addInternal(
                pub.year,
                pub.title,
                '/(app)/publications',
                pub.id,
                'publication',
                `/images/papers/paper-${pub.id}.jpg`,
                pub.title,
            );
        }

        // Talks — prefer recording, then practice recording, then slides URL, then event URL
        for (const talk of $profile.getTalks()) {
            const date = parseDate(talk.date);
            if (date > now) continue;
            const year = date.getFullYear();
            const url =
                talk.recording ??
                talk.practice ??
                (talk.slides?.startsWith('http') ? talk.slides : null) ??
                talk.url ??
                null;
            addExternal(
                year,
                talk.title,
                url,
                'talk',
                talk.image ? `/images/talks/${talk.image}` : null,
                talk.alt ?? null,
            );
        }

        // People — postdocs, PhD students, and undergrads who completed in range
        for (const person of $profile.getPeople(
            (p) =>
                p.advised &&
                p.enddate !== null &&
                ['phd', 'postdoc', 'undergrad'].includes(p.level),
        )) {
            if (person.enddate! > currentYear) continue;
            addExternal(
                person.enddate!,
                person.name,
                person.url,
                'person',
                `/images/headshots/${person.id}.jpg`,
                `Photograph of ${person.name}`,
            );
        }

        // Travel — year from commitment start date
        for (const trip of $profile.getTravel()) {
            if (trip.commitment.start) {
                const start = parseDate(trip.commitment.start);
                if (start > now) continue;
                addExternal(
                    start.getFullYear(),
                    trip.title,
                    trip.url ?? null,
                    'travel',
                );
            }
        }

        const yearContexts = $profile.getYearContexts();
        return Array.from(byYear.entries())
            .sort(([a], [b]) => b - a)
            .map(([year, items]) => {
                const sorted = items
                    .slice()
                    .sort((a, b) => a.kindRank - b.kindRank);
                const groups: FeedItem[][] = [];
                for (const item of sorted) {
                    const last = groups[groups.length - 1];
                    if (last && last[0].kindRank === item.kindRank)
                        last.push(item);
                    else groups.push([item]);
                }
                return {
                    year,
                    context: yearContexts[year] ?? null,
                    groups,
                };
            });
    });
</script>

<Title text="Latest" />

<h1>Here is what I've been up to in the past five years.</h1>

{#each feedByYear as { year, context, groups }}
    <Linkable id={`${year}`}>
        {year}{#if context}<small> &ndash; <em>{context}</em></small>{/if}
    </Linkable>
    <div class="cluster">
        {#each groups as group, groupIndex}
            {#if groupIndex > 0}<span class="break"></span>{/if}
            {#each group as item}
                <span class="item">
                    <span class="item-icons">
                        <Emoji symbol={item.emoji} />
                        {#if item.imageUrl}
                            <img
                                class="item-image"
                                src={asset(item.imageUrl)}
                                alt={item.imageAlt ?? ''}
                            />
                        {/if}
                    </span>
                    {#if item.externalUrl}
                        <Link to={item.externalUrl}>{item.label}</Link>
                    {:else if item.route}
                        <Link
                            to={item.route as any}
                            id={item.anchor ?? undefined}>{item.label}</Link
                        >
                    {:else}
                        <Link to={item.fallbackRoute as any}>{item.label}</Link>
                    {/if}
                </span>
            {/each}
        {/each}
    </div>
{/each}

<style>
    .cluster {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        gap: 0.25em 0.75em;
        font-size: var(--extra-small-font-size);
        margin-bottom: 2em;
    }

    .item {
        display: inline-flex;
        align-items: baseline;
        gap: 0.2em;
        line-height: 1.4;
    }

    .item-icons {
        display: inline-flex;
        align-items: center;
        gap: 0.2em;
    }

    .item-image {
        width: 1em;
        height: 1em;
        object-fit: cover;
        border-radius: 2px;
        filter: grayscale(100%);
    }

    .break {
        flex-basis: 100%;
        height: 0;
        margin-top: 0.5em;
    }
</style>
