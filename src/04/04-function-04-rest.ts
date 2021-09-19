
//-----------------------------------------
// function rest parameters
//-----------------------------------------
{
    function getTotal(...numbers: number[]): number {
        let total = 0
        numbers.forEach((num) => total += num)
        return total 
    }

    console.log(getTotal())
    console.log(getTotal(10, 20))
    console.log(getTotal(10, 20, 30))
}



