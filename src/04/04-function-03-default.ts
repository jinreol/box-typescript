
//-----------------------------------------
// function default parameters
//-----------------------------------------
{
    // discount: number = 0.05가 디폴트 값입니다. 
    function applyDiscount(price: number, discount: number = 0.05): number {
        return price * (1 - discount)
    }

    console.log(applyDiscount(100))
}




