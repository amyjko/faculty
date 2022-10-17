import type { Class } from "./Class";
import type { CommitmentDetails } from "./CommitmentDetails";
import type { DoctoralCommittee } from "./DoctoralCommittee";
import type { Editing } from "./Editing";
import type { Funding } from "./Funding";
import type { Impact } from "./Impact";
import type { Job } from "./Job";
import type { Person } from "./Person";
import type { Post } from "./Post";
import type ProfileSpec from "./ProfileSpec";
import type { Project } from "./Project";
import type { Paper } from "./Paper";
import type { Recognition } from "./Recognition";
import type { Reviewing } from "./Reviewing";
import type { Service } from "./Service";
import type { Talk } from "./Talk";
import type { Travel } from "./Travel";

export default class Profile {

	readonly json: ProfileSpec;

    constructor(json: ProfileSpec) {

        this.json = json;

    }

	cloneFilterSort<Type>(list: Type[], filter?: (list: Type) => boolean, sort?: (list: Type) => number) {
		list = list.slice()
		if(filter)
			list = list.filter(filter)
		if(sort)
			list = list.sort((a, b) => sort.call(undefined, a) - sort.call(undefined, b))
		return list
	}
	
	getSource(id: string) {
		return id.startsWith("@") && id.substring(1) in this.json.sources ? this.json.sources[id.substring(1)] : null;
	}

	getSourceName(id: string) {
		const source = this.getSource(id);
		return source ? source.name : id;		
	}

	// Get a list of filtered and sorted people.
	getPeople(filter?: (list: Person) => boolean, sort?: (list: Person) => number) { 
		return this.cloneFilterSort(this.json.people.slice(), filter, sort);
	}

	// Find the first person matching the given ID.
	getPerson(id: string) {
		// Strip the @
		id = id.substring(1);
		return this.json.people.find(person => person.id === id);
	}

	getPersonName(id: string) {
		const person = this.getPerson(id);
		return person ? person.name : id;
	}

	getPaperTags(paper: Paper): Record<string, string[]> {

		const source = this.getSource(paper.source);

		return {
			// Add the kind of publication
			"kind": [ paper.kind ],
			// If the source has a short name, add a tag
			"source": source ? [ source.short ] : [],
			// Add the paper's awards as tags
			"award": paper.award ? paper.award.slice() : [],
			// Add the paper's projects
			"project": this.getProjects(project => project.papers.indexOf(paper.id) >= 0).map(project => project.shortName)
		};

	}

	getPostTags(): Record<string, string[]> {

		// Accumulate post tags
		const postTags: Record<string, string[]> = {"topic": []};
		this.json.posts.forEach(post =>
			postTags.topic = Array.from(new Set(postTags.topic.concat(post.tags)))
		);
		return postTags;
		
	}

	getPostMontYear(post: Post) {
		const parts = post.date.split(".");
		return { year: parseInt(parts[0]), month: parseInt(parts[1]) };
	}

	getPersonImagePath(id: string) {
		return "/images/headshots/mug-" + id + ".jpg";
	}

	// Get a list of filtered and sorted travel.
	getTravel(filter?: (travel: Travel) => boolean, sort?: (travel: Travel) => number) { 
		return this.cloneFilterSort(this.json.travel.slice(), filter, sort);
	}

	// Get a list of filtered and sorted projects.
	getProjects(filter?: (p: Project) => boolean, sort?: (p: Project) => number) { 
		return this.cloneFilterSort(this.json.projects.slice(), filter, sort);
	}
	
	// Find the project with the matching id.
	getProject(id: string) {
		return this.json.projects.find(p => p.id === id);
	}

	// Get the list of publication tags applied to all publications.
	getPublicationFacets() {
		// Initialize a list of publication tags
		const publicationFacets: Record<string, string[]> = {};

		// Annotate publications with synthesized tags.
		// Resolve author references to people records.
		// Add the tags to the publication tags dictionary.
		this.getPublications().forEach(pub => {

			const tags = this.getPaperTags(pub)

			// Accumulate post tags by going through each facet and adding the publication's
			Object.keys(tags).forEach(facet => {
				publicationFacets[facet] = 
					Array.from(new Set(tags[facet].concat(facet in publicationFacets ? publicationFacets[facet] : [])))
			});
			
		});

		return publicationFacets;
		
	}

	// Get the list of impacts.
	getImpacts(filter: (i: Impact) => boolean, sort: (i: Impact) => number) { 
		return this.cloneFilterSort(this.json.impacts.slice(), filter, sort);
	}

	// Get the list of populations.
	getPopulations() { return this.json.populations.slice(); }

	// Get a list of filtered and sorted projects.
	getPosts(filter: (p: Post) => boolean, sort: (p: Post) => number) { 
		return this.cloneFilterSort(this.json.posts.slice(), filter, sort);
	}
    
	// Get a list of filtered and sorted publications.
	getPublications(filter?: (p: Paper) => boolean, sort?: (p: Paper) => number) { 
		return this.cloneFilterSort(this.json.pubs.slice(), filter, sort);
	}
	
    getPublication(id: string) {
        return this.json.pubs.find(p => p.id = id);
    }

	// Get the list of talks.
	getTalks(filter?: (p: Talk) => boolean, sort?: (p: Talk) => number) { 
		return this.cloneFilterSort(this.json.talks.slice(), filter, sort);
	}
		
	// Get the list of year contexts.
	getYearContexts() { return this.json.years; }

	// See if a given facet query matches a given set of facets
	tagsMatch(query: Record<string, string>, tags: Record<string, string[]>) {

		// Go through each facet in the query
		return Object.keys(query).reduce((match, facet) => match && tags[facet].includes(query[facet]), true);

	}

	getFunding(filter?: (f: Funding) => boolean, sort?: (f: Funding) => number) {
		return this.cloneFilterSort(this.json.funding.slice(), filter, sort);
	}

	getGrant(id: string) {
		return this.json.funding.find(g => g.id === id.substring(1));
	}

	getDegrees() {
		return this.json.degrees.slice();
	}

	getPatents() {
		return this.json.patents.slice();
	}

	getJobs(filter: (p: Job) => boolean, sort: (p: Job) => number) {
		return this.cloneFilterSort(this.json.jobs.slice(), filter, sort);
	}

	getRecognitions(filter?: (p: Recognition) => boolean, sort?: (p: Recognition) => number) {
		return this.cloneFilterSort(this.json.recognitions.slice(), filter, sort);
	}

	getEditing(filter?: (p: Editing) => boolean, sort?: (p: Editing) => number) {
		return this.cloneFilterSort(this.json.editing.slice(), filter, sort);
	}

	getReviewing(filter?: (p: Reviewing) => boolean, sort?: (p: Reviewing) => number) {
		return this.cloneFilterSort(this.json.reviewing.slice(), filter, sort);
	}

	getDoctoralCommmitees(filter?: (p: DoctoralCommittee) => boolean, sort?: (p: DoctoralCommittee) => number) {
		return this.cloneFilterSort(this.json.doctoralCommittees.slice(), filter, sort);
	}

	getClasses(filter?: (p: Class) => boolean, sort?: (p: Class) => number) {
		return this.cloneFilterSort(this.json.classes.slice(), filter, sort);
	}

	getService(filter?: (p: Service) => boolean, sort?: (p: Service) => number) {
		return this.cloneFilterSort(this.json.service.slice(), filter, sort);
	}

	getCommitments(filter?: (p: CommitmentDetails) => boolean, sort?: (p: CommitmentDetails) => number) {
		return this.cloneFilterSort(this.json.commitments.slice(), filter, sort);
	}

	getPanels() {
		return this.cloneFilterSort(this.json.panels.slice());
	}

}

export { Profile };