const account ={
    name: 'Garth Vader',
    expenses: [],
    income: [],
    addExpense: function(description, price) {
        this.expenses.push({
            description: description,
            amount: price
        })
    },
    addIncome: function(description, price) {
        this.income.push({
            description: description,
            amount: price
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0; 
        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount;
        })
        let totalIncome = 0;
        this.income.forEach(function (income) {
            totalIncome += income.amount;
        })
        return `${this.name} has a balance of $${totalIncome - totalExpenses}. $${totalExpenses} in expenses. $${totalIncome} in income.`;
    }
}

//add income array into the account
//set up addIncome method -> description, amount
//revise the get accout summary to subtract expesnse from income and provide account balance
//return: Name has a balance of $10. $100 in income. $90 in expenses

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
console.log(account.getAccountSummary());