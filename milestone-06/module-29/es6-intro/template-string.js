const poem = 'Am pata jora jora\n' + 
             'marbo chabuk chorbo ghora\n' +
             'ore khoka ghure dara'

console.log(poem)



const poem_backtick =   `Am pata jora jora 
marbo chabuk chorbo ghora 
ore khoka ghure dara`

console.log(poem_backtick)



function sum(num1, num2){
    const result = num1 + num2 
    
    const output_1 = 'Sum of' + num1 + 'and' + num2 + 'is equal to' + result
    console.log(output_1)

    const output_2 = `Sum of ${num1} and ${num2} is equal to ${result}`
    console.log(output_2)
}

sum(10, 20)



const price = 100
const discountedPrice = `Discounted Price after 20% discount ${price * 0.8}`
console.log(discountedPrice)