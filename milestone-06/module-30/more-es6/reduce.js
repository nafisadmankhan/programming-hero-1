const numbers = [4, 5, 6, 7, 12, 45]

// let sum = 0
// for (const num of numbers) {
//     sum = sum + num 
// }

// console.log(sum)



const sum = numbers.reduce((acc, curr) => acc + curr, 0)

console.log(sum)