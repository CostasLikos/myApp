import { Component, OnInit } from '@angular/core';
import { ITrainer } from './trainer';
import { trainers } from './trainerMockupData'

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  Trainers: ITrainer[] = trainers;



  constructor() { }

  ngOnInit(): void {
  }

}
