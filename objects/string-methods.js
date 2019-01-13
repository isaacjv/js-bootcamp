let name = '  Garth Vader   '

//length propery
console.log(name.length)

//convert to upper case
console.log(name.toUpperCase())

//convert to lower case
console.log(name.toLowerCase())

// includes method
let password = 'abc123oogabooga098'
console.log(password.includes('password'))

// trim
console.log(name.trim())

//challenge area

let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfg'))
console.log(isValidPassword('asdhjkl12345'))
console.log(isValidPassword('123password456'))