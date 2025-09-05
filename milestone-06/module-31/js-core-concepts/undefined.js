//
/**
 * undefined ---> not defined
 */

let money; 
console.log(money);



function total1(a, b) {
    console.log(a, b)
}

// total(2)
const result = total1(5, 7)
console.log('Value of function call: ', result)



function total2(a, b) {
    console.log('Value of parameters: ', a, b)
    if (a === undefined || b === undefined) {
        return
    }
    if (a && b){
        const sum = a + b
        return sum 
    }
}

const result2 = total2(1)
console.log('Result 2 is ', result2)

const phone = { brand: 'Samsung', price: 12500 }
console.log('Phone color is ', phone.color)


const banks = ['Sonali', 'Rupali', 'Jamuna']
console.log(banks[1])
delete banks[1]
console.log(banks[1])

console.log('Type of undefined is ', typeof undefined)
console.log('Type of null is ', typeof null)