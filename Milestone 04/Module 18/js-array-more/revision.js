/**
 * 1. const     --> value not going to change
 * 2. let       --> value might change
 * 3. var       --> should not use (unless exceptional cases)
 */

// Primitive
const price = 500                                                               // number
const name = "Rahim"                                                            // string
const isPoor = false                                                            // false
const friends = ['Elon', 'Mark', 'Bill', 'Jeff']                                // Array
// Non-Primitive
const student = {   class: 9, name: 'John Doe', age: 17, address: 'Mirpur'  }   // object 

// Condition
if(price > 1000){
    console.log("Too expensive. Not for me");
}else{
    console.log("Not within my budget");
}

// while Loop
let pushUp = 0
while(pushUp < 3){
    console.log('Push Up', pushUp);
    pushUp++;
}

// for Loop
for(let i=0; i<3; i++){
    console.log(i)
}