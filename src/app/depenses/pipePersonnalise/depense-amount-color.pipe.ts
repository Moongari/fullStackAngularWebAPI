import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'depenseAmountColor'
})
export class DepenseAmountColorPipe implements PipeTransform {

  transform(type: number): string {

    let color:string|undefined;

    switch(type){
      case 100:
        color='Black';
        break;
      case 130:
          color='Red';
          break;
      case 40:
          color='Blue';
          break;
    }

    return 'color:'+ color;
  }

}
