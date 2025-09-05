class Vehicle {
    #tin
    constructor(type, brand, price){
        this.type = type
        this.brand = brand
        this.price = price
        this.#tin = '123fwer1'
    }
    getThis(){
        console.log(this)
    }
    getPrice(){
        return this.price
    }
    getTin(){
        return this.#tin
    }
}

const car1 = new Vehicle('Car', 'Honda', 500000)
const car2 = new Vehicle('Car', 'Toyota', 400000)

car1.getThis()
car2.getThis()

console.log(car1.getPrice())
console.log(car2.getPrice())



// console.log(car1.#tin)                               // Private
console.log(car1.getTin())



const student = {
    name: 'Rahul Dravid',
    score: 10000,
    getScore: function(){
        console.log(this)
    },
    getScoreArrow: () => {
        console.log(this)
    }
}

student.getScore()
student.getScoreArrow()
console.log('Ultimate this', this)