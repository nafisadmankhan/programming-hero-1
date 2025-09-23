const test = 0

if (test) {
    console.log("its truthy");
} else {
    console.log("its falsy");
}

test ? console.log("its truthy") : console.log("its falsy");

const isActive = true;

const showUser = () => console.log("show user green");
const hideUser = () => console.log("hide user");

isActive && showUser();