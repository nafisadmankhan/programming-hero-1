const products = [
    { name:"redmi", brand:"xiaomi", price:3000, color: "black"},
    { name:"galaxy", brand:"samsung", price:5000, color: "white"},
    { name:"iphone", brand:"apple", price:5000, color: "gold"},
    { name:"iphoneX", brand:"apple", price:5000, color: "gold"},
    { name:"redmi2", brand:"xiaomi", price:2000, color: "black"},
]

// const result=products.map(product => 
//     product.price
// );
// console.log(result);

// products.forEach(product=>
//     console.log(product.price)
// );

// const result = products.filter(product => 
//     product.brand=="apple"
// );
// console.log(result);

const result = products.find(product => product.name === "iphone");
console.log(result);