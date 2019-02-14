/*********************************************************

2. Write a typescript program which contains one function named as Area. That function should
calculate area of circle. Accept value of radius from user and return its area. Default value of PI
should be 3.14 if it is not provided by the caller.
Input : 5
Output : Area of circle is 78.5

**********************************************************/

function Area(nRadius : number, PI : number = 3.14) : number
{
    var Area : number ;

    Area = nRadius * nRadius * PI ;

    return Area ;
}


var AreaOfCircle : number = 0.0;
var Radius :number = 5 ;
AreaOfCircle = Area(Radius);
console.log("Area of circle is : "+AreaOfCircle);

