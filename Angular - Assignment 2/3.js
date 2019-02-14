/////////////////////////////////////////////////////////////////////////////////
//  3.  Write a typescript program which contains one function named as Maximum. That function accepts
//      array of numbers and returns the second largest number from array.
//
//  Input : 23 89 6 29 56 45 77 32
//  Output : Second Maximum number is 77
/////////////////////////////////////////////////////////////////////////////////
function Maximum(arr) {
    var max1;
    var max2;
    var counter = 0;
    max1 = arr[counter++];
    while (counter < arr.length) {
        if (max1 <= arr[counter]) {
            max2 = max1;
            max1 = arr[counter];
        }
        else if (max2 < arr[counter]) {
            max2 = arr[counter];
        }
        counter++;
    }
    return max2;
}
var arr = [23, 89, 6, 29, 56, 45, 77, 32];
console.log("Second maximum number is " + Maximum(arr));
