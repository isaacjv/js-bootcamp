let num = 133.701

// fixed number of decimal places
console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 1
let max = 5
let randomNum = Math.floor(Math.random() * (max-min + 1)) + min

// Challenge area

// 1 - 5: true if correct, false if not correct

let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max-min + 1)) + min
    console.log(randomNum)    
    return guess === randomNum
}

console.log(makeGuess(1))