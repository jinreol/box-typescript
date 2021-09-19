let employee: object

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
}

/*
{
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer'
}
*/
console.log(employee)

// error TS2322: Type 'string' is not assignable to type 'object'.
// employee = "Jane"

// error TS2339: Property 'hireDate' does not exist on type 'object'.
// console.log(employee.hireDate)

