
//-----------------------------------------
// Class
//-----------------------------------------
{
    class Person {
        ssn: number
        firstName: string
        lastName: string
    
        constructor(ssn: number, firstName: string, lastName: string) {
            this.ssn = ssn
            this.firstName = firstName
            this.lastName = lastName
        }

        getFullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
    }

    // swift와 다르게 생성자에 new가 들어가야 한다. 
    let person = new Person(171280926, 'John', 'Doe')
    console.log(person.getFullName())
}




