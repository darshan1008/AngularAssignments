/////////////////////////////////////////////////////////////////////////////////
//
//  5. Write a typescript program which contains one function named as ChkString. 
//     That function accept one string and check whether that string contains 
//     “Marvellous” word or not.
//     Input : “Pune Kothrud Marvellous Infosystems”
//     Output : String contains Marvellous in it.
//
/////////////////////////////////////////////////////////////////////////////////


function ChkString(src:string)
{
    var str:string="Marvellous" ;
    var counter1:number = 0 ;
    var counter2:number = 0 ;

    while(counter1 < src.length )
    {
        counter2 = 0 ;
        if(src[counter1] == str[counter2])
        {
            while(counter2 < str.length)
            {
                if(src[counter1] == str[counter2])
                {
                    counter1++ ;
                    counter2++ ;
                }
            }
        }

        counter1++ ;
        if(counter2 == str.length)
        {
            console.log("String contains Marvellous in it");
            return ;
        }
        
    }
    console.log("String not contains Marvellous in it");


}

ChkString("Pune Kothrud Marvellous Infosystems");