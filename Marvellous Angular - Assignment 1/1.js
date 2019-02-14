function FindMax(nNo1, nNo2, nNo3) {
    if (nNo1 >= nNo2 && nNo1 >= nNo3)
        return nNo1;
    else if (nNo2 >= nNo1 && nNo2 >= nNo3)
        return nNo2;
    else
        return nNo3;
}
var MaxNumber = FindMax(10, 80, 70);
console.log(MaxNumber);
