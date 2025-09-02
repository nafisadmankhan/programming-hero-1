const numbers = [4, 8, 2, 3, 5]

// const doubled = []
// for (const num of numbers){
//     const result = num*2
//     doubled.push(result)
// }
// 
// console.log(doubled)



// const doubleIt = x => x * 2
// const doubled = numbers.map(doubleIt)
// 
// console.log(doubled)



const doubled = numbers.map(x => x * 2)
const fiveTimes = numbers.map(num => num * 5)
const squared = numbers.map(num => num * num)

console.log(doubled)



const friends = ['Zaved', 'Pavel', 'Nobel', 'Kodbel']

const nameLengths = friends.map(name => name.length)
const firstLetters = friends.map(name => name[0])
const result = numbers.map((num, index) => {
    console.log(num * index)
    return index
})

console.log(result)
console.log(nameLengths)
console.log(firstLetters)