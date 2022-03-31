export interface Nobel {
    prizes: Prize[];
}

export interface Prize {
    year: (string | number);
    category: string;
    overallMotivation?: string;
    laureates?: Laureate[];
}

export interface Laureate {
    id: (string | number);
    firstname: string;
    surname?: string;
    motivation: string;
    share: (string | number);
}