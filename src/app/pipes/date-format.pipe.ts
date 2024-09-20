import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date, format: string = 'medium'): string {
    if (!value) return '';

    const options: Intl.DateTimeFormatOptions = {
      month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'
    };

    return new Intl.DateTimeFormat('en-US', options).format(value);
  }

}
