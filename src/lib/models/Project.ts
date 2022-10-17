
export type Project = {
	id: string;
	active: boolean;
	name: string;
	shortName: string;
	description: string;
	funding: string[];
	people: string[];
	papers: string[];
	startdate: number;
	stopdate: number | null;
	links: { title: string; url: string; }[];
};
