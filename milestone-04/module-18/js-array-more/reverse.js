const numbers   = [1, 2, 3, 4, 5]
// reverse      = [5, 4, 3, 2, 1]

/**
 * push     last
 * pop      last
 * unshift  first
 * shift    first
 */

//  Way 1
const reversed = [];
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
    reversed.unshift(numbers[i]);
}

// Way 2
// const reversed = [];
// for(const num of numbers){
//     reversed.unshift(num);
// }

// Way 3
console.log(numbers)
console.log(numbers.reverse())