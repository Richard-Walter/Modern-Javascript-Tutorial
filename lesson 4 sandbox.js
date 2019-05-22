/*              FUNCTIONS                      */

//Function declaration  - 
function greet(){
    console.log('Hello there')

}

//  function expression - stores function inside a variable (must declare before use it)
const speak = function(name = 'luigi', time = 'night'){
    console.log(`good day ${name} ${time}`)
};

greet();
speak('mario', 'morning');
speak() //prints good day luigi night (default values)

const calcArea = function(radius){
    return 3.14 * radius**2;
    
}

// const area = calcArea(5);
console.log(`Calculated area is ${calcArea(5)}`)

//ARROW FUNCTIONS - need parenthesis if there is more than one parameter
const calcArea2 = (radius) => 3.14 * radius**2;
console.log(`Calculated area2 is ${calcArea2(5)}`)

const speak2 = (name, time) => `good day ${name} ${time}`
console.log(speak2('Richard', 'miday'));

const bill = (products, tax) => {

    let total = 0;
    for (let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
        
    }
    return total;
}

console.log(bill([10, 15, 30], 0.2))


//  Callbacks & foreach  

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value)
}

myFunc(value => {
    //do something
    console.log(value);
});
 

let peoples = ['mario', 'luigi', 'ryu', 'shaunn', 'chun-li'];
peoples.forEach((person, index) => console.log(person, index));

//get a reference to the 'ul'
const ul = document.querySelector('.people');
const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
  // create html template for each person
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;