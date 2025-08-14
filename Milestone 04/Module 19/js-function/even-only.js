/**
 * Create function that will return only the even numbers
 * Return the sum of even numbers
 */

function evenNumbersOnly(numbers){
    const evens = [];
    // console.log(numbers);
    for(const number of numbers){
        // console.log(number);
        if(number % 2 === 0){
            // console.log(number);
            evens.push(number);
        }
    }
    return evens;
}

const numbers = [5, 8, 91, 24, 6];
console.log("Even numbers are ", evenNumbersOnly(numbers))

function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2===0){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}

const sum = sumOfEvenNumbers(numbers);
console.log('Sum of the even numbers is', sum);