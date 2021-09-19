
//-----------------------------------------
// Interface
//-----------------------------------------

// object을 입력 파라미터로 받는 클래스가 있는 예제 
{
    function getFullName(person: {
        firstName: string
        lastName: string
    }) {
        return `${person.firstName} ${person.lastName}` 
    }

    let person = {
        firstName: 'John',
        lastName: 'Doe'
    }

    let result = getFullName(person)
    console.log(result)
}

// 입력 파라미터를 읽기 편하게 바꾸기 위해 
// interface를 사용한다. 

{
    interface Person {
        firstName: string
        lastName: string
    }

    function getFullName(person: Person) {
        return `${person.firstName} ${person.lastName}` 
    }

    let person: Person = {
        firstName: "Maria", 
        lastName: "Sue"
    }

    let result = getFullName(person)
    console.log(result)
}

// interface: optional 
{
    interface Person {
        firstName: string
        middleName?: string
        lastName: string
    }

    function getFullName(person: Person) {
        if (person.middleName) {
            return `${person.firstName} ${person.middleName} ${person.lastName}` 
        }
        return `${person.firstName} ${person.lastName}` 
    }

    let person: Person = {
        firstName: "first",
        middleName: "middle",
        lastName: "last"
    }

    let result = getFullName(person)
    console.log(result)
}

// interface: readonly 
{
    interface Person {
        readonly ssn: string
        firstName: string
        lastName: string
    }

    function getFullName(person: Person) {
        return `${person.firstName} ${person.lastName}` 
    }

    let person: Person = {
        ssn: '171-28-0926',
        firstName: "Ninja", 
        lastName: "Turtle"
    }

    let result = getFullName(person)
    console.log(result)

    // person.ssn = '171-28-0000'
}

// interface: function type
{
    interface StringFormat {
        (str: string, isUpper: boolean): string 
    }

    let format: StringFormat
    format = function (str: string, isUpper: boolean) {
        return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase()
    }

    let lowerCase: StringFormat
    lowerCase = function (str: string) {  // 두번째 인자가 없어도 에러가 발생되지 않는다. 
        return str.toLowerCase()
    }

    console.log(format('hi', true))
    console.log(format('Hi', false))
}

// interface: class type
// 자바와 interface 클래스처럼 class에서 구현해서 쓸 수 있다. 
{
    interface Json {
        toJson(): string
    }

    class Person implements Json {
        constructor(private firstName: string,  private lastName: string) {}
        toJson(): string { // 인터페이스 함수를 구현한다. 
            return JSON.stringify(this)
        }
    }

    let person = new Person('John', 'Doe')
    console.log(person.toJson())
}





