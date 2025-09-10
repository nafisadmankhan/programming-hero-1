fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => 
            console.log(response.json())
      )

// console.log("Explore API")

// const person = {
//     name: "Selim",
//     fruit: "Dalim",
//     dish: "Halim",
//     friends: ["Alim", "Kolim", "Lamim"],
//     isRich: false,
//     money: 34000
// }

// console.log(person, typeof person)

// // JSON -> JS object with Notation
// // JSON.stringify -> JSON
// // JSON.parse -> Object

// const personJSON = JSON.stringify(person)
// console.log(personJSON, typeof personJSON)

// const parseJSON = JSON.parse(personJSON)
// console.log(parseJSON)