
export function ArrAdd(arr:number[])
{
    var iCounter = 0;
    var iAddition = 0;

    while(arr.length > iCounter)
    {
        iAddition = iAddition+arr[iCounter];
        iCounter++;
    }

    return iAddition;
}