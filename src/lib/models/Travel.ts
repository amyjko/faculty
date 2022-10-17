import type { Commitment } from "./Commitment";


export type Travel = {
	url: string | null;
	title: string;
	details: string;
	category: "research" | "service";
	report: string | null;
	commitment: Commitment;
};
