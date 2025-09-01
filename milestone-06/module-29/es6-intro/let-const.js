let globalVar = "Global Variable"

console.log(globalVar)

function func_1() {
    let localVar = "Local Variable"
    console.log(globalVar)
    console.log(localVar)
}

func_1()

// Error
// console.log(localVar) 
