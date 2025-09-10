// function counter(){
//     let count = 0
//     // const numbs = []
//     // const people = {}
//     // return count
//     function innerFunction(){
//         console.log('inside the inner function, some one called me')
//     }
//     return innerFunction
// }
// const output = counter()
// console.log(output())



function counter(){
    let count = 10

    return function(user){
        count = count + 1
        console.log('Inside the inner function', user, count)
    }
}
// const innerFunc = counter()
// innerFunc()
// innerFunc()
// innerFunc()

const rahimCounter = counter()
rahimCounter('rahim')
rahimCounter('rahim')
rahimCounter('rahim')
console.log('-------------------------')

const karimCounter = counter()
karimCounter('karim')
karimCounter('karim')
karimCounter('karim')
console.log('-------------------------')

const jabbarCounter = counter()
jabbarCounter('steve')
jabbarCounter('steve')
jabbarCounter('steve')

console.log('-------------------------')
rahimCounter('rahim')