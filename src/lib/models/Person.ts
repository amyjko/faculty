import type Annotation from './Annotation';

type Person = {
    id: string;
    name: string;
    active: boolean;
    advised: boolean;
    level:
        | 'undergrad'
        | 'masters'
        | 'phd'
        | 'postdoc'
        | 'faculty'
        | 'director'
        | 'teacher';
    dept: string;
    coadvisor: string | null;
    bio: string;
    url: string;
    dissertation?: string;
    startdate: number;
    enddate: number | null;
    achievements: readonly string[];
    annotation?: Annotation;
};
export type { Person as default };
