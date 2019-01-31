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

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.Title.toLowerCase() < b.Title.toLowerCase()) {
            return -1;
        } else if (a.Title.toLowerCase() > b.Title.toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    }) 
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.Title.toLowerCase() === noteTitle.toLowerCase();
    })
}

const findNotes = function (notes, textToSearch) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.Title.toLowerCase().includes(textToSearch.toLowerCase());
        const isBodyMatch = note.Body.toLowerCase().includes(textToSearch.toLowerCase());
        return isTitleMatch || isBodyMatch;
    })
} 

/* console.log(findNotes(notes, 'work'));

const note = findNotes(notes, 'EaTiNg');
console.log(note)
 */

 sortNotes(notes);
 console.log(notes);