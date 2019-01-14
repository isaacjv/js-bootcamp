const todos = ['make bed', 'brush teeth', 'get milk', 'walk the dog', 'go to the gym']

// delete the third item ( get milk )
todos.splice(2, 1)
// add a new item to the end
todos.push('take out the trash')
// remove the first item from the list
todos.shift()

console.log(`You have ${todos.length} todos on your list today`)
console.log(todos)
