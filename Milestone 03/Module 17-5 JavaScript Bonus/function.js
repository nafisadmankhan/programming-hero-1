console.log("Today we will be learning function")

function hello(){
    console.log("I am a Function");
}

hello()

function moneybag(){
    var money = 4500;
    console.log("I have " + money + " Taka");
}

moneybag();

// console.log(money) // This line will cause an error

function jogKorarMachine(input1, input2){
    let sum = input1 + input2;
    console.log("Sum is = " + sum);
    return sum;
}

const result = jogKorarMachine(10, 40);
console.log(result)