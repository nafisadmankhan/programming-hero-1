// es6



// ----- var -----
console.log(device)                             // undefined
var device = 'laptop'



// ----- const -----
// console.log(name)                            // ReferenceError: Cannot access 'name' before initialization
const name = 'Bangladesh'
// name = 'BD'                                  // TypeError: Assignment to constant variable.
const countryName = 'BD' + name;
console.log(countryName)

const dress = ['shirt', 'pant', 'jacket']
// dress = []                                   // TypeError: Assignment to constant variable.
dress.push('Gloves')
console.log(dress)

const student = { name: 'John', marks: 50 }
student.marks = 60
console.log(student)



// ----- let -----
let price = 128
price = 150                                      // This line doesn't cause an error
console.log(price)