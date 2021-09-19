
//-----------------------------------------
// Class - getters, setter  
//-----------------------------------------
{
    class Person {
        private _age: number;
        private _firstName: string;
        private _lastName: string;

        constructor(_age: number, _firstName: string, _lastName: string ) {
            this._age = _age
            this._firstName = _firstName
            this._lastName = _lastName
        }
    
        public get age() {
            return this._age;
        }
    
        public set age(theAge: number) {
            if (theAge <= 0 || theAge >= 200) {
                throw new Error('The age is invalid');
            }
            this._age = theAge;
        }
    
        public get firstName() {
            return this._firstName;
        }
    
        public set firstName(theFirstName: string) {
            if (!theFirstName) {
                throw new Error('Invalid first name.');
            }
            this._firstName = theFirstName;
        }
    
        public get lastName() {
            return this._lastName;
        }
    
        public set lastName(theLastName: string) {
            if (!theLastName) {
                throw new Error('Invalid last name.');
            }
            this._lastName = theLastName;
        }
    
        public getFullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
    }
}