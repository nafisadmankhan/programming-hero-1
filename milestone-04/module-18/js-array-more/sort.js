const numbers = [6, 1, 8, 2, 3, 5];
// Way 1
// console.log(numbers)
// console.log(numbers.sort())

// Way 2
// const friends = ['Sakib', 'Nakib', 'Akib', 'Rakib', 'Aasad]
// console.log(friends)
// console.log(friends.sort())

// Way 3 
 const ages = [1, 5, 100, 15, 2, 8, 28] // Problematic Approach - This sorting works like string-based sorting
// console.log(ages.sort()) 
const sorted_ages_asc = ages.sort(function (a, b) { return a - b }) // Ascending order
console.log(sorted_ages_asc)
const sorted_ages_des = ages.sort(function (a, b) { return b - a }) // Descending order
console.log(sorted_ages_des)
