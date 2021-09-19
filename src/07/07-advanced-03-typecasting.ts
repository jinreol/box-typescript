
//-----------------------------------------
// type cast
//-----------------------------------------
// type cast 1 : as 사용
{
    let input = document.querySelector('input[type="text"]') as HTMLInputElement
    console.log(input.value)
}

// type cast 2 : <> 사용
{
    let input = <HTMLInputElement> document.querySelector('input[type="text"]')
    console.log(input.value)
}

