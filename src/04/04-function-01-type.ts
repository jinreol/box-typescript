
//-----------------------------------------
// function type 
//-----------------------------------------

// type 선언과 할당 
{
    // type 선언 
    let add: (x: number, y: number) => number 

    // type 할당
    add = function (x: number, y: number) {
        return x + y
    }
}

// type 선언, 할당 같이하기 

{
    let add: (a: number, y: number) => number = function (x: number, y: number) {
        return x + y
    }
}

// type 선언과 다른 함수를 할당하면 에러가 발생된다.
{
    // type 선언 
    let add: (x: number, y: number) => number 

    // 타입이 맞지 않아 에러 발생 
    // add = function (x: string, y: string): number {
    //     return x.concat(y).length
    // }
}

// 타입 추론 
{
    let add = function (x: number, y: number): number {
        return x + y
    }
    let result = add (10, 20)
}

