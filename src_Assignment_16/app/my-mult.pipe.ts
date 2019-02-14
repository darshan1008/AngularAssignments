import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform
{

  transform(value: number=0 , args: number=0 ): number 
  {
    var mult : number = value * args;
    return mult;
  }
}
