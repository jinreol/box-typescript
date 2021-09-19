
//-----------------------------------------
// typeguard 
//-----------------------------------------

// typeof : 타입 채크 사용 
{
    type alphanumeric = string | number

    function add(a: alphanumeric, b: alphanumeric) {
        if (typeof a === 'number' && typeof b === 'number') { // 숫자 타입 채크 
            return a + b
        }
    
        if (typeof a === 'string' && typeof b === 'string') { // 문자열 타입 체크
            return a.concat(b)
        }
    
        throw new Error('Invalid arguments. Both arguments must be either numbers or strings.')
    }
}


// instanceof : 클래스 타입 채크 사용 
{
    class Customer {
        isCreditAllowed(): boolean {
            // ...
            return true 
        }
    }

    class Supplier {
        isInShortList(): boolean {
            //...
            return true
        }
    }

    type BusinessPartner = Customer | Supplier

    function signContract(partner: BusinessPartner): String {
        let message: string = ""
        if (partner instanceof Customer) { // Customer 클래스인 경우 
            message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue'
        }

        if (partner instanceof Supplier) { // Supplier 클래스인 경우 
            message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further'
        }

        return message
    }
}