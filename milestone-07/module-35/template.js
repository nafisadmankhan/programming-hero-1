const fName = "Gias";
const lName = "Uddin";

// template string
console.log(`I am MD ${fName} ${lName}`);

// console.log(sum);
// function sum() {
//     console.log(arguments);
// }

// arrow functions
// const sum = (a, b) => a + b; 

const sum = (...rest) => {
    console.log(rest);
}
sum(1, 2, 3);

// spread operator
const numbers = [1, 2, 3, 4, 5, 6];
console.log(...numbers);

let newNumbers = [numbers, 10, 100];
console.log(newNumbers);

newNumbers = [...numbers, 10, 100];
console.log(newNumbers);