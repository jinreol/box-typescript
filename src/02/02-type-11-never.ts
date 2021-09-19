
//-----------------------------------------
// never
//-----------------------------------------

// never는 throw로 에러 리턴할 때 사용한다. 
function raiseError(message: string): never {
    throw new Error(message)
}

function reject() {
    return raiseError('Rejected')
}

let loop = function forever() {
    while (true) {
        console.log('Hello')
    }
}


