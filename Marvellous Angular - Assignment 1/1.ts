
/*********************************************************

1. Write a typescript program which contains one function named as Maximum. 
That function accepts three parameters and it should returns largest value from three input parameters.

Input : 23 89 6
Output : Maximum number is 89

**********************************************************/

function Maximum(nNo1 : number,nNo2 : number, nNo3 : number) : number
{
    if(nNo1 >= nNo2 && nNo1 >= nNo3) 
        return nNo1 ;
    else if(nNo2 >= nNo1 && nNo2 >= nNo3)
        return nNo2 ;
    else
        return nNo3 ;
}

var MaxNumber : number = Maximum(10,80,70) ;

console.log("Maximum number is : "+MaxNumber) ;