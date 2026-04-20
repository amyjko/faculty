import type Annotation from '$lib/models/Annotation';
import type { Commitment } from '$lib/models/Commitment';

export type Reviewing = {
    venue: string;
    years: number[];
    level: 'reviewer' | 'pc' | 'chair' | 'panelist';
    title?: string;
    commitment?: Commitment;
    annotation?: Annotation;
};

export const ReviewingRoles: Reviewing[] = [
    {
        venue: 'National Science Foundation (CISE, EHR)',
        title: 'NSF Panelist',
        years: [2011, 2012, 2014, 2017, 2018, 2020, 2021, 2022, 2023, 2025],
        level: 'panelist',
        commitment: {
            start: '09-15',
            end: '06-15',
            hours: 0.5,
            priority: 1,
        },
        annotation: {
            year: 2025,
            text: 'I was a panelist twice in 2025.',
        },
    },
    {
        venue: 'MIT Press',
        title: 'Book reviewer',
        years: [2025],
        level: 'reviewer',
        commitment: {
            start: '10-15',
            end: '11-15',
            hours: 4,
            priority: 0,
        },
    },
    {
        venue: 'Princeton University Press',
        title: 'Book reviewer',
        years: [2020],
        level: 'reviewer',
        commitment: {
            start: '10-15',
            end: '11-15',
            hours: 3,
            priority: 0,
        },
    },
    {
        venue: '@icse',
        title: 'Program Board Member',
        years: [2018, 2019],
        level: 'pc',
        commitment: {
            start: '08-15',
            end: '12-15',
            hours: 4,
            priority: 0,
        },
    },
    {
        venue: 'Programming Experience Workshop (PX)',
        title: 'Program Committee Member',
        years: [2017],
        level: 'pc',
    },
    {
        venue: '@icer',
        title: 'Senior Program Committee Member',
        years: [2014, 2015, 2017, 2019, 2024, 2026],
        level: 'pc',
    },
    {
        venue: '@sigcse',
        title: 'Senior Program Committee Member',
        years: [2016, 2017, 2018, 2019],
        level: 'pc',
    },
    {
        venue: 'Summit on Advances in Programming Languages (SNAPL)',
        title: 'Program Committee Member',
        years: [2017],
        level: 'pc',
    },
    {
        venue: '@icse',
        title: 'Program Committee Member',
        years: [2014, 2016],
        level: 'pc',
    },
    {
        venue: 'Workshop on Evaluation and Usability of Programming Languages and Tools (PLATEAU)',
        title: 'Program Committee Member',
        years: [2016],
        level: 'pc',
    },
    {
        venue: '@chi',
        title: 'Associate Chair',
        years: [2010, 2011, 2012, 2013],
        level: 'pc',
    },
    {
        venue: '@uist',
        title: 'Associate Chair',
        years: [2011],
        level: 'pc',
    },
    {
        venue: 'ACM Symposium on the Foundations of Software Engineering',
        title: 'Program Committee Member',
        years: [2011],
        level: 'pc',
    },
    {
        venue: '@vlhcc',
        title: 'Program Committee Member',
        years: [2011],
        level: 'pc',
    },
    {
        venue: 'International Workshop on Search-Driven Development',
        title: 'Program Committee Member',
        years: [2009, 2010],
        level: 'pc',
    },
    {
        venue: 'Workshop on User Evaluation for Software Engineering Researchers',
        title: 'Program Committee Member',
        years: [2012, 2013],
        level: 'pc',
    },
    {
        venue: 'International Workshop on Live Programming',
        title: 'Program Committee Member',
        years: [2013, 2017, 2018],
        level: 'pc',
    },
    {
        venue: 'Future Programming Workshop',
        title: 'Program Committee Member',
        years: [2014],
        level: 'pc',
    },
    {
        venue: 'Workshop on Designing Technologies to Support Human Problem Solving',
        years: [2018],
        level: 'reviewer',
    },
    {
        venue: '@ese',
        years: [2018, 2019, 2020],
        level: 'reviewer',
    },
    {
        venue: '@chi',
        years: [
            2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
            2015, 2016, 2017, 2018, 2019, 2020, 2021, 2023, 2024, 2025,
        ],
        level: 'reviewer',
        commitment: {
            start: '10-01',
            end: '11-15',
            hours: 1,
            priority: 0,
        },
    },
    {
        venue: '@vlhcc',
        years: [2004, 2005, 2006, 2007, 2008, 2009, 2010],
        level: 'reviewer',
    },
    {
        venue: '@uist',
        years: [2005, 2006, 2007, 2008, 2009, 2010, 2013, 2014, 2015],
        level: 'reviewer',
    },
    {
        venue: 'Proceedings of the ACM on Human-Computer Interaction',
        years: [2017, 2018],
        level: 'reviewer',
    },
    {
        venue: '@toce',
        years: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        level: 'reviewer',
    },
    {
        venue: 'International Journal of Human-Computer Studies (IJHCS)',
        years: [2006, 2008],
        level: 'reviewer',
    },
    {
        venue: 'ACM Conference on Computer-Supported Cooperative Work (CSCW)',
        years: [2010, 2011],
        level: 'reviewer',
    },
    {
        venue: 'ACM Symposium on Engineering Interactive Computing Systems (EICS)',
        years: [2010],
        level: 'reviewer',
    },
    {
        venue: 'ACM Transactions on Software Engineering and Methodology (TOSEM)',
        years: [2009],
        level: 'reviewer',
    },
    {
        venue: 'International Conference on Intelligent User Interfaces (IUI)',
        years: [2009],
        level: 'reviewer',
    },
    {
        venue: '@tse',
        years: [2009],
        level: 'reviewer',
    },
    {
        venue: 'Advances in Human-Computer Interaction (AHCI)',
        years: [2008],
        level: 'reviewer',
    },
    {
        venue: 'Graphics Interface (GI)',
        years: [2006],
        level: 'reviewer',
    },
    {
        venue: 'Journal of Visual Languages and Computing (JVLC)',
        years: [2004, 2005],
        level: 'reviewer',
    },
];
