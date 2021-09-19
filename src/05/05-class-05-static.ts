
//-----------------------------------------
// Class - Static
//-----------------------------------------
{
    class Employee {
        static headcount: number = 0 // static 변수
    
        constructor ( 
            private firstName: string,
            private lastName: string, 
            private jobTitle: string) {
            
            Employee.headcount++ // 클래스를 생성할 때마다 static을 1씩 증가시킨다. 
        }
    }

    let john = new Employee('John', 'Doe', 'Front-end Developer')
    let jane = new Employee('Jane', 'Doe', 'Back-end Developer')

    console.log(Employee.headcount) // 2
}

// static 변수를 private으로 변경하고 읽기만 가능하도록 변경한다. 
{
    class Employee {
        private static headcount: number = 0
    
        constructor (
            private firstName: string,
            private lastName: string,
            private jobTitle: string 
        ) {
        
            Employee.headcount++
        }

        // static 변수의 값을 가져온다. 
        public static getHeadcount() {
            return Employee.headcount
        }
    }

    let john = new Employee('John', 'Doe', 'Front-end Developer')
    let jane = new Employee('Jane', 'Doe', 'Back-end Developer')

    console.log(Employee.getHeadcount()) // 2
}