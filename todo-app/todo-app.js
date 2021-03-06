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

 //print a summary message for how many todos are not complete <p tag>
 // add a p for each to do above. use the text value of object as the visible text.

const todoCount = todos.filter(function (todo) {
    return !todo.isComplete;
})

const summary = document.createElement('h2');
summary.textContent = `You have ${todoCount.length} todos left`;
document.body.appendChild(summary);

todos.forEach(function(todo){
    let newP = document.createElement('p');
    newP.textContent = todo.name;
    document.body.appendChild(newP);
})

document.querySelector('button').addEventListener('click', function(e) {
    console.log('WHO CLICKED THE BUTTON?!');
});