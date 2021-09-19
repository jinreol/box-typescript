
//-----------------------------------------
// Class - Abstract 
//-----------------------------------------
// 추상 클래스는 공통으로 사용할 클래스의 인터페이스를 정의한다. 
// 이 추상 클래스를 상속 받은 클래스는 정해진 인터페이스를 무조건 구현해야 한다.
// 자바와 다르게 클래스 인터페이스 안에서 함수를 구현할 수 있다. 
{

    abstract class Employee {
        constructor(private firstName: string, private lastName: string) {
        }
        abstract getSalary(): number
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }
        compensationStatement(): string {
            return `${this.fullName} ${this.getSalary()} a month.`
        }
    }

    class FullTimeEmployee extends Employee {
        constructor(firstName: string, lastName: string, private salary: number) {
            super(firstName, lastName)
        }
        getSalary(): number {
            return this.salary
        }
    }

    class Contractor extends Employee {
        constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
            super(firstName, lastName)
        }
        getSalary(): number {
            return this.rate * this.hours
        }
    }

    let john = new FullTimeEmployee('John', 'Doe', 12000)
    let jane = new Contractor('Jane', 'Doe', 100, 160)


    console.log(john.compensationStatement()); // John Doe 12000 a month.
    console.log(jane.compensationStatement()); // Jane Doe 16000 a month.
}