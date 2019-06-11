// rest parameter - similar to *kwargs in Python
const double = (...nums) => {
    console.log(nums);
    return nums.map(num => num*2)
}

const result = double(1,3,5,7,9,2,4,6,8)
console.log(result);

// spread syntax (arrays) - similar but works opposite way
const people = ['shaun', 'ryu', 'crystal']
console.log(...people);

const member = ['mario', 'chun-li', ...people]
console.log(member);

// spread synyax (objects)
const person = {
    name: 'shaun',
    age: 30,
    job: 'net ninja'
}

// const personClone = person  //wont work
const personClone = {...person,  location: 'manchester'}
console.log(personClone);

//Sets - list of unique values only present once: no duplicates

const namesArray = ['ryu', 'chum-li', 'ryu', 'shaun']
console.log(namesArray);

const namesSet = new Set(namesArray)
console.log(namesSet);

const uniqueNames = [...namesSet]
console.log(uniqueNames);

const ages = new Set();
ages.add(20)
ages.add(25).add(30).add(40)
ages.add(25)  //will disregard this because this value is already in the set

ages.delete(25)

console.log(ages, ages.size);
console.log(ages.has(30));

// ages.clear();
// console.log(ages);

ages.forEach(age => {
    console.log(age+5);
})

// Symbols: data type and is completly unique.  Used as keys in property names
const symbolOne = Symbol(' a generic name');
const symbolTwo = Symbol(' a generic name');

console.log(symbolOne, symbolTwo, typeof symbolOne);
console.log(symbolOne===symbolTwo); //false

const ninja = {}
ninja.age = 30
ninja['belt'] = 'orange'
ninja['belt'] = 'black'

ninja[symbolOne] = 'ryu'
ninja[symbolTwo] = 'shaun'


console.log(ninja);
