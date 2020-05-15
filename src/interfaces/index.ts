export interface Day {
    start: string;
    end?: string;
    hours: string[];
}

export interface APIDay {
    start: string;
    end: string;
    type: string;
}

export const DAYS_OF_WEEK = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
];