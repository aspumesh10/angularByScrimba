import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name : 'capitalize'})
export class CapitalizePipe implements PipeTransform {
  transform(value: string) {
    return value.split(' ').map(value => value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()).join(' ');
  }
}