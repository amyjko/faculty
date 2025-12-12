import type Annotation from './Annotation';

export type Talk = {
    title: string;
    date: string;
    image: string;
    alt: string;
    slides: string | null;
    venue: string;
    url: string | null;
    recording: string | null;
    practice: string | null;
    description: string;
    keynote: boolean;
    blog?: string;
    annotation?: Annotation;
};
