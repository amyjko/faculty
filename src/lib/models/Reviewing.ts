import type { Commitment } from "./Commitment";

export type Reviewing = {
	venue: string;
	years: number[];
	level: "reviewer" | "pc" | "chair" | "panelist";
	title?: string;
	commitment?: Commitment;
};
