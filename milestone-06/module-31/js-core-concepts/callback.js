// callback
function pakhiBhai(callMeBack, patro, patri){
    console.log('callMeBack parameter', callMeBack)
    console.log('Value of patro ', patro)
    if(patri){
        // console.log(callMeBack)
        callMeBack("Jodu")
    }else{
        console.log('tor kopale biya nai')
    }
}



function callSomeOne(person){
    console.log('Calling ', person)
}
callSomeOne('Jodu')



pakhiBhai(callSomeOne, 'jodu', 'modu')



// myBtn.addEventListener('click', () => {

// })



const addFive = x => x + 5
[1, 2, 3, 4, 5].map(x => x + 5)