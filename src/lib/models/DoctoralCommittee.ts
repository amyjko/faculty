import type Annotation from './Annotation';

export type DoctoralCommittee = {
    name: string;
    department: string;
    institution: string;
    startdate: number;
    enddate: number | null;
    annotation?: Annotation;
};
