/////////////////////////////////////////////////////////////////////////////////
//
//  1.  Write a typescript program which contains one function named as Maximum. 
//      That function accepts array of numbers and returns the largest number from array.
//  
//  Input : 23 89 6 29 56 45 77 32
//  Output : Maximum number is 89
//
////////////////////////////////////////////////////////////////////////////////////
function Maximum(arr) {
    var counter = 0;
    var max = arr[counter];
    counter++;
    while (counter < arr.length) {
        if (arr[counter] > max) {
            max = arr[counter];
        }
        counter++;
    }
    return max;
}
var arr = [23, 89, 6, 29, 56, 45, 77, 32];
console.log("Maximum number is " + Maximum(arr));
