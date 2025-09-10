// global scope
const name = 'Tom Hanks'
console.log('location', location)



// if block
if(true){
    const data = 58
    console.log("Inside the if block ", data)
    doMath(88, 999)
}
// console.log("Outside the if block", data)       // ReferenceError: data is not defined



// while block
// while(true){

// }



// for block
for(const num of [1, 2, 5, 4, 6]){

}



// function scope / local scope
function doMath(a, b){
    console.log(a, b)
    const sum = a + b
    const total = sum + 10
    function doubleIt(x){
        return x * 2
    }
    console.log("Calling doubleIt ", doubleIt(450))
}



var location = 'Balur Ghat'
// Temporal dead zone
let location = 'Balur Ghat'