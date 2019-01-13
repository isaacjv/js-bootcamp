// students score, total possible score
// generate letter grade and number grade
// 15/20 -> You got a c (75%)



let gradeCalc = function(studentScore, maxScore) {
    let numericScore =  (studentScore / maxScore) * 100
    let letterGrade = null
    if(numericScore >= 90) {
        letterGrade = 'A'
    } else if(numericScore >= 80) {
        letterGrade = 'B'
    } else if(numericScore >= 70) {
        letterGrade = 'C'
    } else if(numericScore >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} (${numericScore}%)!`
}

let score1 = gradeCalc(15, 20)
let score2 = gradeCalc(99, 100)
let score3 = gradeCalc(13, 65)

console.log(score1)
console.log(score2)
console.log(score3)