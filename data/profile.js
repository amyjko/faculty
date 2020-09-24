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

		// Annotate publications with tags, including projects that reference a paper,
		// award winning papers, papers published at particular conferences, journal/conference/chapter
		this.json.publicationTags = {};
		_.each(this.json.pubs, pub => {
		
			pub.tags = [];
			// If there's one or more award...
			if(pub.award && pub.award.length > 0) pub.tags.push("Award-winning");
			
			// If there's an acronymn in the source name
			if(pub.source.indexOf("(SIGCSE)") >= 0) pub.tags.push("SIGCSE");
			if(pub.source.indexOf("(CHI)") >= 0) pub.tags.push("CHI");
			if(pub.source.indexOf("(ICSE)") >= 0) pub.tags.push("ICSE");
			if(pub.source.indexOf("(ICER)") >= 0) pub.tags.push("ICER");
			if(pub.source.indexOf("(UIST)") >= 0) pub.tags.push("UIST");
		
			// Annotate the paper with all the projects that reference it.
			_.each(
				this.getProjects(
					project => project.papers.indexOf(pub.id) >= 0
				), project => pub.tags.push(project.name)
			);
		
			// Tally tags.
			_.each(
				pub.tags, 
				tag => this.json.publicationTags[tag] = tag in this.json.publicationTags ? this.json.publicationTags[tag] + 1 : 1
			);
			
		});

		// Parse post years and months.
		// Compute months and dates from strings.
		_.each(this.json.posts, post => {
			var parts = post.date.split(".");
			post.year = parseInt(parts[0]);
			post.month = parseInt(parts[1]);
		});

		// Accumlate post tags
		this.json.postTags = {};
		_.each(this.json.posts, post =>
			_.each(post.tags, tag => this.json.postTags[tag] = tag in this.json.postTags ? this.json.postTags[tag] + 1 : 1)
		);

    }

	cloneFilterSort(list, filter, sort) {
		return _.sortBy(_.filter(list.slice(), filter), sort);
	}

	// Get a list of filtered and sorted people.
	getPeople(filter, sort) { 
		return this.cloneFilterSort(this.json.people.slice(), filter, sort);
	}

	// Find the first person matching the given ID.
	getPerson(id) {
		return _.find(this.json.people, person => person.id === id);
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
	getPublicationTags() {
		return this.json.publicationTags;
	}

	// Get the list of impacts.
	getImpacts() { return this.json.impacts; }

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

}

export { Profile };