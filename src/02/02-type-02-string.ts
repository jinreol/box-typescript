
//-----------------------------------------
// String
//-----------------------------------------

let firstName: string = 'John';
let title: string = "Web Developer";

console.log(firstName) // John
console.log(title) // Web Developer

// 여러줄 표시
let description = `This TypeScript string can 
span multiple 
lines
`;

/*
This TypeScript string can 
span multiple 
lines
*/
console.log(description)

// String interpolations
let profile: string = `I'm ${firstName}. 
I'm a ${title}`;
 
// I'm John. 
// I'm a Web Developer
console.log(profile);