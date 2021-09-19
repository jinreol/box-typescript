
//-----------------------------------------
// constraints
//-----------------------------------------
{
    function merge<U extends object, V extends object>(obj1: U, obj2: V) {
        return {
            ...obj1,
            ...obj2
        }
    }

    let person = merge (
        { name: 'John'},
        { food: 'milk'},
        // 25 //  Argument of type 'number' is not assignable to parameter of type 'object'.
    )
}

