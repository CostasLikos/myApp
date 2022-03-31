import { Component, Input, OnInit } from '@angular/core';
import { Prize } from '../../components/nobel/models';

@Component({
  selector: 'app-nobel-table',
  templateUrl: './nobel-table.component.html',
  styleUrls: ['./nobel-table.component.css']
})
export class NobelTableComponent implements OnInit {

  @Input()  Prizes!:Prize[];


  constructor() { }

  ngOnInit(): void {
  }

}
