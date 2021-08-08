function avg(data) {
    // your code here
    let items = data.products
    let sum = 0
    for (let i = 0; i < items.length; i++ ) {
        
        sum += items[i]['price']
    }
    return sum/ items.length
}
avg({     //呼叫avg
    size: 3,
    products: [
        {
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
}); // show the average price of all products

