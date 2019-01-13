let myAccount = {
    name: 'Isaac Votta',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

// addIncome take account and amount of income as argument
let addIncome = function (account, income) {
    account.income += income
}

// resetAccount reset expenses and income to 0
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

// getAccountSummary print full summary of account
let getAccountSummary = function (account) {
    return `Account for ${account.name} has a balance of $${account.income - account.expenses}.` + 
           ` $${account.income} in income. $${account.expenses} in expenses`
}

//add income
//add Expense
//add Expense
//get summary
//clear account
//get summary again

addIncome(myAccount, 100)
addExpense(myAccount, 22.50)
addExpense(myAccount, 2.50)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))