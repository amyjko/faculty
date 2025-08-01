import type ProfileSpec from '../lib/models/ProfileSpec';
import { Discoveries } from './Discoveries';
import { People } from './People';
import { Posts } from './Posts';
import { Publications } from './Pubs';
import Talks from './Talks';

export const Amy: ProfileSpec = {
    sources: {
        aera: {
            name: 'American Education Research Association',
            short: 'AERA',
        },
        cacm: {
            name: 'Communications of the ACM (CACM)',
            short: 'CACM',
        },
        cse: {
            name: 'Computer Science Education',
            short: 'CSE',
        },
        icer: {
            name: 'ACM International Computing Education Research Conference (ICER)',
            short: 'ICER',
        },
        idc: {
            name: 'ACM Interaction Design for Children',
            short: 'IDC',
        },
        chi: {
            name: 'ACM SIGCHI Conference on Human Factors in Computing Systems (CHI)',
            short: 'CHI',
        },
        sigcse: {
            name: 'ACM Technical Symposium on Computer Science Education (SIGCSE), Research Track',
            short: 'SIGCSE',
        },
        sigcseexp: {
            name: 'ACM Technical Symposium on Computer Science Education (SIGCSE), Experience Report Track',
            short: 'SIGCSE',
        },
        iticse: {
            name: 'ACM Conference on Innovation and Technology in Computer Science Education',
            short: 'ITiCSE',
        },
        sigcsex: {
            name: 'ACM Technical Symposium on Computer Science Education (SIGCSE), Experience Report Track',
            short: 'SIGCSE',
        },
        respect: {
            name: 'IEEE Conference on Research in Equity and Sustained Participation in Engineering, Computing, and Technology (RESPECT)',
            short: 'RESPECT',
        },
        icse: {
            name: 'ACM/IEEE International Conference on Software Engineering (ICSE)',
            short: 'ICSE',
        },
        seip: {
            name: 'ACM/IEEE International Conference on Software Engineering (ICSE), Software Engineering in Practice',
            short: 'SEIP',
        },
        seet: {
            name: 'International Conference on Software Engineering (ICSE), Software Engineering Education and Training Track',
            short: 'SEET',
        },
        ese: {
            name: 'Empirical Software Engineering',
            short: 'ESE',
        },
        toce: {
            name: 'ACM Transactions on Computing Education',
            short: 'TOCE',
        },
        tochi: {
            name: 'ACM Transactions on Computer-Human Interaction',
            short: 'TOCHI',
        },
        uist: {
            name: 'ACM Symposium on User Interface Software and Technology (UIST)',
            short: 'UIST',
        },
        vlhcc: {
            name: 'IEEE Symposium on Visual Languages and Human-Centered Computing (VL/HCC)',
            short: 'VL/HCC',
        },
        tse: {
            name: 'IEEE Transactions on Software Engineering',
            short: 'TSE',
        },
        hcipacm: {
            name: 'Proceedings of the ACM on Human-Computer Interaction',
            short: 'PACMHCI',
        },
    },
    pubs: Publications,
    talks: Talks,
    people: People,
    discoveries: Discoveries,
    posts: Posts,
    populations: [
        {
            id: 'public',
            population: 'The public',
            alt: 'A picture of Amy being interviewed for a television segment.',
            description:
                'The press often reports on my research, interviews me, or consults with me on my expertise',
        },
        {
            id: 'industry',
            population: 'The software industry',
            alt: 'A photograph of the 2016 team at AnswerDash',
            description:
                'My research often impacts policy and processes in software companies; I have also co-founded and consulted with startups',
        },
        {
            id: 'engineers',
            population: 'Software engineers',
            alt: 'A photograph of the 2010 Mozilla Summit',
            description:
                'My research often reaches software developers through podcasts, news, social media, and tools',
        },
        {
            id: 'learningtech',
            population: 'Technologies for learning to code',
            alt: "A screenshot of Apple's Swift Playgrounds.",
            description:
                'Many of my discoveries have impacted the design of educational technologies for learning to code',
        },
        {
            id: 'academia',
            population: 'Higher education',
            alt: 'A photograph of a CHI 2019 coffee break.',
            description:
                'I share much of my experience, both of my research areas and of my practice as an scholars, in books, blog posts, podcasts, and other media',
        },
        {
            id: 'cer',
            population: 'The computing education research community',
            alt: 'A photograph of my lab at SIGCSE 2019.',
            description:
                'I actively seek ways to help build the computing education research community by improving or creating new infrastructure',
        },
        {
            id: 'k12cs',
            population: 'National K-12 CS education',
            alt: 'A photograph of Amy at a national meeting of CS for All state advocates.',
            description:
                "I've used my research and expertise to inform national policy and national curricula",
        },
        {
            id: 'k12cswa',
            population: 'Washington state K-12 CS education',
            alt: 'A photograph of an education committee meeting at the Washington state legislature.',
            description:
                "I've used my research and expertise to inform Washington state policy on K-12 CS education",
        },
        {
            id: 'k12csps',
            population: 'Puget Sound K-12 CS education',
            alt: 'A photograph a 2019 Sound CS Ed community meetup.',
            description:
                "I've used my research and expertise to build community and educate youth in Puget Sound",
        },
    ],
    impacts: [
        {
            kind: 'press',
            start: 2025,
            end: 20225,
            description:
                'I was interviewed by the Chronicle about my grant being terminated by DOGE.',
            title: 'The Trump Administration Has Canceled Millions in NSF Grants',
            author: 'Megan Zahneis',
            source: 'The Chronicle of Higher Education',
            url: 'https://www.chronicle.com/article/the-trump-administration-has-canceled-millions-in-nsf-grants',
            who: 'public',
        },
        {
            kind: 'press',
            start: 2024,
            end: 2024,
            description:
                'I was interviewed by the Seattle Times about the state of CS education in the state.',
            title: 'Washington state is a leader in computer science education, but disparities persist',
            author: 'Claire Bryan',
            source: 'Seattle Times',
            url: 'https://www.seattletimes.com/education-lab/with-few-coding-classes-at-school-redmond-teens-teach-their-own/',
            who: 'public',
        },
        {
            kind: 'press',
            start: 2024,
            end: 2024,
            description:
                'The University of Washington highlighted our work on computational embroidery.',
            title: 'UW researchers taught kids to code with cultural research and embroidery machines',
            author: 'Stefane Milne',
            source: 'University of Washington',
            url: 'https://www.washington.edu/news/2024/03/14/computer-science-education-coding-embroidery/',
            who: 'public',
        },
        {
            kind: 'press',
            start: 2024,
            end: 2024,
            description:
                'GitHub highlighted Wordplay in a blog post about its security tools',
            title: 'The architecture of SAST tools: An explainer for developers',
            author: 'Nicole Choi',
            source: 'GitHub',
            url: 'https://github.blog/2024-08-07-the-architecture-of-sast-tools-an-explainer-for-developers/',
            who: 'public',
        },
        {
            kind: 'press',
            start: 2024,
            end: 2024,
            description:
                'I was interviewed by Dave Levine for the KZSU Stanford Radio 90.1FM show Hearsay Culture on the topic of generative AI and education.',
            title: 'Hearsay Culture',
            author: 'Dave Levine',
            url: 'https://kzsu.stanford.edu/',
            who: 'public',
        },
        {
            kind: 'press',
            start: 2023,
            end: 2023,
            description:
                'I wrote a short piece about accessibility and programming.',
            url: 'https://www.nature.com/articles/d41586-023-02885-y',
            title: 'How my broken elbow made the ableism of computer programming personal',
            author: 'Amy J. Ko',
            source: 'Nature',
            who: 'public',
        },
        {
            kind: 'press',
            start: 2023,
            end: 2023,
            description:
                'I was interviewed about the strengths and weaknesses of large-language models for scientific computing.',
            url: 'https://www.nature.com/articles/d41586-023-01833-0?utm_medium=Social&utm_campaign=nature&utm_source=Twitter#Echobox=1685960182',
            title: 'Six tips for better coding with ChatGPT',
            author: 'Jeffrey M. Perkel',
            source: 'Nature',
            who: 'public',
        },
        {
            kind: 'press',
            start: 2022,
            end: 2022,
            description:
                'I was interviewed more extensively about our Google gift for STEP CS tuition subsidy.',
            url: 'https://www.425business.com/news/google-uw-step-cs-program-donation/article_bde487ac-819f-11ed-9562-870653743a86.html',
            title: 'How a Big Donation is Making a Difference for One Local Computer Science Program',
            author: 'Blake Peterson',
            source: '425 Business',
            who: 'public',
        },
        {
            kind: 'press',
            start: 2022,
            end: 2022,
            description:
                'I was interviewed about our Google gift for STEP CS tuition subsidy.',
            url: 'https://www.425business.com/news/uw-computer-science-google-400k/article_abf64af0-50ba-11ed-b4d2-ab86ab3336e4.html',
            title: 'Google Giving $400K to UW Computer Science Teacher Education Program',
            author: 'John Stearns',
            source: '425 Business',
            who: 'public',
        },
        {
            kind: 'press',
            start: 2022,
            end: 2022,
            description: 'I was interviewed about coding bootcamps.',
            url: 'https://prismreports.org/2022/08/12/for-profit-coding-boot-camps-prey-bipoc/',
            title: 'For-profit coding boot camps prey on BIPOC workers',
            author: 'Sravya Tadepalli',
            source: 'Prism Reports',
            who: 'public',
        },
        {
            kind: 'press',
            start: 2020,
            end: 2020,
            description:
                'I was interviewed about the impact of online learning on learning to code.',
            url: 'https://www.onlineeducation.com/features/can-online-education-fix-the-gender-diversity-problem-in-coding',
            title: 'Can Online Education Fix the Gender Diversity Problem in Coding?',
            author: 'Chelsea Toczauer',
            source: 'OnlineEducation.com',
            who: 'public',
        },
        {
            kind: 'consulting',
            start: 2019,
            end: 2019,
            description:
                "I consulted with APM's Marketplace Tech on the effects and limits of automation",
            url: null,
            who: 'public',
        },
        {
            kind: 'press',
            start: 2016,
            end: 2016,
            description:
                'I co-authored an article with Susanne Hambrusch for the Huffington Post titled "Why the Software Industry Needs Computing Education Research',
            title: 'Why the Software Industry Needs Computing Education Research',
            author: 'Amy J. Ko and Susanne Hambrusch',
            source: 'Huffington Post',
            url: 'http://www.huffingtonpost.com/entry/5829cf4ce4b02b1f5257a638',
            who: 'public',
        },
        {
            kind: 'press',
            start: 2016,
            end: 2016,
            description:
                'Tia Ghose interviewed me for LiveScience about the efficacy of coding toys',
            title: 'Do Computer Coding Toys for Kids Really Work?',
            author: 'Tia Ghose',
            source: 'LiveScience',
            url: 'http://www.livescience.com/53963-are-coding-toys-useful.html',
            who: 'public',
        },
        {
            kind: 'press',
            start: 2012,
            end: 2012,
            description: 'NewScientist featured my work on Frictionary',
            title: "Frictionary 'mines your whines' to pinpoint software bugs",
            author: 'Paul Marks',
            source: 'NewScientist',
            url: 'http://www.newscientist.com/blogs/onepercent/2012/05/frictionary.html',
            who: 'public',
        },
        {
            kind: 'press',
            start: 2012,
            end: 2012,
            description:
                "PC World featured our work on Facebook's design culture",
            title: 'Study: Facebook relies on good design to retain users',
            author: 'Joab Jackson',
            source: 'IDG News',
            url: 'http://www.pcworld.com/businesscenter/article/255340/study_facebook_relies_on_good_design_to_retain_users.html',
            who: 'public',
        },
        {
            kind: 'press',
            start: 2010,
            end: 2010,
            description:
                "Seattle's King5 news interviewed me about software failures",
            title: 'Violence against technology has psychological roots',
            author: 'Owen Lei',
            source: 'King5 News',
            url: 'http://www.king5.com/news/technology/Hourglass-Syndrome-106739108.html',
            who: 'public',
        },
        {
            kind: 'press',
            start: 2004,
            end: 2004,
            description:
                'The Associated Press interviewed me on my dissertation work on the Whyline',
            title: 'Researchers Aim to Make Debugging Simpler',
            author: 'Mike Crissey',
            source: 'Associated Press',
            url: 'https://www.eastbaytimes.com/2004/08/15/researchers-attempt-to-make-debugging-easier/',
            who: 'public',
        },
        {
            kind: 'product',
            start: 2013,
            end: 2020,
            description:
                "Our research on Lemonaid, our crowdsourced help tool, was the basis for AnswerDash, a company that I co-founded with Jacob Wobbrock and Parmit Chilana that offers an instant self-service answers product for web applications and e-commerce sites. The company has impacted other company's product offerings, including Zendesk's self-service technologies. AnswerDash was acquired in 2020 by CloudEngage, a platform for customer personalization",
            url: 'https://www.geekwire.com/2020/uw-spinout-answerdash-contextual-qa-service-customer-support-acquired-cloudengage/',
            who: 'industry',
        },
        {
            kind: 'knowledge',
            start: 2014,
            end: 2016,
            description:
                'Our research on bug reporting has been read widely in industry, including by product teams at Microsoft, Adobe, Google, and ABB',
            url: null,
            who: 'industry',
        },
        {
            kind: 'press',
            start: 2005,
            end: 2005,
            description:
                'PC Magazine featured my research on the Whyline debugging tool',
            title: "The Ten Biggest Problems in Computing and How We'll Solve Them",
            author: 'Alan Cohen',
            source: 'PC Magazine',
            url: 'http://www.pcmag.com/article2/0,2817,1842864,00.asp',
            who: 'industry',
        },
        {
            kind: 'press',
            start: 2016,
            end: 2016,
            description:
                'I was interviewed by Jeff Meyerson for the Software Engineering Daily podcast on February 24 about research, reaching tens of thousands of engineers',
            title: 'Academia to Industry in Computer Science',
            author: 'Jeff Meyerson',
            url: 'https://softwareengineeringdaily.com/2016/02/24/academia-to-industry-in-computer-science-with-andy-ko/',
            who: 'engineers',
        },
        {
            kind: 'knowledge',
            start: 2016,
            end: 2016,
            description:
                'Our ACM Learning Webinar on software engineering expertise was viewed by hundreds of thousands of developers',
            url: 'https://www.youtube.com/watch?v=OBlmLjeORUQ&feature=youtu.be&list=PLn0nrSd4xjjZa4KDqFBCMOnk52CItWqyU',
            who: 'engineers',
        },
        {
            kind: 'social',
            start: 2020,
            end: 2020,
            description:
                'Our research on software engineering expertise was read by tens of thousands of software developers on Hacker News',
            url: 'https://news.ycombinator.com/item?id=25107285',
            who: 'engineers',
        },
        {
            kind: 'social',
            start: 2017,
            end: 2017,
            description:
                'Our research on coding bootcamps has been read by tens of thousands of software developers on Hacker News',
            url: 'https://news.ycombinator.com/item?id=14679061',
            who: 'engineers',
        },
        {
            kind: 'social',
            start: 2018,
            end: 2018,
            description:
                'Our research on coding tutorials read by tens of thousands of software developers on Hacker News',
            url: 'https://news.ycombinator.com/item?id=16961716',
            who: 'engineers',
        },
        {
            kind: 'product',
            start: 2004,
            end: 2008,
            description:
                'Our work on end-user software engineering has inspired hundreds of commercial tools for supporting end-user programming and impacted research efforts in professional software engineering',
            url: 'http://eusesconsortium.org',
            who: 'engineers',
        },
        {
            kind: 'product',
            start: 2004,
            end: 2008,
            description:
                'Our work on understanding machine learning has indirectly shaped several of the tools used in industry to develop and debug machine learned programs',
            url: null,
            who: 'engineers',
        },
        {
            kind: 'product',
            start: 2010,
            end: null,
            description:
                'Our work on interface mining has been replicated in several industry projects focused on supporting interface development',
            url: null,
            who: 'engineers',
        },
        {
            kind: 'product',
            start: 2004,
            end: 2008,
            description:
                'Our studies on program understanding and ideas for program understanding tools was partially the basis of the Debugger Canvas plugin for Visual Studio',
            url: 'http://research.microsoft.com/en-us/projects/debuggercanvas/',
            who: 'engineers',
        },
        {
            kind: 'product',
            start: 2004,
            end: 2008,
            description:
                'Frictionary was used in one of the features in AnswerDash, the company I co-founded based on my CAREER grant',
            url: 'http://www.answerdash.com/',
            who: 'engineers',
        },
        {
            kind: 'product',
            start: 2011,
            end: null,
            description:
                'Portions of Timelapse and Scry were upstreamed to WebKit and may eventually appear in the Safari Web Inspector developer tools. These projects inspired similar features at the venture-backed startup replay.io.',
            url: 'https://www.replay.io',
            who: 'engineers',
        },
        {
            kind: 'product',
            start: 2010,
            end: null,
            description: 'My work on Barista influenced the Greenfoot editor',
            url: 'http://www.greenfoot.org/',
            who: 'learningtech',
        },
        {
            kind: 'product',
            start: 2020,
            end: null,
            description:
                'Our work on PL Tutor influenced the JustJavaScript course by Dan Abramov',
            url: 'https://twitter.com/dan_abramov/status/1417200694591959042?s=21',
            who: 'learningtech',
        },
        {
            kind: 'consulting',
            start: 2020,
            end: 2020,
            description:
                "I consulted with Microsoft's VS Code, VS Online, and GitHub Education teams about how to support CS educators",
            url: null,
            who: 'learningtech',
        },
        {
            kind: 'consulting',
            start: 2016,
            end: 2016,
            description:
                'I consulted with Microsoft on their project, sharing evidence from computing education research to inform the design of their learning technologies',
            url: 'https://makecode.com/',
            who: 'learningtech',
        },
        {
            kind: 'product',
            start: 2014,
            end: null,
            description:
                'Gidget has been played by tens of thousans of youth adults online, in summer camps, and in high schools',
            url: 'https://helpgidget.org',
            who: 'learningtech',
        },
        {
            kind: 'product',
            start: 2020,
            end: null,
            description:
                'Codeitz, our Python tutorial which incoporates our theory of programming instruction, is publicly available, and used to support Python instruction',
            url: 'http://codeitz.com',
            who: 'learningtech',
        },
        {
            kind: 'curriculum',
            start: 2020,
            end: null,
            description:
                'We influenced the teaching of HCI education in higher education',
            url: null,
            who: 'academia',
        },
        {
            kind: 'resource',
            start: 2016,
            end: null,
            description:
                'I write and share online books that summarize the state of knowledge in HCI and Software Engineering',
            url: 'https://faculty.washington.edu/ajko/books',
            who: 'academia',
        },
        {
            kind: 'resource',
            start: 2016,
            end: null,
            description:
                'I shared my practices and experiences with productivity and time management in the Changing Academic Life podcast',
            url: 'http://www.changingacademiclife.com/blog/2017/6/18/amy-ko',
            who: 'academia',
        },
        {
            kind: 'resource',
            start: 2016,
            end: null,
            description:
                'I share thoughts on academia and academic life on my blog, read by tens of thousands',
            url: 'https://medium.com/bits-and-behavior/tagged/academia',
            who: 'academia',
        },
        {
            kind: 'knowledge',
            start: 2020,
            end: null,
            description:
                'Our work has opened discourse on the responsibility of CS educators to address the role of CS in injustice',
            url: null,
            who: 'cer',
        },
        {
            kind: 'knowledge',
            start: 2005,
            end: null,
            description:
                'Our work on research methods is widely read by new Ph.D. students across computer science to inform how they evaluate new developer tools and how they use theory',
            url: null,
            who: 'cer',
        },
        {
            kind: 'knowledge',
            start: 2018,
            end: null,
            description:
                "Greg Nelson's arguments about the role of theory in computing education research have spurred signfiicant debate in CS education. This debate was continued in a 60 minute panel session at ICER 2018 in Finland, an then another 90 minute panel session at SIGCSE in Minneapolis",
            url: null,
            who: 'cer',
        },
        {
            kind: 'knowledge',
            start: 2016,
            end: null,
            description:
                'Our surveys are widely-cited and used by doctoral students to quickly learn about the state of the art and knowledge',
            url: null,
            who: 'academia',
        },
        {
            kind: 'resource',
            start: 2017,
            end: 2019,
            description:
                'I consulted with Google, NSF, CRA, and Code.org on strategies for strengthening the pipeline of computing education research, researchers, and research funding',
            url: null,
            who: 'cer',
        },
        {
            kind: 'resource',
            start: 2016,
            end: 2016,
            description:
                'Co-authored a whitepaper discussing the importance of computing education research',
            url: 'http://cra.org/ccc/wp-content/uploads/sites/2/2015/01/CSEdResearchWhitePaper2016.pdf',
            who: 'cer',
        },
        {
            kind: 'resource',
            start: 2016,
            end: null,
            description:
                "Since 2016 I've maintained a popular FAQ for newcomers to the community",
            url: 'http://faculty.washington.edu/ajko/cer',
            who: 'cer',
        },
        {
            kind: 'resource',
            start: 2018,
            end: null,
            description:
                "I've helped shape the peer review processes for the ACM Transactions on Computing Education journal",
            url: 'https://toce.acm.org/',
            who: 'cer',
        },
        {
            kind: 'resource',
            start: 2018,
            end: null,
            description:
                "I've helped shape the reviewing criteria for the ACM SIGCSE Technical Symposium's research track",
            url: 'https://sigcse.org/sigcse/events/symposia',
            who: 'cer',
        },
        {
            kind: 'resource',
            start: 2020,
            end: null,
            description:
                "I've heleped shape the peer review process for ACM International Computing Education Research Conference",
            url: 'https://icer.acm.org',
            who: 'cer',
        },
        {
            kind: 'resource',
            start: 2016,
            end: null,
            description:
                'I write blog posts on about computing education research topics are read widely amongst researchers and CS teachers',
            url: 'https://medium.com/bits-and-behavior/tagged/computing-education',
            who: 'cer',
        },
        {
            kind: 'knowledge',
            start: 2018,
            end: null,
            description:
                'Our work on assessment has imported more rigorous methods from educational measurement into CS education',
            url: null,
            who: 'cer',
        },
        {
            kind: 'press',
            start: 2021,
            end: 2021,
            description:
                "I was interviewed by Jared O'Leary on their BootUP CS podcast, where I talked about reflection, mentorship, and vulnerability.",
            title: 'Vulnerability, Reflection, and CS Education with Amy Ko',
            author: "Jared O'Leary",
            url: 'https://jaredoleary.com/csk8feed/73',
            who: 'k12cs',
        },
        {
            kind: 'policy',
            start: 2020,
            end: 2020,
            description:
                "I've coordinated with House representatives on policies that will expand the numbers of CS teachers nationwide",
            url: null,
            who: 'k12cs',
        },
        {
            kind: 'curriculum',
            start: 2013,
            end: null,
            description:
                "Our research on programming problem solving, programming language learning, programming strategies, and debugging has shaped Code.org's teacher professional development and it's secondary school curricula, impacting hundreds of thousands of U.S. youth",
            url: 'https://code.org',
            who: 'k12cs',
        },
        {
            kind: 'curriculum',
            start: 2013,
            end: null,
            description:
                "Our research on software engineering expertise informed the curriculum at New York's Academy for Software Engineering",
            url: 'http://www.afsenyc.org/',
            who: 'k12cs',
        },
        {
            kind: 'product',
            start: 2013,
            end: null,
            description:
                "Gidget influenced the design of Code.org's Code Studio",
            url: 'https://studio.code.org',
            who: 'k12cs',
        },
        {
            kind: 'product',
            start: 2014,
            end: null,
            description:
                "Gidget influenced the design of Apple's Swift Playgrounds",
            url: 'https://www.apple.com/swift/playgrounds/',
            who: 'k12cs',
        },
        {
            kind: 'curriculum',
            start: 2014,
            end: null,
            description:
                'Gidget has been played by tens of thousands of youth adults online, in summer camps, and in high schools',
            url: 'https://helpgidget.org',
            who: 'k12cs',
        },
        {
            kind: 'policy',
            start: 2017,
            end: null,
            description:
                'The CS for All Washington advocacy group I direct has used our research to affect statewide CS education policy',
            url: 'http://csforallwa.org',
            who: 'k12cswa',
        },
        {
            kind: 'policy',
            start: 2018,
            end: null,
            description:
                'Our research on transfer students has influenced admissions policy at the University of Washington',
            url: null,
            who: 'k12cswa',
        },
        {
            kind: 'community',
            start: 2016,
            end: null,
            description:
                "As part of our research, we have taught in the University of Washington's Upward Bound program each summer, reaching dozens of students underrepresented in computing from Seattle's low-income immigrant and refugee communities",
            url: 'https://www.washington.edu/omad/upward-bound/',
            who: 'k12cswa',
        },
        {
            kind: 'community',
            start: 2017,
            end: null,
            description:
                "I've run a quarterly meetup, Sound CS Ed, to bring together hundreds of CS education teachers, researchers, policy makers, and product designers in Puget Sound",
            url: 'http://soundcsed.org',
            who: 'k12csps',
        },
        {
            kind: 'curriculum',
            start: 2018,
            end: 2019,
            description:
                'I have served on the Seattle Public Schools CS Advisory board, shaping strategic goals',
            url: null,
            who: 'k12csps',
        },
    ],
    degrees: [
        {
            institution: 'Carnegie Mellon University',
            degree: 'Doctorate in Human-Computer Interaction',
            start: 2002,
            end: 2008,
            thesis: 'Thesis: Asking and Answering Questions about the Causes of Software Behaviors',
            committee:
                'Brad Myers (CMU, Chair), Bonnie John (CMU), Jonathan Aldrich (CMU), Gail Murphy (UBC)',
        },
        {
            institution: 'Oregon State University',
            degree: 'Honors Bachelor of Science in Computer Science and Psychology',
            start: 1998,
            end: 2002,
            thesis: 'Thesis: Individual Differences in Programming, Testing, and Debugging in a Statistical End-User Programming Environment',
            committee:
                'Margaret Burnett (Computer Science) and Bob Uttl (Psychology)',
        },
    ],
    patents: [
        {
            title: 'Context- and Activity-Aware Content Selection',
            year: '2017',
            number: 'U.S. Patent No. 9,727,561',
            inventors: 'Amy J. Ko and Victor Medina',
        },
        {
            title: 'Systems and Methods for Selection-Based Contextual Help Retrieval',
            year: '2012',
            number: 'U.S. Patent No. 9,811,583',
            inventors: 'Parmit K. Chilana, Amy J. Ko, and Wobbrock, J.O.',
        },
        {
            title: 'A Debugging Interface',
            year: '2010',
            number: 'U.S. Patent No. 7,735,066',
            inventors: 'Amy J. Ko and Brad A. Myers',
        },
    ],
    jobs: [
        {
            title: 'Professor',
            organization: 'University of Washington, Seattle',
            department:
                'The Information School + Paul G. Allen School of Computer Science & Engineering (courtesy)',
            startdate: 2020,
            enddate: null,
            academic: true,
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
    ],
    recognitions: [
        {
            title: 'ACM Distinguished Member',
            year: 2024,
            description:
                'A recognition given to computing scholars who have made a significant impact on the computing field.',
        },
        {
            title: 'ACM Distinguished Speaker',
            year: 2023,
            description:
                'A recognition given to thought leaders in computing, with an expectation of giving public talks to venues globally.',
        },
        {
            title: 'SIGCHI Academy',
            year: 2022,
            description:
                'A recognition given to honorary and leading individuals who have made substantial contributions to the field of human-computer interaction, shaping the field.',
        },
        {
            title: 'Oregon State University Council of Outstanding Early Career Engineers',
            year: 2021,
            description:
                'A recogntion given to distinguished Oregon State University alumni who are future leaders in their profession.',
        },
        {
            title: 'Marsha Landolt Distinguished Graduate Mentor Award, Honorable Mention',
            year: 2021,
            description:
                'One of 20 faculty nominated and 2 awarded across all University of Washington campuses in 2021, in recognition of outstanding mentorship in doctoral education.',
        },
        {
            title: 'ACM Senior Member',
            year: 2020,
            description:
                'For more than 10 years of technical leadership and professional contributions.',
        },
        {
            title: 'ACM SIGCHI Exceptional Reviewer',
            year: 2017,
            description:
                'For one or more outstanding reviews at a SIGCHI conference',
        },
        {
            title: 'ACM SIGCHI Exceptional Reviewer',
            year: 2016,
            description:
                'For one or more outstanding reviews at a SIGCHI conference',
        },
        {
            title: 'University of Washington Presidential Entrepreneurial Faculty Fellow',
            year: 2014,
            description:
                'For entrepreneurial leadership in translating research to practice.',
        },
        {
            title: 'National Science Foundation CAREER award',
            year: 2010,
            description:
                "NSF's most prestigious award in support of early-career faculty who have the potential to serve as academic role models in research and education.",
        },
        {
            title: 'National Science Foundation Graduate Research Fellowship',
            year: 2004,
            description:
                'A five year fellowship recognizing outstanding graduate students in NSF-supported STEM disciplines.',
        },
        {
            title: 'National Defense Science & Engineering Graduate Fellowship',
            year: 2004,
            description:
                'A three year fellowship in recognition of U.S. citizens with promise to advance science and engineering disciplinesof military importance.',
        },
        {
            title: 'National Science Foundation Graduate Research Fellowship, Honorable Mention',
            year: 2003,
            description:
                'Recognition of an outstanding graduate students in NSF-supported STEM disciplines.',
        },
        {
            title: 'CRA Outstanding Undergraduate, Honorable Mention',
            year: 2001,
            description:
                'Recognition of one of the top undergraduate researchers across all computer science research areas.',
        },
        {
            title: 'Waldo-Cummings Outstanding Student Award',
            year: 2001,
            description:
                "Oregon State University's recognition of the top 5 undergraduates in the junior class of more than 5,000 students.",
        },
        {
            title: 'ACM Student Chapter Excellence Award for School Service',
            year: 2000,
            description:
                "ACM's recognition of ACM student chapter leadership, earned while President of Oregon State University's ACM student chapter.",
        },
        {
            title: 'Waldo-Cummings Outstanding Student Award (top',
            year: 1999,
            description:
                "Oregon State University's recognition of the top 5 undergraduates in the freshman class of more than 5,000 students.",
        },
    ],
    editing: [
        {
            title: 'Editor in Chief',
            venue: 'ACM Transactions on Computing Education',
            type: 'journal',
            commitment: {
                start: '2021-12-01',
                end: '2024-12-01',
                hours: 3,
                priority: 1,
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
    ],
    reviewing: [
        {
            venue: 'National Science Foundation (CISE, EHR)',
            title: 'NSF Panelist',
            years: [2011, 2012, 2014, 2017, 2018, 2020, 2021, 2022, 2023],
            level: 'panelist',
            commitment: {
                start: '09-15',
                end: '06-15',
                hours: 0.5,
                priority: 1,
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
                hours: 1,
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
            years: [2014, 2015, 2017, 2019],
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
                2015, 2016, 2017, 2018, 2019, 2020, 2021,
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
    ],
    doctoralCommittees: [
        {
            name: 'Hannah Potter',
            institution: 'University of Washington',
            department: 'Computer Science & Engineering',
            startdate: 2025,
            enddate: null,
        },
        {
            name: 'Jialin Li',
            institution: 'University of Pennsylvania',
            department: 'Computer Science & Engineering',
            startdate: 2025,
            enddate: null,
        },
        {
            name: 'Luis Morales-Navarro',
            institution: 'University of Pennsylvania',
            department: 'Graduate School of Education',
            startdate: 2024,
            enddate: null,
        },
        {
            name: 'Daniela Wolf',
            institution: 'Graz University of Technology',
            department: 'Computer Science',
            startdate: 2024,
            enddate: null,
        },
        {
            name: 'Edward Misback',
            institution: 'University of Washington',
            department: 'Computer Science',
            startdate: 2024,
            enddate: null,
        },
        {
            name: 'Ella Lombard',
            institution: 'University of Washington',
            department: 'Psychology',
            startdate: 2022,
            enddate: 2024,
        },
        {
            name: 'Anne Drew Hu',
            institution: 'Michigan State University',
            department: 'Education',
            startdate: 2024,
            enddate: null,
        },
        {
            name: 'Aashaka Desai',
            institution: 'University of Washington',
            department: 'Computer Science',
            startdate: 2024,
            enddate: null,
        },
        {
            name: 'Sara Nurollahian',
            institution: 'University of Utah',
            department: 'Computer Science',
            startdate: 2023,
            enddate: null,
        },
        {
            name: 'Camille Gobert',
            institution: 'Paris-Saclay University',
            department: 'Computer Science',
            startdate: 2022,
            enddate: null,
        },
        {
            name: 'Venkatesh Potluri',
            institution: 'University of Washington',
            department: 'Computer Science',
            startdate: 2022,
            enddate: null,
        },
        {
            name: 'Maryam Arab',
            institution: 'George Mason University',
            department: 'Computer Science',
            startdate: 2018,
            enddate: null,
        },
        {
            name: 'Mina Tari',
            institution: 'University of Washington',
            department: 'The Information School',
            startdate: 2018,
            enddate: 2022,
        },
        {
            name: 'Bas Jansen',
            institution: 'Leiden University',
            department: 'Institute of Advanced Computer Science',
            startdate: 2022,
            enddate: 2022,
        },
        {
            name: 'Sangho Su',
            institution: 'University of Waterloo',
            department: 'Computer Science',
            startdate: 2022,
            enddate: 2022,
        },
        {
            name: 'Leah Perlmutter',
            institution: 'University of Washington',
            department: 'Computer Science & Enngineering',
            startdate: 2021,
            enddate: null,
        },
        {
            name: 'Alex Okeson',
            institution: 'University of Washington',
            department: 'Computer Science & Enngineering',
            startdate: 2021,
            enddate: 2022,
        },
        {
            name: 'Burren Peil',
            institution: 'University of Washington',
            department: 'Human-Centered Design and Engineering',
            startdate: 2021,
            enddate: null,
        },
        {
            name: 'Anne Drew Hu',
            institution: 'Michigan State University',
            department: 'College of Education',
            startdate: 2021,
            enddate: null,
        },
        {
            name: 'Jean Salac',
            institution: 'University of Chicago',
            department: 'Computer Science',
            startdate: 2020,
            enddate: 2021,
        },
        {
            name: 'Lily Durwood',
            institution: 'University of Washington',
            department: 'Psychology',
            startdate: 2020,
            enddate: 2021,
        },
        {
            name: 'Matthew Davidson',
            institution: 'University of Washington',
            department: 'College of Education',
            startdate: 2020,
            enddate: 2022,
        },
        {
            name: 'Chenglong Wang',
            institution: 'University of Washington',
            department: 'Computer Science & Engineering',
            startdate: 2019,
            enddate: 2021,
        },
        {
            name: 'Meen Chul Kim',
            institution: 'Drexel University',
            department: 'Information Science',
            startdate: 2018,
            enddate: 2021,
        },
        {
            name: 'Srinivasan Iyer',
            institution: 'George Mason University',
            department: 'Computer Science',
            startdate: 2018,
            enddate: 2020,
        },
        {
            name: 'David Samudio',
            institution: 'George Mason University',
            department: 'Computer Science',
            startdate: 2018,
            enddate: 2024,
        },
        {
            name: 'Justin Smith',
            institution: 'North Carolina State University',
            department: 'Computer Science',
            startdate: 2018,
            enddate: 2019,
        },
        {
            name: 'Alex Kale',
            institution: 'University of Washington',
            department: 'The Information School',
            startdate: 2017,
            enddate: 2021,
        },
        {
            name: 'Aaron Bauer',
            institution: 'University of Washington',
            department: 'Computer Science & Engineering',
            startdate: 2017,
            enddate: 2019,
        },
        {
            name: 'Elena Agapie',
            institution: 'University of Washington',
            department: 'Human-Centered Design and Engineering',
            startdate: 2017,
            enddate: 2020,
        },
        {
            name: 'James Bornholt',
            institution: 'University of Washington',
            department: 'Computer Science & Engineering',
            startdate: 2017,
            enddate: 2018,
        },
        {
            name: 'Abdullah Ali',
            institution: 'University of Washington',
            department: 'The Information School',
            startdate: 2017,
            enddate: 2018,
        },
        {
            name: 'Yea-Seul Kim',
            institution: 'University of Washington',
            department: 'The Information School',
            startdate: 2017,
            enddate: 2020,
        },
        {
            name: 'Lauren Milne',
            institution: 'University of Washington',
            department: 'Computer Science & Engineering',
            startdate: 2016,
            enddate: 2018,
        },
        {
            name: 'Eric Butler',
            institution: 'University of Washington',
            department: 'Computer Science & Engineering',
            startdate: 2016,
            enddate: 2018,
        },
        {
            name: 'Justin Huang',
            institution: 'University of Washington',
            department: 'Computer Science & Engineering',
            startdate: 2016,
            enddate: 2018,
        },
        {
            name: 'Elena Agapie',
            institution: 'University of Washington',
            department: 'Human-Centered Design & Engineering',
            startdate: 2016,
            enddate: 2020,
        },
        {
            name: 'Jonathan Bragg',
            institution: 'University of Washington',
            department: 'Computer Science & Engineering',
            startdate: 2016,
            enddate: 2018,
        },
        {
            name: 'Nan-Chen Chen',
            institution: 'University of Washington',
            department: 'Human-Centered Design and Engineering',
            startdate: 2016,
            enddate: 2019,
        },
        {
            name: 'Matthew Kay',
            institution: 'University of Washington',
            department: 'Computer Science & Engineering',
            startdate: 2014,
            enddate: 2016,
        },
        {
            name: 'Catherine Baker',
            institution: 'University of Washington',
            department: 'Computer Science & Engineering',
            startdate: 2012,
            enddate: 2017,
        },
        {
            name: 'Roshanak Zilouchian',
            institution: 'University of Illinois, Urbana-Champaign',
            department: 'Computer Science',
            startdate: 2012,
            enddate: 2014,
        },
        {
            name: 'Sean Fullerton',
            institution: 'University of Washington',
            department: 'Information School',
            startdate: 2012,
            enddate: 2015,
        },
        {
            name: 'Jared Bauer',
            institution: 'University of Washington',
            department: 'Information School',
            startdate: 2011,
            enddate: 2016,
        },
        {
            name: 'Paul Gross',
            institution: 'Washington University in St. Louis',
            department: 'Computer Science',
            startdate: 2011,
            enddate: 2014,
        },
        {
            name: 'Marilyn Ostergren',
            institution: 'University of Washington',
            department: 'Information School',
            startdate: 2011,
            enddate: 2014,
        },
        {
            name: 'Jing Xie',
            institution: 'University of North Carolina, Charlotte',
            department: 'Computer Science, UNC Charlotte',
            startdate: 2011,
            enddate: 2012,
        },
        {
            name: 'Kayur Patel',
            institution: 'University of Washington',
            department: 'Computer Science & Engineering',
            startdate: 2008,
            enddate: 2012,
        },
        {
            name: 'Michael Toomim',
            institution: 'University of Washington',
            department: 'Computer Science & Engineering',
            startdate: 2010,
            enddate: 2013,
        },
        {
            name: 'Travis Kriplean',
            institution: 'University of Washington',
            department: 'Computer Science & Engineering',
            startdate: 2010,
            enddate: 2012,
        },
        {
            name: 'Elisabeth Jones',
            institution: 'University of Washington',
            department: 'Information School',
            startdate: 2009,
            enddate: 2011,
        },
    ],
    service: [
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
            level: 'international',
            description:
                'I lead a community of volunteers to create infrastructure for sustainable peer review labor markets.',
            commitment: {
                start: '2023-01-04',
                end: null,
                hours: 1,
                priority: 0,
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
                'I helped plan admissions policy, review Ph.D. applicaitons, and make final admissions recommendations.',
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
        },
        {
            title: 'Panel Member',
            committee: 'Kaiser Permanente Gender Health Advisory Panel',
            level: 'regional',
            description:
                'Along with a group of a dozen other trans and non-binary community members, I provide guidance, ideas, feedback, and advocacy to Kaiser on their gender health services.',
            commitment: {
                start: '2021-02-01',
                end: '2023-0201',
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
                'I helped plan admissions policy, review Ph.D. applicaitons, and make final admissions recommendations.',
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
                'I helped advance the interests of faculty in the school through policy change and advocacy to the dean, hepling to secure an annual dispursement of flexible funding.',
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
    ],
    funding: [
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
                'Explores pathways into CS teaching and strategies for retention.',
            url: 'https://www.nsf.gov/awardsearch/showAward?AWD_ID=2318257&HistoricalAwards=false',
            private: false,
            commitment: {
                start: '2023-10-01',
                end: '2027-09-30',
                hours: 4,
                priority: 1,
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
                end: '2023-09-15',
                hours: 4,
                priority: 1,
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
    ],
    travel: [
        {
            url: undefined,
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
            url: undefined,
            title: 'ICER 2025',
            details: 'Networking and sharing my research.',
            category: 'research',
            commitment: {
                start: '2025-08-04',
                end: '2025-08-06',
                hours: 30,
                priority: 1,
            },
        },
        {
            url: undefined,
            title: 'CSTA 2025',
            details: 'Networking and sharing my research.',
            category: 'research',
            commitment: {
                start: '2025-07-08',
                end: '2025-07-10',
                hours: 30,
                priority: 1,
            },
        },
        {
            url: undefined,
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
            url: undefined,
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
            url: undefined,
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
            url: undefined,
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
            details:
                "I'm attending and have two student-led papers we'll present.",
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
    ],
    panels: [
        {
            date: '2024-09-06',
            title: 'Computing and Information Sciences as a Partner in the Post-Discipline',
            venue: 'Trans Studies 2024',
        },
        {
            date: '2022-03-21',
            title: 'Equity, Justice, and Engineering Education',
            venue: 'Science, Technology, and Public Policy (STPP) Program, Ford School of Public Policy, University of Michigan',
        },
        {
            date: '2021-14-10',
            title: 'MIT EECS Rising Stars careers panel',
            venue: 'Massachusets Institute of Technology',
        },
        {
            date: '2021-05-25',
            title: 'Capacity, Access, Participation, and Experience in K-12 CS Education',
            venue: 'IEEE Conference on Research in Equity and Sustained Participation in Engineering, Computing, and Technology (RESPECT)',
        },
        {
            date: '2021-02-11',
            title: 'Women in Science',
            venue: 'North Central ESD K-12 STEM Education Summit',
        },
        {
            date: '2020-07-22',
            title: 'LGBTQ+ in Science',
            venue: 'Applied Physics Laboratory, Johns Hopkins University',
        },
        {
            date: '2020-16-06',
            title: 'Teaching Accesibility',
            venue: 'AccessComputing Seminar Series',
        },
        {
            date: '2016-07-19',
            title: 'Why CS Departments Should Embrace CS Education Research',
            venue: 'CRA Snowbird Conference',
        },
    ],
    classes: [
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
                { size: 17, term: 1, year: 2025, score: null },
            ],
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
        },
    ],
    commitments: [
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
    ],
    years: {
        '2000': 'Sophomore year of college',
        '2001': 'Junior year of college',
        '2002': 'Graduated from college; 1st year of PhD',
        '2003': null,
        '2004': null,
        '2005': null,
        '2006': 'MSR intern',
        '2007': null,
        '2008': 'Job search, finished PhD, started at UW, divorce',
        '2009': null,
        '2010': null,
        '2011': null,
        '2012': 'Founded AnswerDash',
        '2013': 'On leave at AnswerDash',
        '2014': 'Promoted to Associate with tenure; returned from AnswerDash',
        '2015': 'Sabbatical',
        '2016': 'Informatics program chair',
        '2017': 'Informatics program chair',
        '2018': 'Informatics program chair',
        '2019': 'Informatics program chair; gender transition',
        '2020': 'Informatics program chair; promoted to Professor; COVID-19; gender transition',
        '2021': 'Informatics program chair; COVID-19; gender transition',
        '2022': 'Informatics program chair; gender transition; sabbatical (Summer/Fall)',
        '2023': 'Sabbatical (Winter/Spring/Summer)',
        '2024': 'Informatics program chair; Associate Dean for Academics',
        '2025': 'Associate Dean for Academics',
    },
};

export default Amy;
