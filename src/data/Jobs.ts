import type Annotation from '$lib/models/Annotation';

export type Job = {
    title: string;
    organization: string;
    department: string;
    startdate: number;
    enddate: number | null;
    academic: boolean;
    annotation?: Annotation;
};

export const Jobs: Job[] = [
    {
        title: 'Professor',
        organization: 'University of Washington, Seattle',
        department:
            'The Information School + Paul G. Allen School of Computer Science & Engineering (courtesy)',
        startdate: 2020,
        enddate: null,
        academic: true,
        annotation: {
            year: 2025,
            text: "I'm still a professor and still happy to be at the Information School!",
        },
    },
    {
        title: 'Associate Professor',
        organization: 'University of Washington, Seattle',
        department:
            'The Information School + Paul G. Allen School of Computer Science & Engineering (courtesy)',
        startdate: 2014,
        enddate: 2020,
        academic: true,
    },
    {
        title: 'Co-founder and Chief Scientist',
        organization: 'AnswerDash, Inc.',
        department: 'Executive team',
        startdate: 2015,
        enddate: 2020,
        academic: false,
    },
    {
        title: 'Co-founder and Chief Technology Officer',
        organization: 'AnswerDash, Inc.',
        department: 'Executive team',
        startdate: 2013,
        enddate: 2015,
        academic: false,
    },
    {
        title: 'Assistant Professor',
        organization: 'University of Washington',
        department:
            'The Information School + Paul G. Allen School of Computer Science & Engineering (courtesy)',
        startdate: 2008,
        enddate: 2014,
        academic: true,
    },
    {
        title: 'Research Intern',
        organization: 'Microsoft',
        department: 'Microsoft Research, Redmond',
        startdate: 2006,
        enddate: 2006,
        academic: true,
    },
    {
        title: 'Graduate Research Assistant',
        organization: 'Carnegie Mellon University',
        department:
            'Human-Computer Interaction Institute, School of Computer Science',
        startdate: 2002,
        enddate: 2008,
        academic: true,
    },
    {
        title: 'Undergraduate Research Assistant',
        organization: 'Oregon State University',
        department: 'Department of Computer Science',
        startdate: 1999,
        enddate: 2002,
        academic: true,
    },
];
