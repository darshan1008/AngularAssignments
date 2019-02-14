import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform 
{
 
  transform(value: number , args: number ): number 
  {
    var sum :number = value + args;
    return sum;
  }

}
