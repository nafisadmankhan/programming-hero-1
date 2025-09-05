// type coersion (type convert)

console.log(2 == 2) 
console.log(2 == '2')

console.log(true == 1)
console.log(true == '1')

console.log(null == undefined)

console.log(NaN == NaN)
console.log(NaN === NaN)

console.log([] == '')
console.log([5] == 5)
console.log([5] == '5')
console.log([5].toString())



// Non-Primitive - Check by reference
console.log({} == {})
console.log([] == [])



const p = [4, 5, 7, 8]
const q = p 
console.log(p == q)