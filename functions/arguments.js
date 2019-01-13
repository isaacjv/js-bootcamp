// Multiple Arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)


// Default Arguments

let getScoreText = function(name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText  = getScoreText(undefined, 100)
console.log(scoreText)

// Challenge Time

let getTip = function(total, tipPercent = .2) {
    return `A ${tipPercent*100}% tip on a $${total} bill is $${total * tipPercent}`
}

let tipAmount = getTip(37)
console.log(tipAmount)

let tip2 = getTip(199, .25)
console.log(tip2)
