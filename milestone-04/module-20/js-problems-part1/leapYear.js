/**
 * Year will be a leap year if the year is divisible by 4
 */

function isLeapYear (year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    } else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    return false;
}

var isLipi = isLeapYear(2100);
console.log(isLipi);
var isLipi = isLeapYear(2400);
console.log(isLipi);
var isLipi = isLeapYear(1900);
console.log(isLipi);
var isLipi = isLeapYear(2052);
console.log(isLipi);

/**
 * 1. Those year that is not divisible by 100, but divisible by 4 is a Leap Year
 * 2. If the year is divisible by 400, then it is a leap year
 * 3. Else it is not a leap year
 */