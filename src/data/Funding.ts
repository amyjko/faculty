import type Annotation from '$lib/models/Annotation';
import type { Commitment } from '$lib/models/Commitment';
import type { CommitmentCategory } from '$lib/models/CommitmentCategory';

export type Funding = {
    id: string;
    title: string;
    funder: string;
    award: string | null;
    category: CommitmentCategory;
    investigators: string;
    amount: string;
    description: string;
    url: string | null;
    private?: boolean;
    commitment: Commitment;
    annotation?: Annotation;
};

export const FundingList: Funding[] = [
    {
        id: 'accesscomputing6',
        title: 'AccessComputing Alliance',
        funder: 'National Science Foundation',
        award: '2417014',
        investigators:
            'Richard Ladner (PI), Sheryl Burgstahler (Co-PI), Raja Kushalnagar (Co-PI), Stacy Branham (Co-PI), Elain Short (Co-PI), Amy Ko (Senior Personnel)',
        amount: '$5,618,463',
        category: 'research',
        description:
            'Expands pathways for students with disabilities to participate in computing education.',
        url: 'https://www.nsf.gov/awardsearch/showAward?AWD_ID=2417014&HistoricalAwards=false',
        private: false,
        commitment: {
            start: '2024-10-01',
            end: '2029-09-30',
            hours: 1,
            priority: 1,
        },
        annotation: {
            year: 2025,
            text: 'I continue to help lead AccessComputing, though NSF required us to rescope the whole thing to no longer focus on people with disabilities and the budget was severely cut. That was not fun :(',
        },
    },
    {
        id: 'pnwcsteachers',
        title: 'An Equitable, Justice-Focused Ecosystem for Pacific Northwest Secondary CS Teaching',
        funder: 'National Science Foundation',
        award: '#2318257',
        investigators: 'Amy J. Ko (PI), Caroline Hardin (Co-PI)',
        amount: '$1,400,000',
        category: 'research',
        description:
            'Explores pathways into CS teaching and strategies for retention. Was terminated by DOGE in 2025.',
        url: 'https://www.nsf.gov/awardsearch/showAward?AWD_ID=2318257&HistoricalAwards=false',
        private: false,
        commitment: {
            start: '2023-10-01',
            end: '2027-09-30',
            hours: 4,
            priority: 1,
        },
        annotation: {
            year: 2025,
            text: 'This grant was terminated in January of 2025. Lawsuits have not resurrected it, and so I was suddenly quite underfunded this year, and lost my postdoc and ability to fund my Ph.D. students.',
        },
    },
    {
        id: 'googlestepcsgift',
        title: 'STEP CS scholarships',
        funder: 'Google',
        award: null,
        investigators: 'Amy J. Ko (PI), Anne Beitlers (Co-PI)',
        amount: '$400,000',
        category: 'service',
        description: 'An unrestricted gift to support the STEP CS program.',
        url: null,
        private: false,
        commitment: {
            start: '2022-09-15',
            end: '2026-09-15',
            hours: 0,
            priority: 1,
        },
    },
    {
        id: 'provoststep',
        title: 'Supporting CS teacher pathways',
        funder: "UW Provost's Office",
        award: null,
        investigators: 'Amy J. Ko (PI), Anne Beitlers (Co-PI)',
        amount: '$200,000',
        category: 'service',
        description:
            'Provides two years of tuition subsidy for the new STEP CS secondary CS teacher education program in the College of Education.',
        url: null,
        private: false,
        commitment: {
            start: '2022-09-15',
            end: '2022-09-15',
            hours: 0,
            priority: 1,
        },
    },
    {
        id: 'nsfstepcssupplement',
        title: 'Supplement for Grade 6-12 Data Science Education',
        funder: 'National Science Foundation',
        award: '#2031265',
        investigators: 'Amy J. Ko (PI), Anne Beitlers (Co-PI)',
        amount: '$200,000',
        category: 'service',
        description:
            'Provides tuition subsidy for the new STEP CS secondary CS teacher education program in the College of Education, with a focus on data science education.',
        url: null,
        private: false,
        commitment: {
            start: '2022-09-15',
            end: '2022-09-15',
            hours: 0,
            priority: 1,
        },
    },
    {
        id: 'ecep3',
        title: 'Equity in Computing Education Policies, Pathways, and Practices',
        funder: 'National Science Foundation',
        award: '#2137834',
        investigators:
            'Carol Fletcher (PI), Debra Richardson (Co-PI), Anne Ottenbreit-Leftwich (Co-PI), Joshua Childs (Co-PI), Sarah Dunton (Co-PI), Amy Ko (Senior Personnel)',
        amount: '$3,599,041',
        category: 'service',
        description:
            'Expands pathways for K-12 students to participate in computing education.',
        url: 'https://www.nsf.gov/awardsearch/showAward?AWD_ID=2137834&HistoricalAwards=false',
        commitment: {
            start: '2021-10-01',
            end: '2024-09-30',
            hours: 0.5,
            priority: 1,
        },
    },
    {
        id: 'accesscomputing4',
        title: 'AccessComputing Alliance',
        funder: 'National Science Foundation',
        award: '#2137312',
        investigators:
            'Richard Ladner (PI), Sheryl Burgstahler (Co-PI), Raja Kushalnagar (Co-PI), Stacy Branham (Co-PI), Elain Short (Co-PI), Amy Ko (Senior Personnel)',
        amount: '$2,850,000',
        category: 'service',
        description:
            'Expands pathways for students with disabilities to participate in computing education.',
        url: 'https://www.nsf.gov/awardsearch/showAward?AWD_ID=2137312&HistoricalAwards=false',
        commitment: {
            start: '2021-10-01',
            end: '2024-09-30',
            hours: 2,
            priority: 1,
        },
    },
    {
        id: 'fairassess',
        title: 'Developing Authentic and Fair Computer Science Assessments',
        funder: 'National Science Foundation',
        award: '#2100296',
        investigators: 'Mo Zhang (PI), Amy J. Ko (PI), Min Li (Co-PI)',
        amount: '$877,449',
        category: 'research',
        description:
            'Explores ways of using problem solving process data to ensure more equitable, reliable, and valid CS assessments of programming skill.',
        url: 'https://www.nsf.gov/awardsearch/showAward?AWD_ID=2100296&HistoricalAwards=false',
        commitment: {
            start: '2021-10-01',
            end: '2024-09-30',
            hours: 2,
            priority: 1,
        },
    },
    {
        id: 'endusersynth',
        title: 'End-User Programming with Synthesis-Guided Interaction Models',
        funder: 'National Science Foundation',
        award: '#2122950',
        investigators: 'Ratislav Bodik (PI), Amy J. Ko (Co-PI)',
        amount: '$749,739',
        category: 'research',
        description:
            'Invents new applications of program synthesis to supporting learning and end-user programming.',
        url: 'https://www.nsf.gov/awardsearch/showAward?AWD_ID=2122950&HistoricalAwards=false',
        commitment: {
            start: '2021-10-01',
            end: '2024-09-30',
            hours: 2,
            priority: 1,
        },
    },
    {
        id: 'googlecser',
        title: 'Broadening Participation with CS Counternarratives',
        funder: 'Google',
        award: null,
        investigators: 'Amy J. Ko (PI), Anne Beitlers (Co-PI)',
        amount: '$70,000',
        category: 'research',
        description:
            'Explores ways of engaging students in CS counternarratives to develop critical consciousness of computing.',
        url: 'https://research.google/outreach/featured-research-collaborations/cser/recipients/',
        private: false,
        commitment: {
            start: '2021-07-01',
            end: '2022-06-30',
            hours: 1,
            priority: 1,
        },
    },
    {
        id: 'csjustice',
        title: 'Justice-Focused Secondary CS Teacher Education',
        funder: 'National Science Foundation',
        award: '#2031265',
        investigators: 'Amy J. Ko (PI), Anne Beitlers (Co-PI)',
        amount: '$999,723',
        category: 'research',
        description:
            'Designing and launching a justice-focused CS education masters program and studying teacher learning about CS from a justice lens.',
        url: 'https://www.nsf.gov/awardsearch/showAward?AWD_ID=2031265',
        commitment: {
            start: '2020-05-15',
            end: '2025-09-15',
            hours: 4,
            priority: 1,
        },
        annotation: {
            year: 2025,
            text: 'This grant ended this year after a 2nd no cost extension. It was hugely impactful, and produced 20 publications, cited more than 800 times.',
        },
    },
    {
        id: 'fmitf',
        title: 'Formal Verification of Accessibility',
        funder: 'National Science Foundation',
        award: '#1836813',
        investigators:
            'Michael Ernst (PI), Amy J. Ko (Co-PI), Jennifer Mankoff (Co-PI), Zach Tatlock (Co-PI)',
        amount: '$738,125',
        category: 'research',
        description:
            'New techniques to formally verify a range of accessibility properties of web applications.',
        url: 'https://www.nsf.gov/awardsearch/showAward?AWD_ID=1836813',
        commitment: {
            start: '2019-10-01',
            end: '2022-10-01',
            hours: 1,
            priority: 1,
        },
    },
    {
        id: 'strategies',
        title: 'Programming Strategies',
        funder: 'National Science Foundation',
        award: '#1703304',
        investigators:
            'Thomas LaToza (PI, George Mason University), Amy J. Ko (Co-PI, University of Washington)',
        amount: '$1,199,555',
        category: 'research',
        description: 'Develop of a new science of programming strategies.',
        url: 'https://www.nsf.gov/awardsearch/showAward?AWD_ID=1703734',
        commitment: {
            start: '2017-08-15',
            end: '2021-08-15',
            hours: 2,
            priority: 1,
        },
    },
    {
        id: 'csassess',
        title: 'Automatically Synthesizing Valid, Personalized, Formative Assessments of CS1 Concepts',
        funder: 'National Science Foundation',
        award: '#1735123',
        investigators:
            'Amy J. Ko (PI, University of Washington), Min Li (Co-PI, University of Washington)',
        amount: '$549,857',
        category: 'research',
        description:
            'New model of CS1 concepts, new approaches to formative assessment and feedback, new techniques problem synthesis, and a new paradigm for intelligent tutoring of programming.',
        url: 'https://www.nsf.gov/awardsearch/showAward?AWD_ID=1735123',
        commitment: {
            start: '2017-07-15',
            end: '2020-07-15',
            hours: 4,
            priority: 1,
        },
    },
    {
        id: 'accesscomp',
        title: 'BPC-AE: AccessComputing',
        funder: 'National Science Foundation',
        award: '#1539179',
        investigators:
            'Richard Ladner (PI, University of Washington), Sheryl Burgstahler (Co-PI), Amy J. Ko (Co-PI), Jacob O. Wobbrock (Co-PI)',
        amount: '$3,797,990',
        category: 'service',
        description:
            'Increases access to computing for students with disabilities.',
        url: 'https://www.nsf.gov/awardsearch/showAward?AWD_ID=1539179',
        commitment: {
            start: '2015-06-15',
            end: '2021-06-15',
            hours: 2,
            priority: 0,
        },
    },
    {
        id: 'explore',
        title: 'HCC: Large: Variations to Support Exploratory Programming',
        funder: 'National Science Foundation',
        award: '#1314399',
        investigators:
            'Brad Myers (PI, Carnegie Mellon University), Amy J. Ko (Co-PI), Margaret Burnett (Co-PI, Oregon State University), Martin Erwig (Co-PI, Oregon State University), Anita Sarma (Co-PI, University of Nebraska, Lincoln), Gregg Rothermel (Co-PI, University of Nebraska, Lincoln)',
        amount: '$2,999,991',
        category: 'research',
        description:
            'New theory, tools, and techniques for supporting multiple versions and variations of programs.',
        url: 'https://www.nsf.gov/awardsearch/showAward?AWD_ID=1559657',
        commitment: {
            start: '2013-08-15',
            end: '2017-08-15',
            hours: 3,
            priority: 0,
        },
    },
    {
        id: 'gidget',
        title: 'CER: Computing Education through Collaborative Debugging',
        funder: 'National Science Foundation',
        award: '#1240786',
        investigators:
            'Amy J. Ko (PI), Margaret Burnett (Co-PI, Oregon State University), Catherine Law (Co-PI, Oregon State University)',
        amount: '$599,999',
        category: 'research',
        description:
            'Debugging puzzle games as a new method for engaging, efficient learning of computer programming.',
        url: 'https://www.nsf.gov/awardsearch/showAward?AWD_ID=1240786',
        commitment: {
            start: '2012-07-15',
            end: '2015-07-15',
            hours: 3,
            priority: 0,
        },
    },
    {
        id: 'career',
        title: 'CAREER: Enabling and Exploiting Evidence-Based Bug Triage',
        funder: 'National Science Foundation',
        award: '#1153625',
        investigators: 'Amy J. Ko (PI)',
        amount: '$592,456',
        category: 'research',
        description:
            'Studies and tools for supporting analyzing and prioritizing bug reports.',
        url: 'https://www.nsf.gov/awardsearch/showAward?AWD_ID=0952733',
        commitment: {
            start: '2010-09-15',
            end: '2014-09-15',
            hours: 5,
            priority: 0,
        },
    },
    {
        id: 'wfund',
        title: 'W Fund Early Stage Capital Investment',
        funder: 'W Fund',
        award: null,
        investigators: 'Jacob O. Wobbrock (CEO), Amy J. Ko (CTO)',
        amount: '$500,000',
        category: 'service',
        description:
            'Gap fund to support the commercialization of the LemonAid research project.',
        url: null,
        commitment: {
            start: '2013-07-15',
            end: '2014-07-15',
            hours: 0,
            priority: 0,
        },
    },
    {
        id: 'seif',
        title: 'Mobile/Social Debugging Games for Computing Education',
        funder: 'Microsoft Research Software Engineering Innovation Foundation Award',
        award: null,
        investigators: 'Amy J. Ko (PI)',
        amount: '$25,000',
        category: 'research',
        description: 'Gift to support the Gidget research project.',
        url: null,
        commitment: {
            start: '2013-07-15',
            end: '2014-07-15',
            hours: 0,
            priority: 0,
        },
    },
    {
        id: 'googlelemon',
        title: 'Selection-Based Contextual Help in the Wild',
        funder: 'Google Faculty Research Award',
        award: null,
        investigators: 'Amy J. Ko (PI)',
        amount: '$47,359',
        category: 'research',
        description: 'Gift to support the LemonAid research project.',
        url: null,
        commitment: {
            start: '2012-07-15',
            end: '2013-07-15',
            hours: 0,
            priority: 0,
        },
    },
    {
        id: 'gidgetrrf',
        title: 'Automatic, Individualized Instructional Feedback to Improve Learning in an Online Programming Game',
        funder: 'University of Washington, Royalty Research Fund',
        award: null,
        investigators: 'Amy J. Ko (PI)',
        amount: '$32,122',
        category: 'research',
        description: 'Early stage internal grant to support Gidget.',
        url: null,
        commitment: {
            start: '2012-07-15',
            end: '2013-07-15',
            hours: 0,
            priority: 0,
        },
    },
    {
        id: 'c4clemon',
        title: 'Chime: Bringing Crowdsourced Contextual Help to the Masses',
        funder: 'UW Center for Commercialization',
        award: null,
        investigators: 'Jacob O. Wobbrock (PI) and Amy J. Ko (Co-PI)',
        amount: '$50,000',
        category: 'service',
        description:
            'Early stage internal grant to support the commercialization of LemonAid.',
        url: null,
        commitment: {
            start: '2012-01-01',
            end: '2013-01-01',
            hours: 0,
            priority: 0,
        },
    },
    {
        id: 'msft',
        title: 'Software Developer Help Seeking on the Web',
        funder: 'Microsoft',
        award: null,
        investigators: 'Amy J. Ko (PI)',
        amount: '$6,200',
        category: 'research',
        description: 'Gift to support research on developer help seeking.',
        url: null,
        commitment: {
            start: '2010-03-15',
            end: '2011-03-15',
            hours: 3,
            priority: 0,
        },
    },
    {
        id: 'grfp',
        title: 'NSF Graduate Research Fellowship',
        funder: 'National Science Foundation',
        award: null,
        investigators: 'Amy J. Ko (PI)',
        amount: '$75,000',
        category: 'research',
        description:
            'A 3-year competitive fellowship for new doctoral students',
        url: null,
        commitment: {
            start: '2003-08-15',
            end: '2008-08-15',
            hours: 0,
            priority: 0,
        },
    },
    {
        id: 'ndseg',
        title: 'National Defense Science and Engineering Graduate Fellowship',
        funder: 'Department of Defense',
        award: null,
        investigators: 'Amy J. Ko (PI)',
        amount: '$75,000',
        category: 'research',
        description:
            'A 3-year competitive fellowship for new doctoral students',
        url: null,
        commitment: {
            start: '2003-08-15',
            end: '2006-08-15',
            hours: 4,
            priority: 0,
        },
    },
];
