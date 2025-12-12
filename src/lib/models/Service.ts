import type { Commitment } from './Commitment';

export type Service = {
    title: string;
    committee: string;
    level:
        | 'departmental'
        | 'university'
        | 'regional'
        | 'national'
        | 'international'
        | 'open source';
    description: string;
    commitment: Commitment;
};
