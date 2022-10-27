export type Discovery = {
    start: number;
    stop: number | null;
    image: string,
    contribution: string; // 1 punchy sentence
    detail: string;  // 2-3 sentences
    tags: string[];
    pubs: string[];
    people: string[];
    video?: string;
    demo?: string;
    code?: string;
}