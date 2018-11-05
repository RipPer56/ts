import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idPipe',
})
export class IdPipe implements PipeTransform {

  transform(value: string) {
    return "#" + value;
  }
}
