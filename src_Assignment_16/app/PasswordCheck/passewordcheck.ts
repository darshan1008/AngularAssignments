

export function PassCheck(pass : string)
{
    var iCapsCount : number = 0 ;           //2
    var iSmallCount : number = 0 ;          //3
    var idigitCount : number = 0 ;          //2
    var iSpCharCount : number = 0 ;         //1

    var iCounter : number = 0;

    while(iCounter < pass.length)
    {
        if(pass[iCounter] >= 'A' && pass[iCounter] <= 'Z')
            iCapsCount++ ;

        else if(pass[iCounter] >= 'a' && pass[iCounter] <= 'z')
            iSmallCount++ ;

        else if(pass[iCounter] >= '0' && pass[iCounter] <='9')    
            idigitCount++;

        else if(pass[iCounter] >= ' ' && pass[iCounter] <= '@')
            iSpCharCount++;

            iCounter++;
            
    }

    if(iCapsCount>= 2 && iSmallCount>=3 && idigitCount>=2 && iSpCharCount>=1 )
        return true;
    else
        return false;

}