
//-----------------------------------------
// function optional 
//-----------------------------------------
{
    function multiply(a: number, b: number, c?: number): number {
        if (typeof c !== 'undefined') { // c 파라미터가 입력 되었을 때 
            return a * b * c
        } 
        return a * b
    }

    multiply(1, 2)
    multiply(1, 2, 3)
}


