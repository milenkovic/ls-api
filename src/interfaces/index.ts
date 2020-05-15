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

export interface Place {
    openingHours: Day[],
    name: string,
    address: string,
    id: string
}