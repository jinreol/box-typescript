
//-----------------------------------------
// Class - 상속
//-----------------------------------------
{
    class Person {
        constructor(private firstName: string, private lastName: string) {
            this.firstName = firstName
            this.lastName = lastName
        }

        getFullName(): string {
            return `${this.firstName} ${this.lastName}`
        }

        describe(): string {
            return `This is ${this.firstName} ${this.lastName}.`
        }
    }

    class Employee extends Person {
        constructor(
            firstName: string,
            lastName: string, 
            private jobTitle: string) {
                
            // 부모 클래스의 firstName, lastName 
            super(firstName, lastName)
        }

        describe(): string {
            return super.describe() + ` I'm ${this.jobTitle}`
        }
    }

    let employee = new Employee('John', 'Doe', 'Web Developer');
    console.log(employee.describe()); 
}