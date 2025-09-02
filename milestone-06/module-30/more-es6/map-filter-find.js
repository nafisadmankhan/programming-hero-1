// 30-4 foreach, filter, find, and differences between them

const students = [
    { id: 1, name: 'Abul', marks: 50},
    { id: 2, name: 'Nabul', marks: 85},
    { id: 3, name: 'Kabul', marks: 95},
    { id: 4, name: 'Dabul', marks: 15},
]

const names = students.map(student => student.name)
const goodStudents = students.filter(student => student.marks > 80)
const goodStudent = students.find(student => student.marks > 80)

console.log(names)
console.log(goodStudents)
console.log(goodStudent)