// const jsonExample = {
//   "name": "Alice",
//   "age": 30,
//   "isStudent": false,
//   "city": "New York"
// };

// const person = {
//     name: "Hero Alom",
//     age: 40,
//     friends: ["bd", "CN", "rahim"],
//     family: {
//         fatherName: "kolim uddin",
//         motherName: "jorina"
//     }
// }

// const jsonData = JSON.stringify(person);
// console.log(jsonData);

// const planeData = JSON.parse(jsonData);
// console.log(planeData);

// fetch

// fetch("url")
//     .then(res => res.json())
//     .then(data => console.log(data))

// const keys = Object.keys(person);
// console.log(keys);

// const values = Object.values(person);
// console.log(values);

const products = [
    { name:"redmi", brand:"xiaomi", price:3000, color: "black"},
    { name:"galaxy", brand:"samsung", price:5000, color: "white"},
    { name:"iphone", brand:"apple", price:5000, color: "gold"},
    { name:"iphoneX", brand:"apple", price:5000, color: "gold"},
    { name:"redmi2", brand:"xiaomi", price:2000, color: "black"},
]

const newData = {
    name: "walton",
    brand: "walton",
    price: 3000,
    color: "gray"
}

const newArray = [...products, newData];
console.log(newArray);

// const remainingProducts = 