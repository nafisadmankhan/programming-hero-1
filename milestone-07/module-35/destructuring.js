const friends = ["Hero Alom", "Hena", "BD"];
const [element1, element2, element3] = friends;

// const element1 = friends[0];
// const element2 = friends[1];
// const element3 = friends[2];

console.log(element1, element2, element3);

const person = {
    name: "Hero Alom",
    age: 24,
    friends: ["bd", "test"],
    country: "bangladesh"
}
console.log(person.country);

const { hena } = person; // undefined
const { name, country } = person; // undefined