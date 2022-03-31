import { Component } from '@angular/core';



@Component(
    {
        selector: "app-student",
        templateUrl: './student.component.html',
        styleUrls: ['./student.component.css']
    }
)
export class StudentComponent {
    name: string = "Hector";
    score: number = 99;
    age: number = 34;

    GetBirthDay() {
        return new Date().getFullYear() - this.age;
    }

}


