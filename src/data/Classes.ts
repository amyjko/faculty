import type { Class } from '$lib/models/Class';

const Classes: Class[] = [
    {
        id: 'info494',
        alt: 'A photograph of a group of students working on laptops',
        link: 'https://canvas.uw.edu/courses/1786872',
        links: [],
        number: 'INFO 494',
        level: 'undergraduate',
        title: 'Justice-Centered Educational Programming Languages',
        hours: 2,
        description:
            'A weekly research studio, held annually, for working on Wordplay and other justice-centered educational programming languages research. A way to earn credit by contributing to Wordplay.',
        offerings: [
            { size: 13, term: 1, year: 2024, score: 4.7 },
            { size: 17, term: 2, year: 2025, score: 4.8 },
            { size: 13, term: 3, year: 2025, score: 4.8 },
            { size: 7, term: 1, year: 2025, score: null },
            { size: 7, term: 2, year: 2026, score: null },
        ],
        annotation: {
            year: 2025,
            text: "It's the second year I've taught this DRG focused on Wordplay, the educational programming language I'm co-designing twith teachers and youth.",
        },
    },
    {
        id: 'info200',
        alt: 'A black and white version of an old painting with a child reading a newspaper',
        link: 'https://canvas.uw.edu/courses/1662893',
        number: 'INFO 200',
        level: 'undergraduate',
        title: 'Intellectual Foundations of Informatics',
        description:
            'This survey course covers big ideas in information, information technology, and information systems. Students learn the history of information, foundational concepts in information, the relationship between information and computing, skills in analyzing and designing information systems, and the role of information systems in society.',
        hours: 10,
        links: [
            {
                description: "Amy's book for the course",
                link: 'https://faculty.washington.edu/ajko/books/foundations-of-information/',
            },
            {
                description: 'Medium post on the big ideas in the course',
                link: 'https://medium.com/bits-and-behavior/big-ideas-about-information-c09e4d9c60bd',
            },
        ],
        offerings: [
            { size: 200, term: 1, year: 2023, score: null },
            { size: 200, term: 3, year: 2022, score: 'N/A' },
            { size: 200, term: 3, year: 2021, score: 'N/A' },
            { size: 208, term: 2, year: 2020, score: 4.8 },
            { size: 150, term: 1, year: 2018, score: 4.8 },
        ],
    },
    {
        id: 'info360',
        alt: 'A line drawing of two people discussing a sketch',
        link: 'https://github.com/amyjko/info360/',
        number: 'INFO 360',
        level: 'undergraduate',
        title: 'Design Methods',
        description:
            'This undergraduate class teaches students design thinking skills in the domain of information and computing. It leverages multiple forms of active learning, involves a significant amount of studio-based learning, and helps students develop creative confidence.',
        hours: 10,
        links: [
            {
                description: "Amy's online book for the course",
                link: 'https://faculty.washington.edu/ajko/books/design-methods/',
            },
        ],
        offerings: [
            { size: 35, term: 2, year: 2018, score: 4.8 },
            { size: 36, term: 1, year: 2017, score: 4.5 },
            { size: 35, term: 2, year: 2017, score: 5.0 },
            { size: 35, term: 1, year: 2016, score: 4.9 },
            { size: 37, term: 1, year: 2015, score: 4.2 },
            { size: 40, term: 1, year: 2012, score: 4.3 },
            { size: 39, term: 1, year: 2012, score: 4.7 },
            { size: 38, term: 1, year: 2011, score: 4.4 },
            { size: 39, term: 1, year: 2011, score: 4.3 },
            { size: 37, term: 3, year: 2011, score: 4.3 },
            { size: 37, term: 3, year: 2010, score: 4.3 },
            { size: 37, term: 3, year: 2010, score: 4.6 },
            { size: 35, term: 1, year: 2008, score: 4.5 },
            { size: 35, term: 1, year: 2008, score: 4.6 },
        ],
    },
    {
        id: 'info442',
        alt: 'A photograph of Margaret Hamilton standing next to source code.',
        link: 'https://canvas.uw.edu/courses/1399096',
        number: 'INFO 442',
        level: 'undergraduate',
        title: 'Cooperative Software Development',
        description:
            'This undergraduate software engineering class teaches foundations of team-based software development, leveraging the latest research on coordination, cooperation, and human cognition in software development. Students leave ready to become meaningful contributors to teams big and small, but also to understand the processes that teams use and how they can improve them.',
        hours: 8,
        links: [
            {
                description: "Amy's online book for the course",
                link: 'https://faculty.washington.edu/ajko/books/cooperative-software-development/',
            },
        ],
        offerings: [
            { size: 33, term: 1, year: 2020, score: 4.7 },
            { size: 33, term: 1, year: 2019, score: 4.8 },
            { size: 37, term: 3, year: 2019, score: 4.8 },
            { size: 35, term: 3, year: 2017, score: 4.8 },
            { size: 38, term: 2, year: 2012, score: 4.5 },
            { size: 26, term: 1, year: 2010, score: 4.5 },
        ],
    },
    {
        id: 'info490',
        alt: 'A photograph of students at the capstone fair.',
        link: 'https://ischool.uw.edu/capstone/students/informatics',
        number: 'INFO 490/491',
        level: 'undergraduate',
        title: 'Capstone',
        description:
            'This undergraduate capstone sequence engages students in a 6-month project, usually culminating in a functional, deployable prototype, and often in collaboration with a client from local industry.',
        links: [],
        hours: 8,
        offerings: [
            { size: 96, term: 3, year: 2013, score: 4.1 },
            { size: 96, term: 2, year: 2013, score: 4.0 },
            { size: 18, term: 3, year: 2012, score: 4.7 },
            { size: 22, term: 2, year: 2011, score: 3.5 },
        ],
    },
    {
        id: 'hcid520',
        alt: 'A black and white photograph of a woman operating the ENIAC, the first computer',
        link: 'https://canvas.uw.edu/courses/1694914/',
        level: 'graduate',
        number: 'HCID 520',
        title: 'User Interface Software and Technology',
        description:
            'This core course in our Masters of HCI+Design teaches students the history, theory, and foundations of user interfaces. Students acquire a literacy for communicating and reasoning about interfaces.',
        hours: 8,
        links: [
            {
                description: "Amy's online book for the course",
                link: 'https://faculty.washington.edu/ajko/books/user-interface-software-and-technology/',
            },
        ],
        offerings: [
            { year: 2024, term: 2, size: 40, score: 3.4 },
            { year: 2022, term: 2, size: 35, score: 4.7 },
            { year: 2021, term: 2, size: 35, score: 4.2 },
            { year: 2020, term: 2, size: 35, score: 4.9 },
            { year: 2019, term: 2, size: 34, score: 4.8 },
            { year: 2018, term: 2, size: 33, score: 4.8 },
        ],
    },
    {
        id: 'insc541',
        alt: 'A photograph of the 2011 class amidst discussion.',
        link: 'https://myplan.uw.edu/course/#/courses/INSC541',
        level: 'graduate',
        number: 'INSC 541',
        title: 'HCI Design Foundations for Interactive Systems',
        description:
            'This doctoral course teaches theoretical foundations of HCI, preparing students as designers, design researchers, and HCI researchers.',
        links: [],
        hours: 6,
        offerings: [
            { year: 2011, term: 3, size: 15, score: 4.7 },
            { year: 2010, term: 2, size: 15, score: 4.8 },
        ],
    },
    {
        id: 'edtep577',
        alt: '',
        link: 'https://canvas.uw.edu/courses/1633604',
        level: 'graduate',
        number: 'EDTEP 577',
        title: 'Computer Science Equity & Justice',
        description:
            "This graduate course educates teacher candidates about equity and justice issues in computer science and computer science education, while also teaching content knowledge foundations of CS. I teach it in partnership with the UW College of Education's Secondary Teacher Education Program, which I'm helping design and launch.",
        links: [
            {
                description: "Amy's book for the course",
                link: 'https://criticallyconsciouscomputing.org/',
            },
            {
                description:
                    'The STEP CS program, of which the course is a part',
                link: 'https://computinged.uw.edu/stepcs',
            },
        ],
        hours: 6,
        offerings: [
            { year: 2025, term: 3, size: 9, score: 4.3 },
            { year: 2024, term: 3, size: 15, score: 4.9 },
            { year: 2023, term: 3, size: 14, score: 4.9 },
            { year: 2022, term: 3, size: 9, score: 4.8 },
        ],
        annotation: {
            year: 2025,
            text: "It's the 4th time I taught teacher candidates in the College of Education how to teach computer science in middle and high school.",
        },
    },
];

export { Classes as default };
