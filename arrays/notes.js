const notes = [{
    title: 'My next trip',
    body: 'I would like to go somewhere warm and beachy'
},{
    title: 'Habits to work on',
    body: 'Exercise, and Eating a bit better'
},{
    title: 'Office Modifications',
    body: 'get some 4k monitors'
}]

// console.log(notes.pop())
// notes.push('My New Note')

// console.log(notes.shift())
// notes.unshift('My First note')

// notes.splice(1, 1, 'This is the new second item')

// notes[2] = 'This is now the new note 3'

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })

console.log(notes.length)
console.log(notes)

const index = notes.findIndex(function (note, index) {
    console.log(note)
    return note.title === 'Habits to work on'
})
console.log(index)