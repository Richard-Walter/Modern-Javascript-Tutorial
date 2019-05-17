// VARIABLES - MUTABLE
let age = 25;
let year = 2019;
console.log(age, year);

// VARIABLES - IMMMUTABLE
const points = 100;
console.log(points);

// points = 27;    throws typeerror
//before let and const, use to use var
var score = 75;

console.log(score);


// STRINGS (immutable)
console.log("test double quotes")
console.log('test single quotes')

let email = 'willthisnamedo@gmail.com';
let first = 'Richard'
let last = 'Walter'

let fullname = first + ' ' + last

console.log(fullname)
console.log(fullname[0])
console.log(fullname.length)
console.log(fullname.toLocaleUpperCase())
console.log(email.lastIndexOf('@'))
console.log(email.slice(4, 10))
console.log(email.replace('m', 'Z'))


// NUMBERS
let radius = 10;
const pi = 3.14;
console.log(radius, pi)
console.log(radius % 3)

//Nan not a number 'Nan' will be logged to console e.g.
console.log(5 / 'hello')

//TEMPLATE STRINGS
const title = 'Best reads of 2019'
const author = 'Richard Walter'
const likes = 33;

console.log(`The blog called ${title} by ${author} has ${likes} likes`)

let html =`
    <h2>${title}</h2>
`;
console.log(html)






