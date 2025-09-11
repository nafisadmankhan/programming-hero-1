const loadData = () => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      // promise of response
            .then((response) => 
                  // console.log(response.json())
                  response.json()
                  // promise of json data
            ).then((data) =>
                  console.log(data)
            )
}

const loadPost = () => {
      const url = 'https://jsonplaceholder.typicode.com/posts'

      fetch(url)
      .then(res =>
            res.json()
      ).then(data => {
            console.log(data)
            displayPost(data)
      })
}

const displayPost = (posts) => {
      posts.forEach(post => {
            console.log(post)
      })
}

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