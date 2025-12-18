import type { DiscoveryID } from '../../data/Discoveries';

export type Discovery = {
    contribution: string; // 1 punchy sentence
    detail: string; // 2-3 sentences
    tags: string[];
    video?: string[];
    demo?: string;
    code?: string;
};
