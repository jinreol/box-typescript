
//-----------------------------------------
// Array
//-----------------------------------------
// 1) 배열 초기화 : Array() 쓰기
let skills: string[] = Array()

skills[0] = "Problem Solving"
skills[1] = "Programming"
skills.push('Software Design')
console.log(skills)

// 2) 배열 초기화 : [] 쓰기
let skills2: string[] = []

skills2[0] = "Problem Solving"
skills2[1] = "Programming"
console.log(skills2)

// 3) 배열 선언 및 값 할당 
let skills3 = ['Problem Sovling','Software Design','Programming']
console.log(skills3)

// 4) 배열 선언 및 값 할당 
let skills4: string[]
skills4 = ['Problem Sovling','Software Design','Programming']
console.log(skills4)

// 5) 숫자를 할당시 에러
// error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
// skills.push(100)

// 6) 배열 길이
let series = [1, 2, 3];
console.log(series.length); // 3

// 7) map 사용법
let doubleIt = series.map(e => e* 2);
console.log(doubleIt);

// 8) 배열 여러 타입 섞어쓰기
let scores : (string | number)[];
scores = ['Programming', 5, 'Software Design', 4, 8]; 
console.log(scores)
