const employee = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: 20000,
    experience: 1,
    age: 22
}

console.log(employee)



delete employee.experience
delete employee.age
console.log(employee)



employee.salary = employee.salary + 5000
console.log(employee)

employee.location = 'Dhaka'
console.log(employee)



Object.freeze(employee)                                 // Prevent Deletion
delete employee.name
console.log(employee.name)