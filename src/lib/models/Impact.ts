
export type Impact = {
	kind: "press" | "product" | "knowledge" | "consulting" | "curriculum" | "resource" | "policy" | "community" | "social";
	start: number;
	end: number | null;
	description: string;
	url: string | null;
	who: "public" | "industry" | "engineers" | "learningtech" | "academia" | "cer" | "k12cs" | "k12cswa" | "k12csps";
	title?: string;
	author?: string;
	source?: string;
};
