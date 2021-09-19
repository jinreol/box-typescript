
//-----------------------------------------
// break
//-----------------------------------------

// for문에서 break문 쓰기 
{
    let products = [
        { name: 'phone', price: 700 },
        { name: 'tablet', price: 900 },
        { name: 'laptop', price: 1200 }
    ];
    
    for (var index = 0;  index < products.length; index++) {
        if (products[index].price == 900)
            break
    }
    
    // show the product 
    console.log(products[index]) // { name: 'tablet', price: 900 }
}

// switch문에서 break문 쓰기 
{
    let products = [
        { name: 'phone', price: 700 },
        { name: 'tablet', price: 900 },
        { name: 'laptop', price: 1200 }
    ];

    let discount = 0
    let product = products[1]

    switch (product.name) {
        case 'phone':
            discount = 5
            break
        case 'tablet':
            discount = 10
            break
        case 'laptop':
            discount = 15
            break
    }

    console.log(`This is a ${discount}% on ${product.name}`) // This is a 10% on tablet
}