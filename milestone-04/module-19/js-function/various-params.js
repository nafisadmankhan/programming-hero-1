/**
 * For a given string tell me whether it has even number of characters or not
 */

function evenSizedString(str){
    const size = str.length;
    if(size % 2===0){
        console.log('Even Size');
    }else{
        console.log('Odd Size')
    }
    console.log(str, size);
}

// evenSizedString('Dhaka');

/**
 * Array Passing
 */
function numberOfElements(numbers){
    const len = numbers.length;
    console.log(len)
    return len;
}

numberOfElements([12, 45, 85, 123123, 5]);

/**
 * Object Passing
 */
function getAge(person){
    const age = person.age;
    return age;
}