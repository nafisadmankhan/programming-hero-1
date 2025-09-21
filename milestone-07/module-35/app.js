const friends = ["John", "Bob", "Alice", "Steve", "Gates"];

// string
friends.push("Rahim");
console.log(friends);

friends.pop();
console.log(friends);

friends.unshift("Rahim");
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.slice(2, 3));
console.log(friends.splice(2, 3));

// loop
const fruits = ["Apple", "Banana", "Pineapple", "Jackfruit", "Tomato"]
for(let index=0; index < fruits.length; index++){
    const element = fruits[index];
    console.log(element);
}

// functions
function sum(a, b) {
    console.log(arguments);
    console.log(...arguments);
    const result = a + b;
    console.log(result);
}
sum(1, 2);

// objects
const person = {
    name: "Gias",
    age: 10,
    friends: friends,
}
console.log(person);
console.log(person.name);
console.log(person.friends);
console.log(person.friends[1]);

person.name = "Hero Alom";
console.log(person.name);