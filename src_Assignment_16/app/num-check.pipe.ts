import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numCheck'
})
export class NumCheckPipe implements PipeTransform {

  transform(value: any, args: any): string 
  {
    var iNum :number = 2;
    if(args == "even")
    {

      if(value%2 != 0)
        return "It is Odd Number";
      else
        return "It is Even Number";

    }
    else if(args == "prime")
    {
      iNum = 2;

      while(iNum<10)
      {
          if(!(value%iNum))
          {
            if(iNum!=value)
              return "It is Not Prime Number";
          }
          iNum ++ ;
      }
      return "It is Prime Number";
    }
    else if(args == "perfect")
    {
      iNum = 1;
      var iCal = 0;
      while(iCal < value )
      {
        if(!(value%iNum))
        {
          iCal = iCal+iNum;
        }
        if(iNum > value)
          break ;
        iNum++;
      }

      if(iCal == value)
        return "It is Perfect Number";
      else
        return "It in Not Perfect Number";
    }


    return "Wrong Option";
  }

}
