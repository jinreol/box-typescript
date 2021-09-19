
//-----------------------------------------
// function 
//-----------------------------------------

function add(a: number, b: number): number {
    return a + b
}

// 입력 파라미터가 number가 아닌 string으로 넣으면 typescript compiler가 아래와 같은 에러를 발생시킨다. 
// error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// let sum = add('10', '20') 
