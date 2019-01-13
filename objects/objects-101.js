let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'


console.log(`${myBook.title} by ${myBook.author}`)

// Challenge Area
// name, age, location

let thisGuy = {
    name: 'Isaac',
    age: 25,
    location: 'Philadelphia'
}

console.log(`${thisGuy.name} is ${thisGuy.age} and lives in ${thisGuy.location}`)

thisGuy.age += 1

console.log(`${thisGuy.name} is ${thisGuy.age} and lives in ${thisGuy.location}`)
