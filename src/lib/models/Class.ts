export type Class = {
    id: string;
    alt: string;
    link: string;
    number: string;
    level: 'undergraduate' | 'graduate';
    title: string;
    description: string;
    hours: number;
    links: { description: string; link: string }[];
    offerings: {
        term: 1 | 2 | 3;
        size: number;
        year: number;
        score: number | null | string;
    }[];
};
