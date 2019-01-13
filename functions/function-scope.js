

let convertFahrenheitToCelsius = function (temp) {
    let celsius = (temp - 32) * (5 / 9)

    if (celsius <= 0) {
        let isFreezing = true
    }
    return celsius
}

let temp1 = convertFahrenheitToCelsius(32)
let temp2 = convertFahrenheitToCelsius(68)

console.log(temp1)
console.log(temp2)