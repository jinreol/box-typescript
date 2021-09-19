import type { alphanumeric } from "./Types";  // typescript 3.8에서 import type을 지원합니다.
// --isolatedModules 할 때 에러가 발생하는 경우 사용 

function add(a: alphanumeric, b: alphanumeric): alphanumeric {
    if (typeof a === 'number' && typeof b === 'number' ) {
        return a + b
    }
    if (typeof a == 'string' && typeof b == 'string') {
        return a.concat(b)
    }
    throw new Error('Paramters must be numbers or strings')
}
