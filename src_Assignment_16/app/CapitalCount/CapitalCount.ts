
export function CapsCount(str:any)
{
    
    var iCounter :number= 0;
    var iCount :number = 0;

    
    while(iCounter < str.length)
    {
        if(str[iCounter] >= 'A' && str[iCounter] <= 'Z')
            iCount++;

        iCounter++;
    }


    return iCount;
    
}