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
		this.json.talks.forEach(talk => talk.date = this.parseDate(talk.date));

		// Parse panel dates.
		this.json.panels.forEach(panel => panel.date = this.parseDate(panel.date));

		// Parse service
		this.json.service.forEach(service => service.commitment = this.parseCommitment(service.commitment));

		// Parse funding
		this.json.funding.forEach(funding => funding.commitment = this.parseCommitment(funding.commitment));

		// Parse travel
		this.json.travel.forEach(travel => travel.travel = this.parseCommitment(travel.commitment));

		// Parse commitments
		this.json.commitments.forEach(commitment => commitment.commitment = this.parseCommitment(commitment.commitment));

		// Parse editing
		this.json.editing.forEach(role => {
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
		this.json.reviewing.forEach(role => {
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
		this.json.pubs.forEach(pub => {
		
			// Resolve symbolic author names to a pointer to the person record.
			pub.authors = pub.authors.map(author => 
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
				"project": this.getProjects(project => project.papers.indexOf(pub.id) >= 0).map(project => project.shortName)
			};
			
			// Accumulate post tags by going through each facet and adding the publication's
			Object.keys(pub.tags).forEach(facet => {
				// Union the tags
				this.json.publicationFacets[facet] = 
					Array.from(new Set(pub.tags[facet].concat(facet in this.json.publicationFacets ? this.json.publicationFacets[facet] : [])))
			});
			
		});

		// Parse post years and months.
		// Compute months and dates from strings.
		this.json.posts.forEach(post => {
			var parts = post.date.split(".");
			post.year = parseInt(parts[0]);
			post.month = parseInt(parts[1]);
		});

		// Accumulate post tags
		this.json.postTags = {"topic": []};
		this.json.posts.forEach(post =>
			this.json.postTags.topic = Array.from(new Set(this.json.postTags.topic.concat(post.tags)))
		);

		// Resolve funding links in projects.
		this.json.projects.forEach(project => {

			// Resolve funding links.
			project.funding = project.funding.map(funding => {
				let grant = this.getGrant(funding.substring(1));
				if(!grant)
					console.error("Couldn't find grant " + funding);
				return grant;
			});

			// Resolve people links.
			project.people = project.people.map(person => {
				let peep = this.getPerson(person.substring(1));
				if(!peep)
					console.error("Couldn't find person " + person);
				return peep;
			});

		});

    }

	cloneFilterSort(list, filter, sort) {
		list = list.slice()
		if(filter)
			list = list.filter(filter)
		if(sort)
			list = list.sort((a, b) => sort.call(undefined, a) - sort.call(undefined, b))
		return list
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
		return this.json.people.find(person => person.id === id);
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
		return this.json.projects.find(p => p.id === id);
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
        return this.json.pubs.find(p => p.id = id);
    }

	// Get the list of talks.
	getTalks(filter, sort) { 
		return this.cloneFilterSort(this.json.talks.slice(), filter, sort);
	}

	// Get the list of panels.
	getPanels(filter, sort) { 
		return this.cloneFilterSort(this.json.panels.slice(), filter, sort);
	}
	
	// Get the list of classes.
	getClasses() { return this.json.classes; }
		
	// Get the list of year contexts.
	getYearContexts() { return this.json.years; }

	// See if a given facet query matches a given set of facets
	tagsMatch(query, tags) {

		// Go through each facet in the query
		return Object.keys(query).reduce((match, facet) => match && tags[facet].includes(query[facet]), true);

	}

	getFunding(filter, sort) {
		return this.cloneFilterSort(this.json.funding.slice(), filter, sort);
	}

	getGrant(id) {
		return this.json.funding.find(g => g.id === id);
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