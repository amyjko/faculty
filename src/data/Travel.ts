import type { Commitment } from '../lib/models/Commitment';

export type TravelInfo = {
    url?: string;
    title: string;
    details: string;
    category: 'research' | 'service' | 'personal' | 'administrative';
    report?: string;
    commitment: Commitment;
};

const Travel: TravelInfo[] = [
    {
        url: 'https://chi2026.acm.org/',
        title: 'ACM SIGCHI Conference on Human Factors in Computing Systems',
        details: 'Networking',
        category: 'research',
        commitment: {
            start: '2026-04-13',
            end: '2026-04-17',
            hours: 40,
            priority: 1,
        },
    },
    {
        url: 'https://cse.umn.edu/cs/events/carlis-colloquium-love-learning-and-computing-education',
        title: 'University of Minnessota Carlis Colloquium',
        details: 'Visit and talk',
        category: 'research',
        commitment: {
            start: '2026-03-23',
            end: '2026-03-23',
            hours: 16,
            priority: 1,
        },
    },
    {
        url: 'https://sigcse2026.sigcse.org/',
        title: '2026 ACM SIGCSE Technical Symposium',
        details: 'Networking, keynoting, and facilitating.',
        category: 'research',
        commitment: {
            start: '2026-02-17',
            end: '2026-02-20',
            hours: 40,
            priority: 1,
        },
    },
    {
        url: 'https://www.kolicalling.fi/',
        title: 'Koli Calling 2025',
        details: 'Networking and sharing my research.',
        category: 'research',
        commitment: {
            start: '2025-11-11',
            end: '2025-11-16',
            hours: 40,
            priority: 1,
        },
    },
    {
        url: 'https://www.dagstuhl.de/en/seminars/seminar-calendar/seminar-details/25412',
        title: 'Dagstuhl: Creativity, GenAI, and Software Development',
        details: 'Weeklong workshop.',
        category: 'research',
        commitment: {
            start: '2025-10-06',
            end: '2025-10-10',
            hours: 40,
            priority: 1,
        },
    },
    {
        url: 'https://chi2025.acm.org/',
        title: 'CHI 2025',
        details: 'Networking and sharing my research.',
        category: 'research',
        commitment: {
            start: '2025-04-23',
            end: '2025-05-02',
            hours: 40,
            priority: 1,
        },
    },
    {
        url: 'https://eecs.berkeley.edu/',
        title: 'Berkeley EECS visit',
        details: 'Networking and sharing my research.',
        category: 'research',
        commitment: {
            start: '2025-04-16',
            end: '2025-04-16',
            hours: 20,
            priority: 1,
        },
    },
    {
        url: 'https://sigcse2025.sigcse.org/',
        title: 'SIGCSE 2025',
        details: 'Networking and sharing my research.',
        category: 'research',
        commitment: {
            start: '2025-2-25',
            end: '2025-03-01',
            hours: 36,
            priority: 1,
        },
    },
    {
        url: 'https://www.hmc.edu/cs/',
        title: 'Harvey Mudd visit',
        details: 'Networking and sharing my research.',
        category: 'research',
        commitment: {
            start: '2024-11-22',
            end: '2024-11-22',
            hours: 8,
            priority: 1,
        },
    },
    {
        url: 'https://www.aies-conference.com/2024/',
        title: 'AAAI/ACM Conference on Artificial Intelligence, Ethics, and Society',
        details: 'Speak on a pedagogy panel.',
        category: 'research',
        commitment: {
            start: '2024-10-20',
            end: '2024-09-21',
            hours: 16,
            priority: 1,
        },
    },
    {
        url: 'https://www.transstudiesconference.org/',
        title: '2nd International Trans Studies Conference',
        details: 'Hanging with computing education researchers.',
        category: 'research',
        commitment: {
            start: '2024-09-04',
            end: '2024-09-06',
            hours: 24,
            priority: 1,
        },
    },
    {
        url: 'https://icer2024.acm.org/',
        title: 'ACM ICER 2024',
        details: 'Hanging with computing education researchers.',
        category: 'research',
        commitment: {
            start: '2024-08-12',
            end: '2024-08-16',
            hours: 40,
            priority: 1,
        },
    },
    {
        url: 'https://cra.org/conference-at-snowbird/',
        title: 'Snowbird',
        details: 'Hanging with computing and information leaders.',
        category: 'administrative',
        commitment: {
            start: '2024-07-23',
            end: '2024-07-26',
            hours: 40,
            priority: 1,
        },
    },
    {
        url: 'https://csteachers.org/pd-opportunities/csta-annual-conference/',
        title: 'CSTA Annual Conference',
        details: 'Hanging with K-12 teachers and their supporters.',
        category: 'research',
        commitment: {
            start: '2024-07-15',
            end: '2024-07-19',
            hours: 40,
            priority: 1,
        },
    },
    {
        url: 'https://web.cvent.com/event/64035ecf-cce5-455a-a9e9-77346d51574b/summary?i=qyPgowJnYE-QP2PCT6p15w&locale=en-US',
        title: 'ISAT/DARPA Workshop The Great Oncoming kNowledge Ending (GONE)',
        details:
            'Discussing the threat to human knowledge creation posed by generative AI.',
        category: 'research',
        commitment: {
            start: '2024-03-07',
            end: '2024-03-08',
            hours: 16,
            priority: 1,
        },
    },
    {
        url: 'https://ecepalliance.org/',
        title: 'ECEP CMP4',
        details:
            'Coordinating data policy work for Washington state K-12 CS education.',
        category: 'service',
        commitment: {
            start: '2024-02-13',
            end: '2024-02-14',
            hours: 16,
            priority: 1,
        },
    },
    {
        url: 'https://www.aera.net/Events-Meetings/Annual-Meeting/2024-Annual-Meeting',
        title: 'AERA Annual Meeting',
        details: 'Networking with my research and practice community',
        category: 'research',
        commitment: {
            start: '2024-04-11',
            end: '2024-04-14',
            hours: 20,
            priority: 1,
        },
    },
    {
        url: 'https://sigcse2024.sigcse.org/',
        title: 'ACM SIGCSE Technical Symposium 2024',
        details: 'Networking with my research and practice community',
        category: 'research',
        commitment: {
            start: '2024-03-20',
            end: '2024-03-24',
            hours: 30,
            priority: 1,
        },
    },
    {
        url: 'https://icer2023.acm.org/',
        title: 'ACM ICER 2023',
        details: 'Networking with my research community',
        category: 'research',
        commitment: {
            start: '2023-08-08',
            end: '2023-08-10',
            hours: 24,
            priority: 1,
        },
    },
    {
        url: 'https://www.cise-ewf-pi-2023.starscomputingcorps.org/',
        title: '2023 NSF CISE Education and Workforce PI and Community Meeting',
        details:
            "I'll be networking with researchers and NSF program officers.",
        category: 'research',
        commitment: {
            start: '2023-06-19',
            end: '2023-06-22',
            hours: 24,
            priority: 1,
        },
    },
    {
        url: 'https://lsa.umich.edu/computingfor',
        title: 'University of Michigan sabbatical visit',
        details:
            "I'll be visiting Computer Science & Engineering and the School of Information to discuss computing education and the Program in Computing for the Arts and Sciences.",
        category: 'research',
        commitment: {
            start: '2023-04-28',
            end: '2023-05-04',
            hours: 24,
            priority: 1,
        },
    },
    {
        url: 'https://www.aera.net/Events-Meetings/Annual-Meeting/2023-Annual-Meeting',
        title: 'AERA 2023',
        details:
            "I'll be attending my first AERA conference, serving on a panel and helping present a paper.",
        category: 'research',
        commitment: {
            start: '2023-04-13',
            end: '2023-04-16',
            hours: 16,
            priority: 1,
        },
    },
    {
        url: 'http://s3d.cmu.edu/',
        title: 'Pittsburgh',
        details:
            "I'll be working from Pittsburgh, hosted by CMU's Software and Societal Systems.",
        category: 'research',
        commitment: {
            start: '2023-04-10',
            end: '2023-04-21',
            hours: 0,
            priority: 1,
        },
    },
    {
        url: 'https://sigcse2023.sigcse.org/',
        title: 'SIGCSE 2023',
        details: "I'll be attending, presenting, and networking",
        category: 'research',
        commitment: {
            start: '2023-03-15',
            end: '2023-03-18',
            hours: 24,
            priority: 1,
        },
    },
    {
        title: 'Vacation',
        details:
            "I'm going to Hawaii for some rest and relaxation and will be offline.",
        category: 'personal',
        commitment: {
            start: '2022-11-30',
            end: '2022-12-08',
            hours: 56,
            priority: 0,
        },
    },
    {
        title: 'MIT',
        details:
            "I'm visiting the HCI community to talk about computing education research.",
        category: 'research',
        commitment: {
            start: '2022-10-25',
            end: '2022-10-25',
            hours: 20,
            priority: 2,
        },
    },
    {
        title: 'Harvard',
        details:
            "I'm visiting the HCI community to talk about computing education research.",
        category: 'research',
        commitment: {
            start: '2022-10-24',
            end: '2022-10-24',
            hours: 8,
            priority: 2,
        },
    },
    {
        title: 'Simon Fraser University',
        details:
            "I'm visiting the faculty and students to talk about computing education research.",
        category: 'research',
        commitment: {
            start: '2022-09-19',
            end: '2022-09-20',
            hours: 16,
            priority: 2,
        },
    },
    {
        url: 'https://icer2022.acm.org/',
        title: '2022 ACM International Computing Education Research Conference',
        details: "I'm attending and have two student-led papers we'll present.",
        category: 'research',
        commitment: {
            start: '2022-08-04',
            end: '2022-08-12',
            hours: 40,
            priority: 2,
        },
    },
    {
        url: 'https://www.dagstuhl.de/en/program/calendar/semhp/?semnr=22302',
        title: 'Dagstuhl on Educational Programming Languages and Systems',
        details: "I'm attending this workshop as a participant.",
        category: 'research',
        commitment: {
            start: '2022-07-24',
            end: '2022-07-29',
            hours: 40,
            priority: 2,
        },
    },
    {
        url: 'https://www.dagstuhl.de/en/program/calendar/semhp/?semnr=22231',
        title: 'Dagstuhl on Theories of Programming',
        details:
            "I'm co-organzing this workshop on establishing scientific foundations of programming.",
        category: 'research',
        commitment: {
            start: '2022-06-06',
            end: '2022-06-10',
            hours: 40,
            priority: 2,
        },
        report: 'https://medium.com/bits-and-behavior/dagstuhl-trip-report-theories-of-programming-382543a3e540',
    },
    {
        title: 'Exploring Computing Education Pathways 2022 Summit',
        details:
            'National K-12 CS Education policy summit, including 23 U.S. states and territories.',
        category: 'research',
        commitment: {
            start: '2022-05-03',
            end: '2022-05-04',
            hours: 24,
            priority: 2,
        },
        report: 'https://medium.com/bits-and-behavior/chi-2022-ecep-2022-equity-oh-my-40f3ffdf816',
    },
    {
        url: 'https://sigcse2022.sigcse.org',
        title: 'SIGCSE 2022 Technical Symposium',
        details:
            "Two of my PhD students are presenting papers; I'm co-organizing two pre-symposium workshops and presenting on three panels.",
        category: 'research',
        commitment: {
            start: '2022-03-01',
            end: '2022-03-06',
            hours: 40,
            priority: 2,
        },
        report: 'https://medium.com/bits-and-behavior/sigcse-2022-trip-report-reunited-cf5fd2bce3e',
    },
    {
        url: 'https://stpp.fordschool.umich.edu/event/2022/cultivating-socially-responsible-engineers-role-universities-and-public-policy',
        title: 'University of Michigan',
        details:
            "I'm serving on a panel on Equity, Justice, and Engineering Education sponsored by the Science, Technology, and Public Policy (STPP) Program at the Ford School of Public Policy.",
        category: 'research',
        commitment: {
            start: '2022-03-20',
            end: '2022-03-22',
            hours: 16,
            priority: 2,
        },
        report: 'https://medium.com/bits-and-behavior/a-visit-to-the-university-of-michigans-interactive-and-social-computing-group-526b32a9970a',
    },
    {
        url: 'https://www.dagstuhl.de/en/program/calendar/semhp/?semnr=22052',
        title: 'Dagstuhl on Human Factors Impact on Programming Error Messages',
        details:
            'Twenty-nine HCI, CS Ed, and PL researchers meet to discuss error message design.',
        category: 'research',
        commitment: {
            start: '2022-01-30',
            end: '2022-02-02',
            hours: 16,
            priority: 2,
        },
        report: 'https://medium.com/bits-and-behavior/dagstuhl-trip-report-people-programs-and-programming-errors-6d2430e6492f',
    },
    {
        url: 'http://csedcon.com',
        title: 'CSEdCon',
        details:
            "I'm attending the opening and closing plenaries on K-12 CS education policy and education reform.",
        category: 'service',
        commitment: {
            start: '2021-11-03',
            end: '2021-11-04',
            hours: 4,
            priority: 1,
        },
    },
    {
        url: 'https://conf.researchr.org/home/RE-2021',
        title: 'RE 2021',
        details: "I'm giving an invited keynote",
        category: 'research',
        commitment: {
            start: '2021-09-20',
            end: '2021-09-24',
            hours: 20,
            priority: 1,
        },
    },
    {
        url: 'http://icer2021.acm.org',
        title: 'ICER 2021',
        details: 'Conference chairing and attendance',
        category: 'research',
        commitment: {
            start: '2021-08-16',
            end: '2021-08-20',
            hours: 40,
            priority: 2,
        },
    },
    {
        title: 'CRA-E Annual Board Meeting',
        details: 'Planning pathways into CS research.',
        category: 'research',
        commitment: {
            start: '2021-07-29',
            end: '2021-07-39',
            hours: 8,
            priority: 1,
        },
    },
    {
        title: 'NSF Panel',
        details: 'Peer reviewing research proposals',
        category: 'research',
        commitment: {
            start: '2021-06-01',
            end: '2021-06-02',
            hours: 10,
            priority: 1,
        },
    },
    {
        url: 'http://respect2021.stcbp.org',
        title: 'RESPECT 2021',
        details: "I'm giving an invited keynote",
        category: 'research',
        commitment: {
            start: '2021-05-23',
            end: '2021-05-27',
            hours: 5,
            priority: 1,
        },
        report: 'https://medium.com/bits-and-behavior/respect-2021-toward-justice-focused-computing-education-65848b637db2',
    },
    {
        url: 'http://chi2021.acm.org',
        title: 'CHI 2021',
        details: 'HCI research conference',
        category: 'research',
        commitment: {
            start: '2021-05-10',
            end: '2021-05-13',
            hours: 20,
            priority: 1,
        },
    },
    {
        title: 'UC Irvine, Digital Learning Lab',
        details: 'Invited research talk',
        category: 'research',
        commitment: {
            start: '2021-04-16',
            end: '2021-04-16',
            hours: 2,
            priority: 1,
        },
    },
    {
        url: 'http://sigcse2021.sigcse.org',
        title: 'SIGCSE 2021',
        details: 'Presenting and attending.',
        category: 'research',
        commitment: {
            start: '2021-03-15',
            end: '2021-03-20',
            hours: 10,
            priority: 1,
        },
    },
    {
        title: 'Caltech, Keller Colloquium in Computing and Mathematical Sciences',
        details:
            'Invited research talk and 1 on 1 meetings with faculty and students',
        category: 'research',
        commitment: {
            start: '2021-03-01',
            end: '2021-03-01',
            hours: 5,
            priority: 1,
        },
    },
    {
        title: 'UC Davis, Computer Science Seminar',
        details: 'Invited research talk',
        category: 'research',
        commitment: {
            start: '2021-02-12',
            end: '2021-02-12',
            hours: 2,
            priority: 1,
        },
    },
    {
        url: 'https://www.cis.upenn.edu/events/',
        title: 'University of Pennsylvania, Computer and Information Science Colloqium',
        details:
            'Invited research talk and 1 on 1 meetings with faculty and students',
        category: 'research',
        commitment: {
            start: '2020-11-10',
            end: '2020-11-10',
            hours: 5,
            priority: 1,
        },
        report: 'https://medium.com/bits-and-behavior/encouraging-more-critical-computing-a-virtual-trip-report-4ec38cf68635',
    },
    {
        title: 'IT University of Copenhagen',
        details:
            'Gave one of three invited keynotes at the launch of the new Center for Computing Education Research',
        category: 'research',
        commitment: {
            start: '2020-11-05',
            end: '2020-11-05',
            hours: 3,
            priority: 1,
        },
    },
    {
        url: 'https://www.hcii.cmu.edu/news/event/2023/04/hcii-seminar-series-amy-ko',
        title: 'Carnegie Mellon University, HCI Institute Seminar',
        details:
            'Invited research talk and a series of 1 on 1 meetings with faculty.',
        category: 'research',
        commitment: {
            start: '2020-10-30',
            end: '2020-10-30',
            hours: 5,
            priority: 1,
        },
        report: 'https://medium.com/bits-and-behavior/encouraging-more-critical-computing-a-virtual-trip-report-4ec38cf68635',
    },
    {
        url: 'https://engineering.virginia.edu/departments/computer-science/news/distinguished-speaker-series',
        title: 'University of Virginia, CS Distinguished Speaker Series',
        details:
            'Invited research talk and a series of 1 on 1 meetings with faculty.',
        category: 'research',
        commitment: {
            start: '2020-10-21',
            end: '2020-10-21',
            hours: 5,
            priority: 1,
        },
        report: 'https://medium.com/bits-and-behavior/encouraging-more-critical-computing-a-virtual-trip-report-4ec38cf68635',
    },
    {
        url: 'https://www.colorado.edu/cmci/infoscience',
        title: 'University of Colorado Boulder Information Science Colloquium',
        details:
            'Invited research talk at the Department of Information Science and the College of Media, Communication and Information colloqium, with a followup discussion with early Ph.D. students.',
        category: 'research',
        commitment: {
            start: '2020-10-07',
            end: '2020-10-07',
            hours: 2,
            priority: 1,
        },
        report: 'https://medium.com/bits-and-behavior/encouraging-more-critical-computing-a-virtual-trip-report-4ec38cf68635',
    },
    {
        url: 'https://icer.acm.org',
        title: 'ICER 2020',
        details:
            'The 2020 ACM International Computing Education Research conference, held online. I was the junior program chair and led the planning of the event.',
        category: 'research',
        commitment: {
            start: '2020-08-10',
            end: '2020-08-13',
            hours: 16,
            priority: 1,
        },
        report: 'https://medium.com/bits-and-behavior/acm-icer-2020-trip-report-virtual-serendipity-6134c8ddb9d8',
    },
    {
        url: 'https://shriram.github.io/pl-hci-school-2020/',
        title: 'PL+HCI Swimmer School',
        details:
            'A summer school that brought together perspectives on HCI and programming languages research. I gave the first invited talk on how to discover things about programming by making and evaluating tools.',
        category: 'service',
        commitment: {
            start: '2020-08-03',
            end: '2020-08-03',
            hours: 2,
            priority: 1,
        },
    },
    {
        title: 'ISAT/DARPA End-User Mashup Workshop',
        details:
            "This brought together experts in end-user programming and 'low-code' programming to inform future research opportunities in the U.S. government. I contributed as one of the experts.",
        category: 'research',
        commitment: {
            start: '2020-07-16',
            end: '2020-07-16',
            hours: 4,
            priority: 1,
        },
    },
    {
        url: 'https://www.youtube.com/watch?v=anEQg2C7l9M',
        title: 'APL LGBTQ+ Panel',
        details:
            'This brought together a diverse panel of LGBTQ people in science and engineering to discuss their experiences in academia, research, and engineering. I served as a panelist. The panel was recorded.',
        category: 'service',
        commitment: {
            start: '2020-07-16',
            end: '2020-07-16',
            hours: 2,
            priority: 1,
        },
    },
    {
        url: 'https://web.cvent.com/event/c6254b47-740f-4232-a896-064f09fd0ab1/summary',
        title: 'CSTA 2020',
        details:
            'The 2020 CSTA Conference brought together CS teachers from across North America for two days, online. I attended several sessions and met many teachers through the random chat feature.',
        category: 'service',
        commitment: {
            start: '2020-07-13',
            end: '2020-07-14',
            hours: 5,
            priority: 1,
        },
    },
    {
        url: 'https://cra.org/crae/',
        title: 'CRA-E Annual Meeting',
        details:
            "I joined the Computing Research Association's Education board; this was my first full board meeting.",
        category: 'service',
        commitment: {
            start: '2020-06-23',
            end: '2020-06-23',
            hours: 4,
            priority: 1,
        },
    },
    {
        url: 'http://sigcse2020.sigcse.org/',
        title: 'SIGCSE 2020',
        details:
            'I traveled to Portland, fully masked and distance, ready to speak in about seven sessions. The conference was canceled the morning of the first day.',
        category: 'research',
        commitment: {
            start: '2020-03-11',
            end: '2020-03-12',
            hours: 16,
            priority: 1,
        },
        report: 'https://medium.com/bits-and-behavior/sigcse-2020-trip-report-viral-edition-6d5f3c9a31bf',
    },
    {
        url: 'http://kolicalling.fi',
        title: 'Koli Calling 2019',
        details:
            'I traveled to Joensuu, Finland to attend the conference, where I gave the keynote and my student Greg Nelson presented a paper.',
        category: 'research',
        commitment: {
            start: '2019-11-20',
            end: '2019-11-24',
            hours: 40,
            priority: 1,
        },
        report: 'https://medium.com/bits-and-behavior/koli-calling-2019-trip-report-computing-education-research-at-the-limits-572da5218414',
    },
    {
        title: 'Defining CS for Washington State',
        details:
            'I spent the day in Olympia, Washington, on the Evergreen State College campus, working with stakeholders from across the state to shape what counts as a CS class. This was intended to help implement a new state law requiring CS electives in high schools.',
        category: 'service',
        commitment: {
            start: '2019-11-06',
            end: '2019-11-06',
            hours: 8,
            priority: 1,
        },
        report: 'https://medium.com/bits-and-behavior/what-counts-as-computer-science-in-k-12-education-a7173ff87801',
    },
    {
        title: 'Networking in Eastern Washington',
        details:
            'I spent four days visiting Spokane, Pullman, and surrounding cities to meet dozens of passionate CS education advocates in schools, colleges, and universities.',
        category: 'service',
        commitment: {
            start: '2019-10-20',
            end: '2019-11-02',
            hours: 32,
            priority: 1,
        },
        report: 'https://medium.com/bits-and-behavior/trip-report-bridging-cs-for-all-across-western-and-eastern-washington-60e9543535e6',
    },
    {
        url: 'https://plateau-workshop.org',
        title: 'PLATEAU 2019',
        details:
            'I spent a few days in New Orleans, serving as a panelist at the workshop and mentoring doctoral students.',
        category: 'research',
        commitment: {
            start: '2019-10-23',
            end: '2019-11-25',
            hours: 24,
            priority: 1,
        },
        report: 'https://medium.com/bits-and-behavior/plateau-2019-trip-report-building-community-around-human-aspects-of-programming-languages-c70e893930ce',
    },
    {
        title: 'CSEdCon 2019',
        details:
            'I spent three days in Las Vegas, meeting with state leaders in K-12 CS education.',
        category: 'service',
        commitment: {
            start: '2019-09-11',
            end: '2019-09-13',
            hours: 24,
            priority: 1,
        },
        report: 'https://medium.com/bits-and-behavior/csedcon-2019-trip-report-a-deep-dive-into-cs-education-policy-98efb62eb341',
    },
    {
        url: 'https://archive.icer.acm.org/icer-2019/',
        title: 'ACM ICER 2019',
        details:
            'I spent four days in Toronto, Canada, giving papers, and kicking off my role as program co-chair.',
        category: 'research',
        commitment: {
            start: '2019-08-12',
            end: '2019-08-15',
            hours: 40,
            priority: 2,
        },
        report: 'https://medium.com/bits-and-behavior/acm-icer-2019-trip-report-leveling-up-on-theory-statistics-and-significance-876b6d74148d',
    },
    {
        url: 'https://www.acm.org/education/education-governance',
        title: 'ACM Education Advisory Council Annual Meeting',
        details:
            'I spent three days in Toronto, Canada, discussing CS education across the globe.',
        category: 'service',
        commitment: {
            start: '2019-08-05',
            end: '2019-08-06',
            hours: 16,
            priority: 2,
        },
        report: 'https://medium.com/bits-and-behavior/2019-acm-education-advisory-council-meeting-its-complicated-b715fba0c8c',
    },
    {
        url: 'https://www.dagstuhl.de/en/program/calendar/semhp/?semnr=19281',
        title: 'Dagstuhl - Notional Machines',
        details:
            'I spent the week in western Germany at Dagstuhl, talking about notional machines.',
        category: 'research',
        commitment: {
            start: '2019-07-08',
            end: '2019-07-13',
            hours: 48,
            priority: 2,
        },
        report: 'https://amyjko.medium.com/dagstuhl-trip-report-learning-and-teaching-programming-language-semantics-b8d8d9007380',
    },
    {
        title: 'NextGen STEM Teacher Preparation Retreat',
        details:
            'I spent the day on the Western Washington University campus doing state planning on STEM teacher education with leaders across Washington state.',
        category: 'service',
        commitment: {
            start: '2019-06-24',
            end: '2019-06-25',
            hours: 16,
            priority: 1,
        },
        report: 'https://medium.com/bits-and-behavior/preparing-future-stem-teachers-for-our-computational-future-c4bc1b64013d',
    },
    {
        url: 'https://www.video.ethz.ch/speakers/d-infk/2019/spring/251-0100-00L.html',
        title: 'ETH Invited Talk',
        details:
            "I spent two days at ETH Zurich's CS department, giving an invited talk and speaking to its many faculty and Ph.D. students.",
        category: 'research',
        commitment: {
            start: '2019-05-13',
            end: '2019-05-19',
            hours: 48,
            priority: 2,
        },
        report: 'https://medium.com/bits-and-behavior/a-visit-to-eth-zurich-computer-science-f09c49fa7da',
    },
    {
        url: 'http://chi2019.acm.org',
        title: 'ACM CHI 2019',
        details:
            'I spent five days at the ACM SIGCHI Conference on Human Factors in Computing, learning about the latest discoveries in HCI, attending many receptions, and reconnecting with colleagues.',
        category: 'research',
        commitment: {
            start: '2019-05-06',
            end: '2019-05-11',
            hours: 48,
            priority: 2,
        },
        report: 'https://medium.com/bits-and-behavior/chi-2019-trip-report-the-interlocking-threats-of-hci-and-learning-2f83b5118e1d',
    },
    {
        url: 'https://sigcse2019.sigcse.org',
        title: 'ACM SIGCSE 2019',
        details:
            'I spent four days, mostly sick, in Minneapolis, Minnesota, giving a few talks and mostly sleeping.',
        category: 'research',
        commitment: {
            start: '2019-03-26',
            end: '2019-03-02',
            hours: 40,
            priority: 1,
        },
        report: 'https://medium.com/bits-and-behavior/sigcse-2019-trip-report-celebrating-50-years-b3460835a09a',
    },
];

export default Travel;
