
//-----------------------------------------
// type assertion
//-----------------------------------------
// as :  여러 개의 타입을 지원하는 함수의 경우 리턴값을 하나의 type만 리턴하게 한다.
{
    function getNetPrice(price: number, discount: number, format: boolean): number | string {
        let netPrice = price * (1 - discount)
        return format ? `$${netPrice}` : netPrice
    }

    let netPrice = getNetPrice(100, 0.05, true) as string // 문자열로 타입 지엉
    console.log(netPrice)

    let netPrice2 = getNetPrice(100, 0.05, false) as number // 문자열로 타입 지엉
    console.log(netPrice2)
}

// <> : as 대신 <>

{
    function getNetPrice(price: number, discount: number, format: boolean): number | string {
        let netPrice = price * (1 - discount)
        return format ? `$${netPrice}` : netPrice
    }

    let netPrice = <string>getNetPrice(100, 0.05, true) // 문자열로 타입 지엉
    console.log(netPrice)

    let netPrice2 = <number>getNetPrice(100, 0.05, false) // 문자열로 타입 지엉
    console.log(netPrice2)
}