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
 }];

// 2. Allow us to remove a to-do by text value

const deleteTodo = function (todoList, task) {
    const index = todos.findIndex(function (todo) {index
        return todo.name.toLowerCase() === task.toLowerCase();
    })
    if (index != -1) {
        todoList.splice(index, 1);
    }
}

const getThingsToDo = function(todoList) {
    return todoList.filter(function (task, index) {
        return task.isComplete === false;
    })
}


console.log(getThingsToDo(todos));
