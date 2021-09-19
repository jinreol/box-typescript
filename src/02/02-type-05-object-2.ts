let employee2: {
    firstName: string
    lastName: string
    age: number
    jobTitle: string
}

employee2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
}

let vacant: {}
// error TS2339: Property 'firstName' does not exist on type '{}'.
// vacant.firstName = 'John'


