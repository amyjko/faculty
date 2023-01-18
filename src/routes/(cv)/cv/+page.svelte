<script lang="ts">
    import { profile } from '$lib/models/stores';
    import { parseDate } from '$lib/models/Profile';
    import Item from './Item.svelte';
    import Row from './Row.svelte';
    import Paper from '$lib/components/Paper.svelte';
    import Image from '$lib/components/Thumbnail.svelte';
    import Wrap from './Wrap.svelte';
    import Table from '$lib/components/Table.svelte';

    let refereed = $profile.getPublications(
        (pub) =>
            pub.kind === 'journal article' ||
            pub.kind === 'refereed conference paper',
        (pub) => -pub.year
    );
</script>

<Image url={'/images/headshots/mug-ajko.jpg'} alt="Headshot of Amy J. Ko" />

<h1>Amy J. Ko, Ph.D.</h1>
Professor
<br />The Information School
<br />University of Washington, Seattle

<h2>Education</h2>

<Wrap>
    {#each $profile.getDegrees() as degree}
        <Item
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
            start={job.startdate}
            stop={job.enddate}
            header={job.title}
            two={job.department}
            three={job.organization}
        />
    {/each}
</Wrap>

<h2>Industry appointments</h2>

<Wrap>
    {#each $profile.getJobs( (job) => !job.academic, (job) => -job.startdate ) as job}
        <Item
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

<Wrap>
    {#each $profile.getPublications( (pub) => pub.award !== undefined && pub.award.filter( (award) => award.includes('most influential paper') ).length > 0, (pub) => -pub.year ) as pub}
        <Item
            start={pub.year}
            header={pub.title}
            two={pub.award?.join(', ')}
            three={$profile.getSourceName(pub.source)}
        />
    {/each}
</Wrap>

<h3>Best Paper Awards</h3>

<Wrap>
    {#each $profile.getPublications( (pub) => pub.award !== undefined && pub.award.filter((award) => award.includes('best paper') || award.includes('best paper honorable mention')).length > 0, (pub) => -pub.year ) as pub}
        <Item
            start={pub.year}
            header={pub.title}
            two={pub.award?.join(', ')}
            three={$profile.getSourceName(pub.source)}
        />
    {/each}
</Wrap>

<h3>Recognitions</h3>

<Table>
    <tbody>
        {#each $profile.getRecognitions( () => true, (rec) => -rec.year ) as rec}
            <Row start={rec.year} header={rec.title} detail={rec.description} />
        {/each}
    </tbody>
</Table>

<h2>Funding</h2>

<Wrap>
    {#each $profile.getFunding( (funding) => !funding.private, (funding) => (funding.commitment.end === null ? -Infinity : -parseDate(funding.commitment.end).getFullYear()) ) as funding}
        {#if funding.commitment.start}
            <Item
                start={parseDate(funding.commitment.start).getFullYear()}
                stop={funding.commitment.end === null
                    ? null
                    : parseDate(funding.commitment.end).getFullYear()}
                header={funding.title}
                two={funding.amount}
                three={funding.funder}
                four={funding.award ?? ''}
                five={funding.investigators}
                six={funding.description}
            />
        {/if}
    {/each}
</Wrap>

<h2>Publications</h2>

<p>
    <small>
        Unlike most of academia, premiere conferences in Human-Computer
        Interaction (HCI), Software Engineering (SE), and Computing Education
        are selective venues for archival research. These conferences exceed
        many journals in their selectivity, visibility, and impact.
    </small>
</p>

<p>
    <small>
        Authorship order indicates the scope of my intellectual contribution to
        the work. However, because I collaborate closely with my Ph.D. students
        on research, they are first author on many of my key publications.
    </small>
</p>

<h3>Refereed Conference + Journal Articles</h3>

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

{#each $profile.getPublications( (pub) => pub.kind === 'book', (pub) => -pub.year ) as paper}
    <Paper {paper} format="cv" />
{/each}

<h2>Book Chapters</h2>

{#each $profile.getPublications( (pub) => pub.kind === 'book chapter', (pub) => -pub.year ) as paper}
    <Paper {paper} format="cv" />
{/each}

<h2>Refereed Magazine Articles</h2>

{#each $profile.getPublications( (pub) => pub.kind === 'refereed magazine article', (pub) => -pub.year ) as paper}
    <Paper {paper} format="cv" />
{/each}

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

<Wrap>
    {#each $profile.getImpacts( (impact) => impact.kind === 'press', (impact) => -impact.start ) as impact}
        <Item
            start={impact.start}
            stop={impact.end}
            header={impact.title ?? ''}
            two={impact.author}
            three={impact.source}
        />
    {/each}
</Wrap>

<h3>Invited Keynotes</h3>

<Wrap>
    {#each $profile.getTalks().filter((talk) => talk.keynote) as keynote}
        <Item
            start={parseDate(keynote.date).getFullYear()}
            header={keynote.title}
            two={keynote.venue}
        />
    {/each}
</Wrap>

<h3>Invited Talks</h3>

<Wrap>
    {#each $profile.getTalks().filter((talk) => !talk.keynote) as keynote}
        <Item
            start={parseDate(keynote.date).getFullYear()}
            header={keynote.title}
            two={keynote.venue}
        />
    {/each}
</Wrap>

<h3>Invited Panels</h3>

<Wrap>
    {#each $profile.getPanels() as panel}
        <Item
            start={parseDate(panel.date).getFullYear()}
            header={panel.title}
            two={panel.venue}
        />
    {/each}
</Wrap>

<h3>Patents</h3>

<Wrap>
    {#each $profile.getPatents() as patent}
        <Item
            start={parseInt(patent.year)}
            header={patent.title}
            two={patent.number}
            three={patent.inventors}
        />
    {/each}
</Wrap>

<h2>Teaching</h2>

<h3>Courses</h3>

<Wrap>
    {#each $profile.getClasses() as course}
        <Item
            start={course.offerings.sort((a, b) => a.year - b.year)[0].year}
            stop={course.offerings.sort((a, b) => b.year - a.year)[0].year}
            header={`${course.number} ${course.title}`}
            two={course.level}
            three={course.description}
            four={'Taught ' +
                course.offerings.filter((offer) => offer.score !== null)
                    .length +
                ' times'}
        />
    {/each}
</Wrap>

<h3>Doctoral Student Supervision</h3>

<h4>Committee Chair</h4>

<Wrap>
    {#each $profile
        .getPeople( (person) => person.level === 'phd' && person.advised, (person) => person.startdate )
        .map((value) => {
            if (value.coadvisor !== null) value.coadvisor = 'Co-advisor: ' + value.coadvisor;
            return value;
        }) as person}
        <Item
            start={person.startdate}
            stop={person.enddate}
            header={person.name}
            two={person.dept}
            three={person.coadvisor ?? undefined}
            four={person.achievements}
        />
    {/each}
</Wrap>

<h4>Committee Member</h4>

<Table>
    <tbody>
        {#each $profile.getDoctoralCommmitees() as person}
            <Row
                start={person.startdate}
                end={person.enddate}
                header={person.name}
                detail={person.institution}
                extra={person.department}
            />
        {/each}
    </tbody>
</Table>

<h2>Service</h2>

<h3>Journal Editorial Boards</h3>

{#each $profile.getEditing( (role) => role.type === 'journal', (role) => (role.commitment.start === null ? -Infinity : -parseDate(role.commitment.start).getFullYear()) ) as board}
    {#if board.commitment.start}
        <Item
            start={parseDate(board.commitment.start).getFullYear()}
            stop={board.commitment.end === null
                ? null
                : parseDate(board.commitment.end).getFullYear()}
            header={board.venue}
            two={board.title}
        />
    {/if}
{/each}

<h3>Conference Program Chair</h3>

{#each $profile.getEditing( (role) => role.type === 'conference', (role) => (role.commitment.start === null ? -Infinity : -parseDate(role.commitment.start).getFullYear()) ) as board}
    {#if board.commitment.start}
        <Item
            start={parseDate(board.commitment.start).getFullYear()}
            stop={board.commitment.end === null
                ? null
                : parseDate(board.commitment.end).getFullYear()}
            header={$profile.getSourceName(board.venue)}
            two={board.title}
        />
    {/if}
{/each}

<h3>Conference Program Committee Member</h3>

<Wrap>
    {#each $profile.getReviewing( (role) => role.level === 'pc', (role) => -role.years
                .sort()
                .reverse()[0] ) as role}
        <Item
            start={role.years.sort()[0]}
            stop={role.years.sort().reverse()[0]}
            header={$profile.getSourceName(role.venue)}
            two={role.title}
        />
    {/each}
</Wrap>
<h3>Conference Reviewer</h3>

<Wrap>
    {#each $profile.getReviewing( (role) => role.level === 'reviewer', (role) => -role.years
                .sort()
                .reverse()[0] ) as role}
        <Item
            start={role.years.sort()[0]}
            stop={role.years.sort().reverse()[0]}
            header={$profile.getSourceName(role.venue)}
            two={role.title}
        />
    {/each}
</Wrap>

<h3>Proposal Reviewer</h3>

<Wrap>
    {#each $profile.getReviewing( (role) => role.level === 'panelist', (role) => -role.years
                .sort()
                .reverse()[0] ) as role}
        <Item
            start={role.years.sort()[0]}
            stop={role.years.sort().reverse()[0]}
            header={$profile.getSourceName(role.venue)}
            two={role.title}
        />
    {/each}
</Wrap>

<h3>International Service</h3>

<Wrap>
    {#each $profile.getService( (service) => service.level === 'international', (service) => (service.commitment.end ? -parseDate(service.commitment.end).getTime() : Number.NEGATIVE_INFINITY) ) as service}
        {#if service.commitment.start}
            <Item
                start={parseDate(service.commitment.start).getFullYear()}
                stop={service.commitment.end === null
                    ? null
                    : parseDate(service.commitment.end).getFullYear()}
                header={service.title}
                two={service.committee}
                three={service.description}
            />
        {/if}
    {/each}
</Wrap>

<h3>National Service</h3>

<Wrap>
    {#each $profile.getService( (service) => service.level === 'national', (service) => (service.commitment.end ? -parseDate(service.commitment.end).getTime() : Number.NEGATIVE_INFINITY) ) as service}
        {#if service.commitment.start}
            <Item
                start={parseDate(service.commitment.start).getFullYear()}
                stop={service.commitment.end === null
                    ? null
                    : parseDate(service.commitment.end).getFullYear()}
                header={service.title}
                two={service.committee}
                three={service.description}
            />
        {/if}
    {/each}
</Wrap>

<h3>Regional Service</h3>

<Wrap>
    {#each $profile.getService( (service) => service.level === 'regional', (service) => (service.commitment.end ? -parseDate(service.commitment.end).getTime() : Number.NEGATIVE_INFINITY) ) as service}
        {#if service.commitment.start}
            <Item
                start={parseDate(service.commitment.start).getFullYear()}
                stop={service.commitment.end === null
                    ? null
                    : parseDate(service.commitment.end).getFullYear()}
                header={service.title}
                two={service.committee}
                three={service.description}
            />
        {/if}
    {/each}
</Wrap>

<h3>University Service</h3>

<Wrap>
    {#each $profile.getService( (service) => service.level === 'university', (service) => (service.commitment.end ? -parseDate(service.commitment.end).getTime() : Number.NEGATIVE_INFINITY) ) as service}
        {#if service.commitment.start}
            <Item
                start={parseDate(service.commitment.start).getFullYear()}
                stop={service.commitment.end === null
                    ? null
                    : parseDate(service.commitment.end).getFullYear()}
                header={service.title}
                two={service.committee}
                three={service.description}
            />
        {/if}
    {/each}
</Wrap>

<h3>Departmental Service</h3>

<Wrap>
    {#each $profile.getService( (service) => service.level === 'departmental', (service) => (service.commitment.end ? -parseDate(service.commitment.end).getTime() : Number.NEGATIVE_INFINITY) ) as service}
        {#if service.commitment.start}
            <Item
                start={parseDate(service.commitment.start).getFullYear()}
                stop={service.commitment.end === null
                    ? null
                    : parseDate(service.commitment.end).getFullYear()}
                header={service.title}
                two={service.committee}
                three={service.description}
            />
        {/if}
    {/each}
</Wrap>
