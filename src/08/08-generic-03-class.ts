
//-----------------------------------------
// class
//-----------------------------------------
{
    class Stack<T> {
        private elements: T[] = []
    
        constructor(private size: number) {
        }
    
        isEmpty(): boolean {
            return this.elements.length === 0
        }
    
        isFull(): boolean {
            return this.elements.length === this.size
        }
    
        push(element: T): void {
            if (this.elements.length === this.size) {
                throw new Error('The stack is overflow!')
            }
            this.elements.push(element)
        }
    
        pop(): T  {
            if (this.elements.length == 0) {
                throw new Error('The stack is empty!')
            }
            let element = this.elements.pop()
            if (element === undefined) {
                throw new Error('The stack element is undefined')
            }
            return element
        }
    }
    
    // low와 high 사이에 숫자 하나를 랜덤으로 리턴한다. 
    function randBetween(low: number, high: number): number {
        return Math.floor(Math.random() * (high - low + 1) + low)
    }

    // number를 사용한 예제  
    let numbers = new Stack<number>(5)

    while (!numbers.isFull()) {
        let n = randBetween(1, 10)
        console.log(`Push ${n} into the stack.`)
        numbers.push(n)
    }

    // String를 사용한 예제 
    let words = 'The quick brown fox jumps over the lazy dog'.split(' ')
    let wordStack = new Stack<string>(words.length)

    // puhs words into the stack 
    words.forEach(word => wordStack.push(word))

    // pop words from the stack 
    while (!wordStack.isEmpty()) {
        console.log(wordStack.pop())
    }
}

