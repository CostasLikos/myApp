import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nobel } from './models';



@Injectable({
  providedIn: 'root'
})
export class NobelService {

  constructor(private httpService: HttpClient) { }

  private URL: string = "https://api.nobelprize.org/v1/prize.json?";

  getNobel(): Observable<Nobel> {
    return this.httpService.get<Nobel>(this.URL);
  }

}
