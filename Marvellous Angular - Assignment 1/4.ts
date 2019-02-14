/*********************************************************

4. Write a typescript program which contains one function named as ChkPrime. That function should
accept one number and it should return true if the given number is prime and otherwise return false.
Input : 11
Output : It is prime number

**********************************************************/


function ChkPrime(num : number): boolean
{
    var counter:number = 2 ;
    var flag:boolean = true ;

    while(counter <= num)
    {
        if(num%counter == 0 && counter!=num)
                flag = false ;

        counter ++ ;
    }

    return flag ;
}

var num : number = 13 ;
if(ChkPrime(num))
    console.log("It is prime number");
else
    console.log("It is not prime number");