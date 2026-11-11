<script lang="ts">
    import Section from '#lib/components/Section.svelte';
    import Link from '#lib/components/Link.svelte';
    import advisors from '#lib/models/advisors.ts';
    import SortableTable from '#lib/components/SortableTable.svelte';
    import Title from '#lib/components/Title.svelte';
</script>

<Title text="CER FAQ" />

<h1> This is my computing education research FAQ. </h1>

<p>
    I started it with the help of several computing education researchers at a
    Dagstuhl retreat in 2016. I consider it a community resource, so if you see
    something to add, fix, or improve, write me, or submit <Link
        to="https://github.com/amyjko/faculty/issues">an issue</Link
    > or
    <Link to="https://github.com/amyjko/faculty/pulls">pull request</Link>.
</p>

<p>
    Computing education research (CER), also known as computer science education
    (CSEd) research, is the study of how people learn and teach computing,
    broadly construed. This FAQ will teach you more about the field and how you
    might contribute to it.
</p>

<Section id="what-is-cer" header="What is computing education research?">
    <p>
        First, CER is not teaching. Teaching is helping people change their
        knowledge, skills, attitudes, beliefs, identities. Research is discovery
        and invention. Teachers teach computing, whereas computing education
        researchers make discoveries about this teaching and learning, and
        invent new ways for this teaching and learning to occur. CER is an
        example of <Link
            to="https://www.nap.edu/catalog/13362/discipline-based-education-research-understanding-and-improving-learning-in-undergraduate"
            >discipline-based education research</Link
        >, like math education research or science education research, all of
        which are part of the broader field of education and learning sciences
        research.
    </p>

    <p>
        CER is also not educational technology research (EdTech). Computing
        education researchers often create educational technologies to support
        the learning and teaching of computing, but CER is not explicitly
        concerned with the broader use of technology in learning, teaching, and
        education. It's specifically concerned with the learning and teaching of
        computing in particular. Many computer science researchers invent
        learning technologies, but are not computing education researchers,
        because those technologies are not concerned with the learning of
        computing.
    </p>

    <p>
        It's also important to note that I view "computing" broadly: it's not
        just about programming, or even just about computer science, but also
        about all of the phenomena surrounding computing, including data,
        information, privacy, security, ethics, software engineering, and
        sociocultural and sociopolitical views of computing in society. This
        means that computing education and CER can cover far more than learning
        to code, even though historically it mostly hasn't.
    </p>
</Section>

<Section
    id="csed-v-cer"
    header="What is the difference between 'CS' and 'computing'?"
>
    <p>
        CS generally refers to the historically core topics in computer science
        research, such as theory, algorithms, data structures, programming
        languages, and operating systems. But other fields began to engage these
        ideas and identify their intersections with other fields. For example,
        information science, a field long concerned with data, information, and
        society, began to consider those topics from a computer science
        perspective. Science began to apply computer science ideas to data
        capture, storage, and analysis. Biology, as it began to see DNA as a
        form of biological data, and apply algorithms to analyzing it, formed
        bioinformatics. Communication began to explore computer-mediated
        communication. Behavioral and brain scientists started using computers
        to model decisions, knowledge, and brain activity. And social scientists
        of all kinds began studying and critiquing the role of computers in
        society.
    </p>

    <p>
        This broadening of algorithms, data structures, and programming to all
        of academia put pressure on "computer science" as a phrase. Some
        universities with CS departments began to grow to teach and study all of
        these broader phenomena, leading many of them to rename themselves
        "Schools of Computing". The word "computing" was meant to refer not to
        physical hardware, but to computation itself and the many ways that it
        occurs and is organized in nature and human civilization. And thus, over
        time, CS began to connote the more narrow historical focus of CS
        foundations and Computing to the broader set of phenomena around the
        design and use of computers, including CS itself.
    </p>

    <p>
        Given that history, "CS education" generally refers to the teaching and
        learning of these historically narrow topics in CS, and "CS education
        research" to research about this teaching and learning. In contrast,
        "Computing education" generally refers to the teaching and learning of <em
            >any</em
        > aspect of the use of computers and computational ideas, and "Computing education
        research" to research about that teaching and learning. Because I'm not interested
        in the historically narrow conception of computing, and my research considers
        topics outside that narrow historical conception, I use "Computing" instead
        of "CS".
    </p>
</Section>

<Section
    id="comparison-to-other-fields"
    header="How does computing education research compare to related fields?"
>
    <p>
        My background isn't in these fields, though I do collaborate with people
        in these other communities and have learned about their differences.
        Here's the best characterization I can give:
    </p>

    <ul>
        <li>
            <strong>Education research</strong> is broadly concerned with formal systems
            of education, how to make those systems effective and just, and how to prepare
            teachers to make them effective and just. The field is interested in general
            theories of learning, education, interest development, and identity, and
            because of its focus on formal education, is often focused on youth, who
            are the dominant age demographic engaged in formal education. The phrase
            "Computing education" uses the word "education" in this same way, but
            is more broadly concerned with teaching and learning in any context (in
            principle, but often not in practice).
        </li>
        <li>
            <strong>Educational psychology</strong> is focused on learning phenomena
            in the mind, such as memory, development, intelligence, self-regulation,
            motivation, and self-concept. The field is also concerned with school
            psychologists who help students with their mental health. The field tends
            to be more quantitative than education research and learning sciences,
            following traditions of cognitive psychology. Computing education draws
            upon this field, especially in its history of cognitive theories of program
            understanding.
        </li>
        <li>
            <strong>Learning sciences</strong> emerged in the 1990s as a reaction
            to educational psychology's inattention to the setting, culture, and social
            context of learning. Combining perspectives from cognitive science, computer
            science, and design, it is, like education research, much more concerned
            with the sociocultural factors that shape learning. More than education
            research or educational psychology, it views design as a way of articulating,
            shaping, and testing theories. Because of the focus on context, in addition to being concerned
            with formal systems of education, it is also concerned with learning across
            the lifespan, at home, in families, and other settings.
        </li>
    </ul>

    <p>
        (Shayan Doroudi provides a nice <Link
            to="https://sites.google.com/uci.edu/shayan-doroudi/blog/learning-theories"
            >primer on learning theories</Link
        > and their disciplinary origins.)
    </p>

    <p>
        How does computing education fit into all of this? Like other <Link
            to="https://www.nap.edu/catalog/13362/discipline-based-education-research-understanding-and-improving-learning-in-undergraduate"
            >discipline-based education research (DBER)</Link
        > such as math and physics education, it draws upon all three of the fields
        above, using theories and ideas from those fields. However, because it is
        focused on a discipline, it is specifically concerned with the content of
        the discipline, specific methods of learning and teaching that content. In
        this sense, it is more applied, bridging foundational ideas that span any
        human learning to applied ideas specific to the learning of specific ideas
        and skills.
    </p>
</Section>

<Section
    id="major-questions"
    header="What are major research questions in CER?"
>
    <p>
        As with any research discipline, research questions can and should be
        specific. However, there are some major overarching questions in this
        field that researchers have begun to investigate, including:
    </p>

    <ul>
        <li>What is computing?</li>
        <li>What does it mean to know computing?</li>
        <li>How do people learn computing?</li>
        <li>How do teachers teach and assess computing?</li>
        <li>How does identity interact with people's learning of computing?</li>
        <li>How can people learn computing more effectively?</li>
        <li>How can teachers teach computing more effectively?</li>
        <li>How can access to computing education be improved?</li>
        <li>How can computing education be delivered equitably to all?</li>
        <li
            >How can computing education be reimagined to serve goals other than
            profit and disruption?</li
        >
        <li
            >How do systems of oppression such as racism, sexism, and ableism
            shape learning, teaching, and curricula?</li
        >
        <li>How can we implement anti-racist CS education?</li>
        <li>How can learning technologies teach computing?</li>
        <li>How does computing education affect people's lives?</li>
        <li>What are the societal costs of computing illiteracy?</li>
        <li
            >What can be taught about computing to learners of different ages?</li
        >
    </ul>

    <p>
        While the "people" in the questions above could be anyone (youth, teens,
        college students, adults, and even teachers), the history of CER has
        primarily focused on teaching students in post-secondary settings,
        because the faculty conducting research have found it easier to study
        the students they are teaching. This is changing as countries around the
        world begin to incorporate computing into all levels of school, and as
        private industry begins to create technologies and services that teach
        computing to all ages. For example, my research has investigated new
        ways to teach youth from age 8-18, as well as adults.
    </p>
</Section>

<Section
    id="exciting-discoveries"
    header="What are some exciting CER discoveries?"
>
    <p> There are so many! Examples include: </p>

    <ul>
        <li>
            The field discovered that diversity in computing education is low
            because of the narrow, exclusionary nature of computing cultures,
            not because of inherent disinterest or inability on the part of
            diverse learners (e.g., <Link
                to="https://doi.org/10.1145/543812.543836"
                >Fisher &amp; Margolis 2002</Link
            >, <Link
                to="https://mitpress.mit.edu/9780262514040/stuck-in-the-shallow-end/"
                >Margolis et al. 2008</Link
            >).
        </li>
        <li>
            The field invented contextualized computing ed pedagogy (e.g., Mark
            Guzdial's <Link to="https://doi.org/10.1145/961290.961542"
                >media computation</Link
            >), which substantially improved pass and retention rates among
            non-majors, especially women, and spread to many universities.
        </li>
        <li>
            The field built upon the earliest structured editors like the <Link
                to="https://doi.org/10.1145/358746.358755"
                >Cornell Program Synthesizer</Link
            >, eventually maturing them into block-based editing environments
            like <Link to="https://doi.org/10.1145/259963.260503">Alice</Link>, <Link
                to="https://doi.org/10.1145/1592761.1592779">Scratch</Link
            > and <Link to="https://developers.google.com/blockly/"
                >Blockly</Link
            >. These editors greatly increased engagement in computing
            education, and greatly reduced barriers to learning programming
            languages.
        </li>
        <li>
            Seymour Papert, who was broadly concerned with learning, but also
            the learning of computing, contributed constructionism, a new theory
            of learning (<Link to="https://dl.acm.org/doi/10.5555/1095592"
                >Papert 1980</Link
            >).
        </li>
        <li>
            Alan Kay, one of the earliest researchers to investigate the
            learning of computing, <Link
                to="https://worrydream.com/EarlyHistoryOfSmalltalk/"
                >built on object-oriented ideas from Simula</Link
            > to help create Smalltalk, which, along with languages such as C++,
            inspired the object-oriented programming languages and IDEs we use
            today.
        </li>
    </ul>

    <p>
        The field's recent efforts to transform STEM education through
        computing, invent rapid new forms of learning online, and devise more
        equitable ways to teach should be equally, if not more impactful.
    </p>
</Section>

<Section id="jobs" header="What jobs can computing education researchers get?">
    <p>
        Most computing education researchers are faculty in universities. Many
        of these faculty are tenure-track faculty like myself, which means a
        substantial portion of our time (~50%) is spent on scholarship. However,
        there are also many full-time instructors who find additional time to do
        research on top of their teaching. Many of the original authors at ICER
        were once members of the Bootstrapping or Scaffolding groups (led by
        Fincher, Petre, and Tenenberg), who were CS teachers that started to do
        research in their own classrooms.
    </p>
    <p>
        Not all computing education researchers are college faculty. Some work
        in industry creating educational technologies for teaching computing,
        applying their expertise to the research and design of educational
        software. Some work in non-profits, using their expertise to advocate
        for computing education in schools, while conducting research on factors
        that affect policy. Some work in school districts, helping to implement
        computing education curricula in schools, while studying and evaluating
        the effectiveness of the implementation. Others work in government,
        facilitating research funding. Others still become teachers themselves,
        both at universities and other schools.
    </p>

    <p>
        Tenure-track faculty are in the best position to make advances in the
        field because a substantial portion of their time is dedicated to
        research, but the research contributions by teaching-track faculty are
        critical, as they often bring more richly informed perspectives on the
        practice of teaching. It is possible to do research in other positions,
        but it is often outside the scope of a job. Because of this, many
        non-tenure track faculty focus their research on settings that their job
        gives them access to, which can restrict which research questions they
        can answer.
    </p>
</Section>

<Section id="becoming-a-researcher" header="How do I become a CER researcher?">
    <p>
        The most effective route is to get a Ph.D. in computing education
        research at one of the many Ph.D. granting universities in the world.
        Ph.D. students learn to conduct research over the course of multiple
        years (generally 4 to 6) under the supervision of an advisor.
    </p>

    <p>
        Undergraduate research is a key part of creating pathways to Ph.D.
        programs. Undergraduates can help accelerate research projects, and even
        lead their own projects, helping with admission to Ph.D. programs
        (especially if you publish, which demonstrates your interest and ability
        in conducting research). See the <Link
            to="https://cra.org/crae/wp-content/uploads/sites/3/2020/11/ScalingUndergradResearchReport-2.pdf"
            >CRA-E best practices guide on undergraduate CS research</Link
        > for a glimpse into how effective undergraduate research experiences should
        work.
    </p>
</Section>

<Section id="getting-a-phd" header="Where can I get a Ph.D. in CER?">
    <p>
        You need to find a university that grants Ph.D.s and has faculty who do
        research in CER on a topic that you're interested in who can advise
        Ph.D. students. The alphabetical list below contains some of the many
        faculty who advise Ph.D. students on computing education research, or
        who can serve on PhD committees. Find them online and see what kind of
        research they're doing. (This list may be out of date, as faculty
        sometimes move universities, retire, go to industry, or change research
        areas, so be sure to check their website for the latest information).
    </p>

    <p>
        One common question is whether to get a Ph.D. in a CS department, a
        College of Education, or some other kind of computing or learning
        related department, such as information schools, which are often
        concerned with computing and data literacy. Ultimately, the doctoral
        program you choose is going to shape a few things: 1) the classes you're
        required to take in the first year or two, 2) the peers you might sit
        near and talk to, 3) the faculty who might serve on your committee and
        what expertise and values they have, and 4) what resources you have to
        get particular kinds of jobs. For example, if you go to a CS Ph.D.
        program, you're going to learn about the latest research in various
        areas of CS, be surrounded by people interested in computing, but
        possibly not many interested in computing education; you'll have
        resources for getting faculty jobs in CS departments, but not really
        Colleges of Education. In contrast, if you go to a College or School of
        Education Ph.D. program, you're going to learn about the latest
        knowledge in education and learning sciences, and be surrounded by
        people passionate about learning, equity, and justice, but possibly not
        many people interested in computing. And if you go to a place like an
        information school, you'll gain new perspectives about data and
        computing, be surrounded by a radical diversity of people with interests
        that span many disciplines, but possibly one of only a few people
        interested in computing education.
    </p>

    <p>
        Because of the tradeoffs above, the best places to go are ones where
        there are advisors that share your interests, a critical mass of people
        interested in computing education, and healthy interchange between
        academic units interested in computing, learning, and data. This is
        because computing education is inherently interdisciplinary; you want
        peers and faculty that appreciate that, value that, and support that.
    </p>

    <p>
        One note about selecting advisors: their disciplinary affiliation is
        just <em>one</em> indicator of the nature of the contributions they might
        make (people in CS departments might build learning technologies, people in
        colleges of education might focus on teacher training and pedagogy), but this
        is not a perfect indicator. Look closely at researchers' recent publications;
        and if their websites seem out of date, write them to ask what they're working
        on.
    </p>

    <p>
        Another caveat: some of the faculty below have chosen their expertise
        descriptions, but others I had to extract from faculty websites.
        <strong>I've put a * next to expertise</strong> that hasn't been chosen or
        agreed to by the researcher being described. These expertise tags are also
        likely to be perpetually out of date, as researchers pursue new topics. The
        best thing to do is click on their name to visit their website and see what
        kinds of research they have published. That's the most direct indicator of
        their interests, the methods they use, and the types of contributions they
        want to make (other than just writing them and asking, which you can also
        do).
    </p>

    <SortableTable
        rows={advisors}
        label="Filter by expertise"
        sorted={0}
        columns={[
            // The list is curated in surname order, so its order is the name order.
            { label: 'Name', key: (a) => advisors.indexOf(a) },
            { label: 'Expertise', key: (a) => a[2] },
            { label: 'Unit', key: (a) => a[3] },
            { label: 'University', key: (a) => a[4] },
            { label: 'Country', key: (a) => a[5] },
        ]}
        filter={(a) => a[2]}
    >
        {#snippet row(advisor)}
            <tr>
                <td><Link to={advisor[1]}>{advisor[0]}</Link></td>
                <td>{advisor[2]}</td>
                <td>{advisor[3]}</td>
                <td>{advisor[4]}</td>
                <td>{advisor[5]}</td>
            </tr>
        {/snippet}
    </SortableTable>
</Section>

<Section
    id="doctoral-admissions"
    header="For doctoral admissions, how important is it to focus on a single research area?"
>
    <p>
        Advisors differ on the criteria they use to select candidates.
        Personally, I look for 1) experience with research, 2) passion in the
        subject of computing education, 3) the requisite skills to pursue that
        passion, and 4) an overlap with my interests. You can get experience by
        working with faculty at your own institution. That can be hard if you
        don't have faculty doing work in this area. The requisite skills depend
        a lot on the contributions you want to make. If you want to envision and
        build new learning technologies, can you code well enough to build them?
        If you want to investigate new teacher training methods, do you have
        teaching experience? If you want to do more theoretical work, how strong
        are your writing and analytical skills? All of these skills end up being
        important in some way to participating in CER discourse, just to varying
        degrees.
    </p>

    <p>
        Working specifically in computing education isn't necessary to achieve
        the above. Perhaps you have undergraduate research experience in HCI,
        software engineering, or programming languages. That can be fine, as
        long as your passion is clear and the skills you have align with the
        questions you want to answer. Researchers are always investigating new
        questions, so it's perfectly normal to have experience from other
        related areas of computing and information science.
    </p>

    <p>
        Of course, even if you meet all of the criteria above (or other criteria
        that other advisors might have), you might not get accepted. That's
        because doctoral advising is extremely time-intensive: we commit to
        advise people for anywhere from 3-6 years or more, and so we can only
        take on so many students at a time. There might be a dozen people who
        apply to work with one of us, but we only have capacity to admit one or
        two at most.
    </p>
</Section>

<Section id="getting-a-job" header="Where can I find a CER job?">
    <p>
        There are many places where global CS education-related jobs are posted:
    </p>

    <ul>
        <li>The <Link to="https://cra.org/ads/">CRA Jobs website</Link></li>
        <li
            >The <Link to="https://sigcse.org/membership/mailing-lists.html"
                >SIGCSE-jobs mailing list</Link
            ></li
        >
        <li
            >The <Link to="https://www.higheredjobs.com">Higher Ed Jobs</Link
            ></li
        >
        <li><Link to="https://www.edjoin.org">EdJoin</Link></li>
        <li
            >Evan Peck maintains a list of <Link to="https://cs-pui.github.io/"
                >CS faculty postings from "PUIs"</Link
            > (primarily undergraduate institutions).</li
        >
        <li
            >Many organizations, including non-universities, hire postdocs
            (e.g., Quinn Burke at <Link
                to="https://digitalpromise.org/about/our-team/"
                >Digital Promise</Link
            > has hired postdocs and consultants).</li
        >
    </ul>

    <p>
        Monitor those closely for opportunities. The field is growing, but in
        unconventional ways: there are tenure-track positions, teaching-track
        positions, professor of practice positions, postdocs, research and
        development positions in not-for-profits, and much, much more.
    </p>
</Section>

<Section id="funding-for-cer" header="Is there funding for CER?">
    <p>
        Yes, though U.S. federal funding for education research has been
        volatile since 2025, when NSF terminated many education grants and
        reorganized its STEM Education directorate, so check each program's
        page for its current status. In the U.S., Ph.D. students are generally
        funded by their advisors' research grants and by teaching
        assistantships. They can also apply for <Link
            to="https://www.nsf.gov/funding/opportunities/grfp-nsf-graduate-research-fellowship-program/nsf26-526/solicitation"
            >NSF Graduate Research Fellowships</Link
        >, which provide three years of stipend and cost-of-education support
        within a five-year period. As of the fall 2026 competition, STEM
        education is not an eligible GRFP field, so CER applicants must apply
        under another field, such as Computer and Information Sciences and
        Engineering.
        Undergraduates can join NSF <Link
            to="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=5517"
            >Research Experiences for Undergraduates (REU)</Link
        > sites that faculty run, and CER faculty can apply for <Link
            to="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=503214"
            >NSF CAREER</Link
        > awards. Here is a snapshot of programs that fund CER as of November 2026:
    </p>

    <ul>
        <li
            ><Link
                to="https://www.nsf.gov/funding/opportunities/stem-k-12-nsf-stem-k-12/nsf25-545/solicitation"
                >NSF STEM K-12</Link
            >. Funds fundamental, applied, and translational research on PreK-12
            STEM education, including computer science. It succeeds the
            now-archived CSforAll and DRK-12 programs.</li
        >
        <li
            ><Link to="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=505082"
                >NSF IUSE: EDU</Link
            >. Funds evidence-based and knowledge-generating projects that
            improve undergraduate STEM education.</li
        >
        <li
            ><Link to="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=504924"
                >NSF EDU Core Research (ECR:Core)</Link
            >. Funds fundamental STEM education research. Not CS specific, and
            as of 2026, limited to undergraduate, graduate, and workforce
            settings.</li
        >
        <li
            ><Link to="https://www.nsf.gov/funding/pgm_summ.jsp?pims_id=504984"
                >NSF RITEL</Link
            > (Research on Innovative Technologies for Enhanced Learning). Funds
            research on emerging technologies for teaching and learning, such as
            AI, robotics, and immersive technologies. Co-funded by several
            directorates, including EDU and CISE. No upcoming deadline is
            currently posted.</li
        >
        <li
            ><Link
                to="https://www.nsf.gov/funding/opportunities/itest-innovative-technology-experiences-students-teachers"
                >NSF ITEST</Link
            >. An applied research and development program on technology-rich
            STEM learning experiences. Currently awaiting a new solicitation.</li
        >
        <li
            ><Link to="https://sigcse.org/programs/special/"
                >ACM SIGCSE Special Projects Grants</Link
            >. Small grants (up to $5,000) for computing education projects.</li
        >
        <li
            ><Link to="https://www.spencer.org/">Spencer Foundation</Link>.
            Funds education research grants. Not CS specific.</li
        >
    </ul>
</Section>

<Section id="being-impactful" header="What are key works to know about?">
    <p>
        First, you need to know some computing yourself. That doesn't mean you
        need an entire computer science degree, but it helps to have learned to
        code a bit, and to understand what an algorithm and a data structure is.
        It can also help to understand the culture of computer science as an
        academic discipline. Taking the first few introductory courses in a CS
        department is usually enough to provide this content knowledge
        foundation, unless you want to do research on the teaching of more
        advanced topics in CS.
    </p>

    <p>
        Another thing to know is what makes good computing education research.
        One guide is to read peer review criteria. For example, ACM TOCE
        maintains and evolves a list of <Link
            to="https://github.com/acm-toce/documentation/wiki/Reviewing-Criteria"
            >nuanced and pluralist peer review criteria</Link
        > that cover many kinds of research.
    </p>

    <p>
        Beyond that, there is a substantial body of prior work to learn before you can
        make original discoveries. I've organized some of the major works into
        categories below, to focus your reading.
    </p>

    <h4 id="foundations">Education research foundations</h4>

    <p>
        As computing education research is a discipline-based kind of education
        research, foundations in education research are key. Below are essential
        works for conducting research on learning and teaching:
    </p>

    <ul>
        <li
            ><Link
                to="https://www.nap.edu/catalog/9853/how-people-learn-brain-mind-experience-and-school-expanded-edition"
                >How People Learn: Brain, Mind, Experience, and School</Link
            > and <Link
                to="https://www.nap.edu/catalog/24783/how-people-learn-ii-learners-contexts-and-cultures"
                >How People Learn II: Learners, Contexts, and Cultures</Link
            > provide an essential foundation in the major discoveries and theories
            of learning sciences and education research. Anyone doing research on
            learning should know everything in these books.</li
        >
        <li
            ><Link
                to="https://www.routledge.com/Power-and-Privilege-in-the-Learning-Sciences-Critical-and-Sociocultural/Esmonde-Booker/p/book/9781138922631"
                >Power and Privilege in the Learning Sciences: Critical and
                Sociocultural Theories of Learning</Link
            > presents foundational theories of learning that powerfully shape who
            learns.</li
        >
        <li
            ><Link to="https://www.palgrave.com/gp/book/9783030058999"
                >Research Methods for Social Justice and Equity in Education</Link
            > presents key methods both for conducting education research equitably
            and for researching equity and justice.</li
        >
        <li
            ><Link
                to="https://uk.sagepub.com/en-gb/eur/successful-qualitative-research/book233059"
                >Successful qualitative research</Link
            > discusses foundational methods for qualitative methods and thematic
            analysis in particular, a key approach to qualitative data analysis frequently
            used in computing education. A good companion to this is Padiyath and
            Nelson-Fromm's <Link to="https://doi.org/10.1145/3770762.3772512"
                >reflection on thematic analysis</Link
            >, which dispels some common misuses and misunderstandings about
            interpretative epistemic frames.</li
        >
        <li
            >There are also several notable commentaries on tensions between
            qualitative and quantitative data, including Hammer and Berland's
            arguments about <Link
                to="https://doi.org/10.1080/10508406.2013.802652"
                >qualitative coding as generating claims</Link
            >, McDonald et al's guidelines for <Link
                to="https://doi.org/10.1145/3359174"
                >inter-rater reliability practices</Link
            >, Soden, et al's guide for how to <Link
                to="https://doi.org/10.1145/3633200"
                >evaluate interpretive research</Link
            >, and Chi's classic guide for <Link
                to="https://doi.org/10.1207/s15327809jls0603_1"
                >quantifying verbal data</Link
            >.
        </li>
        <li
            >For any scholars marginalized in CS or society more broadly, and
            studying marginalization, a must read is <Link
                to="https://journals.sagepub.com/doi/full/10.1177/0038038520904918"
                >A Methodology for the Marginalized</Link
            >. It deconstructs the complex dynamics of managing secondary
            trauma.</li
        >
    </ul>

    <h4 id="race">Race and Technology</h4>

    <p>
        While not specifically about computing education, these books critically
        examine the role of computing in justice. The ideas in these books are
        key to understanding the social implications of computing on society. I
        focus on race in particular because race, at least in the United States,
        has structured injustice more heavily than all other social categories,
        making it critical to understanding the effects of computing.
    </p>

    <ul>
        <li>
            <Link to="https://www.ruhabenjamin.com/race-after-technology"
                >Race After Technology</Link
            > examines how racism is embedded in software and the role of computer
            scientists and the software industry in reinforcing racism.
        </li>
        <li>
            <Link
                to="https://www.amazon.com/Black-Software-Internet-Justice-AfroNet/dp/0190863846"
                >Black Software: The Internet and Racial Justice, from the
                AfroNet to Black Lives Matter</Link
            > explores the long history of racial justice movements organized online
            and how the impact of their innovations has been erased by false narratives
            of social media company innovation.
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
            ><Link
                to="https://www.amazon.com/dp/B07N45TH9R/ref=dp-kindle-redirect?_encoding=UTF8&amp;btkr=1"
                >The Cambridge Handbook of Computing Education Research</Link
            > is a carefully edited synthesis of all of the major discoveries in computing
            education research since its beginning as a field 50 years ago up until
            2018. I authored several chapters along with more than a dozen other leading
            researchers with the goal of creating the definitive introduction to the
            field. It is reflective of prior work, for better or worse, going deeply
            into pedagogy, but only briefly (but elegantly) addressing issues of racism,
            sexism, and inclusion. Therefore, it should not be viewed as a vision
            for the future of the field, but rather a reflection of its past.</li
        >
        <li
            ><Link
                to="https://doi.org/10.1007/978-3-031-02216-6"
                >Learner-Centered Design of Computing Education: Research on
                Computing for Everyone</Link
            > is a wonderful synthesis of computing education research, with a focus
            on pedagogy for anyone learning computing, rather than just computer science
            students.</li
        >
        <li
            ><Link
                to="https://journals.sagepub.com/doi/abs/10.3102/0013189x12463051"
                >Computational Thinking in K-12: A Review of the State of the
                Field</Link
            > examines the state of discourse about "Computational Thinking", a contested
            idea that has spread broadly throughout K-12 CS education, despite its
            questionable soundness as an idea.</li
        >
        <li
            ><Link to="https://doi.org/10.1145/3293881.3295779"
                >Introductory programming: a systematic literature review</Link
            >. The result of an ITiCSE working group, it analyzes the literature
            along many facets (students, teaching, the curriculum, and
            assessment) and surfaces directions for future research.</li
        >
        <li
            ><Link to="https://doi.org/10.1145/1345443.1345441"
                >A survey of literature on the teaching of introductory
                programming</Link
            > summarizes papers on classroom instruction in introductory programming
            courses in higher education.</li
        >
        <li
            ><Link to="https://doi.org/10.1145/1113847.1113893"
                >Constructing a core literature for computing education research</Link
            > identifies a core set of influential papers published before 2005.</li
        >
        <li
            ><Link to="https://doi.org/10.1145/3077618"
                >Students' Misconceptions and Other Difficulties in Introductory
                Programming: A Literature Review</Link
            > is a great review of the broad literature on misconceptions that people
            form about programming languages.</li
        >
        <li
            ><Link to="https://dl.acm.org/doi/10.1145/1089733.1089734"
                >Lowering the Barriers to Programming: A Taxonomy of Programming
                Environments and Languages for Novice Programmers</Link
            > surveys hundreds of programming languages and environments intended
            to support learning to code. There have been many more since its publishing
            in 2005, but before ever inventing one of your own, it's important to
            know what's been invented already.</li
        >
        <li
            ><Link to="https://doi.org/10.1145/1922649.1922658"
                >The State of the Art in End-User Software Engineering</Link
            > summarizes the literature on end-user programming, which is related,
            but not the same as novice programming. It synthesizes all of the programming
            languages, environments, and tools that have helped people learn to code
            while automating a task.</li
        >
    </ul>

    <h4 id="ai-ed-tech">Learning technologies (including AI)</h4>

    <p>
        Computing education research is a field that is particularly interested
        in applying computing to the learning of computing. That broader
        enterprise of learning technologies research is a separate field, but it
        has much to teach us about learning about computing. I curate articles
        from the field that I think have something to teach us about computing
        education in particular.
    </p>

    <ul>
        <li
            ><Link
                to="https://doi.org/10.3102/0013189X261466234"
                >Refusing Educational Technology: Artificial Intelligence,
                Inequity, and the Problem of Critical Optimism</Link
            > examines the history and political economy of learning technologies
            to examine what range of possible responses to generative AI in schools
            are possible. It advocates for including refusal of many forms among them.</li
        >
    </ul>

    <h4 id="notable-works">Notable works</h4>

    <p>
        Everyone working in CER should have read these works and understand
        their implications for research and practice.
    </p>

    <ul>
        <li>
            <p
                ><Link
                    to="https://cacm.acm.org/blogs/blog-cacm/245710-underrepresented-minority-considered-harmful-racist-language/fulltext"
                    >'Underrepresented Minority' Considered Harmful, Racist
                    Language</Link
                > is a short blog post that discusses the terminology we use when
                we discuss diversity in computer science.</p
            >
        </li>
        <li>
            <p
                ><Link
                    to="https://www.amazon.com/Mindstorms-Children-Computers-Powerful-Ideas/dp/0465046746"
                    >Mindstorms: Children, Computers, and Powerful Ideas</Link
                > is a classic book that envisions a theory of learning grounded in
                the construction of knowledge through personally meaningful tinkering
                and creation, especially with computers. I <Link
                    to="https://medium.com/bits-and-behavior/mindstorms-what-did-papert-argue-and-what-does-it-mean-for-learning-and-education-c8324b58aca4"
                    >summarized the book</Link
                > in a blog post.</p
            >
        </li>
        <li>
            <p
                ><Link
                    to="https://mitpress.mit.edu/9780262514040/stuck-in-the-shallow-end/"
                    >Stuck in the Shallow End: Education, Race, and Computing
                </Link> illustrates the numerous racist structures, beliefs, and practices
                in K-12 education that systematically exclude students of color from
                CS education.</p
            >
        </li>
        <li>
            <p
                ><Link
                    to="https://mitpress.mit.edu/9780262632690/unlocking-the-clubhouse/"
                    >Unlocking the Clubhouse: Women in Computing</Link
                > examines how the culture of higher education CS systematically excludes
                and deters women from participating in CS education, and explores
                promising practices for changing this culture.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://www.jstor.org/stable/3174610"
                    >Epistemological Pluralism: Styles and Voices Within the
                    Computer Culture</Link
                > presents a critique of academic computing culture for its exclusion
                of diverse interests and ways of knowing.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://dl.acm.org/doi/10.1145/3328778.3366792"
                    >When Twice as Good Isn't Enough: The Case for Cultural
                    Competence in Computing</Link
                > critiques CS departments for being uncritical of themselves, their
                curricula, and the software industry, advocating for cultural competence
                amongst faculty and students.</p
            >
        </li>
        <li>
            <p
                ><Link
                    to="https://doi.org/10.1177/0306312709334636"
                    >The Intersection of Gender, Race and Cultural Boundaries,
                    or Why is Computer Science in Malaysia Dominated by Women?</Link
                > examines the inherent intersectional complexity of race, gender,
                and culture that shapes participation in computing education.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://dl.acm.org/doi/10.1145/2538862.2538933"
                    >They can't find us: the search for informal CS education</Link
                > demonstrates how search engines, CS education terminology, and culture
                interact to connect educated White families to informal CS learning
                opportunities, while obscuring them from less privileged families.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://dl.acm.org/doi/10.1145/3017680.3017755"
                    >Visions of Computer Science Education: Unpacking Arguments
                    for and Projected Impacts of CS4All Initiatives</Link
                > analyzes the abundance of arguments for K-12 CS for All efforts,
                and how they intersect with varying political ideologies.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://doi.org/10.1145/3230977.3230992"
                    >On Use of Theory in Computing Education Research</Link
                > examines the use of theory in computing education and how it is
                often weaponized to prevent the publication of new ideas.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://doi.org/10.17763/1943-5045-88.1.26"
                    >Ethics, Identity, and Political Vision: Toward a
                    Justice-Centered Approach to Equity in Computer Science
                    Education</Link
                > advocates for CS education researchers and teachers to more directly
                engage the sociopolitical context of CS education curricula and teaching.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://dl.acm.org/doi/abs/10.1145/2445196.2445250"
                    >Halving fail rates using peer instruction: a study of four
                    computer science courses</Link
                > presents one of the few rigorously examined teaching methods that
                promotes improved learning, especially for students marginalized by
                CS education cultures.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://dl.acm.org/doi/abs/10.1145/1978942.1979381"
                    >African American men constructing computing identity</Link
                > examines how race, culture, and stigma can warp genuine interests
                in computing, and how informal learning interventions can counter
                these forces.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://doi.org/10.1177%2F0042085913491219"
                    >COMPUGIRLS’ Standpoint: Culturally Responsive Computing and
                    Its Effect on Girls of Color</Link
                > illustrates the impact of culturally responsive computing on girls
                of color.</p
            >
        </li>
        <li>
            <p
                ><Link
                    to="https://doi.org/10.1080/10508406.2017.1307199"
                    >Digital Youth Divas: Exploring Narrative-Driven Curriculum
                    to Spark Middle School Girls’ Interest in Computational
                    Activities</Link
                > explores how to engage girls of color by centering their stories.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://doi.org/10.1111/aeq.12197"
                    >Becoming Technosocial Change Agents: Intersectionality and
                    Culturally Responsive Pedagogies as Vital Resources for
                    Increasing Girls’ Participation in Computing</Link
                > explores the importance of intersectional views on culturally responsive
                pedagogy.</p
            >
        </li>
    </ul>

    <h4 id="frameworks">Frameworks</h4>

    <p
        >There are several frameworks that both synthesize and guide CS
        education research and practice.</p
    >

    <ul>
        <li>
            <p
                >The Kapor Center's <Link
                    to="https://www.kaporcenter.org/culturally-responsive-sustaining-computer-science-education-a-framework/"
                    >Culturally Responsive and Sustaining Computer Science
                    Education Framework</Link
                >. This framework offers an equity and identity inclusive take
                on what people should know about computer science.</p
            >
        </li>
        <li>
            <p
                >The Kapor Foundation's <Link
                    to="https://kaporfoundation.org/justicecs/"
                    >Responsible AI and Tech Justice for K12 Education</Link
                >. This framework offers an equity-centered organization of key
                concepts and competencies for navigating generative AI in life
                and society.</p
            >
        </li>
        <li>
            <p>
                CSTA's <Link to="https://csteachers.org/pk12standards/"
                    >2026 PK-12 Computer Science Standards</Link
                >. These research-informed standards are the foundation for many
                states' and countries' school learning standards.
            </p>
        </li>
    </ul>

    <p
        >If you've read all of the above and are looking for more literature, be
        sure to follow all of the SIGCSE conferences, and other relevant
        education and learning science journals, monitoring the <Link
            to="https://dl.acm.org">ACM Digital Library</Link
        > and the NSF-supported <Link to="https://iacomputinged.org/articles/"
            >CSEdResearch.org</Link
        > resources from the Institute for Advancing Computing Education, which
        survey the broad expanse of CS education research, including article
        summaries and evaluation instruments.</p
    >
</Section>

<Section
    id="teaching-guidance"
    header="What books provide guidance on CS teaching?"
>
    <p>
        While there are many books that provide guidance on teaching in general
        (e.g., Tools for teaching (Davis, 2009), How learning works: Seven
        research-based principles for smart teaching (Ambrose et al., 2010),
        Teaching what you don’t know (Huston, 2009), <Link
            to="https://ies.ed.gov/ncee/wwc/practiceguide/1"
            >What Works Clearinghouse</Link
        >), there are only a handful of books written to guide CS educators
        (alphabetically):
    </p>

    <ul>
        <li
            ><Link
                to="https://www.raspberrypi.org/hello-world/issues/the-big-book-of-computing-pedagogy"
                >The Big Book of Computing Pedagogy</Link
            > (Raspberry Pi Foundation, 2021). A collection of CS teaching practices
            and methods written by CS educators and CS education researchers.</li
        >
        <li
            ><Link
                to="https://www.amazon.com/Code-Every-Class-Kevin-Brookhouser/dp/1945167211"
                >Code in Every Class</Link
            > (Brookhouser and Megnin, 2017).</li
        >
        <li
            ><Link
                to="https://www.amazon.com/Coding-Playground-Marina-Umaschi-Bers/dp/1138225622"
                >Coding as a playground: Programming and computational thinking
                in the early childhood classroom</Link
            > (Bers, 2017). A review of the opportunities in teaching younger children
            to code.</li
        >
        <li
            ><Link to="https://mitpress.mit.edu/books/computational-thinking"
                >Computational Thinking</Link
            > (Denning &amp; Tedre, 2019). A historical introduction to computational
            thinking.</li
        >
        <li
            ><Link
                to="https://www.amazon.com/Computational-Thinking-Coding-Every-Student/dp/1506341284"
                >Computational thinking and coding for every student</Link
            > (Krauss and Prottsman, 2016). Includes strategies and activities for
            teaching computational thinking, with several lessons and annotated resources.</li
        >
        <li
            ><Link
                to="https://www.routledge.com/Computational-Thinking-in-Education-A-Pedagogical-Perspective/Yadav-Berthelsen/p/book/9780367610357"
                >Computational Thinking in Education: A Pedagogical Perspective</Link
            > (Yadav and Berthelsen, 2022). Explores the relevance of computational
            thinking in primary and secondary education, giving an overview of what
            computational thinking is and how to integrate it into learning, instruction,
            and assessment.</li
        >
        <li
            ><Link
                to="https://www.amazon.com/Computer-Science-Education-Perspectives-Teaching/dp/1350057118"
                >Computer Science Education: Perspectives on teaching and
                learning in school</Link
            > (Sentance et al. 2018). An edited book full of rich summaries about
            CS education research, but written less for teachers and more for those
            interested in research.</li
        >
        <li
            ><Link to="https://csa2z.com"
                >Computer Science in K-12: An A-Z Handbook on Teaching
                Programming</Link
            > (Grover, Ed., 2020). Includes 26 chapters featuring foundational programming
            concepts and practices, as well as well-researched pedagogies for teaching
            introductory programming. With chapter contributions from researchers
            and classroom teachers, the book shares concrete examples as well as abstract
            principles distilled from research studies and classroom practice along
            with many illustrative examples (in block- and text-based programming)
            that can be used in classrooms.</li
        >
        <li
            ><Link
                to="https://www.amazon.com/Computer-Science-K-12-possibilities-innovative/dp/1986171817"
                >Computer Science K-12: Imagining the Possibilities!</Link
            > (Bergman, 2018). Full of rich case studies, activities, projects, and
            practical guidance on organizing and managing CS classrooms.</li
        >
        <li
            ><Link
                to="https://www.amazon.co.uk/Computer-Science-Teacher-computing-classroom/dp/1780173946"
                >Computer Science Teacher: Insight Into the Computing Classroom</Link
            > (Clark, 2017). Focuses on secondary CS teaching and what the role entails,
            providing a rich set of case studies and quotes.</li
        >
        <li
            ><Link to="https://doi.org/10.7551/mitpress/9992.001.0001"
                >Connected Code: Why Children Need to Learn Programming</Link
            > (Kafai &amp; Burke, 2014). Argues for moving beyond computational thinking
            to computational participation, leveraging social networks and digital
            making. Discusses examples of youth participation with programmable toys,
            tools, and textiles and the ethical challenges that emerge in these social
            contexts.</li
        >
        <li
            ><Link
                to="https://www.amazon.com/Creative-Coding-Strategies-Integrate-Curriculum/dp/1564846768"
                >Creative Coding: Lessons and Strategies to Integrate Computer
                Science Across the 6-8 Curriculum</Link
            > (Caldwell, 2018).</li
        >
        <li
            ><Link to="https://criticallyconsciouscomputing.org"
                >Critically Conscious Computing: Methods for Secondary Education</Link
            > (Ko et al., 2021). A critical survey of CS and CS education foundations
            and a collection of dialogic teaching methods for promoting student critical
            consciousness about computing and society.</li
        >
        <li
            ><Link
                to="https://www.amazon.com/Guide-Teaching-Computer-Science-Activity-Based/dp/144716069X"
                >Guide to teaching computer science: An activity-based approach</Link
            > (Hazzan et al. 2015). Includes detailed learning activities, curriculum
            reviews, CS education research, lesson planning, and course design. Some
            pre-service CS teachers find the concrete examples help; others find it
            jargony and overly complex.</li
        >
        <li
            ><Link
                to="https://www.amazon.com/Integrating-Computer-Science-Across-Core/dp/0367198649"
                >Integrating Computer Science Across the Core: Strategies for
                K-12 Districts</Link
            > (Lynch and Ardito, 2020).</li
        >
        <li
            ><Link
                to="https://www.amazon.com/Invent-Learn-Tinkering-Engineering-Classroom/dp/0989151107"
                >Invent to learn: Making, tinkering, and engineering in the
                classroom</Link
            > (Martinez and Stager, 2013). A practical guide to bringing tinkering
            into the classroom via project-based learning.</li
        >
        <li
            ><Link
                to="https://www.infoagepub.com/products/Preparing-Pre-Service-Teachers-to-Teach-Computer-Science"
                >Preparing Pre-Service Teachers to Teach Computer Science:
                Models, Practices, and Policies</Link
            > (Mouza, Yadav, Ottenbreit-Leftwich, 2021). An edited volume surveying
            research on CS teacher education, offering examples for how to design
            and deliver effective teacher preparation.</li
        >
        <li
            ><Link
                to="https://www.amazon.com/Teaching-Computing-Secondary-Schools-Practical/dp/1138238066"
                >Teaching Computing in Secondary Schools</Link
            > (Lau, 2017). Offers a framework for planning and delivering CS curricula.</li
        >
        <li
            ><Link
                to="https://www.routledge.com/Teaching-Computing-A-Practitioners-Perspective/Walker/p/book/9781138034433"
                >Teaching Computing: A Practitioner's Perspective</Link
            > (Walker, 2018). Full of teaching tips for higher education faculty teaching
            CS.</li
        >
        <li
            ><Link to="http://teachtogether.tech/en/"
                >Teaching tech together</Link
            > (Wilson, 2019). An informal survey of research useful for teaching
            programming. Greg Wilson wrote it to help others become better
            teachers of computing.</li
        >
        <li
            ><Link
                to="https://www.amazon.com/Your-First-Teaching-Computer-Science/dp/173581072X/"
                >Your First Year Teaching Computer Science</Link
            > (Gregg, 2021).</li
        >
    </ul>

    <p>Is one missing from this list? Let me know and I'll add it.</p>
</Section>

<Section
    id="conferences-and-journals"
    header="What conferences and journals publish CER?"
>
    <p>
        Most academic fields have exclusively academic venues for publication,
        with few practitioners participating in or reading the research that
        researchers produce. The CER community is unique (and I believe quite
        fortunate) in that practitioners are deeply involved in the academic
        research community (partly because most faculty conducting research are
        teachers themselves). Below I note several conferences and journals
        where you can publish computing education research (see SIGCSE for <Link
            to="https://sigcse.org/events/incoop.html"
            >a broader list of events it cooperates with</Link
        >). Note that I separate the pure research venues from the venues that
        combine both research and practice since the combined venues are often
        dominated by practitioners, which can make it hard to have focused
        research conversations and rigorous peer review.
    </p>

    <h4 id="research-only">Research only venues</h4>
    <ul>
        <li>
            <p
                ><Link to="https://icer.acm.org">ICER</Link> (the ACM International
                Computing Education Research conference) is the only computing education
                conference that exclusively publishes research. All of the reviewers who peer review
                submissions are trained researchers with Ph.D.s. ICER tends to focus
                on theoretically, methodologically, and empirically-rich work, advancing
                the science of computing education. It is held around the world but
                is generally in North America every other year.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://toce.acm.org">TOCE</Link> (the ACM Transactions
                on Computing Education) publishes research, and is similar in scope
                to ICER, but in a journal format. Like ICER, the editorial board and
                reviewers are all trained researchers.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://www.tandfonline.com/journals/ncse20"
                    >CSE</Link
                > (the journal Computer Science Education) publishes research and
                is similar to TOCE and ICER in its reviewing community and similar
                in research rigor and prestige. However, unlike TOCE and ICER, publications
                in CSE are generally expected to have more direct implications for
                teachers.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://www.isls.org/annual-meeting/icls/">ICLS</Link
                > (the International Conference of the Learning Sciences, now held
                jointly with CSCL as the ISLS Annual Meeting) does not strictly
                focus on computing education, but publishes high quality research
                on learning sciences. Accepts both qualitative and quantitative work,
                especially of mixed methods. Also tends to focus more on K-12 than
                the venues focusing strictly on CER.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://www.tandfonline.com/journals/hlns20"
                    >JLS</Link
                > (the Journal of the Learning Sciences) is one of the top education research
                journals and expects a strong connection to learning theory and mostly
                wants empirical work. It is not a journal that publishes HCI, so work
                must be connected to cognition, sociocultural context, or other theory,
                and not system design.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://www.isls.org/annual-meeting/cscl/">CSCL</Link
                > (the International Conference on Computer-Supported Collaborative
                Learning) focuses on issues related to learning through collaboration
                and promoting productive collaborative discourse with the help of
                the computer and other communications technologies.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://ijcscl.org">IJCSCL</Link> (the International Journal
                of Computer-Supported Collaborative Learning), like CSCL, focuses
                on learning through collaboration.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://learningatscale.acm.org">L@S</Link> (the ACM Conference
                on Learning at Scale) is a computer science conference that focuses
                on techniques for scaling instruction. Some of the work published
                here concerns computing education, but many other domains are represented
                as well. Often focuses on MOOCs and other forms of online learning.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://sigcse.org/events/respect/conferences.html"
                    >RESPECT</Link
                > (the ACM/SIGCSE Conference on Research on Equitable and Sustained
                Participation in Engineering, Computing, and Technology) is a conference focused
                on engagement, participation, and equity in STEM fields. It has research
                and experience report tracks, and expects empirical papers grounded
                in theory.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://idc.acm.org">IDC</Link> (the ACM Interaction
                Design and Children conference) is an HCI conference with a focus on children,
                focusing on design artifacts for kids and enabling kids to be designers,
                with a special focus on participatory design as a methodology.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://chi.acm.org">CHI</Link> (ACM SIGCHI Conference on
                Human Factors in Computing Systems) is an HCI conference with a focus on any
                aspect of interactions between people and computers, including programming.
                As one of the largest and broadest ACM conferences, it's easy for
                research on learning to get lost here, but so does every other topic!</p
            >
        </li>
        <li>
            <p
                ><Link to="https://www.aera.net/AERA2027">AERA</Link> (the American
                Educational Research Association annual meeting) has several special
                interest groups (e.g., Learning Sciences; Advanced Technologies for
                Learning) where computing education research appears.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://onlinelibrary.wiley.com/journal/21689830"
                    >JEE</Link
                > (the Journal of Engineering Education). High-quality, though it publishes
                few of the large multi-institutional, multi-national (MIMN) studies common
                in CER. Occasionally has papers related to computing.</p
            >
        </li>
        <li>
            <p
                ><Link to="https://ieee-edusociety.org/publication/ieee-toe"
                    >IEEE Transactions on Education</Link
                >. I know little about this journal. Feel free to share
                opinions!</p
            >
        </li>
        <li>
            <p
                ><Link to="https://educationaldatamining.org/">EDM</Link>
                (the International Conference on Educational Data Mining). Explores
                using educational data to understand student learning.
            </p>
        </li>
        <li>
            <p
                ><Link
                    to="https://jedm.educationaldatamining.org/index.php/JEDM"
                    >JEDM</Link
                > (the Journal of Educational Data Mining). Publishes research on
                the use of data mining in education.</p
            >
        </li>
    </ul>

    <h4 id="research-and-practice">Research and practice venues</h4>

    <ul>
        <li
            ><Link to="https://sigcse.org/events/symposia/index.html"
                >SIGCSE</Link
            > (the SIGCSE Technical Symposium on Computer Science Education) publishes
            both research and practice papers in a short format, bringing together
            researchers and teachers. This is the largest conference on computer science
            education and generally attracts teachers. There is a dedicated research
            track separate from experience reports, though the research track has
            a 6-page limit (plus references), making it unsuitable for many forms of research, such
            as qualitative work or more substantial quantitative work. Generally held
            in North America.</li
        >
        <li
            ><Link to="https://iticse.acm.org">ITiCSE</Link> (the Annual Conference
            on Innovation and Technology in Computer Science Education) publishes
            both research and practice papers, with a focus on practice. Generally
            held in Europe.</li
        >
        <li
            ><Link to="https://www.kolicalling.fi">Koli Calling</Link> (International
            Conference on Computing Education Research), held in Finland every year,
            publishes research and practice papers with a focus on qualitative research.
            A small but dedicated community.</li
        >
        <li
            ><Link to="https://www.wipsce.org">WiPSCE</Link> (the WiPSCE Conference
            on Primary and Secondary Computing Education Research) aims to bring together researchers
            and practitioners, and publishes both research and practice papers. It
            is generally held in Europe.</li
        >
        <li
            ><Link to="https://aceconference2026.github.io">ACE</Link> (the Australasian
            Computing Education Conference) is a regional conference with a mix of
            research and practice papers, bringing together education researchers
            and practitioners. Held in Australia or New Zealand, but welcomes attendees
            from anywhere.</li
        >
        <li
            ><Link to="https://fie-conference.org">FIE</Link> (the IEEE/ASEE Frontiers in
            Education conference) is more broad and more practitioner focused than
            SIGCSE and occasionally has CER work.</li
        >
    </ul>
</Section>

<Section id="sigcse" header="What is SIGCSE?">
    <p>
        <Link to="https://sigcse.org/">SIGCSE</Link>, like other ACM Special
        Interest Groups (SIGs), is an organization that focuses on a particular
        topic within ACM, namely computer science education. It sponsors ACM
        conferences (e.g., the SIGCSE Technical Symposium, ICER, ITiCSE,
        CompEd, and SIGCSE Virtual) and
        influences their structure and focus. Note that SIGCSE the group
        organizes SIGCSE the conference. I know, it's confusing, but aren't you
        glad you read this?
    </p>
</Section>

<Section
    id="experience-reports"
    header="What's the difference between a research paper and an experience report?"
>
    <p>
        This is an important question, since many of the conference venues in
        the computing education community publish both. Unfortunately, the
        community hasn't developed much clarity about the differences between
        these. The result is that many papers published in the SIGCSE experience
        report track look like research papers, and many of the papers published
        in the SIGCSE research track look like experience reports. What's the
        essential difference?
    </p>

    <p>
        In my opinion, the key distinction between research and an experience
        report is your audience, which implies your goals: are you writing to
        researchers, who aspire to build upon everything we know to advance
        theories about what we know about CS teaching and learning? In contrast,
        if you're writing to teachers, you're likely sharing practical
        knowledge, such as an interesting method you tried, a surprising
        experience, or a teaching method others might experiment with. The
        critical difference is that in research, we're trying to be certain that
        we know something, but it's okay if we don't know how to put that
        knowledge into action yet, whereas in practice, we're trying to learn
        how to teach something, even if we're not certain it will work. Another
        way to characterize the difference are some of the evaluation criteria.
        Research papers should be <em
            >novel with respect to everything we know</em
        >
        and <em>sound</em>, but not necessarily immediately useful. Experience
        report papers should be <em>novel with respect to common knowledge</em>
        (but not necessarily novel with respect to all knowledge),
        <em>useful</em>
        and <em>interesting</em>, but not necessarily sound.
    </p>

    <p>
        I believe that both are valuable in their own ways. Research allows us
        to build confidence in what we know, whereas sharing experience allows
        us to teach each other. We need both for a thriving practice of CS
        teaching and a thriving body of knowledge to inform that practice.
    </p>
</Section>

<Section
    id="blogs"
    header="How can I keep up with the latest research, practice, and policy?"
>
    <p> There are a few excellent blogs (in alphabetical order): </p>

    <ul>
        <li
            >Mark Guzdial's <Link to="https://computinged.wordpress.com/"
                >Computing Education Research</Link
            > blog has been active since 2009 and contains thousands of posts that
            explain computing education research to a broader community.</li
        >
        <li
            >Felienne Hermans has a blog about <Link
                to="https://www.felienne.com/archives/category/blog"
                >programming and inclusion</Link
            >.</li
        >
        <li
            >Amy Ko's <Link to="https://medium.com/bits-and-behavior"
                >Bits &amp; Behavior</Link
            > publication at Medium covers CER, software engineering, HCI, and broader
            issues in academia.</li
        >
        <li
            >Shriram Krishnamurthi's <Link
                to="https://parentheticallyspeaking.org/articles/"
                >Parenthetically Speaking</Link
            > discusses a range of topics on academia, programming languages, and
            computing education.</li
        >
        <li
            >William Lau's blog on <Link to="http://www.mrlaulearning.com/"
                >CS education and teaching more broadly</Link
            >.</li
        >
        <li
            ><Link to="https://laurenmarg.com/leetblog/"
                >Lauren Margulieux's blog</Link
            > discusses learning sciences, discipline-based education research, and
            computing education.</li
        >
        <li
            >Alfred Thompson's <Link to="https://blog.acthompson.net/"
                >Computer Science Teacher</Link
            > blog covers a range of computing education, research, and policy issues.</li
        >
        <li>
            The <Link to="https://cacm.acm.org/section/blogcacm/"
                >CACM blog</Link
            > often has posts related to computing education.
        </li>
    </ul>

    <p>Is this list missing you? Let me know!</p>
</Section>

<Section id="community" header="How can I connect with the community?">
    <p
        >Post-pandemic, many online communities have frayed. Here is one that
        remains:</p
    >

    <ul>
        <li
            >There's a private group on Facebook called <Link
                to="https://www.facebook.com/groups/1546763215587966"
                >Computer Science Education: Researchers and Practitioners</Link
            >.</li
        >
    </ul>
</Section>
