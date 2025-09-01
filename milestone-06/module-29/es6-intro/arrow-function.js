// function declaration
function add(num1, num2){
    return num1 + num2 
}

console.log(add(10, 5))



// function expression
const addition1 = function(num1, num2){
    return num1 + num2 
}

console.log(addition1(10, 10))



// arrow function
const addition2 = (num1, num2) => num1 + num2 
const multiply = (num1, num2) => num1 * num2 
const sumAll = (a, b, c, d, e, f) => a + b + c + d + e + f 
const isFirstBig = (x, y) => x > y

console.log(addition2(15, 15))
console.log(multiply(15, 15))
console.log(sumAll(1, 2, 3, 4, 5, 6))
console.log(isFirstBig(1, 2))



// multi line arrow function
const doMath = (x, y) => {
    const xDouble = x * 2
    const yDouble = y * 2
    const result = xDouble + yDouble
    return result
}

console.log(doMath(4, 5))