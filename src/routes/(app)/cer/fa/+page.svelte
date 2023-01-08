<script lang="ts">
    import Section from '$lib/components/Section.svelte';
    import External from '$lib/components/External.svelte';
    import advisors from '$lib/models/advisors';
    import SectionList from '$lib/components/SectionList.svelte';
    import Table from '$lib/components/Table.svelte';
    import { page } from '$app/stores';
</script>

<div lang={$page.url.pathname.split('/').at(-1)}>
    <h1> This is my computing education research FAQ. </h1>

    <em>Translation by [insert author]</em>

    <p>
        I started it with the help of several computing education researchers at
        a Dagstuhl retreat in 2016. I consider it a community resource, so if
        you see something to add, fix, or improve, write me, or submit <External
            to="https://github.com/amyjko/faculty/issues">an issue</External
        > or
        <External to="https://github.com/amyjko/faculty/pulls"
            >pull request</External
        >
    </p>

    <SectionList path="/cer" />

    <p>
        Computing education research (CER), also known as computer science
        education (CSEd) research, is the study of how people learn and teach
        computing, broadly construed. This FAQ will teach you more about the
        field and how you might contribute to it.
    </p>

    <Section id="what-is-cer" header="What is computing education research?">
        <p>
            First, CER is not teaching. Teaching is helping people change their
            knowledge, skills, attitudes, beliefs, identities. Research is
            discovery and invention. Teachers teach computing, whereas computing
            education researchers make discoveries about this teaching and
            learning, and invent new ways for these teaching and learning to
            occur. CER is an example of <External
                to="https://www.nap.edu/catalog/13362/discipline-based-education-research-understanding-and-improving-learning-in-undergraduate"
                >discipline-based education research</External
            >, like math education research or science education research, all
            of which are part of the broader field of education and learning
            sciences research.
        </p>

        <p>
            CER is also not educational technology research (EdTech). Computing
            education researchers often create educational technologies to
            support the learning and teaching of computing, but CER is not
            explicitly concerned with the broader use of technology in learning,
            teaching, and education. It's specifically concerned with the
            learning and teaching of computing in particular. Many computer
            science researchers invent learning technologies, but are not
            computing education researchers, because those technologies are not
            concerned with the learning of computing.
        </p>

        <p>
            It's also important to note that I view "computing" broadly: it's
            not just about programming, or even just about computer science, but
            also about all of the phenomena surrounding computing, including
            data, information, privacy, security, ethics, software engineering,
            and sociocultural and sociopolitical views of computing in society.
            This means that computing education and CER can and does cover far
            more than just learning to code&mdash;it just hasn't historically.
        </p>
    </Section>

    <Section
        id="csed-v-cer"
        header="What is the difference between CS education research and computing education research?"
    >
        <p>
            The difference in these two phrases is in the difference between
            "CS" and "Computing". CS generally refers to the historically core
            topics in computer science research, such as theory, algorithms,
            data structures, programming languages, and operating systems. But
            other fields began to engage these ideas and identify their
            intersections to other fields. For example, information science, a
            field long concerned with data, information, and society, began to
            consider those topics from a computer science perspective. Science
            began to apply computer science ideas to data capture, storage, and
            analysis. Biology, as it began to see DNA as a form of biological
            data, and apply algorithms to analyzing it, formed bioinformatics.
            Communication began to explore computer-mediated communication.
            Behavioral and brain scientists started using computers to model
            decisions, knowledge, and brain activity. And social scientists of
            all kinds began studying and critiquing the role of computers in
            society.
        </p>

        <p>
            This broadening of algorithms, data structures, and programming to
            all of academia put pressure on "computer science" as a phrase. Some
            universities with CS departments began to grow to teach and study
            all of these broader phenomena, leading many of them to rename
            themselves "Schools of Computing". The word "computing" was meant to
            refer not to physical hardware, but of computation itself and the
            many ways that it occurs and is organized in nature and human
            civilization. And thus, over time, CS began to connote the more
            narrow historical focus of CS foundations and Computing to the
            broader set of phenomena around the design and use of computers,
            including CS itself.
        </p>

        <p>
            Given that history, "CS education" generally refers to the teaching
            and learning of these historically narrow topics in CS, and "CS
            education research" to research about this teaching and learning. In
            contrast, "Computing education" generally refers to the teaching and
            learning of <em>any</em> aspect of the use of computers and computational
            ideas, and "Computing education research" to research about that teaching
            and learning. Because I'm not interested in the historically narrow conception
            of computing, and my research considers topics outside that narrow historical
            conception, I use "Computing" instead of "CS".
        </p>
    </Section>

    <Section
        id="comparison-to-other-fields"
        header="How does computing education research compare to learning sciences, education research, and educational psychology?"
    >
        <p>
            My background isn't in these fields, though I do collaborate with
            people in these other communities and have learned about their
            differences. Here's the best characterization I can give:
        </p>

        <ul>
            <li>
                <strong>Education research</strong> is broadly concerned with formal
                systems of education, how to make those systems effective and just,
                how to prepare teachers to make them effective and just. The field
                is interested in general theories of learning, education, interest
                development, and identity, and because of its focus on formal education,
                is often focused on youth, who are the dominant age demographic engaged
                in formal education. The phrase "Computing education" uses the word
                "education" in this same way, but is more broadly concerned with
                teaching and learning in any context (in principle, but often not
                in practice).
            </li>
            <li>
                <strong>Educational psychology</strong> is focused on learning phenomena
                in the mind, such as learning, memory, development, intelligence,
                self-regulation, motivation, and self-concept. The field is also
                concerned with school psychologists who help students with their
                mental health. The field tends to be more quantitiatve than education
                research and learning sciences, following traditions of cognitive
                psychology. Computing education draws upon this field, especially
                in its history of cognitive theories of program understanding.
            </li>
            <li>
                <strong>Learning sciences</strong> emerged in the 1990's as a reaction
                to educational psychology's inattention to the setting, culture,
                and social context of learning. Combining perspectives from cognition,
                cognitive science, computer science, and design, like education research,
                it's much more concerned with the sociocultural factors that shape
                learning, and more than education and educational psychology, views
                design as a means to articulating theories, a way of shaping theories,
                and a way of testing theories. Because of the focus on context, in
                addition to being concerned with formal systems of education, it
                is also concerned with learning across the lifespan, at home, in
                families, and other settings.
            </li>
        </ul>

        <p>
            (Shayan Doroudi provides a nice <External
                to="https://sites.google.com/uci.edu/shayan-doroudi/blog/learning-theories"
                >primer on learning theories</External
            > and their disciplinary origins.)
        </p>

        <p>
            How does computing education fit in to all of this? Like other <External
                to="https://www.nap.edu/catalog/13362/discipline-based-education-research-understanding-and-improving-learning-in-undergraduate"
                >discipline-based education research (DBER)</External
            > such as math and physics education, it draws upon all three of the
            fields above, using theories and ideas from those fields. However, because
            it is focused on a discipline, it is specifically concerned with the
            content of the discipline, specific methods of learning and teaching
            that content. In this sense, it is more applied, bridging foundational
            ideas that span any human learning to applied ideas specific to the learning
            of specific ideas and skills.
        </p>
    </Section>

    <Section
        id="major-questions"
        header="What are the overarching research questions in CER?"
    >
        <p>
            As with any research discipline, research questions can and should
            be specific. However, there are some major overarching questions in
            this field that researchers have begun to investigate, including:
        </p>

        <ul>
            <li>What is computing?</li>
            <li>What does it mean to know computing?</li>
            <li>How do people learn computing?</li>
            <li>How do teachers teach and assess computing?</li>
            <li
                >How does identity interact with people's learning of computing?</li
            >
            <li>How can people learn computing more effectively?</li>
            <li>How can teachers teach computing more effectively?</li>
            <li>How can access to computing education be improved?</li>
            <li>How can computing education be delivered equitably to all?</li>
            <li
                >How can computing education be reimagined to serve goals other
                than profit and disruption?</li
            >
            <li
                >How do systems of oppression such as racism, sexism, and ablism
                shape learning, teaching, and curricula?</li
            >
            <li>How can we implement anti-racist CS education?</li>
            <li>How can learning technologies teach computing?</li>
            <li>How does computing education affect people's lives?</li>
            <li>What are the societal costs of computing illiteracy?</li>
            <li
                >What can be taught about computing to learners of different
                ages?</li
            >
        </ul>

        <p>
            While the "people" in the questions above could be anyone (youth,
            teens, college students, adults, and even teachers), the history of
            CER has primarily focused on teaching students in post-secondary
            settings, because the faculty conducting research have found it
            easier to study the students they are teaching. This is changing as
            countries around the world begin to incorporate computing into all
            levels of school, and as private industry begins to create
            technologies and services that teach computing to all ages. For
            example, my research has investigated new ways to teach youth from
            age 8-18, as well as adults.
        </p>
    </Section>

    <Section
        id="exciting-discoveries"
        header="What are some exciting CER discoveries?"
    >
        <p> There are so many! Examples include: </p>

        <ul>
            <li>
                The field discovered that diversity in computing education is
                low because of the narrow, exclusionary nature of computing
                cultures, not because of inherent disinterest or inability on
                the part of diverse learners (e.g., <External
                    to="https://doi.org/10.1145/543812.543836"
                    >Fisher &amp; Margolis 2002</External
                >, <External
                    to="https://books.google.com/books?id=WOI9rGJSFCcC&amp;lpg=PR5&amp;ots=LaGMwwGOZl&amp;dq=swimming%20in%20the%20shallow%20end&amp;lr&amp;pg=PR5#v=onepage&amp;q=swimming%20in%20the%20shallow%20end&amp;f=false"
                    >Margolis 2010</External
                >).
            </li>
            <li>
                The field invented contextualized computing ed pedagogy (e.g.,
                Mark Guzdial's <External
                    to="https://doi.org/10.1145/961290.961542"
                    >media computation</External
                >), which has greatly increased the diversity of computer
                science graduates, and spread to many universities.
            </li>
            <li>
                The field built upon the earliest structured editors like the <External
                    to="https://dl.acm.org/citation.cfm?id=358755"
                    >Cornell Program Synthesizer</External
                >, eventually maturing them into block-based editing
                environments like <External
                    to="https://doi.org/10.1145/259963.260503">Alice</External
                >, <External to="https://doi.org/10.1145/1592761.1592779"
                    >Scratch</External
                > and <External to="https://developers.google.com/blockly/"
                    >Blockly</External
                >. These editors greatly increased engagement in computing
                education, and greatly reduced barriers to learning programming
                languages.
            </li>
            <li>
                Seymour Papert, who was broadly concerned with learning, but
                also the learning of computing, contributed constructionism, a
                new theory of learning (<External
                    to="https://dl.acm.org/citation.cfm?id=1095592"
                    >Papert 1980</External
                >).
            </li>
            <li>
                Alan Kay, one of the earliest researchers to investigate the
                learning of computing, helped <External
                    to="http://gagne.homedns.org/~tgagne/contrib/EarlyHistoryST.html"
                    >build upon ideas of object-orientation from Simula</External
                >, which inspired Smalltalk, which along with other languages
                such as C++, inspired the modern object-oriented programming
                languages and IDEs we use today.
            </li>
        </ul>

        <p>
            The field's recent efforts to transform STEM education through
            computing, invent rapid new forms of learning online, and devise
            more equitable ways to teach should be equally, if not more
            impactful.
        </p>
    </Section>

    <Section
        id="jobs"
        header="What kinds of jobs do computing education researchers do?"
    >
        <p>
            Most computing education researchers are faculty in universities.
            Many of these faculty are tenure-track faculty like myself, which
            means a substantial portion of our time (~50%) is spent on
            scholarship. However, there are also many full-time instructors who
            find additional time to do research on top of their teaching. Many
            of the original authors at ICER were once members of the
            Bootstrapping or Scaffolding groups (led by Fincher, Petre, and
            Tenenberg), who were CS teachers that started to do research in
            their own classrooms.
        </p>
        <p>
            Not all computing education researchers are college faculty. Some
            work in industry creating educational technologies for teaching
            computing, applying their expertise to the research and design of
            educational software. Some work in non-profits, using their
            expertise to advocate for computing education in schools, while
            conducting research on factors that affect policy. Some work in
            school districts, helping to implement computing education curricula
            in schools, while studying and evaluating the effectiveness of the
            implementation. Others work in government, facilitating research
            funding. Others still become teachers themselves, both at
            universities and other schools.
        </p>

        <p>
            Tenure-track faculty are in the best position to make advances in
            the field because a substantial portion of their time is dedicated
            to research, but the research contributions by teaching-track
            faculty are critical, as they often bring more richly informed
            perspectives on the practice of teaching. It is possible to do
            research in other positions, but it is often outside the scope of a
            job. Because of this, many non-tenure track faculty focus their
            research on settings that their job gives them access to, which can
            restrict which research questions they can answer.
        </p>
    </Section>

    <Section
        id="becoming-a-researcher"
        header="How do I become a CER researcher?"
    >
        <p>
            The most effective route is to get a Ph.D. in computing education
            research at one of the many Ph.D. granting universities in the
            world. Ph.D. students learn to conduct research over the course of
            multiple years (generally 4 to 6) under the supervision of an
            advisor.
        </p>

        <p>
            Undergraduate research is a key part of creating pathways to Ph.D.
            programs. Undergraduates can help accelerate research projects, and
            even lead their own projects, helping with admission to Ph.D.
            programs (especially if you publish, which demonstrates your
            interest and ability in conducting research). See the <External
                to="https://cra.org/crae/wp-content/uploads/sites/3/2020/10/Resources-for-Scaling-Undergraduate-Research.pdf"
                >CRA-E best practices guide on undergraduate CS research</External
            > for a glimpse into how effective undergraduate research experiences
            should work.
        </p>
    </Section>

    <Section id="getting-a-phd" header="Where can I get a Ph.D. in CER?">
        <p>
            You need to find a university that grants Ph.D.s and has
            tenure-track faculty who do research in CER on a topic that you're
            interested in. The alphabetical list below contains some of the many
            faculty who advise Ph.D. students on computing education research.
            Find them online and see what kind of research they're doing. (This
            list may be out of date, as faculty sometimes move universities,
            retire, go to industry, or change research areas, so be sure to
            check their website for the latest information).
        </p>

        <p>
            One common question is whether to get a Ph.D. in a CS department, a
            College of Education, or some other kind of computing or learning
            related department, such as information schools, which are often
            concerned with computing and data literacy. Ultimately, the doctoral
            program you choose is going to shape a few things: 1) the classes
            you're required to take in the first year or two, 2) the peers you
            might sit near and talk to, 3) the faculty who might serve on your
            committee and what expertise and values they have, and 4) what
            resources you have to get particular kinds of jobs. For example, if
            you go to a CS Ph.D. program, you're going to learn about the latest
            research in various areas of CS, be surrounded by people interested
            in computing, but possibly not many interested in computing
            education; you'll have resources for getting faculty jobs in CS
            departments, but not really Colleges of Education. In contrast, if
            you go to a College or School of Education Ph.D. program, you're
            going to learn about the latest knowledge in education and learning
            sciences, and be surrounded by people passionate about learning,
            equity, and justice, but possibly not many people interested in
            computing. And if you go to a place like an information school,
            you'll gain new perspectives about data and computing, be surrounded
            by a radical diversity of people with interests that span many
            disciplines, but possibly one of only a few people interested in
            computing education.
        </p>

        <p>
            Because of the tradeoffs above, the best places to go are ones where
            there are advisors that share your interests, a critical mass of
            people interested in computing education, and healthy interchange
            between academic units interested in computing, learning, and data.
            This is because computing education is inherently interdisciplinary;
            you want peers and faculty that appreciate that, value that, and
            support that.
        </p>

        <p>
            One note about selecting advisors: their disciplinary affiliation is
            just <em>one</em> indicator of the nature of the contributions they might
            make (people in CS departments might built learning technologies, people
            in colleges of education might focus on teacher training and pedagogy),
            but this is not a perfect indicator. Look closely at researchers' recent
            publications; and if their websites seem out of date, write them to ask
            what they're working on.
        </p>

        <p>
            Another caveat: some of the faculty below have chosen their
            expertise descriptions, but others I had to extract from faculty
            websites wrote.
            <strong>I've put a * next to expertise</strong> that hasn't been chosen
            or agreed to by the researcher being described. These expertise tags
            are also likely to be perpetualy out of date, as researchers pursue new
            topics. The best thing to do is click on their name to visit their website
            and see what kinds of research they have published. That's the most direct
            indicator of their interests, the methods they use, and the types of
            contributions they want to make (other than just writing them and asking,
            which you can also do).
        </p>

        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Expertise</th>
                    <th>Unit</th>
                    <th>University</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {#each advisors as advisor}
                    <tr>
                        <td
                            ><External to={advisor[1]}>{advisor[0]}</External
                            ></td
                        >
                        <td>{advisor[2]}</td>
                        <td>{advisor[3]}</td>
                        <td>{advisor[4]}</td>
                        <td>{advisor[5]}</td>
                    </tr>
                {/each}
            </tbody>
        </Table>
    </Section>

    <Section
        id="doctoral-admissions"
        header="For doctoral admissions, how important is it to demonstrate focus in a single research area?"
    >
        <p>
            Advisors differ on the criteria they use to select candidates.
            Personally, I look for 1) experience with research, 2) passion in
            the subject of computing education, 3) the requisite skills to
            persue that passion, and 4) an overlap with my interests. You can
            get experience by working with faculty at your own institution. That
            can be hard if you don't have faculty doing work in this area. The
            requisite skills depend a lot on the contributions you want to make.
            If you want to envision and build new learning technologies, can you
            code well enough to build them? If you want to investigate new
            teacher training methods, do you have teaching experience? If you
            want to do more theoretical work, how strong are your writing and
            analytical skills? All of these skills end up being important in
            some way to participating in CER discourse, just to varying degrees.
        </p>

        <p>
            Working specifically in computing education isn't necessary to
            achieve the above. Perhaps you have undergraduate research
            experience in HCI, software engineering, or programming languages.
            That can be fine, as long as your passion is clear and the skills
            you have align with the questions you want to answer. Researchers
            are always investigating new questions, so it's perfectly normal to
            have experience from other related areas of computing and
            information science.
        </p>

        <p>
            Of course, even if you meet all of the criteria above (or other
            criteria that other advisors might have), you might not get
            accepted. That's because doctoral advising is extremely
            time-intensive: we commit to advise people for anywhere from 3-6
            years or more, and so we can only take on so many students at a
            time. There might be a dozen people who apply to work with one of
            us, but we only have capacity to admit one or two at most.
        </p>
    </Section>

    <Section
        id="getting-a-job"
        header="Where can I find a CS education research job?"
    >
        <p>
            There are many places where global CS education-related jobs are
            posted:
        </p>

        <ul>
            <li
                >The #jobpostings channel on the <External
                    to="https://csforall.slack.com">CSforAll Slack</External
                >:</li
            >
            <li
                >The <External to="https://cra.org/ads/"
                    >CRA Jobs website</External
                ></li
            >
            <li
                >The <External
                    to="https://sigcse.org/sigcse/membership/mailing-lists.html"
                    >SIGCSE-jobs mailing list</External
                ></li
            >
            <li
                >The <External to="https://www.higheredjobs.com"
                    >Higher Ed Jobs</External
                ></li
            >
            <li><External to="https://www.edjoin.org">EdJoin</External></li>
            <li>@CSFacultyJobs on Twitter.</li>
            <li
                >Evan Peck maintains a list of <External
                    to="https://cs-pui.github.io/"
                    >CS faculty postings from "PUIs"</External
                > (primarily undergraduate institutions).</li
            >
            <li
                >Many organizations, including non-universities, hire postdocs
                (e.g., Quinn Burke at <External
                    to="https://digitalpromise.org/our-team/quinn-burke/"
                    >Digital Promise</External
                >, has hired postdocs and consultants)</li
            >
        </ul>

        <p>
            Monitor those closely for opportunities. The field is growing, but
            in unconventional ways: there are tenure-track positions,
            teaching-track positions, professor of practice positions, postdocs,
            research and development positions in not-for-profits, and much,
            much more.
        </p>
    </Section>

    <Section id="funding-for-cer" header="Is there funding for CER?">
        <p>
            Yes! At least in the U.S., Ph.D. students are generally funded by
            the research grants their advisors obtain, and can also receive NSF
            Graduate Research Fellowships, which cover three years of tuition
            and stipend. Undergraduates can participate in NSF-sponsored
            Research Experience for Undergraduate projects that faculty sponsor.
            CER faculty can also apply for NSF CAREER grants on computing
            education research, or an <External
                to="http://www.nsf.gov/pubs/2015/nsf15569/nsf15569.htm"
                >NSF Research Initiation Initiative</External
            > for new faculty. Most Ph.D. granting institutions also offer teaching
            assistantships. In the United States, there are also regularly programs
            that fund CER. This changes frequently, but here is a current snapshot
            as of 2016:
        </p>

        <ul>
            <li
                ><External
                    to="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=505359"
                    >NSF CS for All</External
                >. Funds basic research on CS education as well as
                researcher-practitioner partnerships focused on building K-12 CS
                education capacity, access, participation, and engagement.</li
            >
            <li
                ><External
                    to="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=505082"
                    >NSF IUSE</External
                >. Funds programs that improve the quality of and access to STEM
                education in undergraduate programs. Does not directly fund
                basic research.</li
            >
            <li
                ><External to="https://www.nsf.gov/div/index.jsp?div=DUE"
                    >NSF DUE</External
                >. Funds innovations in STEM education at 2- and 4-year
                colleges.</li
            >
            <li
                ><External
                    to="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=5467"
                    >NSF ITEST</External
                >. Funds programs that broaden participation in STEM. Does not
                directly fund basic research.</li
            >
            <li
                ><External
                    to="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=500047"
                    >NSF DRK-12</External
                >. Funds projects that enhance the quality of and access to STEM
                education in K-12, including basic research.</li
            >
            <li
                ><External
                    to="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=504984"
                    >NSF RETTL</External
                >. Funds projects on Emerging Technologies for Teaching and
                Learning, including intelligent tutors, computer-based
                instruction, computational tools for learning, etc.</li
            >
            <li
                ><External
                    to="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=504924"
                    >NSF EHR CORE Research</External
                >. Funds basic education research. Not CS specific, but it has
                separate tracks within its reviewing structure for CS and
                engineering.</li
            >
        </ul>
    </Section>

    <Section
        id="being-impactful"
        header="What do I need to know to be an effective, impactful computing education researcher?"
    >
        <p>
            First, you need to know some computing yourself. That doesn't mean
            you need an entire computer science degree, but it helps to have
            learned to code a bit, and to understand what an algorithm and a
            data structure is. It can also help to understand the culture of
            computer science as an academic discipline. Taking the first few
            introductory courses in a CS department is usually enough to provide
            this content knowledge foundation, unless you want to do research on
            the teaching of more advanced topics in CS.
        </p>

        <p>
            Beyond that, there is a substantial prior work to learn before you
            can make original discoveries. I've organized some of the major
            works into categories below, to focus your reading.
        </p>

        <h4 id="foundations">Education research foundations</h4>

        <p>
            As computing education research is a discipline-based kind of
            education research, foundations in education research are key. Below
            are essential works for conducting research on learning and
            teaching:
        </p>

        <ul>
            <li
                ><External
                    to="http://www.nap.edu/catalog/9853/how-people-learn-brain-mind-experience-and-school-expanded-edition"
                    >How People Learn: Brain, Mind, Experience, and School</External
                > and <External
                    to="https://www.nap.edu/catalog/24783/how-people-learn-ii-learners-contexts-and-cultures"
                    >How People Learn II: Learners, Contexts, and Cultures</External
                > provide an essential foundation in the major discoveries and theories
                of learning sciences and education research. Anyone doing research
                on learning should know everything in these books.</li
            >
            <li
                ><External
                    to="https://www.routledge.com/Power-and-Privilege-in-the-Learning-Sciences-Critical-and-Sociocultural/Esmonde-Booker/p/book/9781138922631"
                    >Power and Privilege in the Learning Sciences: Critical and
                    Socialcultural Theories of Learning</External
                > presents foundational theories of learning that powerfully shape
                who learns.</li
            >
            <li
                ><External to="https://www.palgrave.com/gp/book/9783030058999"
                    >Research Methods for Social Justice and Equity in Education</External
                > presents key methods for conducting education research in equitable
                ways, but also about equity and justice.</li
            >
        </ul>

        <h4 id="race">Race and Technology</h4>

        <p>
            While not specifically about computing education, these books
            critically examine the role of computing in justice. The ideas in
            these books are key to understanding the social implications of
            computing on society. I focus on race in particular because race, at
            least in the United States, has structured injustice more heavily
            than all other social categories, making it critical to
            understanding the effects of computing.
        </p>

        <ul>
            <li>
                <External
                    to="https://www.ruhabenjamin.com/race-after-technology"
                    >Race After Technology</External
                > examines how racism is embedded in software and the role of computer
                scientists and the software industry in reinforcing racism.
            </li>
            <li>
                <External
                    to="https://www.amazon.com/Black-Software-Internet-Justice-AfroNet/dp/0190863846"
                    >Black Software: The Internet and Racial Justice, from the
                    AfroNet to Black Lives Matter</External
                > explores the long history of racial justice movements organized
                online and how the impact of their innovations have been erased with
                false narratives social media company innovation.
            </li>
        </ul>

        <h4 id="literature-reviews">CER literature reviews</h4>

        <p>
            These works summarize bodies of knowledge in computing education
            research, helping you to more quickly learn what the field has
            discovered. All of these are essential reading.
        </p>

        <ul>
            <li
                ><External
                    to="https://www.amazon.com/dp/B07N45TH9R/ref=dp-kindle-redirect?_encoding=UTF8&amp;btkr=1"
                    >The Cambridge Handbook of Computing Education Research</External
                > is a carefully edited synthesis of all of the major discoveries
                in computing education research since its beginning as a field 50
                years ago up until 2018. I authored several chapters along with more
                than a dozen other leading researchers with the goal of creating
                the definitive introduction to the field. It is reflective of prior
                work, for better or worse, going deeply into pedagogy, but only briefly
                (but elegantly) addressing issues of racism, sexism, and inclusion.
                Therefore, it should not be viewed as a vision for the future of
                the field, but rather a reflection of its past.</li
            >
            <li
                ><External
                    to="https://www.morganclaypool.com/doi/abs/10.2200/S00684ED1V01Y201511HCI033"
                    >Learner-Centered Design of Computing Education: Research on
                    Computing for Everyone</External
                > is a wonderful synthesis of computing education research, with
                a focus on pedagogy for anyone learning computing, rather than just
                computer science students.</li
            >
            <li
                ><External
                    to="https://journals.sagepub.com/doi/abs/10.3102/0013189x12463051"
                    >Computational Thinking in K-12 A Review of the State of the
                    Field</External
                > examines the state of discourse about "Computational Thinking",
                a contested idea that has spread broadly throughout K-12 CS education,
                despite its questionable soundness as an idea.</li
            >
            <li
                ><External to="https://doi.org/10.1145/3293881.3295779"
                    >Introductory programming: a systematic literature review</External
                >. The result of an ITiCSE working group, analyzes the
                literature along many facets: students, teachings, the
                curriculum, and assessment, and surfacing directions for future
                research.</li
            >
            <li
                ><External to="http://dl.acm.org/citation.cfm?id=1345441"
                    >A survey of literature on the teaching of introductory
                    programming</External
                > summarizes papers on classroom instruction in introductory programming
                courses in higher education.</li
            >
            <li
                ><External to="http://dl.acm.org/citation.cfm?id=1113893"
                    >Constructing a core literature for computing education
                    research</External
                > presents an appendix of impactful papers published before 2005.</li
            >
            <li
                ><External to="https://dl.acm.org/citation.cfm?id=3077618"
                    >Misconceptions in programming</External
                > is a great review of the broad literature on misconceptions that
                people form about programming languages.</li
            >
            <li
                ><External to="https://dl.acm.org/doi/10.1145/1089733.1089734"
                    >Lowering the Barriers to Programming: A Taxonomy of
                    Programming Environments and Languages for Novice
                    Programmers</External
                > surveys hundreds of programming languages and environments intended
                to support learning to code. There have been many more since its
                publishing in 2005, but before ever inventing one of your own, it's
                important to know what's been invented already.</li
            >
            <li
                ><External to="http://dl.acm.org/citation.cfm?id=1922658"
                    >The State of the Art in End-User Software Engineering</External
                > summarizes the literature on end-user programming, which is related,
                but not the same as novice programming. It synthesizes of all of
                the programming languages, environments, and tools that have helped
                people learn to code while automating a task.</li
            >
        </ul>

        <h4 id="notable-works">Notable works</h4>

        <p>
            Everyone working in CER should have read these books and understand
            their implications for research and practice.
        </p>

        <ul>
            <li>
                <p
                    ><External
                        to="https://cacm.acm.org/blogs/blog-cacm/245710-underrepresented-minority-considered-harmful-racist-language/fulltext"
                        >'Underrepresented Minority' Considered Harmful, Racist
                        Language</External
                    > is a short blog post that discusses the terminology we use
                    when we discuss diversity in computer science.</p
                >
            </li>
            <li>
                <p
                    ><External
                        to="https://www.amazon.com/Mindstorms-Children-Computers-Powerful-Ideas/dp/0465046746"
                        >Mindstorms: Children, Computers, and Powerful Ideas</External
                    > is a classic book that envisions a theory of learning grounded
                    in the construction of knowledge through personally meaningful
                    tinkering and creation, especially with computers. I <External
                        to="https://medium.com/bits-and-behavior/mindstorms-what-did-papert-argue-and-what-does-it-mean-for-learning-and-education-c8324b58aca4"
                        >summarized the book</External
                    > in a blog post.</p
                >
            </li>
            <li>
                <p
                    ><External
                        to="https://mitpress.mit.edu/books/stuck-shallow-end"
                        >Stuck in the Shallow End: Education, Race, and
                        Computing
                    </External> illustrates the numerous racist structures, beliefs,
                    and practices in K-12 education that systematically exclude students
                    of color from CS education.</p
                >
            </li>
            <li>
                <p
                    ><External
                        to="https://mitpress.mit.edu/books/unlocking-clubhouse"
                        >Unlocking the Clubhouse: Women in Computing</External
                    > examines how the culture of higher education CS systematically
                    excludes and deters women from participating in CS education,
                    and explores promising practices for changing this culture.</p
                >
            </li>
            <li>
                <p
                    ><External to="https://www.jstor.org/stable/3174610"
                        >Epistemological Pluralism: Styles and Voices Within the
                        Computer Culture</External
                    > presents a critique of academic computing culture for is exclusion
                    of diverse interests and ways of knowing.</p
                >
            </li>
            <li>
                <p
                    ><External
                        to="https://dl.acm.org/doi/10.1145/3328778.3366792"
                        >When Twice as Good Isn't Enough: The Case for Cultural
                        Competence in Computing</External
                    > critiques CS departments for being uncritical of themselves,
                    their curricula, and the software industry, advocating for cultural
                    competence amongst faculty and students.</p
                >
            </li>
            <li>
                <p
                    ><External
                        to="https://journals.sagepub.com/doi/pdf/10.1177/0306312709334636?casa_token=IStezh3LqcEAAAAA:cI1RxK9s3T26UfH5d38aj8zO8yRTUaIEkMbQodbMgVJ-eLK3Pu9_uLGw5drx1VtVL8Kf2KVKgmVMpUM"
                        >The Intersection of Gender, Race and Cultural
                        Boundaries, or Why is Computer Science in Malaysia
                        Dominated by Women?</External
                    > examines the inherent intersectional complexity of race, gender,
                    and culture that shapes participation in computing education.</p
                >
            </li>
            <li>
                <p
                    ><External
                        to="https://dl.acm.org/doi/10.1145/2538862.2538933"
                        >They can't find us: the search for informal CS
                        education</External
                    > demonstrates how search engines, CS education terminology,
                    and culture interact to connect educated White families to informal
                    CS learning opportunities, while obscuring them from less privileged
                    families.</p
                >
            </li>
            <li>
                <p
                    ><External
                        to="https://dl.acm.org/doi/10.1145/3017680.3017755"
                        >Visions of Computer Science Education: Unpacking
                        Arguments for and Projected Impacts of CS4All
                        Initiatives</External
                    > analyzes the abundance of arguments for K-12 CS for All efforts,
                    and how they intersect with varying political ideologies.</p
                >
            </li>
            <li>
                <p
                    ><External
                        to="https://dl.acm.org/citation.cfm?doid=3230977.3230992"
                        >On Theory Use in Computing Education Research</External
                    > examines the use of theory in computing education and how it
                    is often weaponized to prevent the publication of new ideas.</p
                >
            </li>
            <li>
                <p
                    ><External
                        to="https://hepgjournals.org/doi/abs/10.17763/1943-5045-88.1.26"
                        >Ethics, Identity, and Political Vision: Toward a
                        Justice-Centered Approach to Equity in Computer Science
                        Education</External
                    > advocates for CS education researchers and teachers to more
                    directly engage the sociopolitical context of CS education curricula
                    and teaching.</p
                >
            </li>
            <li>
                <p
                    ><External
                        to="https://dl.acm.org/doi/abs/10.1145/2445196.2445250"
                        >Halving fail rates using peer instruction: a study of
                        four computer science courses</External
                    > presents one of the few rigorously examined teaching methods
                    that promotes improved learning, especially for students marginalized
                    by CS education cultures.</p
                >
            </li>
            <li>
                <p
                    ><External
                        to="https://dl.acm.org/doi/abs/10.1145/1978942.1979381"
                        >African American men constructing computing identity</External
                    > examines how race, culture, and stigma can warp genuine interests
                    in computing, and how informal learning interventions can counter
                    these forces.</p
                >
            </li>
            <li>
                <p
                    ><External to="https://doi.org/10.1177%2F0042085913491219"
                        >COMPUGIRLS’ Standpoint: Culturally Responsive Computing
                        and Its Effect on Girls of Color</External
                    > illustrates the impact of culturally repsonsive computing on
                    girls of color.</p
                >
            </li>
            <li>
                <p
                    ><External
                        to="https://www.tandfonline.com/doi/abs/10.1080/10508406.2017.1307199?casa_token=-YvaFyMYanAAAAAA:VfyZ6I7V3qdbaMFnkivanvj5Z76Jg4nZ-RBnCm0fYR4hc_vkNOvwSKR_WPtj9O9OyWPd4DJOz7Cp"
                        >Digital Youth Divas: Exploring Narrative-Driven
                        Curriculum to Spark Middle School Girls’ Interest in
                        Computational Activities</External
                    > explores how to engage girls of color by centering their stories.</p
                >
            </li>
            <li>
                <p
                    ><External
                        to="https://doi.org/10.1080/10508406.2017.1307199"
                        >Becoming Technosocial Change Agents: Intersectionality
                        and Culturally Responsive Pedagogies as Vital Resources
                        for Increasing Girls’ Participation in Computing</External
                    > explores the importanc of intersectional views on culturally
                    responsive pedagogy.</p
                >
            </li>
        </ul>

        <p
            >If you've read all of the above and are looking for more
            literature, be sure to follow all of the SIGCSE conferences, and
            other relevant education and learning science journals, monitoring
            the <External to="http://acm.org/dl">ACM Digital Library</External> and
            the NSF funded website <External to="https://csedresearch.org"
                >CSEdResearch.org</External
            >, which surveys the broad expanse of CS education research,
            including article summaries and evaluation instruments.</p
        >
    </Section>

    <Section
        id="teaching-guidance"
        header="What books provide guidance on CS teaching?"
    >
        <p>
            While there are many books that provide guidance on teaching in
            general (e.g., Tools for teaching (Davis, 2009), How learning works:
            Seven research-based principles for smart teaching (Ambrose et al.,
            2010), Teaching what you don’t know (Huston, 2009), <External
                to="https://ies.ed.gov/ncee/wwc/practiceguide/1"
                >What Works Clearinghouse</External
            >), there are only a handful of books written to guide CS educators
            (alphabetically):
        </p>

        <ul>
            <li
                ><External
                    to="https://helloworld.raspberrypi.org/issues/0?fbclid=IwAR3D6RFiGvTno6VgMiMnGRXq7vJHVaIThyXH5mnB_-rYWjiPSyoiJDSyJxc"
                    >The Big Book of Computing Pedagogy</External
                > offers a collection of CS teaching practices and methods written
                by CS educators and CS education researchers.
            </li>
            <li
                ><External
                    to="https://www.amazon.com/Coding-Playground-Marina-Umaschi-Bers/dp/1138225622"
                    >Coding as a playground: Programming and computational
                    thinking in the early childhood classroom</External
                > (Bers, 2017). A review of the opportunities in teaching younger
                children to code.</li
            >
            <li
                ><External
                    to="https://mitpress.mit.edu/books/computational-thinking"
                    >Computational Thinking</External
                > (Denning &amp; Tedre, 2019). A historical introduction to computational
                thinking.</li
            >
            <li
                ><External
                    to="https://www.amazon.com/Computational-Thinking-Coding-Every-Student/dp/1506341284"
                    >Computational thinking and coding for every student</External
                > (Krauss and Prottsman, 2016). Includes strategies and activities
                for teaching computational thinking, with several lessons and annotated
                resources.</li
            >
            <li
                ><External
                    to="https://www.amazon.com/Computer-Science-K-12-possibilities-innovative/dp/1986171817"
                    >Computer Science K-12: Imagining the Possibilities!</External
                > (Bergman, 2018). Full of rich case studies, activities, projects,
                and practical guidance on organizing and managing CS classrooms.</li
            >
            <li
                ><External to="https://www.shuchigrover.com/atozk12cs/about/"
                    >Computer Science in K-12: An A-Z Handbook on Teaching
                    Programming</External
                > (Grover, 2020) includes 26 chapters featuring foundational programming
                concepts and practices, as well as well-researched pedagogies for
                teaching introductory programming. With chapter contributions from
                researchers and classroom teachers, the book shares concrete examples
                as well as abstract principles distilled from research studies and
                classroom practice along with many illustrative examples (in block-
                and text-based programming) that can be used in classrooms.</li
            >
            <li
                ><External
                    to="https://www.amazon.co.uk/Computer-Science-Teacher-computing-classroom/dp/1780173946"
                    >Computer Science Teacher: Insight Into the Computing
                    Classroom</External
                > (Clark, 2017). Focuses on secondary CS teaching and what the role
                entails, providing a rich set of case studies and quotes.</li
            >
            <li
                ><External
                    to="https://www.routledge.com/Computational-Thinking-in-Education-A-Pedagogical-Perspective/Yadav-Berthelsen/p/book/9780367610357"
                    >Computational Thinking in Education: A Pedagogical
                    Perspective</External
                > (Yadav and Berthelsen, 2022), explores the relevance of computational
                thinking in primary and secondary education, giving an overview of
                what computational thinking is and how to integrate it into learning,
                instruciton, and assessment.</li
            >
            <li
                ><External
                    to="https://www.amazon.com/Computer-Science-Education-Perspectives-Teaching/dp/1350057118"
                    >Computer Science Education: Perspectives on teaching and
                    learning in school</External
                > (Sentance et al. 2018). An edited book full of rich summaries about
                CS education research, but written less for teachers and more for
                those interested in research.</li
            >
            <li
                ><External
                    to="https://www.amazon.com/Connected-Code-Programming-Catherine-Foundation/dp/0262027755_"
                    >Connected Code: Why Children Need to Learn Programming</External
                > (Kafai et al., 2016). Argues for moving beyond computational thinking
                to computational participation, leveraging social networks and digital
                making. Discusses examples of youth participation with programmable
                toys, tools, and textiles and the ethical challenges that emerge
                in these social contexts.</li
            >
            <li
                ><External to="https://criticallyconsciouscomputing.org"
                    >Critically Conscious Computing: Methods for Secondary
                    Education</External
                > (Ko et al., 2021). A critical survey of CS and CS education foundations
                and a collection of dialogic teaching methods for promoting student
                critical consciousnes about computing and society.</li
            >
            <li
                ><External
                    to="https://www.amazon.com/Guide-Teaching-Computer-Science-Activity-Based/dp/144716069X"
                    >Guide to teaching computer science: An activity-based
                    approach</External
                > (Hazzan et al. 2015). Includes detailed learning activities, curriculum
                reviews, CS education research, lesson planning, and course design.
                Some pre-service CS teachers find the concrete examples help; others
                find it jargony and overly complex.</li
            >
            <li
                ><External
                    to="https://www.amazon.com/Invent-Learn-Tinkering-Engineering-Classroom/dp/0989151107"
                    >Invent to learn: Making, tinkering, and engineering in the
                    classroom</External
                > (Martinez and Stager, 2013). A practical guide to bringing tinkering
                into the classroom via project-based learning.</li
            >
            <li
                ><External
                    to="https://www.infoagepub.com/products/Preparing-Pre-Service-Teachers-to-Teach-Computer-Science"
                    >Preparing Pre-Service Teachers to Teach Computer Science:
                    Models, Pracitces, and Policies</External
                > (Mouza, Yadav, Ottenbreit-Leftwich, 2021). An edited volume surveying
                research on CS teacher education, offering examples for how to design
                and deliver effective teacher preparation.</li
            >
            <li
                ><External
                    to="https://www.amazon.com/Teaching-Computing-Secondary-Schools-Practical/dp/1138238066"
                    >Teaching Computing in Secondary Schools</External
                > (Lau, 2017). Offers a framework for planning and delivering CS
                curricula.</li
            >
            <li
                ><External
                    to="https://www.amazon.com/Teaching-Computing-Practitioners-Henry-Walker-ebook/dp/B07CMHSZ6T"
                    >Teaching Computing: A Practitioner's Perspective</External
                > (Walker, 2018). Full of teaching tips for higher education faculty
                teaching CS.</li
            >
            <li
                ><External to="http://teachtogether.tech/en/"
                    >Teaching tech together</External
                >. This is an informal survey of research useful for teaching
                programming. Greg put it together to help others become better
                teachers of computing.</li
            >
        </ul>

        <p>Is one missing from this list? Let me know and I'll add it.</p>
    </Section>

    <Section
        id="conferences-and-journals"
        header="What conferences and journals publish CER?"
    >
        <p>
            Most academic fields have exclusively academic venues for
            publication, with few practitioners participating in or reading the
            research that researchers produce. The CER community is unique (and
            I believe quite fortunate) in that practitioners are deeply involved
            in the academic research community (partly because most faculty
            conducting research are teachers themselves). Below I note several
            conferences and journals where you can publish computing education
            research (see SIGCSE for <External
                to="http://sigcse.org/sigcse/resources/publish"
                >a broader list</External
            >). Note that I separate the pure research venues from the venues
            that combine both research and practice since the combined venues
            are often dominated by practioners, which can make it hard to have
            focused research conversations and rigorous peer review.
        </p>

        <h4 id="research-only">Research only venues</h4>
        <ul>
            <li>
                <p
                    ><External to="http://icer.acm.org">ICER</External> (the ACM
                    International Computing Education Research conference) is the
                    only academic conference that strictly publishes research. All
                    of the reviewers who peer review submissions are trained researchers
                    with Ph.D.s. ICER tends to focus on theoretically, methodologically,
                    and empirically-rich work, advancing the science of computing
                    education. It is held around the world but is generally in North
                    America every other year.</p
                >
            </li>
            <li>
                <p
                    ><External to="http://toce.acm.org">TOCE</External> (the ACM
                    Transactions on Computing Education) publishes research, and
                    is similar in scope to ICER, but in a journal format. Like ICER,
                    the editorial board and reviewers are all trained researchers.</p
                >
            </li>
            <li>
                <p
                    ><External to="https://www.tandfonline.com/journals/ncse20"
                        >CSE</External
                    > (the Journal of Computer Science Education) publishes research
                    and is similar to TOCE and ICER in its reviewing community and
                    similar in research rigor and prestige. However, unlike TOCE
                    and ICER, publications in CSE are generally expected to have
                    more direct implications for teachers.</p
                >
            </li>
            <li>
                <p
                    ><External to="https://www.isls.org/annual-meeting/icls/"
                        >ICLS</External
                    > (the International Conference on Learning Sciences) does not
                    strictly focus on computing education, but publishes high quality
                    research on learning sciences. Accepts both qualitative and quantitative
                    work, especially of mixed methods. Also tends to focus more on
                    K-12 than the venues focusing strictly on CER.</p
                >
            </li>
            <li>
                <p
                    ><External to="https://www.tandfonline.com/journals/hlns20"
                        >JLS</External
                    > (the Journal of Learning Sciences) is one of the top education
                    research journals and expects a strong connection to learning
                    theory and mostly wants empirical work. It is not a journal that
                    publishes HCI, so work must be connected to cognition, sociocultural
                    context, or other theory, and not system design.</p
                >
            </li>
            <li>
                <p
                    ><External to="https://www.isls.org/annual-meeting/cscl/"
                        >CSCL</External
                    > (the International Conference on Computer-Supported Collaborative
                    Learning) focuses on issues related to learning through collaboration
                    and promoting productive collaborative discourse with the help
                    of the computer and other communications technologies.</p
                >
            </li>
            <li>
                <p
                    ><External to="https://ijcscl.org">IJCSCL</External> (the International
                    Journal of Computer-Supported Collaborative Learning), like CSCL,
                    focuses on learning through collaboration.</p
                >
            </li>
            <li>
                <p
                    ><External to="http://learningatscale.acm.org">L@S</External
                    > (the ACM Conference on Learning at Scale) is a computer science
                    conference that focuses on techniques for scaling instruction.
                    Some of the work published here concerns computing education,
                    but many other domains are represented as well. Often focuses
                    on MOOCs and other forms of online learning.</p
                >
            </li>
            <li>
                <p
                    ><External
                        to="https://www.computer.org/csdl/proceedings/1809604"
                        >RESPECT</External
                    > (the IEEE Conference on Research on Equity and Sustained Participation
                    in Engineering, Computing, and Technology) is a conference focused
                    on engagement, participation, and equity in STEM fields. It has
                    research and experience report tracks, and expects empirical
                    papers grounded in theory.</p
                >
            </li>
            <li>
                <p
                    ><External to="http://idc.acm.org">IDC</External> (ACM SIGCHI
                    Interaction Design and Children) is an HCI conference with a
                    focus on children, focusing on design artifacts for kids and
                    enabling kids to be designers, with a special focus on participatory
                    design as a methodology.</p
                >
            </li>
            <li>
                <p
                    ><External to="http://chi.acm.org">CHI</External> (ACM SIGCHI
                    Conference on Human Factors in Computing) is an HCI conference
                    with a focus on any aspect of interactions between people and
                    computers, including programming. As one of the largest and broadest
                    ACM conferences, it's easy for research on learning to get lost
                    here, but so does every other topic!</p
                >
            </li>
            <li>
                <p
                    ><External
                        to="https://www.aera.net/Events-Meetings/Annual-Meeting"
                        >AERA</External
                    > (the American Education Research Association conference) has
                    a division for engineering and computing education that publishes
                    papers on computational thinking.</p
                >
            </li>
            <li>
                <p
                    ><External
                        to="https://onlinelibrary.wiley.com/journal/21689830"
                        >JEE</External
                    > (the Journal of Engineering Education). High-quality but with
                    few international collaborations (like the MIMN studies in CER).
                    Occasionally has papers related to computing.</p
                >
            </li>
            <li>
                <p
                    ><External
                        to="https://ieee-edusociety.org/publication/ieee-toe"
                        >IEEE Transactions on Education</External
                    >. I know little about this journal. Feel free to share
                    opinions!</p
                >
            </li>
        </ul>

        <h4 id="research-and-practice">Research and practice venues</h4>

        <ul>
            <li
                ><External to="https://sigcse.org/events/symposia/index.html"
                    >SIGCSE</External
                > (the SIGCSE Technical Symposium on Computer Science Education)
                publishes both research and practice papers in a short format, bringing
                together researchers and teachers. This is the largest conference
                on computer science education and generally attracts teachers. There
                is a dedicated research track separate from experience reports, though
                the research track has a 6-page limit, making it unsuitable for many
                forms of research, such as qualitative work or more substantial quantitative
                work. Generally held in North America.</li
            >
            <li
                ><External to="http://iticse.acm.org">ITiCSE</External> (the Annual
                Conference on Innovation and Technology in Computer Science Education)
                publishes both research and practice papers, with a focus on practice.
                Generally held in Europe.</li
            >
            <li
                ><External to="https://www.kolicalling.fi"
                    >Koli Calling</External
                > (International Conference on Computing Education Research), held
                in Finland every year, publishes research and practice papers with
                a focus on qualitative research. A small but dedicated community.</li
            >
            <li
                ><External to="https://www.wipsce.org">WiPSCE</External> (Workshop
                in Primary and Secondary Computing Education) aims to bring together
                researchers and practitioners, and publishes both research and practice
                papers. It is generally held in Europe.</li
            >
            <li
                ><External to="https://aceconference.wordpress.com"
                    >ACE</External
                > (the Australasian Computing Education Conference) is a regional
                conference with a mix of research and practice papers, bringing together
                education researchers and practitioners. Held in Australia or New
                Zealand, but welcomes attendees from anywhere.</li
            >
            <li
                ><External to="http://www.latice-conference.org"
                    >LaTiCE</External
                > (the International Conference on Learning and Teaching in Computing
                and Engineering) publishes both research and practice papers. Held
                primarily in Asia.</li
            >
            <li
                ><External to="http://fie-conference.org">FIE</External> (the ASEE
                Frontiers in Education conference) is more broad and more practitioner
                focused than SIGCSE and occasionally has CER work.</li
            >
        </ul>
    </Section>

    <Section id="sigcse" header="What is SIGCSE?">
        <p>
            <External to="http://sigcse.org/">SIGCSE</External>, like other ACM
            Special Interest Groups (SIGs), is an organization that focuses on a
            particular topic within ACM, namely computer science education. It
            sponsors ACM conferences (e.g., the SIGCSE Technical Symposium and
            ICER) and influences their structure and focus. Note that SIGCSE the
            group organizes SIGCSE the conference. I know, it's confusing, but
            aren't you glad you read this?
        </p>
    </Section>

    <Section
        id="experience-reports"
        header="What's the difference between a research paper and an experience report?"
    >
        <p>
            This is an important question, since many of the conference venues
            in the computing education community publish both. Unfortunately,
            the community hasn't developed much clarity about the differences
            between these. The result is that many papers published in the
            SIGCSE experience report track look like research papers, and many
            of the papers published in the SIGCSE research track look like
            experience reports. What's the essential difference?
        </p>

        <p>
            In my opinion, the key distinction between research and an
            experience report is your audience, which implies your goals: are
            you writing to researchers, who aspire to build upon everything we
            know to advance theories about what we know about CS teaching and
            learning? In contrast, if you're writing to teachers, you're likely
            sharing practical knowledge, such as an interesting method you
            tried, a surprising experience, or a teaching method others might
            experiment with. The critical difference is that in research, we're
            trying to be certain that we know something, but it's okay if we
            don't know how to put that knowledge into action yet, whereas in
            practice, we're trying to learn how to teach something, even if
            we're not certain it will work. Another way to characterize the
            difference are some of the evaluation criteria. Research papers
            should be <em>novel with respect to everything we know</em>
            and <em>sound</em>, but not necessarily immediately useful.
            Experience report papers should be
            <em>novel with respect to common knowledge</em>
            (but not necessarily novel with respect to all knowledge),
            <em>useful</em>
            and <em>interesting</em>, but not necessarily sound.
        </p>

        <p>
            I believe that both are valuable in their own ways. Research allows
            us to build confidence in what we know, whereas sharing experience
            allows us to teach each other. We need both for a thriving practice
            of CS teaching and a thriving body of knowledge to inform that
            practice.
        </p>
    </Section>

    <Section
        id="blogs"
        header="How can I keep up with the latest research, practice, and policy?"
    >
        <p> There are a few excellent blogs (in alphabetical order): </p>

        <ul>
            <li
                >Mark Guzdial's <External
                    to="https://computinged.wordpress.com/"
                    >Computing Education Research</External
                > blog has been active since 2009 and contains thousands of posts
                that explain computing education research to a broader community.</li
            >
            <li
                >Felienne Hermans has a blog about <External
                    to="http://www.felienne.com/archives/category/blog"
                    >programming and inclusion</External
                >.</li
            >
            <li
                >Amy Ko's <External to="https://medium.com/bits-and-behavior"
                    >Bits &amp; Behavior</External
                > publication at Medium covers CER, software engineering, HCI, and
                broader issues in academia.</li
            >
            <li
                >Shriram Krishnamurthi's <External
                    to="https://parentheticallyspeaking.org/articles/"
                    >Parenthetically Speaking</External
                > discussions a range of topics on academia, programming languages,
                and computing education.</li
            >
            <li
                >William Lau's blog on <External
                    to="http://www.mrlaulearning.com/"
                    >CS education and teaching more broadly</External
                >.</li
            >
            <li
                ><External to="https://laurenmarg.com/leetblog/"
                    >Lauren Margulieux's blog</External
                > discusses learning sciences, discipline-based education reseach,
                and computing education.</li
            >
            <li
                >Alfred Thompson's <External to="http://blog.acthompson.net/"
                    >Computer Science Teacher</External
                > blog covers a range of computing education, research, and policy
                issues.</li
            >
        </ul>

        <p>Is this list missing you? Let me know!</p>
    </Section>

    <Section id="community" header="How can I connect with the community?">
        <p> There are several online communities to join: </p>

        <ul>
            <li
                >The ACM ICER conference maintains a Discord server. Write Amy
                Ko <External to="mailto:ajko@uw.edu">ajko@uw.edu</External> for an
                invite. It tends to be CER focused.</li
            >
            <li
                >The CS for All Consortium maintains <External
                    to="https://csforall.slack.com">a Slack team</External
                >. <External to="https://www.csforall.org/become_a_member/"
                    >Join as a member</External
                > to access it.</li
            >
            <li
                >There's a private group on Facebook called <External
                    to="https://www.facebook.com/groups/1546763215587966"
                    >Computer Science Education: Researchers and Practitioners</External
                >.</li
            >
            <li
                >Twitter is very active. Amy has a <External
                    to="https://twitter.com/i/lists/1074089287874826245"
                    >list of Computing Education researchers</External
                >.</li
            >
        </ul>
    </Section>
</div>
