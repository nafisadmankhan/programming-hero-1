const product = { name: 'shirt', price: 500, quantity: 7}

// const discount = product * 20 / 100
// const yourPay = product.price - discount
// const vatAmount = product.price * 7 / 100
// const totalAmount = yourPay + vatAmount



// const price = product.price

// const discount = product * 20 / 100
// const yourPay = product.price - discount
// const vatAmount = price * 7 / 100
// const totalAmount = yourPay + vatAmount




const { price, quantity:amount, tax, defaultValue=7 } = { name: 'shirt', price: 500, quantity: 7}

// console.log(price, quantity, tax, defaultValue)
console.log(price, amount, tax, defaultValue)



const device = { name: 'phone', brand: 'Samsung', price: 17000 }
const { brand } = device

console.log(brand)



const numbers = [25, 88]
const [first, second] = numbers

const [math, physics] = [90, 99]
console.log(physics)