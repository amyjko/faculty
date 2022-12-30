<script lang="ts">
    import Linkable from '$lib/components/Linkable.svelte';
    import External from '$lib/components/External.svelte';
    import Link from '$lib/components/Link.svelte';

    import { profile } from '$lib/models/stores';

    $: pubCount =
        Math.round(
            $profile.getPublications(
                (paper) =>
                    paper.kind.indexOf('refereed') === 0 ||
                    paper.kind.indexOf('journal') >= 0
            ).length / 10
        ) * 10;
    $: bestAwardCount = $profile.getPublications(
        (paper) =>
            paper.award !== undefined &&
            paper.award.filter((award) => award.includes('best paper')).length >
                0
    ).length;
    $: mipAwardCount = $profile.getPublications(
        (paper) =>
            paper.award !== undefined &&
            paper.award.filter((award) => award.includes('most influential'))
                .length > 0
    ).length;
</script>

<h1>Professional and personal takes on my professorly life.</h1>

<Linkable id="short">Short Bio</Linkable>

<p>
    Amy J. Ko is a Professor at the <External to="http://www.washington.edu"
        >University of Washington</External
    >
    <External to="http://ischool.uw.edu/">Information School</External> and an Adjunct
    Professor at the <External to="http://cs.washington.edu"
        >Paul G. Allen School of Computer Science and Engineering</External
    >. She directs the Code &amp; Cognition Lab, where she and her students
    study CS education, human-computer interaction, and humanity's individual
    and collective struggle to understand computing and harness it for
    creativity, equity, and justice. Her earliest work included techniques for
    automatically answering questions about program behavior to support
    debugging, program understanding, and reuse. Her later work studied
    interactions between developers and users, and techniques for web scale
    aggregation of user intent through help systems; she co-founded <External
        to="http://www.answerdash.com">AnswerDash</External
    > to commercialize these ideas. Her latest work investigates effective, equitable,
    and inclusive ways for humanity to learn computing, especially how data, algorithms,
    APIs, and AI can both empower and oppress. Her work spans more than
    <!-- Compute number of publications, rounding to nearest 10 -->
    {pubCount} peer-reviewed publications, with
    <!-- Compute number of best papers -->
    {bestAwardCount} receiving best paper awards and
    <!-- Compute number of most influential papers. -->
    {mipAwardCount} receiving most influential paper awards. She is an ACM Senior
    Member, a member of ACM SIGCHI, SIGCSE, and SIGSOFT, and a member of the <External
        to="https://sigchi.org/awards/">SIGCHI Academy</External
    >, for her substantial contributions to the field of human-computer
    interaction. She received her Ph.D. at the <External
        to="http://www.hcii.cs.cmu.edu"
        >Human-Computer Interaction Institute</External
    > at <External to="http://www.cmu.edu">Carnegie Mellon University</External>
    in 2008, and degrees in Computer Science and Psychology with Honors from <External
        to="http://www.oregonstate.edu">Oregon State University</External
    > in 2002.
</p>

<Linkable id="irreverent">Irreverent Bio</Linkable>

<p>
    Amy J. Ko is one of those strange, awkward, lucky people at the <External
        to="http://www.washington.edu">University of Washington</External
    > who gets paid to follow her curiosity and tell people what she finds. She surrounds
    herself with similarly curious people, particularly students, and they wander
    about asking questions about the surprising ways that code has woven itself through
    people's lives. She started off inventing ways of making programming easier,
    but then got disillusioned with productivity. She then got excited about the
    ways that programmers interact with massive communities of people using their
    code, and that somehow turned into a startup that sold help tools. After she
    returned from her icky capitalist stint as a CTO, she decided to focus on making
    people smarter instead of tools smarter, and began studying how to make learning
    to code easier. Now she mostly thinks about how we can teach people to write
    code that's not so terribly oppressive to people at the margins, and to create
    with code in ways that express their values and identities. Somewhere along the
    way, she published a bunch of papers and won a bunch of awards, which she thinks
    is nice, but isn't what really motivates her. She's grateful to <External
        to="http://www.cmu.edu">Carnegie Mellon University</External
    > and <External to="http://www.oregonstate.edu"
        >Oregon State University</External
    > for being mostly safe spaces to bumble through the world's endless expanse
    of mysteries as a student, and to the many students and taxpayers that pay her
    to keep doing it as a professor.
</p>

<Linkable id="age">Age</Linkable>

<p>
    Why would I put a section on this page about my age? There are so many
    reasons. First, people are constantly assuming I'm much younger than I am
    (which I guess is to be expected, since I have a young face, but must we
    really assume?) Second, when I tell people my age, they're often skeptical
    (which is ridiculous, because I'm pretty sure I know my age better than they
    do). Third, in ageist academia, much of how I'm treated and how my ideas are
    treated are dependent on how people perceive my expertise, experience, and
    wisdom. Looking young is almost guaranteed to lead less thoughtful academics
    to assume I'm a student, that I know nothing, and that I have no expertise
    to share. Hence this section on this page.
</p>

<p>
    So how old am I? I was born in the summer of 1980. I am an Gen Xer. The
    music of my childhood came with big hair and melodrama. I spent a whole
    summer earning and saving $99 to buy a first generation Nintendo. Childhood
    meant going wherever I wanted with whomever I wanted after school with no
    parental consequences. I was one of the first people on the consumer
    internet. My adolescence was defined by pervasive grunge, sadness, suicide,
    comic book stores, arcades, and Magic the Gathering tournaments. And I look
    back to the 80's and 90's and wonder how the world got so complicated, so
    quickly.
</p>

<p>
    So let my face be a reminder: you <em>cannot</em> judge someone's age, life experience,
    expertise, or wisdom from their face. So stop trying!
</p>

<Linkable id="lineage">Academic Lineage</Linkable>

<p>I have a relatively short academic lineage. I was advised by...</p>
<ul>
    <li
        ><External to="http://www.cs.cmu.edu/~bam/">Brad Myers</External>,
        (Ph.D., University of Toronto), who was advised by...</li
    >
    <li
        ><External to="http://ron.taglab.ca/">Ronald Baecker</External>, (Ph.D.,
        MIT) and <External to="https://www.billbuxton.com">Bill Buxton</External
        > (unofficially), who was advised by...</li
    >
    <li
        ><External to="https://www.nap.edu/read/4779/chapter/21#93"
            >Edward L. Glaser</External
        > (A.B., Dartmouth College), who taught Ron at MIT, who had highly interdisciplinary
        interests, and who was blind.</li
    >
</ul>

<p>As an undergraduate, I was also advised by...</p>
<ul>
    <li
        ><External to="http://web.engr.oregonstate.edu/~burnett/"
            >Margaret Burnett</External
        > (Ph.D., University of Kansas), who was advised by...</li
    >
    <li
        ><External to="https://www.mathgenealogy.org/id.php?id=82631"
            >Allen Ambler</External
        > (Ph.D., University of Wisconsin-Madison).</li
    >
</ul>

<Linkable id="promotion">Promotion Documents</Linkable>

<p>
    These are the documents I submitted for tenure-track faculty positions in
    2008, for my tenure and promotion to Associate Professor, and for my later
    promotion to Professor. I hope they're helpful to anyone pursuing a career
    in academia. While you read them, remember: careers come together one day at
    a time, one paper at a time, not all at once! I've felt imposter syndrome
    most of my life because people didn't tell me this.
</p>

<ul>
    <li
        ><Link to="/promotion/Assistant-Statements.pdf"
            >Research and teaching statements</Link
        > for my 2008 academic job search.</li
    >
    <li
        ><Link to="/promotion/Associate-Statements.pdf"
            >Research, teaching, and service statements</Link
        > for tenure and promotion to Associate Professor.</li
    >
    <li
        ><Link to="/promotion/Associate-CV.pdf">Curriculum vita</Link> for tenure
        and promotion to Associate Professor.</li
    >
    <li
        ><Link to="/promotion/Full-Statements.pdf"
            >Research, teaching, service, and diversity statements</Link
        > for tenure and promotion to Professor.</li
    >
    <li
        ><Link to="/promotion/Full-CV.pdf">Curriculum vita</Link> for tenure and
        promotion to Professor.</li
    >
</ul>
<Linkable id="identity">Identity</Linkable>

<p>
    Labels are are often used to stereotype, categorize, and oppress. However,
    when we use them to describe ourselves, they can be powerful ways to develop
    cultural humility, preventing stereotyping and assumptions. Here are a few
    labels that I use to describe myself and what they mean to me:
</p>

<ul>
    <li
        ><strong>I am an Oregonian</strong>. Growing up in a suburb of Portland,
        Oregon in the 80's and 90's, my values were shaped by environmental
        sustainability, native sovereignty, natural beauty, angst, whiteness,
        and weirdness.</li
    >
    <li
        ><strong>I am a Seattleite</strong>. Having frequented Seattle since
        childhood and lived here since 2008, I experience this as being
        progressive, ambitious, perpetually insecure about my wokeness, and
        civically engaged.</li
    >
    <li
        ><strong>I am a professor</strong>. I center curiosity, discovery,
        knowledge, learning, and teaching, in work and in life.</li
    >
    <li
        ><strong>I am a parent</strong>. I embrace lifelong responsibility for
        the love and wellbeing of my daughter.</li
    >
    <li
        ><strong>I am a partner</strong>. I devote my life to cultivating love,
        joy, laughter, shared dreams with my wife.</li
    >
    <li
        ><strong>I am a technophile</strong>. Technology is my obsession, both
        its wondrous powers and its potential for destruction.</li
    >
    <li
        ><strong>I am a foodophile</strong>. Food shapes my travel, my
        experiences, my conversations. I love food!</li
    >
    <li
        ><strong>I am a woman</strong>. Much of this means being treated as a
        woman, but also having to dismantle sexist cultures, assumptions, and
        traditions that limit my opportunities.</li
    >
    <li
        ><strong>I am transgender</strong>. I experience dissonance between my
        body and my gender, and the unjust treatment in law and life that comes
        with a transphobic world.</li
    >
    <li
        ><strong>I am queer</strong>. My sex, sexual orientation, and gender
        identity don't really fit the false gender binaries popular in dominant
        culture.</li
    >
    <li
        ><strong>I am Chinese</strong>. My father's parents came to the United
        States in the early 20th century, and brought with them cultural
        traditions in food, frugality, and financial security, which shaped my
        own traditions.</li
    >
    <li
        ><strong>I am Danish</strong>, at least in ancestry; my mother's parents
        came to the United States in early 20th century, and brought with them
        humility, privacy, and piety.</li
    >
    <li
        ><strong>I am a divorcee</strong>. This has eroded my friendships,
        community, finances, and wellbeing, leaving lifelong scars and stigma.</li
    >
    <li
        ><strong>I am an atheist</strong>. I find my spirituality in human
        values and the unknown, but do not believe there is an all powerful
        being that designed the universe.</li
    >
</ul>

<Linkable id="long">Long Bio</Linkable>

<p>
    I was born in <External
        to="http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Ontario,+Oregon&sll=37.788081,-104.501953&sspn=38.763291,54.931641&ie=UTF8&z=13&iwloc=addr"
        >Ontario, Oregon</External
    >, but grew up primarily in <External
        to="http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=west+linn&sll=44.024804,-116.975703&sspn=0.069492,0.107288&ie=UTF8&z=12&iwloc=addr"
        >West Linn, Oregon</External
    >, a suburb of Portland, and went to <External
        to="http://www.wlhs.wlwv.k12.or.us/">West Linn High School</External
    >. The school was fantastic and I had wonderful teachers, especially in
    math, science, and English. I spent much of my free time playing video games
    with friends, drawing, and writing code in BASIC, Pascal, C, and my TI-85 to
    make visualizations, games, and user interface toolkits. I retreated into
    programming largely as a refuge from myself.
</p>

<p>
    I was a strong student and was admitted to several great universities out of
    state, but I couldn't afford any of them. I attended <External
        to="http://oregonstate.edu/">Oregon State University</External
    >, where I majored in <External to="http://eecs.oregonstate.edu/"
        >Computer Science</External
    > and <External to="http://oregonstate.edu/cla/psychology/"
        >Psychology</External
    >. Early on, I got involved in the budding student chapter of the ACM, and
    after my first year, helped run the club and its activities around campus,
    including the ACM International Collegiate Programming Contest, a statewide
    software engineering contest, and a student taught course on 2D graphics
    rendering algorithms. At the same time, I joined <External
        to="http://web.engr.oregonstate.edu/~burnett/"
        >Margaret Burnett</External
    >'s research group, and stayed for two years. In my senior year, I focused
    on my honors thesis project, advised largely by <External
        to="http://www.docbob.ca/">Bob Uttl</External
    >. I'd enjoyed doing research in computer science and psychology so much, I
    decided to apply to several graduate schools with a slant towards
    Human-Computer Interaction.
</p>

<p>
    Of all of the schools, the <External to="http://www.hcii.cmu.edu/"
        >Human-Computer Interaction Institute</External
    > at <External to="http://www.cmu.edu">Carnegie Mellon University</External>
    was the best fit, and I started work right away with <External
        to="http://www.cs.cmu.edu/~bam/">Brad Myers</External
    >. I started by investigating what made debugging so difficult, and
    inventing technologies to make it easier. Just after proposing in 2006, I
    did a fantastic internship at <External
        to="http://research.microsoft.com/en-us/default.aspx"
        >Microsoft Research</External
    > in the <External to="http://research.microsoft.com/en-us/groups/hip/"
        >Human Interactions in Programming</External
    > group, and became fascinated with the larger challenge of software design and
    all of the human and cooperative issues that make it such a challenging form
    of engineering practice. I graduated with my Ph.D. in Human-Computer Interaction
    in May of 2008.
</p>

<p>
    Just prior to graduating, I toured the country, giving invited talks and job
    interviews at labs and universities for about eight weeks. I interviewed at
    a range of places, including from conservative CS departments like <External
        to="http://www.eecs.berkeley.edu/">Berkeley EECS</External
    > to much broader places like the <External to="http://ischool.uw.edu/"
        >University of Washington Information School</External
    >, as well as <External
        to="http://research.microsoft.com/en-us/default.aspx"
        >Microsoft Research</External
    >, Redmond. In the end, I wanted to be in the Pacific Northwest, I wanted a
    strong mix of teaching and research, and I was fascinated by the challenge
    of helping to grow and envision a new academic unit, so I chose the <External
        to="http://ischool.uw.edu/">Information School</External
    > as my new home.
</p>

<p>
    The pre-tenure period of my faculty career was distinguished by wonderful
    Ph.D. students, supportive colleagues across HCI and software engineering in
    both academia and industry, and exciting growth in the Information School
    faculty in data science, HCI, and several other fields. My own work
    continued to focus on developer tools, but began to incorporate more data
    science, investigating bug reporting from in a range of contexts, including
    open source, Agile teams, and private industry. While I did this work, I
    also developed a growing passion for research on the learning and teaching
    of computing, investigating new learning technologies and aspects of
    software engineering expertise. In 2013, I co-founded <External
        to="http://www.answerdash.com">AnswerDash</External
    > with Jake Wobbrock and Parmit Chilana. AnswerDash offered instant answers on
    websites using a selection-based search technology that was the centerpiece of
    Parmit's dissertation work.
</p>

<p>
    I earned tenure in 2015. I finished my last day AnswerDash in December of
    2015, resuming full-time faculty life on a short 6-month sabbatical. I used
    that time to begin a new focus on computing education research, inventing
    more effective, equitable, and scalable technologies and pedagogies for
    learning computer science. I also set out to help grow the field of
    computing education, help shape state and federal policy on computing
    education, and have impact by aggressively disseminating my lab's research.
</p>

<p>
    In Spring of 2017, our former Dean, Harry Bruce, asked me to chair our
    undergraduate major, Informatics. I accepted. While this was a big role, it
    only constituted 20% of my time and came with a healthy amount of teaching
    release to compensate. My job therefore expanded from research, teaching,
    service, and impact, to also include administrative duties. This brought a
    new dimension of impact to my work, allowing me to impact not only the
    iSchool's vision of undergraduate educations in information, but other
    iSchools as well.
</p>

<p>
    In Autumn 2019, I <External
        to="https://medium.com/bits-and-behavior/im-trans-call-me-amy-8a72a3951964"
        >came out as a trans woman</External
    >, finally accepting my gender identity and having the confidence to share
    it with the world. My academic communities were <External
        to="https://medium.com/bits-and-behavior/what-coming-out-as-trans-should-look-like-395f31beeddb"
        >incredibly supportive</External
    >, which gave me to confidence to be out and proud. That same year, I was
    promoted to Professor, and pivoted my research to have a more critical
    stance, exploring literacies in both the powers and perils of computing and
    investigating CS teacher education. Shortly after I came out, the COVID-19
    pandemic arrived, and my lab and I went into survival mode, slowing down our
    work and doing our best to care for each other while in lockdown.
</p>
