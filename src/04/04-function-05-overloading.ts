
//-----------------------------------------
// function overloading
//-----------------------------------------

// overloading 예제 
{
    function add(a: number, b: number): number
    function add(a: string, b: string): string 
    function add(a: any, b: any): any {
        return a + b
    }

    let result = add(10, 10)
    let result2 = add("Su", "Ji")
    // let result3 = add(10, "su") // 에러 발생

    console.log(result)
    console.log(result2)
}

// optional가 포함된 overloading예제 
{
    function sum(a: number, b: number): number
    function sum(a: number, b: number, c: number): number
    function sum(a: number, b: number, c?: number): number {
        if (c) return a + b + c
        return a + b
    }
}

// Class: Method overloading 
{
    class Counter {
        private current: number = 0
        count(): number
        count(target: number): number[]
        count(target?: number): number | number[] {
            if (target) {
                let values = [];
                for (let start = this.current; start <= target; start++) {
                    values.push(start);
                }
                this.current = target;
                return values;
            }
            return ++this.current;
        }
    }

    let counter = new Counter();

    console.log(counter.count()); // return a number
    console.log(counter.count(20)); // return an array
}