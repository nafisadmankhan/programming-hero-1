const today = new Date()
const date = new Date('1971-12-16')

console.log(today)
console.log(date)
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())

const specificDate = new Date(2024, 7, 5);
console.log(specificDate)
console.log(specificDate.toLocaleString());
console.log(specificDate.toLocaleString('en-GB'));
specificDate.setMonth(10)
console.log(specificDate)