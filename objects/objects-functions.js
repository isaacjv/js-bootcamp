let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
console.log(otherBookSummary.summary)

// Challenge

//take F temp in and return obj with all three, F, C, K

let tempConverter = function(temp) {
    return {
        originalTemp: temp,
        tempInCelsius: (temp - 32) * (5 / 9),
        tempInKelvin: (temp + 459.67) * (5 / 9)
    }
}

let conv1 = tempConverter(95)
let conv2 = tempConverter(-22)

console.log(`${conv1.originalTemp} degrees Fahrenheit is equal to ${conv1.tempInCelsius} degrees Celsius`)
console.log(`${conv2.originalTemp} degrees Fahrenheit is equal to ${conv2.tempInKelvin} degrees Kelvin`)
