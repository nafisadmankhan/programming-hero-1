/**
 * Arrays are mutable
 * Objects can be stored inside Arrays
 */
const numbers = [1, 2, 43, 54, 4]
const players = [{}, {}, {}]
const employees = [
    {   name: 'Ashik',  designation: 'Content Writer',  salary: 25000   },
    {   name: 'Atik',   designation: 'Developer',       salary: 29000   },
    {   name: 'Abdul',  designation: 'Digital Marketer',salary: 21000   },
]

employees[0].name = 'Ashraf'

// console.log(employees);
// console.log(employees[0]);
// console.log(employees[0].name)

// for(const employee of employees){
//     console.log(employee.name, employee.designation);
// }