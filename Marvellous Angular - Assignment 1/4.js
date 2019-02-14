/*
4. Write a typescript program which contains one function named as ChkPrime. That function should
accept one number and it should return true if the given number is prime and otherwise return false.
Input : 11
Output : It is prime number

*/
function ChkPrime(num) {
    var counter = 2;
    var flag = true;
    while (counter <= num) {
        if (num % counter == 0 && counter != num)
            flag = false;
        counter++;
    }
    return flag;
}
if (ChkPrime(13))
    console.log("It is prime number");
else
    console.log("It is not prime number");
