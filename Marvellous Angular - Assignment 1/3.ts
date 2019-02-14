/*********************************************************

3. Write a typescript program which contains one function 
named as DisplayFactors. That function
should accept one number and display factors of that number.

Input : 20
Output : 1 2 4 5 10

**********************************************************/

function DisplayFactors(nNum : number) 
{
    var Counter : number = 1 ;

    while(Counter < nNum)
    {
        if(nNum%Counter == 0 )
            console.log(" "+Counter);

        Counter++ ;
    }
}

var num : number = 20 ;
DisplayFactors(num);