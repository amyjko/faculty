import type { Commitment } from './Commitment';
import type { CommitmentCategory } from './CommitmentCategory';

export type Funding = {
    id: string;
    title: string;
    funder: string;
    award: string | null;
    category: CommitmentCategory;
    investigators: string;
    amount: string;
    description: string;
    url: string | null;
    private?: boolean;
    commitment: Commitment;
};
