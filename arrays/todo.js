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

const sortTodos = function (list) {
    list.sort( function (a, b) {
        if(!a.isComplete && b.isComplete) {
            return -1;
        } else if (a.isComplete && !b.isComplete) {
            return 1;
        } else {
            return 0;
        }
    })
}

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

sortTodos(todos);
console.log(todos);

//console.log(getThingsToDo(todos));
