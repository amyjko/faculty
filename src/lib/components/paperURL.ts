import type { Paper } from '../../data/Pubs';
import localAsset from './localAsset';

/**
 * The best place to read a paper, or '' if there's none. A local copy comes
 * first, since digital libraries have my deadname; then an ACM authorizer link,
 * which bypasses the paywall; then the DOI, which may not.
 */
export function paperURL(paper: Paper): string {
    return paper.local
        ? `/papers/${paper.local}`
        : paper.authorizer
          ? paper.authorizer
          : paper.doi
            ? paper.doi
            : '';
}

/** paperURL, resolved to an href: a local copy gets the site's asset path. */
export function paperHref(paper: Paper): string {
    const url = paperURL(paper);
    return url === '' || url.startsWith('http') ? url : localAsset(url);
}
