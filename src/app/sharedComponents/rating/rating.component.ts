import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges, OnDestroy {

  @Input() RatingNumber!: number;

  constructor() {
    console.log("Eimai o RATING CONSTRUCTOR");
  }

  starWidth!:number;

  //pinakas!: any[];

  ngOnChanges(): void {
    // console.log("Eimai o RATING ONCHANGES");
    // console.log(this.RatingNumber);

    // this.pinakas = new Array(Math.floor(this.RatingNumber))

    this.starWidth = this.RatingNumber * 150/10;

  }

  ngOnDestroy(): void {
    console.log("Eimai o RATING ONDESTROY");
  }

  ngOnInit(): void {
    console.log("Eimai o RATING ONINIT");
  }

}
