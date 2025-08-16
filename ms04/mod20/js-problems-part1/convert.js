// 12 inch 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

function inchToFeetExtended(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12; 
    const result = feetNumber + ' ft ' + inchRemaining + ' inch '
    return result;
}

const johnHeight = inchToFeet(75);
console.log(johnHeight);

const johnHeighExtended = inchToFeetExtended(75);
console.log(johnHeighExtended);

function mileToKilometer(mile) {
    const kilo = milo * 1.60934;
    return kilo;
}

function kilometerToMile(kilo) {
    const mile = kilo * 0.621371;
    return mile;
}