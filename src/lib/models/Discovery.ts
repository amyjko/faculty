export type Resource = {
    kind: 'code' | 'demo' | 'video';
    url: string;
    label: string;
};

export type Discovery = {
    contribution: string; // 1 punchy sentence
    detail: string; // 2-3 sentences
    tags: string[];
    resources?: Resource[];
};
