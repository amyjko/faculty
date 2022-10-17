<script lang="ts">

	import { profile } from "$lib/models/stores";
    import { parseDate } from "$lib/models/utilities";
    import Chunk from "./Chunk.svelte";
    import Row from "./Row.svelte";

		
	// 	var pubs = this.props.app.getProfile().getPublications(
	// 		kind instanceof Function ? kind : pub => pub.kind === kind,
	// 		pub => -pub.year
	// 	);

	// 	var count = 0;
	// 	var rows = [];
	// 	var yearColumns = columns ? 6 : 12;

	// 	pubs.forEach(
	// 		(pub, index) => {
	// 			if(splitByYears) {
	// 				let newYear = index === 0 || (index > 0 && pub.year !== pubs[index - 1].year);
	// 				if(newYear) {
	// 					count = 0;
	// 					let yearCount = 1;
	// 					let yearIndex = index + 1;
	// 					while(yearIndex < pubs.length && pubs[yearIndex].year === pubs[index].year) {
	// 						yearCount++;
	// 						yearIndex++;
	// 					}
	// 					yearColumns = yearCount <= 1 ? 12 : 6;
	// 					rows.push(<div key={"year" + index} class="col-md-12"><h4>{pub.year}</h4></div>);
	// 				}
	// 			}
	// 			if((splitByYears || columns) && count % 2 === 0) {
	// 				rows.push(<div key={"clear" + index} class="clearfix" />);
	// 			}
	// 			rows.push(
	// 				<div key={"paper" + index} class={"col-md-" + yearColumns}>
	// 					<Paper {...pub} app={this.props.app} key={kind + index} format={"cv"} />
	// 				</div>
	// 			);
	// 			count++;
	// 		}
	// 	);

	// 	return <div class="row">{rows}</div>

	// }

	// function getTable(list, prefix, start, stop, header, detail, secondDetail) {
		
	// 	var rows = list.map((entry, index) => {

	// 		var end = "";
	// 		if(stop !== null && entry[start] !== entry[stop])
	// 			end = "-" + (entry[stop] === null ? "present" : entry[stop]);
			
	// 		return <tr key={prefix+index}>
	// 			<td><span class="date">{entry[start]}{end}</span></td>
	// 			<td><strong>{entry[header]}</strong></td>
	// 			{entry[detail] ? <td>{entry[detail]}</td> : undefined }
	// 			{ entry[secondDetail] ? <td>{entry[secondDetail]}</td> : undefined }
	// 		</tr>;
			
	// 	});
			
	// 	return <table class="table"><tbody>{rows}</tbody></table>;	
				
	// }

</script>

<div class="cv">
	<div class="row">
		<div class="col-md-9 col-sm-9">
			<h1>Amy J. Ko, Ph.D.</h1>
			<div class="lead">
				Professor
				<br/>The Information School
				<br/>University of Washington, Seattle
			</div>
		</div>
		<div class="col-md-3 col-sm-3 hidden-xs">
			<img class='img-thumbnail' alt="Headshot of Amy J. Ko" src={"/images/headshots/mug-ajko.jpg"} />
		</div>
	</div>
	
	<hr/>
				
	<div class="lead">
		I study our individual and collective struggle to understand computing and harness it for equity and justice.
	</div>

	 <h1>Education</h1>

	{#each $profile.getDegrees() as degree }
		<Chunk wrap start={degree.start} stop={degree.end} header={degree.institution} two={degree.thesis} three={degree.committee}/>
	{/each}


	<h1>Academic appointments</h1>
	
	{#each $profile.getJobs(job => job.academic, job => -job.startdate) as job }
		<Chunk wrap start={job.startdate} stop={job.enddate} header={job.title} two={job.department} three={job.organization}/>
	{/each}


	<h1>Industry appointments</h1>

	{#each $profile.getJobs(job => !job.academic, job => -job.startdate) as job }
		<Chunk wrap start={job.startdate} stop={job.enddate} header={job.title} two={job.department} three={job.organization}/>
	{/each}


	<h1>Honors and Recognitions</h1>

	<h2>Most Influential Paper Awards</h2>

	{#each $profile.getPublications(pub => pub.award !== undefined && pub.award.filter(award => award.includes("most influential paper")).length > 0, pub => -pub.year) as pub }
		<Chunk wrap start={pub.year} header={pub.title} two={pub.award?.join(", ")} three={$profile.getSourceName(pub.source)}/>
	{/each}

	<h2>Best Paper Awards</h2>

	{#each $profile.getPublications(pub => pub.award !== undefined && pub.award.filter(award => award.includes("best paper") || award.includes("best paper honorable mention")).length > 0, pub => -pub.year) as pub }
		<Chunk wrap start={pub.year} header={pub.title} two={pub.award?.join(", ")} three={$profile.getSourceName(pub.source)}/>
	{/each}

	<h2>Recognitions</h2>

	<table class="table">
		<tbody>
			{#each $profile.getRecognitions(() => true, rec => -rec.year) as rec}
				<Row start={rec.year} header={rec.title} detail={rec.description} />
			{/each}
		</tbody>
	</table>

	<h1>Funding</h1>

	{#each $profile.getFunding(funding => !funding.private, funding => funding.commitment.end === null ? -Infinity : -parseDate(funding.commitment.end).getFullYear()) as funding }
		{#if funding.commitment.start }
			<Chunk wrap start={parseDate(funding.commitment.start).getFullYear()} stop={funding.commitment.end === null ? null : parseDate(funding.commitment.end).getFullYear()} header={funding.title} two={funding.amount} three={funding.funder} four={funding.award ?? ""} five={funding.investigators} six={funding.description} />
		{/if}
	{/each}

	<h1>Publications</h1>
	
	<p>
		<small>
			Unlike most of academia, premiere conferences in Human-Computer Interaction (HCI), Software Engineering (SE), and Computing Education are selective venues for archival research. 
			These conferences exceed many journals in their selectivity, visibility, and impact.
		</small>
	</p>

	<p>
		<small>
			Authorship order indicates the scope of my intellectual contribution to the work. 
			However, because I collaborate closely with my Ph.D. students on research, they are first author on many of my key publications.
		</small>
	</p>
	
	<h2>Refereed Conference + Journal Articles</h2>

	<!--

	{this.getPapers(pub => pub.kind === "journal article" || pub.kind === "refereed conference paper", true)}				
				
	<h2>Refereed Workshop Papers</h2>
	
	{this.getPapers("refereed workshop paper", true, false)}				

	<h2>Books</h2>
	
	{this.getPapers("book", true)}

	<h2>Book Chapters</h2>
	
	{this.getPapers("book chapter", true, false)}				

	<h2>Juried Conference Papers</h2>
	
	{this.getPapers("juried conference paper", true, false)}

	<h2>Refereed Magazine Articles</h2>
	
	{this.getPapers("refereed magazine article", true, false)}

	<h2>Non-Refereed Workshop Papers</h2>
	
	{this.getPapers("non-refereed workshop paper", true, false)}				

	<h2>Technical Reports</h2>
	
	{this.getPapers("technical report", true, false)}

	-->
	
	<h1>Impact</h1>

	<h2>Press</h2>

	{#each $profile.getImpacts(impact => impact.kind === "press", impact => -impact.start) as impact }
		<Chunk wrap start={impact.start} stop={impact.end} header={impact.title ?? ""} two={impact.author} three={impact.source}/>
	{/each}

	<h2>Invited Keynotes</h2>

	{#each $profile.getTalks().filter(talk => talk.keynote) as keynote }
		<Chunk wrap start={parseDate(keynote.date).getFullYear()} header={keynote.title} two={keynote.venue}/>
	{/each}
		
	<h2>Invited Talks</h2>

	{#each $profile.getTalks().filter(talk => !talk.keynote) as keynote }
		<Chunk wrap start={parseDate(keynote.date).getFullYear()} header={keynote.title} two={keynote.venue}/>
	{/each}

	<h2>Invited Panels</h2>

	{#each $profile.getPanels() as panel }
		<Chunk wrap start={parseDate(panel.date).getFullYear()} header={panel.title} two={panel.venue}/>
	{/each}

	<h2>Patents</h2>

	{#each $profile.getPatents() as patent }
		<Chunk wrap start={parseDate(patent.year).getFullYear()} header={patent.title} two={patent.number} three={patent.inventors} />
	{/each}

	<h1>Teaching</h1>

	{#each $profile.getClasses() as course }
		<Chunk wrap start={course.offerings.sort((a, b) => a.year - b.year)[0].year} header={`${course.number} ${course.title}`} two={course.level} three={course.description} four={"Taught " + course.offerings.filter(offer => offer.score !== null).length + " times"}/>
	{/each}

	<h2>Doctoral Student Supervision</h2>

	<h3>Committee Chair</h3>

	{#each $profile.getPeople(
		person => person.level === "phd" && person.advised,
		person => person.startdate
	).map(value => {
		if(value.coadvisor !== null)
			value.coadvisor = "Co-advisor: " + value.coadvisor;
		return value
	}) as person }
		<Chunk wrap start={person.startdate} stop={person.enddate} header={person.name} two={person.dept} three={person.coadvisor ?? undefined} four={person.achievements}/>
	{/each}

	<h3>Committee Member</h3>

	<table class="table">
		<tbody>
			{#each $profile.getDoctoralCommmitees() as person}
				<Row start={person.startdate} end={person.enddate} header={person.name} detail={person.institution} extra={person.department} />
			{/each}
		</tbody>
	</table>

	<h1>Service</h1>

	<h3>Journal Editorial Boards</h3>		

	{#each $profile.getEditing(role => role.type === "journal", role => role.commitment.start === null ? -Infinity : -(parseDate(role.commitment.start).getFullYear())) as board }
		{#if board.commitment.start }
			<Chunk wrap={false} start={parseDate(board.commitment.start).getFullYear()} stop={board.commitment.end === null ? null : parseDate(board.commitment.end).getFullYear()} header={board.venue} two={board.title} />
		{/if}
	{/each}

	<h3>Conference Program Chair</h3>

	{#each $profile.getEditing(role => role.type === "conference", role => role.commitment.start === null ? -Infinity : -(parseDate(role.commitment.start).getFullYear())) as board }
		{#if board.commitment.start }
			<Chunk wrap={false} start={parseDate(board.commitment.start).getFullYear()} stop={board.commitment.end === null ? null : parseDate(board.commitment.end).getFullYear()} header={$profile.getSourceName(board.venue)} two={board.title} />
		{/if}
	{/each}

	<h3>Conference Program Committee Member</h3>

	{#each $profile.getReviewing(role => role.level === "pc", role => -role.years.sort().reverse()[0]) as role }
		<Chunk wrap start={role.years.sort()[0]} stop={role.years.sort().reverse()[0]} header={$profile.getSourceName(role.venue)} two={role.title} />
	{/each}

	<h3>Conference Reviewer</h3>

	{#each $profile.getReviewing(role => role.level === "reviewer", role => -role.years.sort().reverse()[0]) as role }
		<Chunk wrap start={role.years.sort()[0]} stop={role.years.sort().reverse()[0]} header={$profile.getSourceName(role.venue)} two={role.title} />
	{/each}

	<h3>Proposal Reviewer</h3>

	{#each $profile.getReviewing(role => role.level === "panelist", role => -role.years.sort().reverse()[0]) as role }
		<Chunk wrap start={role.years.sort()[0]} stop={role.years.sort().reverse()[0]} header={$profile.getSourceName(role.venue)} two={role.title} />
	{/each}

	<h3>International Service</h3>

	{#each $profile.getService(service => service.level === "international", service => service.commitment.end ? -(parseDate(service.commitment.end).getTime()) : Number.NEGATIVE_INFINITY) as service }
		{#if service.commitment.start }
			<Chunk wrap start={parseDate(service.commitment.start).getFullYear()} stop={service.commitment.end === null ? null : parseDate(service.commitment.end).getFullYear()} header={service.title} two={service.committee} three={service.description} />
		{/if}
	{/each}

	<h3>National Service</h3>

	{#each $profile.getService(service => service.level === "national", service => service.commitment.end ? -(parseDate(service.commitment.end).getTime()) : Number.NEGATIVE_INFINITY) as service }
		{#if service.commitment.start }
			<Chunk wrap start={parseDate(service.commitment.start).getFullYear()} stop={service.commitment.end === null ? null : parseDate(service.commitment.end).getFullYear()} header={service.title} two={service.committee} three={service.description} />
		{/if}
	{/each}

	<h3>Regional Service</h3>

	{#each $profile.getService(service => service.level === "regional", service => service.commitment.end ? -(parseDate(service.commitment.end).getTime()) : Number.NEGATIVE_INFINITY) as service }
		{#if service.commitment.start }
			<Chunk wrap start={parseDate(service.commitment.start).getFullYear()} stop={service.commitment.end === null ? null : parseDate(service.commitment.end).getFullYear()} header={service.title} two={service.committee} three={service.description} />
		{/if}
	{/each}

	<h3>University Service</h3>

	{#each $profile.getService(service => service.level === "university", service => service.commitment.end ? -(parseDate(service.commitment.end).getTime()) : Number.NEGATIVE_INFINITY) as service }
		{#if service.commitment.start }
			<Chunk wrap start={parseDate(service.commitment.start).getFullYear()} stop={service.commitment.end === null ? null : parseDate(service.commitment.end).getFullYear()} header={service.title} two={service.committee} three={service.description} />
		{/if}
	{/each}

	<h3>Departmental Service</h3>

	{#each $profile.getService(service => service.level === "departmental", service => service.commitment.end ? -(parseDate(service.commitment.end).getTime()) : Number.NEGATIVE_INFINITY) as service }
		{#if service.commitment.start }
			<Chunk wrap start={parseDate(service.commitment.start).getFullYear()} stop={service.commitment.end === null ? null : parseDate(service.commitment.end).getFullYear()} header={service.title} two={service.committee} three={service.description} />
		{/if}
	{/each}

</div>