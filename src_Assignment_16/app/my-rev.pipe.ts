import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform 
{

  temp:string [] ;
  iCounter1 :number = 0 ;
  iCounter2 : number = 0;

  transform(value: any): any 
  {
    this.temp =value;
   /* 
    while(value[this.iCounter1] != '\0')
    {
      console.log("1st while");
        this.iCounter1++;
    }
    while(this.iCounter1 >= 0)
    {
      this.temp[this.iCounter2] = this.temp[this.iCounter1];
      this.iCounter1--;
      this.iCounter2++;
    }
*/
    return this.temp;
  }

}
