/*
2. Write a typescript program which contains one function named as Area. That function should
calculate area of circle. Accept value of radius from user and return its area. Default value of PI
should be 3.14 if it is not provided by the caller.
Input : 5
Output : Area of circle is 78.5
*/
function Area(nRadius, PI) {
    if (PI === void 0) { PI = 3.14; }
    var Area;
    Area = nRadius * nRadius * PI;
    return Area;
}
var AreaOfCircle = 0.0;
AreaOfCircle = Area(5);
console.log("Area of circle is : " + AreaOfCircle);
