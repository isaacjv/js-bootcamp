// Undefined for Variable
let name

name = 'BRUH'

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// Undefined for function arguments
let square = function (num) {
    console.log(num)
}

// UNdefined as the function default return value
let result = square()
console.log(result)

// Null as assigned value
let age = 27

age = null
console.log(age)