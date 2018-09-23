import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any) {
    //let textRev = value.split(' ')
    return value.split('').reverse().join('');
  }

}
