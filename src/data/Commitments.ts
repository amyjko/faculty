import type { Commitment } from '$lib/models/Commitment';
import type { CommitmentCategory } from '$lib/models/CommitmentCategory';

export type CommitmentDetails = {
    title: string;
    description: string;
    category: CommitmentCategory;
    commitment: Commitment;
    annually: boolean;
};

export const Commitments: CommitmentDetails[] = [
    {
        title: 'Wordplay benevolent facilitator',
        description:
            'Lead designer and developer of Wordplay, community organizer.',
        category: 'research',
        annually: true,
        commitment: { start: null, end: null, hours: 3, priority: 1 },
    },
    {
        title: 'Promotion letters',
        description: 'Evaluating tenure and promotion cases',
        category: 'service',
        annually: true,
        commitment: { start: '05-15', end: '10-01', hours: 2, priority: 1 },
    },
    {
        title: 'Reading',
        description: 'Books and papers',
        category: 'research',
        annually: false,
        commitment: { start: null, end: null, hours: 2, priority: 1 },
    },
    {
        title: 'Advising',
        description:
            'Doctoral student meetings, feedback, and collaboration',
        category: 'research',
        annually: false,
        commitment: { start: null, end: null, hours: 6, priority: 0 },
    },
    {
        title: 'Seminars',
        description: 'iSchool, DUB, CSE, CREATE',
        category: 'research',
        annually: false,
        commitment: { start: null, end: null, hours: 2, priority: 0 },
    },
    {
        title: 'Miscellany',
        description: 'Crises, oversights, and other surprises',
        category: 'service',
        annually: false,
        commitment: { start: null, end: null, hours: 2, priority: 0 },
    },
    {
        title: 'Autumn faculty meetings',
        description: 'iSchool',
        category: 'service',
        annually: true,
        commitment: { start: '09-15', end: '12-15', hours: 4, priority: 0 },
    },
    {
        title: 'Winter faculty meetings',
        description: 'iSchool',
        category: 'service',
        annually: true,
        commitment: { start: '01-01', end: '03-15', hours: 2, priority: 0 },
    },
    {
        title: 'Spring faculty meetings',
        description: 'iSchool',
        category: 'service',
        annually: true,
        commitment: { start: '04-01', end: '06-15', hours: 2, priority: 0 },
    },
    {
        title: 'Ph.D. admissions',
        description: 'Reviews + meetings',
        category: 'research',
        annually: true,
        commitment: { start: '12-15', end: '03-15', hours: 2, priority: 1 },
    },
    {
        title: 'SIGCSE deadline',
        description: 'Writing',
        category: 'research',
        annually: true,
        commitment: {
            start: '08-01',
            end: '08-20',
            hours: 10,
            priority: 1,
        },
    },
    {
        title: 'CHI deadline',
        description: 'Writing',
        category: 'research',
        annually: true,
        commitment: {
            start: '08-15',
            end: '09-10',
            hours: 10,
            priority: 1,
        },
    },
    {
        title: 'ICER deadline',
        description: 'Writing',
        category: 'research',
        annually: true,
        commitment: {
            start: '03-15',
            end: '04-05',
            hours: 10,
            priority: 1,
        },
    },
    {
        title: 'Winter break',
        description: 'Family',
        category: 'personal',
        annually: true,
        commitment: {
            start: '12-20',
            end: '01-01',
            hours: 30,
            priority: 2,
        },
    },
    {
        title: 'Next 15 years of CER',
        description: 'A 2-day workshop spread across 6 months.',
        category: 'research',
        annually: false,
        commitment: {
            start: '2020-11-15',
            end: '2021-04-15',
            hours: 0.5,
            priority: 0,
        },
    },
    {
        title: 'Personal leave',
        description: 'Family',
        category: 'personal',
        annually: false,
        commitment: {
            start: '2021-08-23',
            end: '2021-09-20',
            hours: 40,
            priority: 2,
        },
    },
    {
        title: 'Sabbatical',
        description: 'Paid professional leave.',
        category: 'research',
        annually: false,
        commitment: {
            start: '2022-06-15',
            end: '2023-09-25',
            hours: 20,
            priority: 2,
        },
    },
    {
        title: 'Book writing',
        description: 'Finishing a draft of a collaborative book.',
        category: 'research',
        annually: false,
        commitment: {
            start: '2021-06-15',
            end: '2021-08-23',
            hours: 10,
            priority: 1,
        },
    },
];
