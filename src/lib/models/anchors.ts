/**
 * Stable HTML ids for records that don't carry an explicit `id` field.
 *
 * These are derived from fields the records already have, so nothing has to be
 * maintained by hand and no data file has to change. Anchors let site search
 * deep link to the record a result came from, rather than to the top of the
 * page or to a year header. `Paper`, `Person`, `Class`, and `Funding` already
 * have `id` fields and should use those directly.
 *
 * Because these are derived, editing a record's title changes its anchor. That
 * is acceptable: these records have no anchors today, so nothing can break.
 */

import type { Talk } from '../../data/Talks';
import type { Post } from '../../data/Posts';
import type { TravelInfo } from '../../data/Travel';
import type { Impact } from '../../data/Impact';
import type Commit from './Commit';
import type { Discovery } from '../../data/Discoveries';

/** The longest a slug may be, so that URLs stay readable. */
const MAX = 60;

/** A URL-safe, lowercase form of some text, truncated at a word boundary. */
export function slug(text: string): string {
    const cleaned = text
        .normalize('NFD')
        // Strip the diacritics that normalizing just separated out.
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    if (cleaned.length <= MAX) return cleaned;
    const cut = cleaned.slice(0, MAX);
    const boundary = cut.lastIndexOf('-');
    return boundary > 0 ? cut.slice(0, boundary) : cut;
}

export function talkID(talk: Talk): string {
    return `${talk.date}-${slug(talk.title)}`;
}

/** Post dates are only precise to the month, and many share one, so title alone. */
export function postID(post: Post): string {
    return slug(post.title);
}

export function travelID(travel: TravelInfo): string {
    return `${travel.commitment.start ?? ''}-${slug(travel.title)}`.replace(
        /^-/,
        '',
    );
}

/** Impact titles are optional, so fall back to the description. */
export function impactID(impact: Impact): string {
    return `${impact.kind}-${impact.start}-${slug(impact.title ?? impact.description)}`;
}

/** The commitments page renders normalized `Commit`s, whose title is `name`. */
export function commitID(commit: Commit): string {
    return slug(commit.name);
}

/**
 * `getDiscoveries()` returns values, not the `DiscoveryID` keys, so the
 * contribution — the discovery's headline claim — is the stable text to use.
 */
export function discoveryID(discovery: Discovery): string {
    return slug(discovery.contribution);
}

/**
 * An id allocator that suffixes repeats, so no two records on a page can share
 * an anchor. Use this directly when a page renders several lists that can
 * overlap, so that every rendering gets its own anchor.
 */
export function uniquer(): (id: string) => string {
    const counts = new Map<string, number>();
    return (id) => {
        const seen = (counts.get(id) ?? 0) + 1;
        counts.set(id, seen);
        return seen === 1 ? id : `${id}-${seen}`;
    };
}

/**
 * Makes one list of ids unique. The result is positionally aligned with the
 * input.
 */
export function unique(ids: string[]): string[] {
    const next = uniquer();
    return ids.map(next);
}
