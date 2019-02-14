/*

5. Write a typescript program which contains one function named as Fibonacci. That function accept
one number from user and print Fibonacci series till that number.
Input : 21
Output : 1 1 2 3 5 8 13 21

*/
function Fibonacci(num) {
    var count1 = 0;
    var count2 = 1;
    var count3 = 1;
    while (count3 <= num) {
        console.log(count3);
        count3 = count1 + count2;
        count1 = count2;
        count2 = count3;
    }
}
Fibonacci(21);
