
//-----------------------------------------
// continue
//-----------------------------------------

{
    for (let index = 0; index < 9; index++) {
        
        // 인텍스가 홀수라면 스킵한다. 
        if (index % 2) 
            continue

        // 짝수만 찍힌다. 
        console.log(index)        
    }

    /* output 
    0
    2
    4
    6
    8
    */
}

