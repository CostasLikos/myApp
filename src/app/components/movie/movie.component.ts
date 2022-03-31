import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { IMovie } from './models';
import { movies } from './movieMockup'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnChanges, OnDestroy {

  Movies: IMovie[];
  FilteredMovies!: IMovie[];
  SearchTitle!: string;

  constructor() {
    this.Movies = movies;
    this.FilteredMovies = this.Movies;
    console.log("Eimai i Movies Constructor");
  }
  ngOnDestroy(): void {
    console.log("Eimai i Movies OnDestroy");
  }
  ngOnChanges(): void {
    console.log("Eimai i Movies OnChanges");
  }
  ngOnInit(): void {
    console.log("Eimai i Movies OnInit");
  }



  FilterMovies() {
    this.FilteredMovies = this.FilteredMovies = this.Movies.filter(x => x.title.toUpperCase().includes(this.SearchTitle.toUpperCase()))
  }

  PriceIsHidden: boolean = true;
  TogglePrice() {
    this.PriceIsHidden = !this.PriceIsHidden;
  }

  BorderRadius: number = 0;




}
