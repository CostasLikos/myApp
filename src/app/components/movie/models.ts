export interface IMovie {
    title: string;
    photoUrl: string;
    year: Date;
    rating: number;
    price: number;
    duration: number;

    director: IDirector;
    actors: Array<IActor>
    genres: Array<IGenre>
}

export interface IActor {
    firstName: string;
    lastName: string;
}

export interface IDirector {
    firstName: string;
    lastName: string;
}

export interface IGenre {
    kind: string;
}