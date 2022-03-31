import { Component, OnInit } from '@angular/core';
import { user } from './githubMockup';
import { User } from './githubUser';
import { GithubService } from './github.service';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  User!: User;   //Ayto einai aparadekto, tha prepei na to dinei ena REPOSITORY SERVICE



  constructor(private githubService: GithubService) { } //Declaration githubService , instantiation , DI  

  SearchName!: string;

  ShowUser() {

    this.githubService.getUser(this.SearchName).subscribe(
      data => this.User = data,               //OnSuccess  or OnFullfilled
      error => console.log(error),            //OnError  
      () => console.log("Teliose i diadikasia")  //OnAlways 
    );


  }
  ngOnInit(): void {

  }

}
