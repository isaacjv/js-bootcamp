// Function - input, code to run, output

let greetUser = function () {
    console.log('Welcome User!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let biggerValue = square(10)

console.log(value)
console.log(biggerValue)

// Challenge Area

//convertFahrenheitToCelsius

// call a couple times

let convertFahrenheitToCelsius = function (temp) {
    temp = (temp - 32) * (5 / 9)
    return temp
}

let convertedTemp = convertFahrenheitToCelsius(32)
console.log(convertedTemp)

let biggerTemp = convertFahrenheitToCelsius(68)
console.log(biggerTemp)