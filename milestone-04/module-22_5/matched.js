const numbers = [45, 65, 23, 98, 19]

// PART 1
// for (let i=0; i < numbers.length; i++) {
//     const number = numbers[i]
//     console.log(number)
// }

// PART 2
// for (const number of numbers) {
//     console.log(number);
// }

const products = [
    {   id: 1, name: 'Walton Phone',    price: 19000     },
    {   id: 2, name: 'Samsung TV',      price: 21000     },
    {   id: 3, name: 'Xiaomi Watch',    price: 9000      },
    {   id: 4, name: 'Lenovo phone',    price: 29000     },
    {   id: 5, name: 'Dell Laptop',     price: 42000     },
]

// PART 3
// for (const product of products) {
//     console.log(product)
// }

// PART 4
function matchedProducts (products, search) {
    const matched = []

    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product)
        }
    }
    return matched
}

console.log(matchedProducts(products, 'Phone'))