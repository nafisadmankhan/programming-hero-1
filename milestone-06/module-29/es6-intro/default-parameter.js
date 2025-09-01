function sum(num1, num2){                   // parameter
    const total = num1 + num2
    console.log(total)
}

sum(10, 20)                                 // argument
sum(10)                                     // NaN = sum(10, undefined)



function multiply(num1=0, num2=0){
    const result = num1 * num2
    console.log(result)
}

multiply(10, 10)                            // 100



function fullName(first, last=''){
    const name = first + '' + last 
    console.log(name)
}

fullName('Karim')



/**
 * Rule of Thumb for default values
 * add, substract       0
 * multiply, divide     1
 * string               ''
 * array                []
 * object               {}
 */