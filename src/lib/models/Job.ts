import type Annotation from './Annotation';

export type Job = {
    title: string;
    organization: string;
    department: string;
    startdate: number;
    enddate: number | null;
    academic: boolean;
    annotation?: Annotation;
};
