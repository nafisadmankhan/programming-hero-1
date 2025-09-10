console.log("Explore API")

const person = {
    name: "Selim",
    fruit: "Dalim",
    dish: "Halim",
    friends: ["Alim", "Kolim", "Lamim"],
    isRich: false,
    money: 34000
}

console.log(person)

// JSON -> JS object with Notation
// JSON.stringify

const personJSON = JSON.stringify(person)
console.log(personJSON, typeof personJSON)