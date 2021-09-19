
//-----------------------------------------
// Class - readonly  
//-----------------------------------------
// readonly는 constructor 외에는 값을 쓸 수 없다. 
{
    class Person {
        readonly birthDate: Date  

        constructor (birthDate: Date) {
            this.birthDate = birthDate
        }
    }

    let person = new Person(new Date(1990, 12, 25))

    // readonly에 값을 쓰려고 하면 에러가 발생한다. 
    // 에러: Cannot assign to 'birthDate' because it is a read-only property.
    // person.birthDate = new Date(1991, 12, 25)
}

// 위 클래스를 축약해서 아래처럼 쓸 수 있다. 
{
    class Person {
        constructor(readonly birthDate: Date) {
            this.birthDate = birthDate
        }
    }
}

