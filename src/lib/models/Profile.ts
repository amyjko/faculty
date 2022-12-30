import type { Class } from './Class';
import type { CommitmentDetails } from './CommitmentDetails';
import type { DoctoralCommittee } from './DoctoralCommittee';
import type { Editing } from './Editing';
import type { Funding } from './Funding';
import type { Impact } from './Impact';
import type { Job } from './Job';
import type Person from './Person';
import type Post from './Post';
import type Paper from './Paper';
import type ProfileSpec from './ProfileSpec';
import type { Recognition } from './Recognition';
import type { Reviewing } from './Reviewing';
import type { Service } from './Service';
import type { Talk } from './Talk';
import type { Travel } from './Travel';
import type Commit from './Commit';
import type { Discovery } from './Discovery';

export default class Profile {
    readonly json: ProfileSpec;

    constructor(json: ProfileSpec) {
        this.json = json;
    }

    cloneFilterSort<Type>(
        list: Type[],
        filter?: (list: Type) => boolean,
        sort?: (list: Type) => number
    ) {
        list = list.slice();
        if (filter) list = list.filter(filter);
        if (sort)
            list = list.sort(
                (a, b) => sort.call(undefined, a) - sort.call(undefined, b)
            );
        return list;
    }

    getSource(id: string) {
        return id.startsWith('@') && id.substring(1) in this.json.sources
            ? this.json.sources[id.substring(1)]
            : null;
    }

    getSourceName(id: string) {
        const source = this.getSource(id);
        return source ? source.name : id;
    }

    // Get a list of filtered and sorted people.
    getPeople(
        filter?: (list: Person) => boolean,
        sort?: (list: Person) => number
    ) {
        return this.cloneFilterSort(this.json.people.slice(), filter, sort);
    }

    // Find the first person matching the given ID.
    getPerson(id: string) {
        // Strip the @
        id = id.substring(1);
        return this.json.people.find((person) => person.id === id);
    }

    getPersonName(id: string) {
        const person = this.getPerson(id);
        return person ? person.name : id;
    }

    getPaperTags(paper: Paper): Record<string, string[]> {
        return {
            // // Add the kind of publication
            // kind: [ paper.kind ],
            // // If the source has a short name, add a tag
            // source: source ? [ source.short ] : [],
            // Add the paper's projects
            tag: this.getDiscoveries(
                (discovery) => discovery.pubs.indexOf(paper.id) >= 0
            )
                .map((discovery) => discovery.tags)
                .reduce((allTags, tags) => [...allTags, ...tags], []),
            // Add the paper's awards as tags
            award: paper.award ? paper.award.slice() : [],
        };
    }

    getPostTags(): Record<string, string[]> {
        // Accumulate post tags
        const postTags: Record<string, string[]> = { topic: [] };
        this.json.posts.forEach(
            (post) =>
                (postTags.topic = Array.from(
                    new Set(postTags.topic.concat(post.tags))
                ))
        );
        return postTags;
    }

    getPostMonthYear(post: Post) {
        const parts = post.date.split('.');
        return { year: parseInt(parts[0]), month: parseInt(parts[1]) };
    }

    // Get a list of filtered and sorted travel.
    getTravel(
        filter?: (travel: Travel) => boolean,
        sort?: (travel: Travel) => number
    ) {
        return this.cloneFilterSort(this.json.travel.slice(), filter, sort);
    }

    getDiscoveries(
        filter?: (p: Discovery) => boolean,
        sort?: (p: Discovery) => number
    ) {
        return this.cloneFilterSort(
            this.json.discoveries.slice(),
            filter,
            sort
        );
    }

    getDiscoveryRange(discovery: Discovery) {
        const years = [];
        for (const id of discovery.pubs) {
            const paper = this.getPublication(id);
            if (paper) years.push(paper.year);
        }
        return [
            Math.min.apply(undefined, years),
            Math.max.apply(undefined, years),
        ];
    }

    // Get the list of publication tags applied to all publications.
    getPublicationFacets() {
        // Initialize a list of publication tags
        const publicationFacets: Record<string, string[]> = {};

        // Annotate publications with synthesized tags.
        // Resolve author references to people records.
        // Add the tags to the publication tags dictionary.
        this.getPublications().forEach((pub) => {
            const tags = this.getPaperTags(pub);

            // Accumulate post tags by going through each facet and adding the publication's
            Object.keys(tags).forEach((facet) => {
                publicationFacets[facet] = Array.from(
                    new Set(
                        tags[facet].concat(
                            facet in publicationFacets
                                ? publicationFacets[facet]
                                : []
                        )
                    )
                );
            });
        });

        return publicationFacets;
    }

    getPeopleFromPubs(pubs: string[]): Person[] {
        const peeps = new Set<string>();
        for (const id of pubs) {
            const paper = this.getPublication(id);
            if (paper)
                for (const author of paper.authors.filter((author) =>
                    author.startsWith('@')
                ))
                    peeps.add(author);
        }
        return Array.from(peeps)
            .map((author) => this.getPerson(author))
            .filter((person) => person !== undefined) as Person[];
    }

    // Get the list of impacts.
    getImpacts(filter: (i: Impact) => boolean, sort: (i: Impact) => number) {
        return this.cloneFilterSort(this.json.impacts.slice(), filter, sort);
    }

    // Get the list of populations.
    getPopulations() {
        return this.json.populations.slice();
    }

    // Get a list of filtered and sorted projects.
    getPosts(filter: (p: Post) => boolean, sort: (p: Post) => number) {
        return this.cloneFilterSort(this.json.posts.slice(), filter, sort);
    }

    // Get a list of filtered and sorted publications.
    getPublications(
        filter?: (p: Paper) => boolean,
        sort?: (p: Paper) => number
    ) {
        return this.cloneFilterSort(this.json.pubs.slice(), filter, sort);
    }

    getPublication(id: string) {
        return this.json.pubs.find((p) => p.id === id);
    }

    // Get the list of talks.
    getTalks(filter?: (p: Talk) => boolean, sort?: (p: Talk) => number) {
        return this.cloneFilterSort(this.json.talks.slice(), filter, sort);
    }

    // Get the list of year contexts.
    getYearContexts() {
        return this.json.years;
    }

    // See if a given facet query matches a given set of facets
    tagsMatch(query: Record<string, string>, tags: Record<string, string[]>) {
        // Go through each facet in the query
        return Object.keys(query).reduce(
            (match, facet) => match && tags[facet]?.includes(query[facet]),
            true
        );
    }

    getFunding(
        filter?: (f: Funding) => boolean,
        sort?: (f: Funding) => number
    ) {
        return this.cloneFilterSort(this.json.funding.slice(), filter, sort);
    }

    getGrant(id: string) {
        return this.json.funding.find((g) => g.id === id.substring(1));
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

    getRecognitions(
        filter?: (p: Recognition) => boolean,
        sort?: (p: Recognition) => number
    ) {
        return this.cloneFilterSort(
            this.json.recognitions.slice(),
            filter,
            sort
        );
    }

    getEditing(
        filter?: (p: Editing) => boolean,
        sort?: (p: Editing) => number
    ) {
        return this.cloneFilterSort(this.json.editing.slice(), filter, sort);
    }

    getReviewing(
        filter?: (p: Reviewing) => boolean,
        sort?: (p: Reviewing) => number
    ) {
        return this.cloneFilterSort(this.json.reviewing.slice(), filter, sort);
    }

    getDoctoralCommmitees(
        filter?: (p: DoctoralCommittee) => boolean,
        sort?: (p: DoctoralCommittee) => number
    ) {
        return this.cloneFilterSort(
            this.json.doctoralCommittees.slice(),
            filter,
            sort
        );
    }

    getClasses(filter?: (p: Class) => boolean, sort?: (p: Class) => number) {
        return this.cloneFilterSort(this.json.classes.slice(), filter, sort);
    }

    getService(
        filter?: (p: Service) => boolean,
        sort?: (p: Service) => number
    ) {
        return this.cloneFilterSort(this.json.service.slice(), filter, sort);
    }

    getCommitments(
        filter?: (p: CommitmentDetails) => boolean,
        sort?: (p: CommitmentDetails) => number
    ) {
        return this.cloneFilterSort(
            this.json.commitments.slice(),
            filter,
            sort
        );
    }

    getPanels() {
        return this.cloneFilterSort(this.json.panels.slice());
    }

    getCommits() {
        const thisYear = new Date().getFullYear();

        // Build a huge list of commitments from the profile
        let commitments: Commit[] = [];

        function commit(
            name: string,
            description: string,
            category: string,
            priority: number,
            hours: number,
            annually: boolean,
            start: Date | MonthDate | null,
            end: Date | MonthDate | null
        ) {
            commitments.push({
                name: name,
                description: description,
                category: category,
                priority: priority,
                hours: hours,
                annually: annually,
                start: start,
                end: end,
            });
        }

        // Start with an list of miscellaneous commitments.
        this.getCommitments().map((com) =>
            commit(
                com.title,
                com.description,
                com.category,
                com.commitment.priority,
                com.commitment.hours,
                com.annually,
                getDateOrNull(com.commitment.start),
                getDateOrNull(com.commitment.end)
            )
        );

        // Add editing responsibilities.
        this.getEditing().forEach((editing) =>
            commit(
                editing.venue,
                editing.title,
                'service',
                editing.commitment.priority,
                editing.commitment.hours,
                false,
                getDateOrNull(editing.commitment.start),
                getDateOrNull(editing.commitment.end)
            )
        );

        // Add service responsibilities.
        this.getService().forEach((service) =>
            commit(
                service.committee,
                service.title,
                'service',
                service.commitment.priority,
                service.commitment.hours,
                false,
                getDateOrNull(service.commitment.start),
                getDateOrNull(service.commitment.end)
            )
        );

        // Add funding responsibilities.
        this.getFunding().forEach((funding) =>
            commit(
                funding.title,
                'Research, collaboration, reporting',
                funding.category,
                funding.commitment.priority,
                funding.commitment.hours,
                false,
                getDateOrNull(funding.commitment.start),
                getDateOrNull(funding.commitment.end)
            )
        );

        // Add travel responsibilities.
        this.getTravel().forEach((trip) =>
            commit(
                trip.title,
                trip.details,
                trip.category,
                trip.commitment.priority,
                trip.commitment.hours,
                false,
                getDateOrNull(trip.commitment.start),
                getDateOrNull(trip.commitment.end)
            )
        );

        // Add talk prep responsibilities (start prep 90 days beforehand)
        this.getTalks().forEach((talk) => {
            let start = new Date(parseDate(talk.date).getTime());
            start.setDate(start.getDate() - 90);
            commit(
                talk.title,
                talk.description,
                'research',
                1,
                1,
                false,
                start,
                parseDate(talk.date)
            );
        });

        // Add reviewing responsibilities.
        this.getReviewing().forEach((reviewing) => {
            // If this has a commitment, add commitments for all current and future years.
            if (reviewing.commitment !== undefined) {
                reviewing.years
                    .filter((year) => year >= thisYear)
                    .forEach((year) => {
                        if (
                            reviewing.commitment !== undefined &&
                            reviewing.commitment.start &&
                            reviewing.commitment.end
                        )
                            commit(
                                reviewing.title ? reviewing.title : 'Reviewer',
                                reviewing.venue,
                                'service',
                                reviewing.commitment.priority,
                                reviewing.commitment.hours,
                                false,
                                new Date(
                                    year,
                                    parseMonthDate(
                                        reviewing.commitment.start
                                    ).month,
                                    parseMonthDate(
                                        reviewing.commitment.start
                                    ).date
                                ),
                                // Handle the year wraparound for end months that are before start months.
                                new Date(
                                    year +
                                        (parseMonthDate(
                                            reviewing.commitment.end
                                        ).month <
                                        parseMonthDate(
                                            reviewing.commitment.start
                                        ).month
                                            ? 1
                                            : 0),
                                    parseMonthDate(
                                        reviewing.commitment.end
                                    ).month,
                                    parseMonthDate(
                                        reviewing.commitment.end
                                    ).date
                                )
                            );
                    });
            }
        });

        // Add teaching responsibilities
        this.getClasses().forEach((course) => {
            course.offerings.forEach((offering) => {
                // If this course is going to be offered this year, add commitments for it
                if (offering.year >= thisYear) {
                    // Add time for preparing to teach the quarter before.
                    commit(
                        course.number + ' Prep',
                        'Curriculum design',
                        'teaching',
                        1,
                        2,
                        false,
                        new Date(
                            offering.year - (offering.term === 2 ? 1 : 0),
                            [6, 9, 0][offering.term - 1],
                            [1, 5, 5][offering.term - 1]
                        ),
                        new Date(
                            offering.year - (offering.term === 2 ? 1 : 0),
                            [8, 11, 3][offering.term - 1],
                            [15, 15, 15][offering.term - 1]
                        )
                    );
                    // Add time for teaching the class the quarter before.
                    commit(
                        course.number,
                        'Teaching and grading',
                        'teaching',
                        1,
                        course.hours,
                        false,
                        new Date(
                            offering.year,
                            [8, 0, 3][offering.term - 1],
                            [15, 1, 1][offering.term - 1]
                        ),
                        new Date(
                            offering.year,
                            [11, 2, 5][offering.term - 1],
                            [15, 15, 15][offering.term - 1]
                        )
                    );
                }
            });
        });

        return commitments;
    }

    getWeeklyCommits() {
        const commitments = this.getCommits();

        var weeks: { date: Date; intersects: Intersection[] }[] = [];

        // Start a date counter with last Monday.
        var currentMonday = getPreviousMonday();
        const yearsToDisplay = 2;

        // Iterate through the next 2 years, week by week.
        for (var count = 1; count < 52 * yearsToDisplay; count++) {
            // Start a list of intersecting commitments
            let intersectingCommitments: Intersection[] = [];

            // Compute Sunday.
            var nextSunday = new Date(
                currentMonday.getTime() + 6 * 24 * 60 * 60 * 1000
            );

            // Which promises occur in this week?
            commitments.forEach((commitment) => {
                // If this is an annual commitment, is this week in it's month range?
                if (commitment.start !== null) {
                    if (commitment.annually) {
                        if (
                            commitment.end &&
                            'month' in commitment.start &&
                            'month' in commitment.end
                        ) {
                            let startMonth = new Date(
                                currentMonday.getFullYear(),
                                commitment.start.month - 1,
                                commitment.start.date
                            );
                            let endMonth = new Date(
                                currentMonday.getFullYear() +
                                    (commitment.end.month <
                                    commitment.start.month
                                        ? 1
                                        : 0),
                                commitment.end.month - 1,
                                commitment.end.date
                            );
                            let overlap = datesIntersect(
                                currentMonday,
                                nextSunday,
                                startMonth,
                                endMonth
                            );
                            if (overlap > 0)
                                intersectingCommitments.push({
                                    commitment: commitment,
                                    overlap: overlap,
                                });
                        }
                    }
                    // If this is a weekly commitment...
                    else {
                        // Does it have a start and end time and does it intersect with the
                        if (
                            commitment.start instanceof Date &&
                            commitment.end instanceof Date
                        ) {
                            let overlap = datesIntersect(
                                currentMonday,
                                nextSunday,
                                commitment.start,
                                commitment.end
                            );
                            if (overlap > 0)
                                intersectingCommitments.push({
                                    commitment: commitment,
                                    overlap: overlap,
                                });
                        }
                        // If it doesn't have a start or end time, then add it.
                        else
                            intersectingCommitments.push({
                                commitment: commitment,
                                overlap: 1,
                            });
                    }
                }
            });

            // Are there any prime commitments this week? If so, remove the flexible commitments.
            if (
                intersectingCommitments.filter(
                    (intersect) => intersect.commitment.priority === 2
                ).length > 0
            )
                intersectingCommitments = intersectingCommitments.filter(
                    (intersect) => intersect.commitment.priority !== 0
                );

            // Add these dcommitments to this week for rendering.
            weeks.push({
                date: currentMonday,
                intersects: intersectingCommitments.sort((a, b) => {
                    if (a.commitment.category !== b.commitment.category)
                        return a.commitment.category.localeCompare(
                            b.commitment.category
                        );
                    else
                        return (
                            a.commitment.hours * a.overlap -
                            b.commitment.hours * b.overlap
                        );
                }),
            });

            // Add a week to the current Monday.
            currentMonday = new Date(
                currentMonday.getTime() + 7 * 24 * 60 * 60 * 1000
            );
        }

        return weeks;
    }
}

export { Profile };

export function parseDate(dateString: string) {
    let parts = dateString.split('-');
    return new Date(
        parseInt(parts[0]),
        parseInt(parts[1]) - 1,
        parseInt(parts[2])
    );
}

export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type MonthDate = { month: Month; date: number };

export function parseMonthDate(dateString: string): MonthDate {
    let parts = dateString.split('-');
    return {
        month: parseInt(parts[0]) as Month,
        date: parseInt(parts[1]),
    };
}

export function getDateOrNull(date: string | null) {
    return date === null ? null : parseDate(date);
}

type Intersection = { commitment: Commit; overlap: number };

function getPreviousMonday() {
    const date = new Date();
    const day = date.getDay();
    let prevMonday;
    if (date.getDay() === 1) {
        prevMonday = new Date().setDate(date.getDate() - 7);
    } else {
        prevMonday = new Date().setDate(date.getDate() - day + 1);
    }

    return new Date(prevMonday);
}

function datesIntersect(
    date1Start: Date,
    date1End: Date,
    date2Start: Date,
    date2End: Date
) {
    // The beginning of the second range is within the first range.
    // Compute the proportion of a week.
    if (
        date2Start.getTime() >= date1Start.getTime() &&
        date2Start.getTime() < date1End.getTime()
    ) {
        return (
            (date1End.getTime() - date2Start.getTime()) /
            1000 /
            60 /
            60 /
            24 /
            7
        );
    }
    // The second range completely subsumes the first range.
    else if (
        date2Start.getTime() < date1Start.getTime() &&
        date2End.getTime() >= date1End.getTime()
    ) {
        return 1;
    }
    // The end of the second range is within the first range.
    else if (
        date2End.getTime() >= date1Start.getTime() &&
        date2End.getTime() < date1End.getTime()
    ) {
        return (
            (date2End.getTime() - date1Start.getTime()) /
            1000 /
            60 /
            60 /
            24 /
            7
        );
    }
    // If none of the above apply, then there is no intersection. Return 0% overlap.
    else {
        return 0;
    }
}
