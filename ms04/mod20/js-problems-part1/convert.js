// 12 inch 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

function inchToFeetExtended(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
}

const johnHeight = inchToFeet(75);
console.log(johnHeight);

const johnHeighExtended = inchToFeetExtended(75);