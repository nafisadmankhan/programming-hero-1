// 30-6 (optional) Introduction to Class and objects

/**
 * class -> template
 * properties
 * method (a special type of function inside a class without the function keyword)
 * 
 * object 
 */

const student = {}



class Student {}
const student1 = new Student()
console.log(student1)



class Player {
    constructor(name, age){
        this.age = age
        this.location = 'Bangladesh'
        console.log('Calling the Constructor Method', name)
    }
    goal() {
        console.log('Score a goal')
    }
    getTeamName() {
        return "Borsha"
    }
}

// const player1 = new Player()
const player1 = new Player('Tom Brady')
console.log(player1)
player1.goal()

const player2 = new Player('Oshanto')



console.log(player1 instanceof Player)