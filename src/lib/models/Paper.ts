import type { DiscoveryID } from '../../data/Discoveries';
import type Annotation from './Annotation';

type Paper = {
    id: string;
    kind:
        | 'refereed conference paper'
        | 'refereed workshop paper'
        | 'journal article'
        | 'refereed short conference paper'
        | 'juried conference paper'
        | 'book chapter'
        | 'refereed invited article'
        | 'juried workshop paper'
        | 'technical report'
        | 'refereed magazine article'
        | 'whitepaper'
        | 'abstract'
        | 'book';
    authors: string[];
    equalfirst?: boolean;
    deadname?: boolean;
    year: number;
    title: string;
    source: string;
    discoveries: null | [DiscoveryID, ...DiscoveryID[]];
    volume?: number;
    issue?: number;
    article?: number;
    pages: string | null;
    doi: string | null;
    local: string | null;
    authorizer?: string | null;
    publisher: string;
    contribution: string;
    slides?: string;
    blog?: string;
    acceptrate?: number;
    annotation?: Annotation;
    award?: (
        | 'best paper'
        | 'diversity + inclusion award'
        | 'honorable mention'
        | 'most influential paper'
        | 'most influential paper honorable mention'
    )[];
};
export type { Paper as default };
