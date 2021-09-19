
//-----------------------------------------
// generics
//-----------------------------------------
{
    function getRandomElement<T>(items: T[]): T {
        let randomIndex = Math.floor(Math.random() * items.length)
        return items[randomIndex]
    }

    let numbers: number[] = [1, 5, 7, 4, 2, 9]
    let randomEle: number = getRandomElement<number>(numbers)
    // let randomEle: number = getRandomElement(numbers) // <number> 생략 가능
    console.log(randomEle)
}

