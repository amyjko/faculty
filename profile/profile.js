import _ from 'lodash';

class Profile {

	parseCommitment(commitment) {
		if(commitment.start)
			commitment.start = this.parseDate(commitment.start);
		if(commitment.end)
			commitment.end = this.parseDate(commitment.end);
		return commitment;
	}

	parseDate(dateString) {
		let parts = dateString.split("-");
		if(parts.length === 2)
			return {
				month: parseInt(parts[0]),
				date: parseInt(parts[1])
			};
		else
			return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
	}

    constructor(json) {

        this.json = json;

		// Parse talk dates.
		_.each(this.json.talks, talk => talk.date = this.parseDate(talk.date));

		// Parse service
		_.each(this.json.service, service => service.commitment = this.parseCommitment(service.commitment));

		// Parse funding
		_.each(this.json.funding, funding => funding.commitment = this.parseCommitment(funding.commitment));

		// Parse travel
		_.each(this.json.travel, travel => travel.travel = this.parseCommitment(travel.commitment));

		// Parse commitments
		_.each(this.json.commitments, commitment => commitment.commitment = this.parseCommitment(commitment.commitment));

		// Parse editing
		_.each(this.json.editing, role => {
			if(role.venue.charAt(0) === "@") {
				let conf = this.getSource(role.venue);
				if(!conf)
					console.error("Couldn't find publication source " + role.venue);
				else
					role.venue = conf.name;
			}
			if(role.commitment)
				role.commitment = this.parseCommitment(role.commitment);
		})
		
		// Parse reviewing
		_.each(this.json.reviewing, role => {
			if(role.venue.charAt(0) === "@") {
				let conf = this.getSource(role.venue);
				if(!conf)
					console.error("Couldn't find publication source " + role.venue);
				else
					role.venue = conf.name;
			}
			if(role.commitment)
				role.commitment = this.parseCommitment(role.commitment);
		})

		// Initialize a list of publication tags
		this.json.publicationFacets = {};

		// Annotate publications with synthesized tags.
		// Resolve author references to people records.
		// Add the tags to the publication tags dictionary.
		_.each(this.json.pubs, pub => {
		
			// Resolve symbolic author names to a pointer to the person record.
			pub.authors = _.map(
				pub.authors, 
				author => 
					author.charAt(0) === "@" ?
						this.getPerson(author.substring(1)) :
						author
			);

			// Resolve symbolic source names to a pointer to the source record.
			if(pub.source.charAt(0) === "@") {
				pub.source = this.getSource(pub.source);
				pub.sourceName = pub.source ? pub.source.name : undefined
			}
			else {
				pub.source = { "name": pub.source };
				pub.sourceName = pub.source;
			}

			// Initialize a list of tags for the paper.
			pub.tags = {
				// Add the kind of publication
				"kind": [ pub.kind ],
				// If the source has a short name, add a tag
				"source": pub.source.short ? [ pub.source.short ] : [],
				// Add the paper's awards as tags
				"award": pub.award ? pub.award.slice() : [],
				// Add the paper's projects
				"project": _.map(this.getProjects(project => project.papers.indexOf(pub.id) >= 0), project => project.shortName)
			};
			
			// Accumlate post tags by going through each facet and adding the publication's
			_.each(Object.keys(pub.tags), facet => {
				this.json.publicationFacets[facet] = 
					_.union(pub.tags[facet], facet in this.json.publicationFacets ? this.json.publicationFacets[facet] : []);
			});
			
		});

		// Parse post years and months.
		// Compute months and dates from strings.
		_.each(this.json.posts, post => {
			var parts = post.date.split(".");
			post.year = parseInt(parts[0]);
			post.month = parseInt(parts[1]);
		});

		// Accumlate post tags
		this.json.postTags = {"topic": []};
		_.each(this.json.posts, post =>
			this.json.postTags.topic = _.union(this.json.postTags.topic, post.tags)
		);

		// Resolve funding links in projects.
		_.each(this.json.projects, project => {

			// Resolve funding links.
			project.funding = _.map(project.funding, funding => {
				let grant = this.getGrant(funding.substring(1));
				if(!grant)
					console.error("Couldn't find grant " + funding);
				return grant;
			});

			// Resolve people links.
			project.people = _.map(project.people, person => {
				let peep = this.getPerson(person.substring(1));
				if(!peep)
					console.error("Couldn't find person " + person);
				return peep;
			});

		});

    }

	cloneFilterSort(list, filter, sort) {
		return _.sortBy(_.filter(list.slice(), filter), sort);
	}
	
	getSource(id) {
		return id.substring(1) in this.json.sources ? this.json.sources[id.substring(1)] : null;
	}

	// Get a list of filtered and sorted people.
	getPeople(filter, sort) { 
		return this.cloneFilterSort(this.json.people.slice(), filter, sort);
	}

	// Find the first person matching the given ID.
	getPerson(id) {
		return _.find(this.json.people, person => person.id === id);
	}

	getPersonImagePath(id) {
		return "/images/headshots/mug-" + id + ".jpg";
	}

	// Get a list of filtered and sorted travel.
	getTravel(filter, sort) { 
		return this.cloneFilterSort(this.json.travel.slice(), filter, sort);
	}

	// Get a list of filtered and sorted projects.
	getProjects(filter, sort) { 
		return this.cloneFilterSort(this.json.projects.slice(), filter, sort);
	}
	
	// Find the project with the matching id.
	getProject(id) {
		return _.find(this.json.projects, { 'id': id });
	}

	// Get the list of publication tags applied to all publications.
	getPublicationFacets() {
		return this.json.publicationFacets;
	}

	// Get the list of impacts.
	getImpacts(filter, sort) { 
		return this.cloneFilterSort(this.json.impacts.slice(), filter, sort);
	}

	// Get the list of populations.
	getPopulations() { return this.json.populations.slice(); }

	// Get a list of filtered and sorted projects.
	getPosts(filter, sort) { 
		return this.cloneFilterSort(this.json.posts.slice(), filter, sort);
	}

	// Get a dictionary of all tags on blog posts.
	getPostTags() {
		return this.json.postTags;
	}

	// Get the CV data structure
	getCV() { return this.json.cv; }
    
	// Get a list of filtered and sorted publications.
	getPublications(filter, sort) { 
		return this.cloneFilterSort(this.json.pubs.slice(), filter, sort);
	}
	
    getPublication(id) {
        return _.find(this.json.pubs, { id: id });
    }

	// Get the list of talks.
	getTalks(filter, sort) { 
		return this.cloneFilterSort(this.json.talks.slice(), filter, sort);
	}

	// Get the list of classes.
	getClasses() { return this.json.classes; }
	
	// Get the list of books.
	getBooks() { return this.json.books; }
	
	// Get the list of year contexts.
	getYearContexts() { return this.json.years; }

	// See if a given facet query matches a given set of facets
	tagsMatch(query, tags) {

		// Go through each facet in the query
		return _.reduce(Object.keys(query), (match, facet) => match && tags[facet].includes(query[facet]), true);

	}

	getFunding(filter, sort) {
		return this.cloneFilterSort(this.json.funding.slice(), filter, sort);
	}

	getGrant(id) {
		return _.find(this.json.funding, { id: id });
	}

	getDegrees() {
		return this.json.degrees.slice();
	}

	getPatents() {
		return this.json.patents.slice();
	}

	getPress(filter, sort) {
		return this.cloneFilterSort(this.json.press.slice(), filter, sort);
	}

	getJobs(filter, sort) {
		return this.cloneFilterSort(this.json.jobs.slice(), filter, sort);
	}

	getRecognitions(filter, sort) {
		return this.cloneFilterSort(this.json.recognitions.slice(), filter, sort);
	}

	getEditing(filter, sort) {
		return this.cloneFilterSort(this.json.editing.slice(), filter, sort);
	}

	getReviewing(filter, sort) {
		return this.cloneFilterSort(this.json.reviewing.slice(), filter, sort);
	}

	getAcademicChairing(filter, sort) {
		return this.cloneFilterSort(this.json.academicChair.slice(), filter, sort);
	}

	getDoctoralCommmitees(filter, sort) {
		return this.cloneFilterSort(this.json.doctoralCommittees.slice(), filter, sort);
	}

	getClasses(filter, sort) {
		return this.cloneFilterSort(this.json.classes.slice(), filter, sort);
	}

	getService(filter, sort) {
		return this.cloneFilterSort(this.json.service.slice(), filter, sort);
	}

	getCommitments(filter, sort) {
		return this.cloneFilterSort(this.json.commitments.slice(), filter, sort);
	}

}

export { Profile };