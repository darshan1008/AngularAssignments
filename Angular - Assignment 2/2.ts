/////////////////////////////////////////////////////////////////////////////////
//
//  2.  Write a typescript program which contains one function named as Summation. 
//      That function accepts array of numbers and returns the summation of each number from array.
//  
//  Input : 23 6 7 4 5 7
//  Output : Addition is 52
//
/////////////////////////////////////////////////////////////////////////////////


function Summation(arr:number[]):number
{
    var sum:number = 0 ;
    var counter:number = 0 ;

    while(counter < arr.length)
    {
        sum = sum + arr[counter];
        counter++ ;
    }
    return sum;
}

var arr:number[] = [23, 6, 7, 4, 5, 7];

console.log("Addition is "+Summation(arr));