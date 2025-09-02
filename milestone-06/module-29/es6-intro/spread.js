const numbers = [87, 8, 5, 9]
console.log(numbers)
console.log(...numbers)



// const max = Math.max(1121, 56, 94, 112, 514, 23)
const max1 = Math.max(numbers)                           
console.log(max1)                                           // NaN
const max2 = Math.max(...numbers)                           
console.log(max2)                                           // 87



const first = [1, 2, 3, 4, 5]
// const second = first
// second.push(6)                                           // [ 1, 2, 3, 4, 5, 6 ]

const second = [...first]
second.push(6)                                              // [ 1, 2, 3, 4, 5 ]

const third = [-1, ...first, 99]
console.log(third)



const ages = [45, 45, 1]
const prices = [98, 65, 45]
const all = [...ages, 5555, ...prices]



const person =      { name: 'Rahim',       age: 25 }
const employee =    { designation: 'dev', ...person}

console.log(employee)



const total = (a, b, c) => a + b + c 
const result = total(45, 65, 21)
const digits = [78, 55, 66]

console.log(total(...digits))