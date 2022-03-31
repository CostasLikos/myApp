import { IActor, IDirector, IGenre, IMovie } from './models'

let m1: IMovie = {
    title: 'Titanic',
    photoUrl: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UY720_.jpg',
    year: new Date(1998, 4, 3),
    rating: 7.2,
    price: 18,
    duration: 170,
    director: { firstName: "James", lastName: "Cameron" },
    actors: [
        { firstName: "Leonardo", lastName: "Di Caprio" },
        { firstName: "Kate", lastName: "Winslet" },
    ],
    genres: [{ kind: "Drama" }, { kind: "Romance" }]
}

let m2: IMovie = {
    title: 'Avatar',
    photoUrl: 'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_FMjpg_UX510_.jpg',
    year: new Date(2009, 6, 5),
    rating: 8.5,
    price: 25,
    duration: 240,
    director: { firstName: "James", lastName: "Cameron" },
    actors: [
        { firstName: "Sam", lastName: "Worthington" },
        { firstName: "Zoe", lastName: "Saldana" },
    ],
    genres: [{ kind: "Action" }, { kind: "Adventure" }, { kind: "Fantasy" }]
}

export let movies: IMovie[] = [m1, m2];