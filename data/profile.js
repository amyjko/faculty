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

		// Initialize a list of publication tags
		this.json.publicationTags = {};

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
				pub.source = this.json.sources[pub.source.substring(1)];
				pub.sourceName = pub.source ? pub.source.name : undefined
			}
			else {
				pub.source = { "name": pub.source };
				pub.sourceName = pub.source;
			}

			// Initialize a list of tags for the paper.
			pub.tags = [];

			// If there's one or more award, tag it as award winnning.
			if(pub.award && pub.award.length > 0) 
				pub.tags.push("Award-winning");
			
			// If the source has a short name, it must be important, so tag it with the acronym
			if(pub.source.short)
				pub.tags.push(pub.source.short);
		
			// Annotate the paper tags for all the projects that reference it.
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