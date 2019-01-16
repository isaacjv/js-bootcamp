const todos = [{
    name: 'make bed',
    isComplete: false
 }, {
    name: 'brush teeth',
    isComplete: true
}, {
    name: 'get milk',
    isComplete: true
}, {
    name: 'walk the dog',
    isComplete: false
 }, {
    name: 'go to the gym',
    isComplete: false
 }]

// 2. Allow us to remove a to-do by text value

const deleteTodo = function (todoList, task) {
    const index = todos.findIndex(function (todo) {
        return todo.name.toLowerCase() === task.toLowerCase()
    })
    todoList.splice(index, 1)
}

deleteTodo(todos, 'Get Milk')
console.log(todos)