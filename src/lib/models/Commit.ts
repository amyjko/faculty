import type { MonthDate } from '$lib/models/Profile';

type Commit = {
    name: string;
    description: string;
    category: string;
    priority: number;
    hours: number;
    annually: boolean;
    start: Date | MonthDate | null;
    end: Date | MonthDate | null;
};

export type { Commit as default };
