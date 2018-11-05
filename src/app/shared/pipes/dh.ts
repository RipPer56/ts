import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dhPipe',
})
export class DhPipe implements PipeTransform {

  transform(value: string) {
    return value + " Dhs";
  }
}
