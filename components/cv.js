import React from 'react';
import _ from "lodash";
import {Paper} from "./paper";

class Chunk extends React.Component {
	
	convertArrayToNote(data) {
		
		if(data && _.isArray(data))
				return _.map(data, (entry, index) => { return <small key={"note" + index}>&ndash;{entry}<br/></small>; });
		else
			return data;
		
	}
		
	render() {
	
		var end = "";
		if(this.props.stop !== "none" && this.props.start !== this.props.stop)
			end = "-" + (this.props.stop === null ? "present" : this.props.stop);

		var three = this.convertArrayToNote(this.props.three);
		var four = this.convertArrayToNote(this.props.four);
		var five = this.convertArrayToNote(this.props.five);
		var six = this.convertArrayToNote(this.props.six);

		return (
			<div className="row">
				<div className="col-md-2 date">
					{this.props.start}{end}
				</div>
				<div className="col-md-10">
					<strong>{this.props.header}</strong>
					{this.props.two ? <span><br/>{this.props.two} </span> : null}
					{three ? <div><small>{three}</small></div> : null}
					{four ? <div><small>{four}</small></div> : null}
					{five ? <div><small>{five}</small></div> : null}
					{six ? <div><small>{six}</small></div> : null}
				</div>
			</div>
		);
	}
}

class Vita extends React.Component {
	
	getPapers(kind) {
		
		return _.map(
			this.props.app.getProfile().getPublications(
				pub => pub.kind === kind,
				pub => -pub.year
			),
			(paper, index) => <Paper {...paper} app={this.props.app} key={kind + index} static={true} />
		);

	}
	
getChunkList(list, prefix, start, stop, header, two, three, four, five, six) {
		
		return _.map(list, (entry, index) => {
			return this.getChunk(
				prefix + index, 
				entry[start],
				stop === null ? "none" : entry[stop],
				entry[header],
				entry[two],
				entry[three],
				entry[four],
				entry[five],
				entry[six]
			);
		});
		
	}
	
	getChunk(key, start, stop, header, two, three, four, five, six) {
		
		return <Chunk key={key} start={start} stop={stop} header={header} two={two} three={three} four={four} five={five} six={six}/>;
		
	}
	
	getTable(list, prefix, start, stop, header, detail, secondDetail) {
		
		var rows = _.map(list, (entry, index) => {

			var end = "";
			if(stop !== null && entry[start] !== entry[stop])
				end = "-" + (entry[stop] === null ? "present" : entry[stop]);
			
			return <tr key={prefix+index}>
				<td><span className="date">{entry[start]}{end}</span></td>
				<td><strong>{entry[header]}</strong></td>
				{entry[detail] ? <td>{entry[detail]}</td> : undefined }
				{ entry[secondDetail] ? <td>{entry[secondDetail]}</td> : undefined }
			</tr>;
			
		});
			
		return <table className="table table-striped"><tbody>{rows}</tbody></table>;	
				
	}
	
	render() {
		
		let profile = this.props.app.getProfile();
		var cv = profile.getCV();
		
		return (
			<div className="cv">

				<h1>Amy J. Ko, Ph.D.</h1>
				<div className="lead">
					Professor
					<br/>The Information School
					<br/>University of Washington, Seattle
				</div>
				
				<hr/>
							
				<div className="lead">
					I study equitable ways for humanity to learn the power and perils of computing and harness it for good.
				</div>

				<h2>Education</h2>

				{this.getChunkList(profile.getDegrees(), "degree", "year", null, "degree", "institution", "thesis", "committee")}
	
				<h2>Academic appointments</h2>
				
				{this.getChunkList(profile.getJobs(job => job.academic, job => -job.startdate), "job", "startdate", "enddate", "title", "organization")}

				<h2>Industry appointments</h2>
				
				{this.getChunkList(profile.getJobs(job => !job.academic, job => -job.startdate), "industryJob", "startdate", "enddate", "title", "organization")}

				<h2>Honors, Awards, and Recognitions</h2>

				<h3>Most Influential Paper Awards</h3>

				{this.getChunkList(
					profile.getPublications(
						pub => pub.award && _.includes(pub.award, "most influential paper"),
						pub => -pub.year
					),
					"mostInfluentialPaperAward", 
					"year", 
					null, 
					"title", 
					"sourceName"
					)
				}
			
				<h3>Best Paper Awards</h3>

				{this.getChunkList(
					profile.getPublications(
						pub => pub.award && (_.includes(pub.award, "best paper") || _.includes(pub.award, "best paper honorable mention")),
						pub => -pub.year
					),
					"bestPaperAward", 
					"year", 
					null, 
					"title", 
					"sourceName"
					)
				}
			
				<h3>Honors and Recognitions</h3>

				{this.getTable(profile.getRecognitions(rec => true, rec => -rec.year), "award", "year", null, "title")}

				<h2>Funding</h2>

				{this.getChunkList(profile.getFunding(() => true, funding => -funding.startdate), "funding", "startdate", "enddate", "title", "amount", "funder", "award", "investigators", "description")}

				<h2>Publications</h2>
				
				<p><small>Unlike most of academia, premiere conferences in Human-Computer Interaction (HCI), Software Engineering (SE), and Computing Education are selective venues for archival research. These conferences exceed many journals in their selectivity, visibility, and impact.</small></p>
			
				<p><small>Authorship order indicates the scope of my intellectual contribution to the work. However, because I collaborate closely with my Ph.D. students on research, they are first author on many of my key publications.</small></p>

				<h3>Refereed Conference Papers</h3>

				{this.getPapers("refereed conference paper")}				

				<h3>Journal Articles</h3>
				
				{this.getPapers("journal article")}				
				
				<h3>Short Refereed Conference Papers</h3>
				
				{this.getPapers("refereed short conference paper")}				
			
				<h3>Refereed Workshop Papers</h3>
				
				{this.getPapers("refereed workshop paper")}				

				<h3>Juried Conference Papers</h3>
				
				{this.getPapers("juried conference paper")}				

				<h3>Book Chapters</h3>
				
				{this.getPapers("book chapter")}				

				<h3>Refereed Invited Articles</h3>
				
				{this.getPapers("refereed invited article")}

				<h3>Non-Refereed Workshop Papers</h3>
				
				{this.getPapers("non-refereed workshop paper")}				

				<h3>Technical Reports</h3>
				
				{this.getPapers("technical report")}
				
				<h2>Press</h2>

				{this.getChunkList(
					profile.getImpacts(
						impact => impact.kind === "press",
						impact => -impact.start
					), "press", "start", null, "title", "author", "source")}
				
				<h2>Invited Keynotes</h2>

				{this.getChunkList(
					_.filter(profile.getTalks(), (talk) => { return talk.keynote; }), 
					"keynote", "date", null, "title", "venue")}
				
				<h2>Invited Talks</h2>

				{this.getChunkList(
					_.filter(profile.getTalks(), (talk) => { return !talk.keynote; }), 
					"invitedtalk", "date", null, "title", "venue")}				

				<h2>Patents</h2>
			
				{this.getChunkList(profile.getPatents(), "patent", "year", null, "title", "number", "inventors")}

				<h2>Teaching</h2>

				<p>All scores are <a href="http://www.washington.edu/assessment/course-evaluations/reports/course-reports/adjusted-medians/">adjusted combined medians</a>, which attempt to measure students' perceptions of the effectiveness of an instructor's teaching. The scale is from "Very Poor" (0) to "Excellent" (5).</p>

				{
					_.map(profile.getClasses(), course => 
						<Chunk 
							key={course.id} 
							start={_.orderBy(course.offerings, ["year"], ["asc"])[0].year} stop={_.orderBy(course.offerings, ["year"], ["desc"])[0].year} 
							header={course.number + " " + course.title}
							two={course.level}
							three={course.description}
							four={"Taught " + course.offerings.length + " times"}
							five={"Mean course evaluation: " + (_.reduce(course.offerings, (sum, offer) => sum + offer.score, 0.0) / course.offerings.length).toPrecision(2) + "/5.0"}
						/>
					)					
				}				

				<h2>Doctoral Student Supervision</h2>
				
				<h3>Chair</h3>

				{
					// Get the students and annotate the metadata for presentation.
					this.getChunkList(
						_.forEach(
							profile.getPeople(
								person => person.level === "phd" && person.advised,
								person => person.startdate
							), value => {
							if(value.coadvisor !== null)
								value.coadvisor = "Co-advisor: " + value.coadvisor;
						}), 
						"doctoralChair", 
						"startdate", 
						"enddate", 
						"name", 
						"dept", 
						"coadvisor", 
						"achievements"
					)
				}
				
				<h3>Doctoral Committee Member</h3>

				{this.getTable(profile.getDoctoralCommmitees(), "doctoralCommittee", "startdate", "enddate", "name", "department")}
				
				<h2>Service</h2>

				<h3>Academic Program Chair</h3>
				
				{this.getChunkList(profile.getAcademicChairing(), "academicChair", "startdate", "enddate", "program", "title", "notes")}

				<h3>Journal Editorial Boards</h3>
			
				{this.getChunkList(profile.getEditor(), "editor", "startdate", "enddate", "venue", "title")}

				<h3>Conference Program Chair</h3>

				{this.getChunkList(profile.getProgramChairing(), "programChair", "year", null, "title", "venue", "conference")}

				<h3>Conference Program Committee Member</h3>

				{
					_.map(profile.getProgramCommittees(() => true, cmte => -cmte.years.sort().reverse()[0]), (cmte, index) => 
						<Chunk 
							key={index} 
							start={cmte.years.sort()[0]} 
							stop={cmte.years.sort().reverse()[0]}
							header={cmte.venue}
							two={cmte.role}
						/>
					)					
				}

				<h3>Reviewer</h3>

				{
					_.map(profile.getReviewing(() => true, venue => -venue.years.sort().reverse()[0]), (venue, index) => 
						<Chunk 
							key={index} 
							start={venue.years.sort()[0]} 
							stop={venue.years.sort().reverse()[0]} 
							header={venue.venue}
						/>
					)					
				}

				<h3>Other Service</h3>

				{this.getChunkList(profile.getService(() => true, service => -service.start), "service", "start", "end", "title", "committee")}

			</div>
		)
	}
}

export { Vita };