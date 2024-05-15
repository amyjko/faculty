import type { Commitment } from './Commitment';

export type Travel = {
    url?: string;
    title: string;
    details: string;
    category: 'research' | 'service' | 'personal' | 'administrative';
    report?: string;
    commitment: Commitment;
};
