const student = {
    name: 'Rafid',
    1:50,
    'home-address': 'Kochu khet',
    marks: 90
}

// dot notation
console.log(student)
console.log(student.name) 
// console.log(student.1)                      // SyntaxError: missing ) after argument list
// console.log(student.home-address)           // ReferenceError: address is not defined



// bracket notation
const studentOne = student['1']
console.log(studentOne)
console.log(student['home-address'])



for(const key in student){
    const value = student[key]
}



const propName = 'marks'
console.log(student[propName])