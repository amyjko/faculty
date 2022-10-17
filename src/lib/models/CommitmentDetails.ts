import type { Commitment } from "./Commitment";
import type { CommitmentCategory } from "./CommitmentCategory";

export type CommitmentDetails = {
	title: string;
	description: string;
	category: CommitmentCategory;
	commitment: Commitment;
	annually: boolean;
};
