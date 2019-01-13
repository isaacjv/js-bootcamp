let temp = 55

//Logical And Operator
//Logical OR operator

if (temp >= 60 && temp <= 90) {
    console.log('it is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
    console.log('dont go outside!')
} else {
    console.log('Eh. Do what you want.')
}

//Challenge area

let isGuest1Vegan = false
let isGuest2Vegan = false

// are both vegan? Only offer up vegan dishes
// at lease one vegan? Make sure to offer some vegan options
// Else, Offer up anything on menu

if(isGuest1Vegan && isGuest2Vegan) {
    console.log('Only offer up vegan dishes')
} else if (isGuest1Vegan || isGuest2Vegan) {
    console.log('Make sure to offer some vegan options')
} else {
    console.log('Offer up anything on menu')
}