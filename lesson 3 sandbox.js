/*       FLOW CONTROL      */

//FOR LOOPS

for (let i = 0; i < 5; i++) {
    console.log('in loop: ', i)
}

const names = ['shaun', 'mario', 'luigi']

for (let i = 0; i < names.length; i++) {
    // console.log(names[i])
    let html = `<div>${names[i]}</div>`;
    console.log(html)
}

//WHILE LOOP
let i = 0;

while (i < 5) {
        
    console.log('In lopp: ' + i);
    i++;
}

//SWITCH STATEMENTS (USes strict equality)
const grade = 'D'   //  This will run case D, E and DEFAULT unless we use break

switch(grade){

    case 'A':
        console.log('you got an A!')
        break;
    case 'B':
        console.log('you got an B!')  
        break;
    case 'C':
            console.log('you got an C!') 
        break;
    case 'D':
            console.log('you got an D!')  
        break; 
    case 'E':
            console.log('you got an E!')
        break;                       
default:
            console.log('Not a valid grade')
}   

