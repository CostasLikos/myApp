import { Component, OnInit } from '@angular/core';
import { employees } from './employeeMockup';
import { Employee } from './employeeModel';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  ToggleInfo() {
    this.isHiddenInfo = !this.isHiddenInfo;
    console.log(this.Username);
  }

  isHiddenInfo: boolean = true;

  FontSize: number = 12;
  IncreaseSize() {
    this.FontSize += 10;
  }

  DecreaseSize() {
    this.FontSize -= 10;
  }

  Username: string = "Hector"





























  Employees: Employee[] = [];

  Names: string[] = ["Mirella", "Kostis", "Fanis"];

  a: number = 5;
  b: number = 2;

  isAbleVote: boolean = true;

  Message: string = "No Records Found"

  PhotoUrl: string = "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80";

  Width: number = 200;

  Titlos: string = "Fotografia diakopon";

  BorderRadius: number = 30;

  Size: number = 40;

  constructor() { }

  ngOnInit(): void {
  }

}
