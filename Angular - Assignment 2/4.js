/////////////////////////////////////////////////////////////////////////////////
//
//  4.  Write a typescript program which contains one arrow function named as ChkArmstrong.
//      That function accepts one numbers and check whether number is Armstrong number or not.
// 
//      Input : 153
//      Output : It is Armstrong number
//
/////////////////////////////////////////////////////////////////////////////////
function ChkArmstrong(num) {
    var reminder = 0;
    var add = 0;
    var sum = 0;
    add = num;
    while (add) {
        reminder = add % (10);
        sum = sum + (reminder * reminder * reminder);
        add = parseInt(add / 10);
        console.log(num, reminder, add, sum);
    }
    if (sum == num)
        console.log("It is Armstrong number");
    else
        console.log("It is not Armstrong number");
}
ChkArmstrong(153);
