class Vehicle {
    constructor(type, brand, price){
        this.type = type
        this.brand = brand
        this.price = price
    }
    getThis(){
        console.log(this)
    }
    getPrice(){
        return this.price
    }
}

const car1 = new Vehicle('Car', 'Honda', 500000)
car1.getThis()



const car2 = new Vehicle('Car', 'Toyota', 400000)
car2.getThis()