import type { Commitment } from "./Commitment";

export type Editing = {
	title: string;
	type: "journal" | "conference";
	venue: string;
	commitment: Commitment;
};
