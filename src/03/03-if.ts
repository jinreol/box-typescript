
//-----------------------------------------
// if
//-----------------------------------------
const max = 100;
let num = 0;

if (num < max) {
    num++;
}

console.log(num); // 1

//-----------------------------------------

num = 100

if (num < max) {  
    num++  // 이 부분은 실행되지 않는다. 
}

console.log(num) // 100


//-----------------------------------------
// if else
//-----------------------------------------

num = 100

if (num < max) {
    num++
} else {
    num = 1
}

console.log(num) // 1


//-----------------------------------------
// ?  Ternary operator
//-----------------------------------------

num = 100
num < max ? num++ : num = 1

console.log(num) // 1

//-----------------------------------------
// if elseif else
//-----------------------------------------

let discount: number
let itemCount = 11

if (itemCount > 0 && itemCount <= 5) {
    discount = 5 // 5% 할일
} else if (itemCount > 5 && itemCount <= 10)  {
    discount = 10 // 10% 할일 
} else {
    discount = 15 // 15% 할일
}

console.log(`You get ${discount}% discount. `) // You get 15% discount. 

