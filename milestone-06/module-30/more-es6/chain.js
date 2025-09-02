const student = {
    name: 'Rafid',
    1: 50,
    'home-address': 'kochu khet',
    marks: 90,
    family: {
        address: 'buyiah',
        // mother: {
        //     name: 'Noor Jahan',
        //     age: 45
        // }
    }
}

console.log(student)
console.log(student.family)
console.log(student.family.mother)
console.log(student.family.mother?.age)