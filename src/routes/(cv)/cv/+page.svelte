<script lang="ts">
    import { setContext } from 'svelte';
    import { profile } from '#lib/models/stores.ts';
    import { parseDate } from '#lib/models/Profile.ts';
    import Item from './Item.svelte';
    import Row from './Row.svelte';
    import Paper from '#lib/components/Paper.svelte';
    import Image from '#lib/components/Thumbnail.svelte';
    import Wrap from './Wrap.svelte';
    import Cards from './Cards.svelte';
    import PaperCard from './PaperCard.svelte';
    import Entry from './Entry.svelte';
    import Timeline from './Timeline.svelte';
    import TimelineRow from './TimelineRow.svelte';
    import Courses from './Courses.svelte';
    import Table from '#lib/components/Table.svelte';
    import Title from '#lib/components/Title.svelte';
    import Annotation from '#lib/components/Highlight.svelte';
    import Emoji from '#lib/components/Emoji.svelte';
    import {
        uniquer,
        degreeID,
        jobID,
        recognitionID,
        panelID,
        patentID,
        committeeID,
        editingID,
        reviewingID,
        serviceID,
        talkID,
        impactID,
    } from '#lib/models/anchors.ts';

    /**
     * One allocator for the whole page, so no two records share an anchor
     * across the CV's ~20 sections. The page's data is static, so the ids are
     * assigned once in document order and are stable between server and client.
     *
     * Papers rendered by `Paper format="cv"` carry their own `paper.id` and are
     * outside this allocator, which is why the two award sections below prefix
     * theirs — otherwise they would collide with the publication sections.
     */
    const nextID = uniquer();

    let refereed = $profile.getPublications(
        (pub) =>
            pub.kind === 'journal article' ||
            pub.kind === 'refereed conference paper',
        (pub) => -pub.year,
    );

    /** The year of a YYYY-MM-DD date, for grouping entries under year headings. */
    function year(date: string): number {
        return parseDate(date).getFullYear();
    }

    /** Newest first, so year headings appear in descending order. */
    function newest(a: { date: string }, b: { date: string }): number {
        return parseDate(b.date).getTime() - parseDate(a.date).getTime();
    }

    const press = $profile.getImpacts(
        (impact) => impact.kind === 'press',
        (impact) => -impact.start,
    );
    const keynotes = $profile.getTalks((talk) => talk.keynote).sort(newest);
    const talks = $profile.getTalks((talk) => !talk.keynote).sort(newest);
    const panels = $profile.getPanels().sort(newest);

    /**
     * One axis for every Service timeline, so bars line up across subsections:
     * from the earliest year of any role to this year, or a later end year if
     * a role is recorded as ending in the future.
     */
    const serviceYears = [
        ...[...$profile.getEditing(), ...$profile.getService()].flatMap(
            (role) =>
                [role.commitment.start, role.commitment.end]
                    .filter((date) => date !== null)
                    .map(year),
        ),
        ...$profile.getReviewing().flatMap((role) => role.years),
    ];
    const serviceFrom = Math.min(...serviceYears);
    const serviceTo = Math.max(new Date().getFullYear(), ...serviceYears);

    /** Modify this on/off switch to show annotations. */
    const annotationYear = 2026;
    let annotations = $state({ on: false, year: annotationYear });
    setContext('annotations', annotations);
</script>

<div class="cv">
    <Image url={'/images/headshots/ajko.jpg'} alt="Headshot of Amy J. Ko" />

    <Annotation year={annotationYear}
        >If you want a quick way to scan, search the light bulb.</Annotation
    >

    <Title text="Curriculum Vita" />

    <h1>Amy J. Ko, Ph.D.</h1>
    <span style="font-size: 125%">Professor</span>
    <br />The Information School
    <br />University of Washington, Seattle

    <p style="font-size: 125%"
        ><em
            >I study how people learn about computing and information, in
            schools and beyond, and invent new methods and tools for teaching
            and learning them in equitable, liberatory ways. I draw from
            human-computer interaction, computing education, software
            engineering, programming languages, and behavioral, social, and
            learning sciences.</em
        >
    </p>

    <h2>Education</h2>

    <Wrap>
        {#each $profile.getDegrees() as degree}
            <Item
                id={nextID(degreeID(degree))}
                start={degree.start}
                stop={degree.end}
                header={degree.institution}
                two={degree.degree}
                three={degree.thesis}
                four={degree.committee}
            />
        {/each}
    </Wrap>

    <h2>Academic appointments</h2>

    <Wrap>
        {#each $profile.getJobs( (job) => job.academic, (job) => -job.startdate ) as job}
            <Item
                id={nextID(jobID(job))}
                start={job.startdate}
                stop={job.enddate}
                header={job.title}
                two={job.department}
                three={job.organization}
                annotation={job.annotation}
            />
        {/each}
    </Wrap>

    <h2>Industry appointments</h2>

    <Wrap>
        {#each $profile.getJobs( (job) => !job.academic, (job) => -job.startdate ) as job}
            <Item
                id={nextID(jobID(job))}
                start={job.startdate}
                stop={job.enddate}
                header={job.title}
                two={job.department}
                three={job.organization}
            />
        {/each}
    </Wrap>

    <h2>Honors and Recognitions</h2>

    <h3>Most Influential Paper Awards</h3>

    <Table stack>
        {#each $profile.getPublications( (pub) => pub.award !== undefined && pub.award.filter( (award) => award.includes('most influential paper') ).length > 0, (pub) => -pub.year ) as pub}
            <Row
                id={nextID('influential-' + pub.id)}
                start={pub.year}
                end={pub.year}
                header={pub.title}
                detail={pub.award?.join(', ') ?? ''}
                extra={$profile.getSourceName(pub.source)}
            />
        {/each}
    </Table>

    <h3>Best Paper Awards</h3>

    <Table stack>
        {#each $profile.getPublications( (pub) => pub.award !== undefined && pub.award.filter((award) => award.includes('best paper') || award.includes('honorable mention')).length > 0, (pub) => -pub.year ) as pub}
            <Row
                id={nextID('best-' + pub.id)}
                start={pub.year}
                end={pub.year}
                header={pub.title}
                detail={pub.award?.join(', ') ?? ''}
                extra={$profile.getSourceName(pub.source)}
            />
        {/each}
    </Table>

    <h3>Recognitions</h3>

    <Table stack>
        {#each $profile.getRecognitions( () => true, (rec) => -rec.year ) as rec}
            <Row
                id={nextID(recognitionID(rec))}
                start={rec.year}
                end={rec.year}
                header={rec.title}
                detail={rec.description}
            />
        {/each}
    </Table>

    <h2>Funding</h2>

    <Wrap>
        {#each $profile.getFunding( (funding) => !funding.private, (funding) => (funding.commitment.end === null ? -Infinity : -parseDate(funding.commitment.end).getFullYear()) ) as funding}
            {#if funding.commitment.start}
                <Item
                    id={nextID(funding.id)}
                    start={parseDate(funding.commitment.start).getFullYear()}
                    stop={funding.commitment.end === null
                        ? null
                        : parseDate(funding.commitment.end).getFullYear()}
                    header={funding.title}
                    url={funding.url}
                    two={funding.amount}
                    three={funding.funder}
                    four={funding.award ?? ''}
                    five={funding.investigators}
                    six={funding.description}
                    annotation={funding.annotation}
                />
            {/if}
        {/each}
    </Wrap>

    <h2>Publications</h2>

    <p>
        <small>
            Unlike most of academia, premiere conferences in Human-Computer
            Interaction (HCI), Software Engineering (SE), and Computing
            Education are selective venues for archival research. These
            conferences exceed many journals in their selectivity, visibility,
            and impact.
        </small>
    </p>

    <p>
        <small>
            Authorship order indicates the scope of my intellectual contribution
            to the work. However, because I collaborate closely with my Ph.D.
            students on research, they are first author on many of my key
            publications. <u>Underlined</u> authors were students I mentored at the
            time of the work.
        </small>
    </p>

    <h3>Refereed Conference + Journal Articles</h3>

    <Annotation year={2025}>
        It was a productive year of collaborations, advising, and teacher
        partnerships, translating into <strong
            >8 peer-reviewed publications</strong
        > that advance knowledge about justice-centered aspects of assessment, pedagogy,
        creativity, curriculum design, and programming languages.
    </Annotation>

    {#each refereed as paper, index}
        {#if index === 0 || refereed[index - 1].year !== paper.year}
            <h4>{paper.year}</h4>
        {/if}
        <Paper {paper} format="cv" year={false} />
    {/each}

    <h2>Refereed Workshop Papers</h2>

    {#each $profile.getPublications( (pub) => pub.kind === 'refereed workshop paper', (pub) => -pub.year ) as paper}
        <Paper {paper} format="cv" />
    {/each}

    <h2>Books</h2>

    <Cards>
        {#each $profile.getPublications( (pub) => pub.kind === 'book', (pub) => -pub.year ) as paper}
            <PaperCard {paper} />
        {/each}
    </Cards>

    <h2>Book Chapters</h2>

    <Cards>
        {#each $profile.getPublications( (pub) => pub.kind === 'book chapter', (pub) => -pub.year ) as paper}
            <PaperCard {paper} />
        {/each}
    </Cards>

    <h2>Refereed Magazine Articles</h2>

    <Cards>
        {#each $profile.getPublications( (pub) => pub.kind === 'refereed magazine article', (pub) => -pub.year ) as paper}
            <PaperCard {paper} />
        {/each}
    </Cards>

    <h2>Juried Conference Papers</h2>

    {#each $profile.getPublications( (pub) => pub.kind === 'juried conference paper', (pub) => -pub.year ) as paper}
        <Paper {paper} format="cv" />
    {/each}

    <h2>Juried workshop papers</h2>

    {#each $profile.getPublications( (pub) => pub.kind === 'juried workshop paper', (pub) => -pub.year ) as paper}
        <Paper {paper} format="cv" />
    {/each}

    <h2>Technical Reports</h2>

    {#each $profile.getPublications( (pub) => pub.kind === 'technical report', (pub) => -pub.year ) as paper}
        <Paper {paper} format="cv" />
    {/each}

    <h2>Impact</h2>

    <h3>Press</h3>

    {#each press as impact, index}
        {#if index === 0 || press[index - 1].start !== impact.start}
            <h4>{impact.start}</h4>
        {/if}
        <Entry
            id={nextID(impactID(impact))}
            venue={impact.source}
            title={impact.title}
            author={impact.author}
            url={impact.url}
            annotation={impact.annotation}
        />
    {/each}

    <h3>Invited Keynotes</h3>

    {#each keynotes as talk, index}
        {#if index === 0 || year(keynotes[index - 1].date) !== year(talk.date)}
            <h4>{year(talk.date)}</h4>
        {/if}
        <Entry
            id={nextID(talkID(talk))}
            venue={talk.venue}
            title={talk.title}
            url={talk.url}
            annotation={talk.annotation}
        />
    {/each}

    <h3>Invited Talks</h3>

    {#each talks as talk, index}
        {#if index === 0 || year(talks[index - 1].date) !== year(talk.date)}
            <h4>{year(talk.date)}</h4>
        {/if}
        <Entry
            id={nextID(talkID(talk))}
            venue={talk.venue}
            title={talk.title}
            url={talk.url}
            annotation={talk.annotation}
        />
    {/each}

    <h3>Invited Panels</h3>

    {#each panels as panel, index}
        {#if index === 0 || year(panels[index - 1].date) !== year(panel.date)}
            <h4>{year(panel.date)}</h4>
        {/if}
        <Entry
            id={nextID(panelID(panel))}
            venue={panel.venue}
            title={panel.title}
        />
    {/each}

    <h3>Patents</h3>

    <Wrap>
        {#each $profile.getPatents() as patent}
            <Item
                id={nextID(patentID(patent))}
                start={parseInt(patent.year)}
                header={patent.title}
                two={patent.number}
                three={patent.inventors}
            />
        {/each}
    </Wrap>

    <h2>Teaching</h2>

    <h3>Courses</h3>

    <Courses
        courses={$profile.getClasses(
            undefined,
            (course) =>
                -Math.max(...course.offerings.map((offering) => offering.year)),
        )}
        anchor={nextID}
    />

    <h3>Postdoc Supervision</h3>

    <Wrap>
        {#each $profile.getPeople( (person) => person.level === 'postdoc', (person) => -person.startdate ) as person}
            <Item
                id={nextID(person.id)}
                start={person.startdate}
                stop={person.enddate}
                header={person.name}
                url={person.url}
                two={person.dept}
                three={person.coadvisor ?? undefined}
                four={person.achievements}
                annotation={person.annotation}
            />
        {/each}
    </Wrap>

    <h3>Doctoral Student Supervision</h3>

    <h4>Committee Chair</h4>

    <Table stack>
        {#each $profile.getPeople( (person) => person.level === 'phd' && person.advised, (person) => -(person.enddate ?? 3000) ) as person}
            <Row
                id={nextID(person.id)}
                start={person.startdate}
                end={person.enddate}
                header={person.name}
                url={person.url}
                items={person.achievements}
                detail={person.dept}
                extra={person.coadvisor === null
                    ? null
                    : 'Co-advisor: ' + person.coadvisor}
                annotation={person.annotation}
            />
        {/each}
    </Table>

    <h4>Committee Member</h4>

    <Table stack>
        {#each $profile.getDoctoralCommmitees() as person}
            <Row
                id={nextID(committeeID(person))}
                start={person.startdate}
                end={person.enddate}
                header={person.name}
                detail={person.institution}
                extra={person.department}
                annotation={person.annotation}
            />
        {/each}
    </Table>

    <h2>Service</h2>

    <p>
        <small>
            Bars show each role's span of years on a shared timeline; an arrow
            marks a role that continues. Dots mark the individual years of
            recurring reviewing roles.
        </small>
    </p>

    <h3>Journal Editorial Boards</h3>

    <Timeline from={serviceFrom} to={serviceTo}>
        {#each $profile.getEditing( (role) => role.type === 'journal', (role) => (role.commitment.start === null ? -Infinity : -parseDate(role.commitment.start).getFullYear()) ) as board}
            {#if board.commitment.start}
                <TimelineRow
                    id={nextID(editingID(board))}
                    start={parseDate(board.commitment.start).getFullYear()}
                    end={board.commitment.end === null
                        ? null
                        : parseDate(board.commitment.end).getFullYear()}
                    header={board.venue}
                    two={board.title}
                    annotation={board.annotation}
                />
            {/if}
        {/each}
    </Timeline>

    <h3>Conference Program Chair</h3>

    <Timeline from={serviceFrom} to={serviceTo}>
        {#each $profile.getEditing( (role) => role.type === 'conference', (role) => (role.commitment.start === null ? -Infinity : -parseDate(role.commitment.start).getFullYear()) ) as board}
            {#if board.commitment.start}
                <TimelineRow
                    id={nextID(editingID(board))}
                    start={parseDate(board.commitment.start).getFullYear()}
                    end={board.commitment.end === null
                        ? null
                        : parseDate(board.commitment.end).getFullYear()}
                    header={$profile.getSourceName(board.venue)}
                    two={board.title}
                    annotation={board.annotation}
                />
            {/if}
        {/each}
    </Timeline>

    <h3>Conference Program Committee Member</h3>

    <Timeline from={serviceFrom} to={serviceTo}>
        {#each $profile.getReviewing( (role) => role.level === 'pc', (role) => -Math.max(...role.years) ) as role}
            <TimelineRow
                id={nextID(reviewingID(role))}
                start={Math.min(...role.years)}
                end={Math.max(...role.years)}
                years={role.years}
                header={$profile.getSourceName(role.venue)}
                two={role.title}
                annotation={role.annotation}
            />
        {/each}
    </Timeline>

    <h3>Conference Reviewer</h3>

    <Timeline from={serviceFrom} to={serviceTo}>
        {#each $profile.getReviewing( (role) => role.level === 'reviewer', (role) => -Math.max(...role.years) ) as role}
            <TimelineRow
                id={nextID(reviewingID(role))}
                start={Math.min(...role.years)}
                end={Math.max(...role.years)}
                years={role.years}
                header={$profile.getSourceName(role.venue)}
                two={role.title}
                annotation={role.annotation}
            />
        {/each}
    </Timeline>

    <h3>Proposal Reviewer</h3>

    <Timeline from={serviceFrom} to={serviceTo}>
        {#each $profile.getReviewing( (role) => role.level === 'panelist', (role) => -Math.max(...role.years) ) as role}
            <TimelineRow
                id={nextID(reviewingID(role))}
                start={Math.min(...role.years)}
                end={Math.max(...role.years)}
                years={role.years}
                header={$profile.getSourceName(role.venue)}
                two={role.title}
                annotation={role.annotation}
            />
        {/each}
    </Timeline>

    <h3>International Service</h3>

    <Timeline from={serviceFrom} to={serviceTo}>
        {#each $profile.getService( (service) => service.level === 'international', (service) => (service.commitment.end ? -parseDate(service.commitment.end).getTime() : Number.NEGATIVE_INFINITY) ) as service}
            {#if service.commitment.start}
                <TimelineRow
                    id={nextID(serviceID(service))}
                    start={parseDate(service.commitment.start).getFullYear()}
                    end={service.commitment.end === null
                        ? null
                        : parseDate(service.commitment.end).getFullYear()}
                    header={service.title}
                    two={service.committee}
                    three={service.description}
                    annotation={service.annotation}
                />
            {/if}
        {/each}
    </Timeline>

    <h3>National Service</h3>

    <Timeline from={serviceFrom} to={serviceTo}>
        {#each $profile.getService( (service) => service.level === 'national', (service) => (service.commitment.end ? -parseDate(service.commitment.end).getTime() : Number.NEGATIVE_INFINITY) ) as service}
            {#if service.commitment.start}
                <TimelineRow
                    id={nextID(serviceID(service))}
                    start={parseDate(service.commitment.start).getFullYear()}
                    end={service.commitment.end === null
                        ? null
                        : parseDate(service.commitment.end).getFullYear()}
                    header={service.title}
                    two={service.committee}
                    three={service.description}
                    annotation={service.annotation}
                />
            {/if}
        {/each}
    </Timeline>

    <h3>Regional Service</h3>

    <Timeline from={serviceFrom} to={serviceTo}>
        {#each $profile.getService( (service) => service.level === 'regional', (service) => (service.commitment.end ? -parseDate(service.commitment.end).getTime() : Number.NEGATIVE_INFINITY) ) as service}
            {#if service.commitment.start}
                <TimelineRow
                    id={nextID(serviceID(service))}
                    start={parseDate(service.commitment.start).getFullYear()}
                    end={service.commitment.end === null
                        ? null
                        : parseDate(service.commitment.end).getFullYear()}
                    header={service.title}
                    two={service.committee}
                    three={service.description}
                    annotation={service.annotation}
                />
            {/if}
        {/each}
    </Timeline>

    <h3>University Service</h3>

    <Timeline from={serviceFrom} to={serviceTo}>
        {#each $profile.getService( (service) => service.level === 'university', (service) => (service.commitment.end ? -parseDate(service.commitment.end).getTime() : Number.NEGATIVE_INFINITY) ) as service}
            {#if service.commitment.start}
                <TimelineRow
                    id={nextID(serviceID(service))}
                    start={parseDate(service.commitment.start).getFullYear()}
                    end={service.commitment.end === null
                        ? null
                        : parseDate(service.commitment.end).getFullYear()}
                    header={service.title}
                    two={service.committee}
                    three={service.description}
                    annotation={service.annotation}
                />
            {/if}
        {/each}
    </Timeline>

    <h3>Departmental Service</h3>

    <Timeline from={serviceFrom} to={serviceTo}>
        {#each $profile.getService( (service) => service.level === 'departmental', (service) => (service.commitment.end ? -parseDate(service.commitment.end).getTime() : Number.NEGATIVE_INFINITY) ) as service}
            {#if service.commitment.start}
                <TimelineRow
                    id={nextID(serviceID(service))}
                    start={parseDate(service.commitment.start).getFullYear()}
                    end={service.commitment.end === null
                        ? null
                        : parseDate(service.commitment.end).getFullYear()}
                    header={service.title}
                    two={service.committee}
                    three={service.description}
                    annotation={service.annotation}
                />
            {/if}
        {/each}
    </Timeline>

    <h3>Open Source</h3>

    <Timeline from={serviceFrom} to={serviceTo}>
        {#each $profile.getService( (service) => service.level === 'open source', (service) => (service.commitment.end ? -parseDate(service.commitment.end).getTime() : Number.NEGATIVE_INFINITY) ) as service}
            {#if service.commitment.start}
                <TimelineRow
                    id={nextID(serviceID(service))}
                    start={parseDate(service.commitment.start).getFullYear()}
                    end={service.commitment.end === null
                        ? null
                        : parseDate(service.commitment.end).getFullYear()}
                    header={service.title}
                    two={service.committee}
                    three={service.description}
                    annotation={service.annotation}
                />
            {/if}
        {/each}
    </Timeline>
</div>

<style>
    .cv {
        font-size: 12pt;
        line-height: 1.5;
    }

    /* Keep every heading, including the year headings, with what follows. */
    h1,
    h2,
    h3,
    h4 {
        break-after: avoid;
        page-break-after: avoid;
    }

    h1 {
        font-size: 16pt;
    }

    h2 {
        font-size: 14pt;
    }

    h3 {
        font-size: 12pt;
    }

    @media screen {
        .cv {
            margin: 1em;
        }
    }

    @media print {
        @page {
            margin: 0.75in;
        }

        /* Two points smaller than on screen, which reads well on paper. Sizes
           elsewhere are in em, so they follow. */
        .cv {
            font-size: 10pt;
        }

        h1 {
            font-size: 14pt;
        }

        h2 {
            font-size: 12pt;
        }

        h3 {
            font-size: 10pt;
        }

        h4 {
            font-size: 10pt;
        }

        /* On paper a link is just text: no color or underline to suggest it
           can be followed. (A saved PDF still keeps them clickable.) */
        .cv :global(a) {
            color: inherit;
            text-decoration: none;
        }
    }
</style>
