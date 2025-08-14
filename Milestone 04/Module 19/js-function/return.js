function tenTimes(number){
    const result = number * 10;
    return result;
    console.log(result);            // This is an unreachable code
}

function cutHalf(number){
    const half = number / 2;
    return half;
}

tenTimes(5);

const result = tenTimes(5);