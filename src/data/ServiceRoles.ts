import type Annotation from '$lib/models/Annotation';
import type { Commitment } from '$lib/models/Commitment';

export type Service = {
    title: string;
    committee: string;
    level:
        | 'departmental'
        | 'university'
        | 'regional'
        | 'national'
        | 'international'
        | 'open source';
    description: string;
    commitment: Commitment;
    annotation?: Annotation;
};

export const ServiceRoles: Service[] = [
    {
        title: 'Member',
        committee: 'Accessibility Exceptions Review Panel',
        level: 'university',
        description:
            'Evaluated faculty requests for exceptions to accessibility policies, ensuring compliance with legal and ethical standards.',
        commitment: {
            start: '2025-02-01',
            end: '2026-06-15',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Member',
        committee: 'Accessibility Sustainability Committee',
        level: 'university',
        description:
            'Designed and informed policy related to digital content accessibility.',
        commitment: {
            start: '2025-09-01',
            end: '2026-06-15',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Member',
        committee: 'UW I&T Academic Services Board',
        level: 'university',
        description:
            'Advised on student database information system policy and governance.',
        commitment: {
            start: '2025-09-01',
            end: '2026-06-15',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Subcommittee chair',
        committee:
            'Washington State Board of Education FutureReady Technology, Media Literacy, and Computer Science Subcommittee',
        level: 'regional',
        description:
            "I was invited by the Washington State Board of Education to lead the subcommittee on technology, media literacy, and computer science, to form recommendations for the next version of the state's graduation requirements",
        commitment: {
            start: '2025-09-01',
            end: '2026-09-01',
            hours: 1,
            priority: 0,
        },
        annotation: {
            year: 2025,
            text: 'I was invited to lead the graduation requirement subcommittee on CS, setting the requirements for all Washington state youth for the coming decades.',
        },
    },
    {
        title: 'Mentor',
        committee: 'SIGCSE Doctoral Consortium',
        level: 'international',
        description:
            'I served as a mentor for twenty doctoral students from around the globe.',
        commitment: {
            start: '2024-08-10',
            end: '2024-08-10',
            hours: 8,
            priority: 0,
        },
    },
    {
        title: 'Co-director',
        committee: 'Reciprocal Reviews',
        level: 'open source',
        description:
            'I lead a community of volunteers to create infrastructure for sustainable peer review labor markets.',
        commitment: {
            start: '2023-01-04',
            end: null,
            hours: 1,
            priority: 0,
        },
        annotation: {
            year: 2025,
            text: 'This platform ties publishing labor to reviewing labor through a currency system. I organize a community of maintainers and am launching a pilot for ACM TOCE in 2026. 80+ editors are waiting for our results across academia, hoping for more sustainable peer review.',
        },
    },
    {
        title: 'Director',
        committee: 'Wordplay',
        level: 'open source',
        description:
            'I am the lead maintainer and faciliator of this community-engaged open source educational programming language.',
        commitment: {
            start: '2023-06-01',
            end: null,
            hours: 1,
            priority: 0,
        },
        annotation: {
            year: 2025,
            text: 'I serve as the lead maintainer and facilitator of this community-engaged open source educational programming language with teachers and youth.',
        },
    },
    {
        title: 'Director',
        committee: 'Adminima',
        level: 'open source',
        description:
            'I am the lead maintainer of this platform for organizing people, roles, processes, and change in organizations. I use this for my administrative work in the Information School.',
        commitment: {
            start: '2023-06-01',
            end: null,
            hours: 1,
            priority: 0,
        },
        annotation: {
            year: 2025,
            text: 'I built and maintain a platform for organizing people, roles, processes, and change in organizations, for use in iSchool Academics.',
        },
    },
    {
        title: 'Director',
        committee: 'Bookish',
        level: 'open source',
        description:
            'I am the lead maintainer of this online book publishing platform. It is the key infrastructure for my textbooks, and for other authors globally looking for free platforms for sharing knowledge in book form.',
        commitment: {
            start: '2023-06-01',
            end: null,
            hours: 1,
            priority: 0,
        },
        annotation: {
            year: 2025,
            text: 'I maintain an online book publishing platform that serves as the key infrastructure for my textbooks and for other authors globally looking for free platforms for sharing knowledge in book form.',
        },
    },
    {
        title: 'Committee Member',
        committee: 'CHI Academy Selection Committee',
        level: 'international',
        description: 'I help evaluate nominations for CHI Academy members.',
        commitment: {
            start: '2024-01-15',
            end: '2026-03-15',
            hours: 1,
            priority: 0,
        },
        annotation: {
            year: 2025,
            text: 'I served my second year as a committee member.',
        },
    },
    {
        title: 'Associate Dean for Academics',
        committee: 'Associate Dean for Academics',
        level: 'departmental',
        description:
            "I serve as the iSchool's Associate Dean for Academics (40% time).",
        commitment: {
            start: '2024-07-01',
            end: '2027-06-30',
            hours: 16,
            priority: 0,
        },
        annotation: {
            year: 2025,
            text: 'I served my first full year as Associate Dean for Academics. This included completing the major academics reorganization, documenting more than 230 processes, tracking more than 90 change requests and successfully implementing more than 25 of them. This included streamlining budgets, scholarships, buyouts, teaching assignments, and numerous other smaller operational concerns.',
        },
    },
    {
        title: 'Incoming Associate Dean for Academics',
        committee: 'Associate Dean for Academics',
        level: 'departmental',
        description:
            'I shadowed our Associate Dean for Academics to prepare to take over his role.',
        commitment: {
            start: '2023-09-15',
            end: '2024-06-15',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Interim Program Chair',
        committee: 'Informatics',
        level: 'departmental',
        description:
            'I served as interim program chair while our program chair was on leave.',
        commitment: {
            start: '2024-01-01',
            end: '2024-3-15',
            hours: 8,
            priority: 0,
        },
    },
    {
        title: 'Member',
        committee: 'iSchool Ph.D. Admissions Committee',
        level: 'departmental',
        description:
            'I helped plan admissions policy, review Ph.D. applications, and make final admissions recommendations.',
        commitment: {
            start: '2023-09-15',
            end: '2023-12-15',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Volunteer',
        committee: 'Lambert House',
        level: 'regional',
        description:
            'I facilitate and mentor LGBTQ+ and especially trans youth around Puget Sound',
        commitment: {
            start: '2022-11-01',
            end: null,
            hours: 1,
            priority: 0,
        },
        annotation: {
            year: 2025,
            text: 'I continue to run a trans youth group on Mondays, helping youth navigate loss of civil rights and suicidal ideation, while making friends.',
        },
    },
    {
        title: 'Panel Member',
        committee: 'Kaiser Permanente Gender Health Advisory Panel',
        level: 'regional',
        description:
            'Along with a group of a dozen other trans and non-binary community members, I provide guidance, ideas, feedback, and advocacy to Kaiser on their gender health services.',
        commitment: {
            start: '2021-02-01',
            end: '2023-02-01',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Executive Board Member',
        committee: 'Expanding Computing Education Pathways Alliance (ECEP)',
        level: 'national',
        description:
            'I help define strategic actions that lead to a more inclusive project, better positioning the ECEP community to advocate for, promote, and embrace equity in computer science education.',
        commitment: {
            start: '2021-02-01',
            end: '2024-02-01',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Director',
        committee: 'CS for All Washington',
        level: 'regional',
        description:
            "I organize the group, which meets  monthly to inform policy, organize community, and centralize information about about Washington state's K-12 CS for All efforts on the web (https://cseforallwa.org). Supported by the NSF-funded Exploring Computing Education Pathways project (https://ecepalliance.org).",
        commitment: {
            start: '2018-05-01',
            end: null,
            hours: 2,
            priority: 0,
        },
        annotation: {
            year: 2025,
            text: 'I continue to direct a coalition of 500+ advocates in Washington state around access to K-12 CS education. This includes close collaboration with state agencies and the state legislature.',
        },
    },
    {
        title: 'External Evaluator',
        committee:
            'University of North Texas, Information Science, Academic Program Review',
        level: 'national',
        description:
            "I participated in a formal evaluation of the department's programs.",
        commitment: {
            start: '2021-03-24',
            end: '2021-04-02',
            hours: 8,
            priority: 0,
        },
    },
    {
        title: 'Advisory Board Member',
        committee: 'ITU Center for Computing Education',
        level: 'international',
        description:
            'I advice on the research centers scope and priorities.',
        commitment: {
            start: '2021-12-15',
            end: '2022-01-01',
            hours: 0,
            priority: 0,
        },
    },
    {
        title: 'Committee Member',
        committee: 'CRA-E',
        level: 'international',
        description:
            'I work on projects that help create equitable pathways to participating in CS research.',
        commitment: {
            start: '2020-08-01',
            end: '2023-07-31',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Committee Member',
        committee: 'Code.org AP CS A advisory committee',
        level: 'national',
        description:
            "I'm advising Code.org on the design and implementation of a new curriculuar effort.",
        commitment: {
            start: '2021-01-01',
            end: '2022-06-15',
            hours: 0.2,
            priority: 0,
        },
    },
    {
        title: 'Committee Member',
        committee: 'College Board AP CS Principles Standards Committee',
        level: 'national',
        description:
            'I helped define assessments for the AP CS Principles exam.',
        commitment: {
            start: '2021-06-05',
            end: '2021-06-21',
            hours: 3,
            priority: 0,
        },
    },
    {
        title: 'Secretary',
        committee: 'Seattle Public Schools CS Advisory Board.',
        level: 'regional',
        description:
            'I advise the city on its CS curriculum and teacher pathways.',
        commitment: {
            start: '2018-01-01',
            end: '2020-03-01',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Committee member',
        committee:
            'Computing Research Association (CRA) Undergraduate Research Award Committee',
        level: 'international',
        description:
            'I helped select finalists and winners for the CRA award.',
        commitment: {
            start: '2018-01-01',
            end: '2019-03-01',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Co-Chair',
        committee: 'SIGCSE Doctoral Consortium',
        level: 'international',
        description:
            'I co-organized and co-ran the doctoral consortium, co-located with the ACM ICER conference annually.',
        commitment: {
            start: '2017-09-15',
            end: '2019-09-15',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Member',
        committee: 'ACM Education Advisory Council',
        level: 'international',
        description:
            'I helped create resources, curriculum standards, and education guidelines for the global CS community.',
        commitment: {
            start: '2017-08-01',
            end: '2020-08-01',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Member',
        committee: 'Washington State Computer Science Leadership Team',
        level: 'regional',
        description:
            'I provided expertise on CS learning to help shape state policy.',
        commitment: {
            start: '2017-01-01',
            end: '2018-01-01',
            hours: 0.1,
            priority: 0,
        },
    },
    {
        title: 'Curriculum design committee member',
        committee:
            'Global Innovation Exchange (GIX), University of Washington',
        level: 'university',
        description:
            'I helped design and structure the The UW Master of Science in Technology Innovation Program.',
        commitment: {
            start: '2015-03-01',
            end: '2015-06-15',
            hours: 2,
            priority: 0,
        },
    },
    {
        title: 'Co-author',
        committee: 'CRA Whitepaper on Computing Education Research',
        level: 'international',
        description:
            'I co-authored this whitepaper to help spread the word about the importance of CS education research in CS departments.',
        commitment: {
            start: '2015-01-01',
            end: '2015-03-15',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Director',
        committee: 'EUSES Consortium',
        level: 'national',
        description:
            'I led annual meetings and maintained the website for the international research collective, and then officially ended the group.',
        commitment: {
            start: '2013-01-01',
            end: '2015-08-01',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Steering Committee Member',
        committee:
            'IEEE Symposium on Visual Languages and Human-Centric Computing',
        level: 'international',
        description:
            'I helped select future conference locations and device conference publication policy.',
        commitment: {
            start: '2011-10-01',
            end: '2015-10-01',
            hours: 0.2,
            priority: 0,
        },
    },
    {
        title: 'Co-organizer',
        committee: 'Dagstuhl on Human-Centered Software Development Tools',
        level: 'international',
        description:
            'I helped propose, plan, and run the weeklong workshop',
        commitment: {
            start: '2014-03-01',
            end: '2015-08-01',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Co-founder',
        committee:
            'Masters in Human-Computer Interaction and Design, University of Washington',
        level: 'university',
        description:
            'I helped design, plan, and launch the inaugural year of the masters degree.',
        commitment: {
            start: '2013-01-01',
            end: '2014-09-15',
            hours: 2,
            priority: 0,
        },
    },
    {
        title: 'Co-organizer',
        committee: 'DUB Retreat, University of Washington',
        level: 'university',
        description:
            'I co-organized the annual retreat for the HCI community at UW.',
        commitment: {
            start: '2013-06-01',
            end: '2013-10-15',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Graduate Consortium Chair',
        committee:
            'IEEE Symposium on Visual Languages and Human-Centric Computing',
        level: 'international',
        description:
            'I co-organized and ran the doctoral consortium, reaching 40 doctoral students.',
        commitment: {
            start: '2009-01-01',
            end: '2010-10-15',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Member',
        committee: 'iSchool Faculty Search',
        level: 'departmental',
        description:
            'I helped search for and recruit data science teaching professors.',
        commitment: {
            start: '2020-10-15',
            end: '2021-03-15',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Member',
        committee: 'iSchool Recognitions Committee',
        level: 'departmental',
        description:
            'I helped identify, nominate, and recognize faculty, staff, and students with school-level awards.',
        commitment: {
            start: '2008-09-15',
            end: '2009-06-15',
            hours: 0.1,
            priority: 0,
        },
    },
    {
        title: 'Member',
        committee: 'iSchool Ph.D. Admissions Committee',
        level: 'departmental',
        description:
            'I helped plan admissions policy, review Ph.D. applications, and make final admissions recommendations.',
        commitment: {
            start: '2009-09-15',
            end: '2010-06-15',
            hours: 2,
            priority: 0,
        },
    },
    {
        title: 'Member',
        committee: 'iSchool Informatics Program Committee',
        level: 'departmental',
        description:
            'I helped make decisions on program curriculum, policy, and procedures.',
        commitment: {
            start: '2010-09-15',
            end: '2012-06-15',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Member',
        committee: 'iSchool Elected Faculty Council',
        level: 'departmental',
        description:
            'I helped advance the interests of faculty in the school through policy change and advocacy to the dean, helping to secure an annual disbursement of flexible funding.',
        commitment: {
            start: '2012-09-15',
            end: '2013-06-15',
            hours: 3,
            priority: 0,
        },
    },
    {
        title: 'Program Chair',
        committee: 'Masters in HCI+Design',
        level: 'university',
        description:
            'I led the fourth year of the masters degree, renewing the campus-wide contract supporting its resources, hiring a new director to lead the program for the next three years, and securing a dedicated studio space in the former UW Alumni house.',
        commitment: {
            start: '2016-09-15',
            end: '2017-09-15',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Member',
        committee: 'MHCI+D Faculty Search',
        level: 'university',
        description:
            'I evaluated and recruited applicants to join the MHCI+D instructional faculty.',
        commitment: {
            start: '2012-09-15',
            end: '2013-06-15',
            hours: 2,
            priority: 0,
        },
    },
    {
        title: 'Member',
        committee: 'iSchool Faculty Search',
        level: 'departmental',
        description:
            'I evaluated and recruited applicants to join the iSchool as tenure-track faculty.',
        commitment: {
            start: '2012-09-15',
            end: '2014-04-15',
            hours: 2,
            priority: 0,
        },
    },
    {
        title: 'Member',
        committee: 'MHCI+D Executive Committee',
        level: 'university',
        description:
            'I helped set policy and procedures for the masters degree.',
        commitment: {
            start: '2013-09-15',
            end: '2015-06-15',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Program Chair',
        committee: 'Informatics',
        level: 'departmental',
        description:
            "I oversee the iSchool's undergraduate degree, which has nearly 500 students and graduates more than 200 per year. I identify curricular, community, and policy priorities, organize discussions of proposed changes, and implement the changes with the support of staff.I reframed the curriculum around the study, design, and development of information technology for the good of people, organizations, and society; I reduced reliance on guest faculty; I increased the inclusiveness and scalability of admissions; I grew the program by over 50%; and I increased the percept of women in the program to 40% and increased the representation of Black and Latinx by 100%.",
        commitment: {
            start: '2017-03-15',
            end: '2022-06-15',
            hours: 6,
            priority: 1,
        },
    },
    {
        title: 'Chair',
        committee: 'iSchool Informatics Admissions Committee',
        level: 'departmental',
        description:
            'I designed, planned, and executed an admissions process with the support of staff, reviewing over 800 applications a year. I implemented many anti-racist efforts, including implicit bias training and removal of structurally racist evaluation criteria',
        commitment: {
            start: '2016-09-15',
            end: '2020-06-15',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Member',
        committee: 'iSchool Academics Council',
        level: 'departmental',
        description:
            'I deliberate with the other program chairs and the Associate Dean for Academics on school-wide policy issues, as well as approve program-level changes.',
        commitment: {
            start: '2016-09-15',
            end: '2022-06-15',
            hours: 1,
            priority: 0,
        },
    },
    {
        title: 'Member',
        committee: 'iSchool Leadership Council',
        level: 'departmental',
        description:
            "I deliberate with the Dean and numerous leaders across the iSchool to make strategic choices about the school's initiatives and finances.",
        commitment: {
            start: '2016-09-15',
            end: '2022-06-15',
            hours: 0.5,
            priority: 0,
        },
    },
    {
        title: 'President',
        committee: 'Oregon State University ACM Student Chapter',
        level: 'departmental',
        description:
            'I served as ACM Student Chapter president for three years, hosting the ACM International Collegiate Programming Contest, launching two years of student-taught 1 credit pass/fail courses to address curricular gaps, and bi-weekly pizza gatherings.',
        commitment: {
            start: '2000-09-15',
            end: '2002-06-15',
            hours: 2,
            priority: 0,
        },
    },
];
