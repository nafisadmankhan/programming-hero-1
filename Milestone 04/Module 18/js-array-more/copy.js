/**
 * 18_7: Copy array elements to another array
 * The problem starts from Case 2 Part 2 -> Solved in Part 4
 * Shallow Copy vs. Deep Copy
 * Shallow Copy creates problem when object is inside array
 * Primitive Data Type: Number, String, Boolean, Null, Undefined
 * Non-Primitive Data Type: Array, Object
 */

// Part 1
// const price = 25;
// const comp_price = price;

// Part 2
// let price = 25;
// const comp_price = price;

// price = 20; 

// Part 3
let price = 25;
let comp_price = price;

comp_price = 15;

console.log(price)
console.log(comp_price)

// Case 2
// Part 1
// const products = [25, 25, 25];
// const comp_products = products;

// Part 2
// const products = [25, 25, 25];
// const comp_products = products;      // Both value gets changed

// comp_products[0] = 15;

// Part 3
// const products = [25, 25, 25];
// const comp_products = products;

// products[1] = 55;

// Part 4
const products = [25, 25, 25];
const comp_products = [];

for(const product of products){
    comp_products.push(product);
}

products[1] = 55;
comp_products[0] = 15;

// console.log(products);
// console.log(comp_products);

// Part 5 - 2 ways
const numbers = [1, 2, 3, 4];    

// const new_numbers = Array.from(numbers);     // Way 1
// const new_numbers = [].concat(numbers);      // Way 2
const new_numbers = [...numbers]

console.log(numbers);
new_numbers.push(8);
console.log(new_numbers);