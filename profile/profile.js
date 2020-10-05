import _ from 'lodash';

class Profile {

    constructor(json) {

        this.json = json;

		// Parse travel dates.
		_.each(this.json.travel, trip => {
			var parts = trip.date.split(".");
			trip.year = parseInt(parts[0]);
			trip.month = parseInt(parts[1]);
			trip.day = parseInt(parts[2]);
			trip.time = (new Date(trip.year, trip.month - 1, trip.day)).getTime();
		});

		// Parse travel dates.
		_.each(this.json.talks, talk => {
			var parts = talk.date.split(".");
			talk.year = parseInt(parts[0]);
			talk.month = parseInt(parts[1]);
			talk.day = parseInt(parts[2]);
			talk.time = (new Date(talk.year, talk.month - 1, talk.day)).getTime();
		});
		
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

		// Convert all dates into objects
        // Label (string), description (string), category (string), start date (date), hours/week (int), [end date] (date), annual (boolean), priority (int)]
		this.json.commitments = _.map(this.json.commitments, commitment => {

			var obj = {
				"name": commitment[0],
				"description": commitment[1],
				"category": commitment[2],
				"priority": commitment[3],
				"hours": commitment[4],
				"annually": commitment[5] === "annually",
				"start": null,
				"end": null
			};

			// Handle annual dates.
			if(obj.annually) {
				let startDate = _.map(commitment[6].split("-"), part => parseInt(part));
				let endDate = _.map(commitment[7].split("-"), part => parseInt(part))
				obj.start = { "month": startDate[0], "date": startDate[1] };
				obj.end = { "month": endDate[0], "date": endDate[1] };
			}
			// Handle weekly commitments with start and end dates.
			else if(commitment.length > 6) {
				obj.start = new Date(commitment[6]);
				obj.end = new Date(commitment[7]);
			}

			return obj;
		});

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

		// Resolve the sources in the program chair positions.
		_.each(this.json.reviewing, role => {
			if(role.venue.charAt(0) === "@") {
				let conf = this.getSource(role.venue);
				if(!conf)
					console.error("Couldn't find publication source " + role.venue);
				else
					role.venue = conf.name;
			}
		})

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
	getTalks() { return this.json.talks; }

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

	getCommitments(filter, sort) {
		return this.cloneFilterSort(this.json.commitments.slice(), filter, sort);
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

	getEditor(filter, sort) {
		return this.cloneFilterSort(this.json.editor.slice(), filter, sort);
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

}

export { Profile };