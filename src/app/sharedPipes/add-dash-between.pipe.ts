import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addDashBetween'
})
export class AddDashBetweenPipe implements PipeTransform {

  transform(timi: string): string {
    return timi.replace(" ", " - ");
  }

}
