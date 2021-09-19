
//-----------------------------------------
// number
//-----------------------------------------

let price: number
price = 10
console.log(price) // 10

let price2 = 9.85
console.log(price2) // 9.85

// 10진수
let counter: number = 0
let x: number = 100, 
    y: number = 200
console.log(counter) // 0
console.log(x)       // 100
console.log(y)       // 200

// 2진수: 바이너리 
let bin = 0b100
let anotherBin: number = 0B010;
console.log(bin) // 4
console.log(anotherBin) // 2

// 8진수
let octal: number = 0o10
console.log(octal)

// 16진수
let hexadecimal: number = 0XA
console.log(hexadecimal)

// Big Integers
let big: bigint = 9007199254740991n;
