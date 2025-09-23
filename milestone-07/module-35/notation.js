const person = {
    name: "hero alom",
    age: 10,
    friends: ["karim"],
    salary: 100,
    10: "secret code",
    "hero-boss": "data",
}

const heroNameDot = person.name;
const heroNameBracket = person["name"];

console.log(heroNameDot);
console.log(heroNameBracket);

// const heroSecretDot = person.10; Errpr
const heroSecretBracket = person[10];
console.log(heroSecretBracket);
