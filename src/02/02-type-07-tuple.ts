
//-----------------------------------------
// Tuple
//-----------------------------------------

let skill: [string, number]
skill = ['Programming', 5]

console.log(skill)

let skill2: [string, number]
//skill = [5, 'Programming'] //error TS2322: Type 'string' is not assignable to type 'number'.

let color: [number, number, number] = [255, 123, 0]
console.log('red:', color[0])
console.log('green:', color[1])
console.log('blue:', color[2])

let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
console.log('bgColor: ', bgColor)
console.log('headerColor:', headerColor)




