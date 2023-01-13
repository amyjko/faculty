import type { Discovery } from '../lib/models/Discovery';

export const Discoveries: Discovery[] = [
    {
        contribution:
            'Learning to code with families can enable rich new forms of intergenerational learning',
        detail: 'But it requires careful attention to the design of learning technologies to facilitate facile role switching.',
        pubs: ['ellblockstudio', 'aifamily', 'tilecode'],
        tags: ['families', 'studies', 'learning'],
        video: ['https://www.youtube.com/watch?v=t56g4DYIuUA'],
    },
    {
        contribution:
            "CS assessments aren't fair, but it's very hard to know how and why",
        detail: 'Techniques from psychometrics can help, but they are far from usable by everyday CS teachers.',
        pubs: [
            'csdif',
            'studentamp',
            'codedif',
            'gradingfeedback',
            'traceassess',
            'irteval',
        ],
        tags: ['assessment', 'studies', 'tools'],
    },
    {
        contribution:
            'Justice-focused CS education is empowering but requires student trust and agency',
        detail: "Making room for conversations about computing, society, and fairness demands deep respect for students' limiting situations.",
        pubs: [
            'teachermotives',
            'coconstructedcriticalcs',
            'ccc',
            'houseofcomputing',
            'stepcs',
        ],
        tags: ['justice', 'studies'],
    },
    {
        contribution:
            'Teaching about diversity in CS is possible, but requires substantial professional development',
        detail: 'The topic is largely ignored because of lack of teacher professional development, student resistance, and fear of failure, not disinterest.',
        pubs: [
            'teachaccess1',
            'inclusivepck',
            'teachaccess2',
            'hcipckchallenge',
            'hcidifficulties',
            'criticalcsed',
            'csdesignk12',
            'teachermotives',
        ],
        tags: ['diversity', 'studies'],
    },
    {
        contribution:
            'Teaching program reading before writing can promote more robust learning',
        detail: 'This is because writing skills are dependent on reading skills. Unfortunately, learning to read code correctly can be boring.',
        pubs: ['pltutor1', 'tracing', 'cs1theory'],
        tags: ['program reading', 'pedagogy', 'tools'],
    },
    {
        contribution:
            'It is possible to mine, transform, and synthesize interfaces to serve new use cases and users',
        detail: 'Reasoning about user interfaces in probabalistic and formal ways can enable new forms of accessibility and productivity.',
        pubs: ['genie', 'rewire', 'scoutdemo', 'scout', 'falx'],
        tags: ['UI mining', 'tools'],
        video: [
            'https://www.youtube.com/watch?v=rQE0zrgzV6Y',
            'https://www.youtube.com/watch?v=y8pTC6FEsKc',
            'https://www.youtube.com/watch?v=Ivtvyy7m-qc',
            'https://www.youtube.com/watch?v=9LA8feFOsOo',
        ],
    },
    {
        contribution:
            'Materials for learning CS online largely ignore pedagogical best practices',
        detail: 'They fail to provide feedback, scaffold effectively, grow self-efficacy, or develop mastery, often because learners struggle to effectively deploy their agency.',
        pubs: ['tutorialeval', 'bootcamps', 'codeitzagency', 'airesources'],
        tags: ['tutorials', 'studies'],
    },
    {
        contribution:
            'Programming problem solving can benefit greatly from guided, step-by-step scaffolding',
        detail: "Most learners don't want to be that deliberate about their process, favoring less effective trial and error strategies. But framing it as aunthetic practice can help.",
        pubs: [
            'gidget6',
            'csproblemsolving1',
            'csproblemsolving2',
            'pstutor1',
            'ideagardenjvlc',
            'teachingstrategies',
            'programmingstrategies',
            'metajournaling',
            'howtoo',
        ],
        tags: ['problem solving', 'studies'],
    },
    {
        contribution:
            'Software engineering expertise is technical, but also social, organizational, and political',
        detail: 'Across thousands of surveys and interviews, we found that expertise is far more than just knowing how to architect and build software.',
        pubs: [
            'greatengineer2',
            'nonengineers',
            'answerdash',
            'greatengineer1',
        ],
        tags: ['expertise', 'studies'],
    },
    {
        contribution:
            'Framing compilers as fallible, prosocial collaborators can facilitate learning',
        detail: "Compiler feedback is usually impersonal and mean; we found that being nicer has powerful impacts on learners' attention, compelling them to pay attention to valuable direct instruction.",
        pubs: [
            'gidget1',
            'gidget2',
            'gidget3',
            'gidget4',
            'adultattitudes',
            'gidget5',
            'gidgetabandoment',
        ],
        tags: ['feedback', 'studies', 'tools'],
        demo: 'https://helpgidget.org',
    },
    {
        contribution: 'Finding help with software can be as simple as pointing',
        detail: 'Pointing to user interface elements can be a powerfully discrminating input into help retrieval algorithms.',
        pubs: [
            'lemonaid1',
            'crystal',
            'prelemonaid',
            'lemonaidworkshop',
            'lemonaid2',
        ],
        tags: ['help', 'tools'],
        code: 'https://github.com/amyjko/feedlack',
        demo: 'http://faculty.uw.edu/ajko/demo/cleanroom',
        video: [
            'https://www.youtube.com/watch?v=XqkLlKHQeKI',
            'https://www.youtube.com/watch?v=IkKObjGv42o',
            'https://www.youtube.com/watch?v=Lay6EWYVhjY',
        ],
    },
    {
        contribution:
            'Some defects can be found by operationalizing principles of human communication',
        detail: 'Many defects in dynamically typed programs can be found by operationalizing simple observations about how people write code, often forgetting to close the loop that statically typed programs can easily point out.',
        pubs: [
            'feedlack',
            'cleanroom',
            'feedlack',
            'frictionary',
            'newsproblems',
        ],
        tags: ['verification', 'tools'],
        code: 'https://github.com/amyjko/feedlack',
        demo: 'http://faculty.uw.edu/ajko/demo/cleanroom',
    },
    {
        contribution:
            'Bug reports are where developers and users engage in conflict around what software is for',
        detail: "The seeminly technical context of bug reports are where large communities of users and small teams of developers engage in power struggles about what software should and shouldn't do.",
        pubs: [
            'talkingaboutusers',
            'openbugs3',
            'openbugs1',
            'openbugs2',
            'postusability',
            'userfeedback2',
            'beta',
            'userfeedback',
        ],
        tags: ['issue tracking', 'studies'],
    },
    {
        contribution:
            'Understanding machine learning means understanding uncertainty',
        detail: 'Tools can help, but even more so, using data and domains that people understand is even better.',
        pubs: [
            'whydebugclassifier2',
            'gestalt',
            'whydebugclassifier1',
            'mladvocacy',
            'cognimates',
        ],
        tags: ['AI education', 'studies', 'tools'],
    },
    {
        contribution:
            "People's interests in computing are intricately shaped by their social worlds",
        detail: "We found across a series of reflective studies that people and events in people's lives come to shape their interest and disinterest in computing.",
        pubs: ['codebios', 'mentors1', 'mentors2', 'transfer'],
        tags: ['interest', 'studies'],
    },
    {
        contribution: 'Design skills depend greatly on domain expertise',
        detail: "We found through several studies that designers' productivity and careers are often limited by their lack of domain expertise.",
        pubs: [
            'bioinformatics',
            'unfamiliar',
            'complexdomains',
            'facebookcasestudy',
            'lemonaid3',
        ],
        tags: ['design', 'studies'],
    },
    {
        contribution: 'Software engineering depends on information',
        detail: 'Through a series of studies, I unconvered the many ways that developers depend on information from people and systems to make engineering decisions, and how some of the most crucial information is hard or impossible to find.',
        pubs: ['informationneeds', 'devwhiteboards', 'nonengineers'],
        tags: ['teams', 'studies'],
    },
    {
        contribution: 'Text-based code editors can be richly interactive',
        detail: "The structured editors of the 1980's were hard to build and use; I invented ways of making both easier by viewing programs as user interfaces, not documents.",
        pubs: ['citrus', 'textediting', 'citrus', 'barista', 'jasper'],
        tags: ['editors', 'programming', 'tools'],
        video: ['https://www.youtube.com/watch?v=rR8glIsliSo'],
    },
    {
        contribution:
            'The tools and systems around programming languages are a primary source of learning difficulty',
        detail: 'Programming is hard for many reasons, but my work showed that it is also hard because tools, APIs, and IDEs make information about program behavior particulary difficulty to find.',
        pubs: [
            'barriers',
            'honorsthesis',
            'walkthrough1',
            'walkthrough2',
            'statscomprehension',
            'naturalprogramming',
            'maintenancetasks',
            'seekrelatecollect',
            'feasibility',
            'robustapi',
        ],
        tags: ['programming systems', 'programming', 'studies'],
    },
    {
        contribution:
            'Defects emerge from the interaction of satisficing and state space complexity',
        detail: 'Much of my work during my dissertation examined where software failures come from; cognitive slips interact with the large state space that people create when programming to generate defects that are hard to localize.',
        pubs: [
            'errorframework',
            'vldcabstract',
            'vldcabstract2',
            'aliceinquiry',
            'seekrelatecollect',
            'errormodel',
        ],
        tags: ['errors', 'studies'],
    },
    {
        contribution: 'Programs can answer questions about their behavior',
        detail: "I invented tools and algorithms for deriving 'why' and 'why not' questions from programs and automatically answering those questions, helping people efficiently and interactively debug the root causes of program failures.",
        pubs: [
            'whyline2',
            'whyline1',
            'whyline3',
            'whyline4',
            'whylinebeta',
            'icsedc',
            'dissertation',
            'timelapse',
            'scry',
        ],
        tags: ['debugging', 'tools'],
        code: 'https://github.com/amyjko/whyline',
        video: [
            'https://www.youtube.com/watch?v=pbElN8nfe3k',
            'https://www.youtube.com/watch?v=fP8swbzeDuY',
            'https://www.youtube.com/watch?v=Uw0PP00xafs',
        ],
    },
    {
        contribution: 'Studying programming requires human-centered methods',
        detail: 'Studying programming is hard. We invent new methods for studying programming, and reflect on the science of studying programming, to help accelerate progress on improving it.',
        pubs: [
            'practicalguide',
            'walkthrough1',
            'walkthrough2',
            'certheory',
            'softwarescience',
            'plreally',
            'studydesign',
            'futureofprogramming',
            'studyingprogramming',
            'ischoolmovement',
            'sequalitative',
            'demographics',
        ],
        tags: ['methods'],
    },
];
