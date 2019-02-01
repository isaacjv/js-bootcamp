const notes = [{
    Title: 'My next trip',
    Body: 'I would like to go somewhere warm and beachy'
},{
    Title: 'Habits to work on',
    Body: 'Exercise, and Eating a bit better'
},{
    Title: 'Office Modifications',
    Body: 'get some new 4k monitors'
}];

document.querySelector('button').addEventListener('click', function(e) {
    e.target.textContent = 'The button was clicked';
});