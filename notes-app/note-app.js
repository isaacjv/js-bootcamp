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

// DOM - Document Object Model

// Query and remove
// const p = document.querySelector('p');
// p.remove();

// Query and remove all
const ps = document.querySelectorAll('p');
ps.forEach(function (p) {
    p.textContent = '***XXX***';
    //console.log(p.textContent);
    //p.remove();
})

// add a new element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Programmatic creation of elements is fun';
document.body.appendChild(newParagraph);