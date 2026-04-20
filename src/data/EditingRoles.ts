import type Annotation from '$lib/models/Annotation';
import type { Commitment } from '$lib/models/Commitment';

export type Editing = {
    title: string;
    type: 'journal' | 'conference';
    venue: string;
    commitment: Commitment;
    annotation?: Annotation;
};

export const EditingRoles: Editing[] = [
    {
        title: 'Editor in Chief',
        venue: 'ACM Transactions on Computing Education',
        type: 'journal',
        commitment: {
            start: '2021-12-01',
            end: '2027-11-01',
            hours: 3,
            priority: 1,
        },
        annotation: {
            year: 2025,
            text: 'I served my 4th year as EiC, preparing the journal for a transition to more sustainable peer review through my open source work on the Reciprocal.Reviews platform. My term ends in November 2027.',
        },
    },
    {
        title: 'Associate Editor',
        venue: 'ACM Transactions on Computing Education',
        type: 'journal',
        commitment: {
            start: '2015-01-01',
            end: '2021-08-01',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Associate Editor',
        venue: 'IEEE Transactions on Software Engineering',
        type: 'journal',
        commitment: {
            start: '2016-09-15',
            end: '2019-09-15',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Co-Editor',
        venue: 'IEEE Software Special Issue on End-User Software Engineering',
        type: 'journal',
        commitment: {
            start: '2009-01-01',
            end: '2009-09-15',
            hours: 0.5,
            priority: 0,
        },
    },
    {
        title: 'Program Co-Chair',
        venue: '@icer',
        type: 'conference',
        commitment: {
            start: '2019-09-01',
            end: '2020-08-31',
            hours: 4,
            priority: 0,
        },
    },
    {
        title: 'Program Co-Chair',
        venue: '@icer',
        type: 'conference',
        commitment: {
            start: '2020-09-01',
            end: '2021-08-20',
            hours: 4,
            priority: 0,
        },
    },
    {
        title: 'Program Co-Chair',
        venue: '@seet',
        type: 'conference',
        commitment: {
            start: '2020-01-01',
            end: '2020-06-15',
            hours: 2,
            priority: 0,
        },
    },
    {
        title: 'Program Sub-Committee Co-Chair',
        venue: '@chi',
        type: 'conference',
        commitment: {
            start: '2011-05-01',
            end: '2012-01-15',
            hours: 3,
            priority: 0,
        },
    },
    {
        title: 'Program Sub-Committee Co-Chair',
        venue: '@chi',
        type: 'conference',
        commitment: {
            start: '2012-05-01',
            end: '2013-01-15',
            hours: 3,
            priority: 0,
        },
    },
    {
        venue: '@vlhcc',
        title: 'Program Co-Chair',
        type: 'conference',
        commitment: {
            start: '2011-01-15',
            end: '2011-10-15',
            hours: 3,
            priority: 0,
        },
    },
];
