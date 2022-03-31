import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fulltime'
})
export class FulltimePipe implements PipeTransform {

 
  transform(value: number): string {

   
    return Math.floor(value / 60).toString() + "h " + (value % 60).toString() + "min";

  }

}
