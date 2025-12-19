import type { Discovery } from '../lib/models/Discovery';

export const Discoveries = {
    LanguagesCanBeJust: {
        contribution:
            'Programming languages can be designed to include everyone',
        detail: 'Programming languages can embody values of diversity, equity, inclusion, justice, and accessibility, but it requires careful design and attention to ability, culture, language, and more. These papers deconstruct these nuances, while also offering novel designs, uses, and conceptions of programming languages',
        tags: ['programming languages', 'justice', 'tools'],
        code: 'https://github.com/wordplaydev/wordplay',
    },
    FamiliesHelp: {
        contribution:
            'Learning to code as a family can enable rich learning that distrupts intergenerational hierarchies',
        detail: 'These papers consider learning about programming and AI in the context of families, and how this differs from individual and classroom contexts.',
        tags: ['families', 'studies', 'learning'],
        video: ['https://www.youtube.com/watch?v=t56g4DYIuUA'],
    },
    AssessmentUnfair: {
        contribution:
            "CS assessments can be biased, but it's hard to know how, why, and what to do about it",
        detail: 'Across multiple studies, we have examined the use of psychometrics to understand bias in CS assessments, and contributed new methods and assessments to overcome bias.',
        tags: ['assessment', 'studies', 'tools'],
    },
    JusticeHard: {
        contribution:
            'Teaching youth about the injustices of computing and society requires teacher transformation and liberatory pedagogies',
        detail: "This work finds that making room for conversations about computing, society, and diversity demands deep respect for students' limiting situations, but also liberatory pedagogies and teacher courage.",
        tags: ['justice', 'studies'],
    },
    TeachingIsHard: {
        contribution:
            'Becoming a CS teacher requires equity and resources that CS culture resists',
        detail: 'Teachers need time, resources, and community support to teach equitably, but CS culture often resists these needs in favor of individual achievement and technical confidence, structuring who does and does not learn CS.',
        tags: ['teaching', 'studies'],
    },
    TeachingInclusionHard: {
        contribution:
            'Teaching CS students how to create inclusive, equitable software requires new pedagogies and methods, but also substantial teacher professional development',
        detail: 'These works show that both teachers and learners often resist this topic due to fear of failure, not disinterest.',
        tags: ['diversity', 'studies'],
    },
    APIsAreHard: {
        contribution:
            'Learning APIs requires precise forms of knowledge that documentation often does not provide.',
        detail: 'APIs are often poorly designed, documented, and supported, making them difficult for developers to learn and use effectively. These studies reveal the particular forms of knowledge documentation and tutorials need to provide for people to successfully use APIs.',
        tags: ['APIs', 'tools', 'studies'],
    },
    ReadingHelps: {
        contribution:
            'Teaching program reading before writing can promote more robust learning',
        detail: 'This is because writing skills are dependent on reading skills. Unfortunately, learning to read code correctly can be boring.',
        tags: ['program reading', 'pedagogy', 'tools'],
        demo: 'https://helpgidget.org',
    },
    GUIsAreMalleable: {
        contribution:
            'It is possible to mine, transform, and synthesize interfaces to serve new use cases and users',
        detail: 'Reasoning about user interfaces in probabalistic and formal ways can enable new forms of accessibility and productivity.',
        tags: ['UI mining', 'tools'],
        video: [
            'https://www.youtube.com/watch?v=rQE0zrgzV6Y',
            'https://www.youtube.com/watch?v=y8pTC6FEsKc',
            'https://www.youtube.com/watch?v=Ivtvyy7m-qc',
            'https://www.youtube.com/watch?v=9LA8feFOsOo',
        ],
    },
    ResourcesBad: {
        contribution:
            'Materials for learning CS online largely ignore pedagogical best practices',
        detail: 'They fail to provide feedback, scaffold effectively, grow self-efficacy, or develop mastery, often because learners struggle to effectively deploy their agency.',
        tags: ['tutorials', 'studies'],
    },
    ScaffoldsHelpProblemSolving: {
        contribution:
            'Programming problem solving can benefit greatly from guided, step-by-step scaffolding',
        detail: "Most learners don't want to be that deliberate about their process, favoring less effective trial and error strategies. But framing it as aunthetic practice can help.",
        tags: ['problem solving', 'studies'],
    },
    ExpertiseIsSocial: {
        contribution:
            'Software engineering expertise is technical, but also social, organizational, and political',
        detail: 'Across thousands of surveys, interviews, and observations, we have found that software development expertise is far more than just knowing how to architect and build software.',
        tags: ['expertise', 'studies'],
    },
    PointingHelps: {
        contribution: 'Finding help with software can be as simple as pointing',
        detail: 'Pointing to user interface elements can be a powerfully discrminating input into help retrieval algorithms.',
        tags: ['help', 'tools'],
        code: 'https://github.com/amyjko/feedlack',
        demo: 'http://faculty.uw.edu/ajko/demo/cleanroom',
        video: [
            'https://www.youtube.com/watch?v=XqkLlKHQeKI',
            'https://www.youtube.com/watch?v=IkKObjGv42o',
            'https://www.youtube.com/watch?v=Lay6EWYVhjY',
        ],
    },
    DefectsCanBeMined: {
        contribution:
            'Some defects can be found by operationalizing regularities in human expression',
        detail: 'Many defects in dynamically typed programs can be found by operationalizing simple observations about how people write code, often forgetting to close the loop that statically typed programs can easily point out.',
        tags: ['verification', 'tools'],
        code: 'https://github.com/amyjko/feedlack',
        demo: 'http://faculty.uw.edu/ajko/demo/cleanroom',
    },
    BugsAreHard: {
        contribution:
            'Bug reports are where developers and users negotiate what "defective" means',
        detail: "The seeminly technical context of bug reports are where large communities of users and small teams of developers engage in power struggles about what software should and shouldn't do.",
        tags: ['issue tracking', 'studies'],
    },
    ProbabilityIsHard: {
        contribution:
            'Understanding machine learning means understanding uncertainty',
        detail: 'Tools can help, but even more so, using data and domains that people understand is even better.',
        tags: ['AI education', 'studies', 'tools'],
    },
    CulturesShapesLearning: {
        contribution:
            "People's interests and learning of computing are intricately shaped by their social worlds and identities",
        detail: "We have found across a series of reflective studies that students' identities and lived experiences intricately shape their interest and disinterest in computing.",
        tags: ['interest', 'studies'],
    },
    DomainMatters: {
        contribution: 'Design skills depend greatly on domain expertise',
        detail: "We found through several studies that designers' productivity and careers are often limited by their lack of domain expertise.",
        tags: ['design', 'studies'],
    },
    DevelopmentNeedsInfo: {
        contribution: 'Software engineering depends on information',
        detail: 'Through a series of studies, I unconvered the many ways that developers depend on information from people and systems to make engineering decisions, and how some of the most crucial information is hard or impossible to find.',
        tags: ['teams', 'studies'],
    },
    EditorsCanBeCool: {
        contribution: 'Text-based code editors can be richly interactive',
        detail: "The structured editors of the 1980's were hard to build and use; I invented ways of making both easier by viewing programs as user interfaces, not documents.",
        tags: ['editors', 'programming', 'tools'],
        video: ['https://www.youtube.com/watch?v=rR8glIsliSo'],
    },
    ToolsAreHard: {
        contribution:
            'The tools and systems around programming languages are a primary source of learning difficulty',
        detail: 'Programming is hard for many reasons, but my work showed that it is also hard because tools, APIs, and IDEs make information about program behavior particulary difficulty to find.',
        tags: ['programming systems', 'programming', 'studies'],
    },
    BrainsMakeDefects: {
        contribution:
            'Defects emerge from the interaction of satisficing and state space complexity',
        detail: 'Much of my work during my dissertation examined where software failures come from; cognitive slips interact with the large state space that people create when programming to generate defects that are hard to localize.',
        tags: ['errors', 'studies'],
    },
    CanAskProgramsQuestions: {
        contribution: 'Programs can answer questions about their behavior',
        detail: "I invented tools and algorithms for deriving 'why' and 'why not' questions from programs and automatically answering those questions, helping people efficiently and interactively debug the root causes of program failures.",
        tags: ['debugging', 'tools'],
        code: 'https://github.com/amyjko/whyline',
        video: [
            'https://www.youtube.com/watch?v=pbElN8nfe3k',
            'https://www.youtube.com/watch?v=fP8swbzeDuY',
            'https://www.youtube.com/watch?v=Uw0PP00xafs',
        ],
    },
    ProgrammersAreHuman: {
        contribution: 'Studying programming requires human-centered methods',
        detail: 'Studying programming is hard. We invent new methods for studying programming, and reflect on the science of studying programming, to help accelerate progress on improving it.',
        tags: ['methods'],
    },
} satisfies Record<string, Discovery>;

export type DiscoveryID = keyof typeof Discoveries;
