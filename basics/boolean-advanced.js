let isAccountLocked = true
let userRole = 'user'

if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole === 'admin'){
    console.log('Welcome Admin!')
} else {
    Console.log('Welcome')
}


//Challenge Area

let temp = 500

if (temp <= 32) {
    console.log('It is freezing outside!')
} else if (temp >= 110) {
    console.log('It is way too hot outside!')
} else {
    console.log('Go for it. It is pretty nice.')
}