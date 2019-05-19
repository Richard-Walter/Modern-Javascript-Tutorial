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

//Nan = not a number 'Nan' will be logged to console e.g.
console.log(5 / 'hello')

//TEMPLATE STRINGS
const title = 'Best reads of 2019'
const author = "Richard Walter"
const likes = 33;

//Use ` not ' for template strings
console.log(`The blog called ${title} by ${author} has ${likes} likes`);

let html =`
    <h2>${title}</h2>
`;
console.log(html)

//ARRAYS (Lists in Python)

let ninjas = ['shaunn', 'ryu', 'chun-li'];

console.log(ninjas)
console.log(ninjas[1])
ninjas[1] = 'Ken'
console.log(ninjas[1])


let ages = [20, 25, 30, 35]
console.log(ages[2])

//storing different types in the one array
let random = ['Shaun', 'Crystal', 30, 20]

//array methods
console.log(ninjas.length)
console.log(ninjas.join('-')) //join array with character
console.log(ninjas.indexOf('Ken'))
console.log(ninjas.concat(['Richard', 'Walter']))
console.log(ninjas.push('James'))  //returns length after adding to the end of the array
console.log(ninjas)
console.log(ninjas.pop())
console.log(ninjas)

//NULL and UNDERFINED
let agee;
console.log(agee, agee + 3, `my age is ${agee}`);

let ageee = null;
console.log(ageee, ageee + 3, `my age is ${ageee}`);   //prints null 3 "my age is null"

//BOOLEANS
email = 'uwish@uwish@console.com.au';
console.log(email.includes('@'))
age = 25;

//loose comparison
console.log(age == 25);  //true
console.log(age !== '25'); //true

//strict comparison - best to use this in most cases
console.log(age === 25);  //true
console.log(age === '25'); //false

//TYPE CONVERSION
let scoreboard = '100'
console.log(scoreboard + 1) //this equals concatenation '1001'  Strings are black in the console

scoreboard = Number(author)  ///prints NaN
scoreboard = Number(scoreboard)
console.log(scoreboard + 1) //prints correctly 101  (Numbers are blue ins console)
console.log(typeof(score))

















