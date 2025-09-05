let data
data = 0        // false
data = ''       // false    - empty string
data = ' '      // true     - contains white space
data = false 
data = null 
data = {}       // true
data = []       // true
data = false
data = true 
console.log("Value of data", data)

if(data){
    console.log('Value of data is truthy')
}else{
    console.log(data, ' is falsy')
}



// If we need to capture the falsy value to go inside if block
if(!data){
    console.log('Inside if with a falsy value')
}



// capture all positive value
// double not !!
// capture any value to boolean (true false)
if(!!data === true){
    console.log('Only true inside the double not')
}
