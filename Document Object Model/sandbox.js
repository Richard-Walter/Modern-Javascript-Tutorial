// // retrieve a single element from the DOM using CSS selector
// const para = document.querySelector('body > h1');    //grabs first p tag that it comes across
// const parac = document.querySelector('.error')    //grabs ctag with class 'error'
// const pared = document.querySelector('div.error')    //grabs ctag with div tag and class 'error'

// console.log(para)

// // Grab a group of elements.
// const paras = document.querySelectorAll('p') //store result in a node list - similar to an array
// console.log(paras)
// console.log(paras[2])

// //cycle through results
// paras.forEach(para => console.log(para));

// const errors = document.querySelectorAll('.error')
// errors.forEach(err => console.log(err));

// //get an element by ID
// const title = document.getElementById('page-title');
// console.log(title)

// // get elements based on their class name
// const errrors = document.getElementsByClassName('error')    //returns HTML selection not node list
// console.log(errrors)
// console.log(errrors[1]) // can't use a for each on HTML collection

// //get elements by their tag name
// const paras3 = document.getElementsByTagName('p')
// console.log(paras3) //returns HTML collection
// console.log(paras3[1]) //returns HTML collection

// //changing elements in the DOM
// const par = document.querySelector('p')

// par.innerText = 'ninjas are awesome' 
// par.innerText += 'so are turtles' 

// const parall = document.querySelectorAll('p')
// parall.forEach(para => {
//     console.log(para.innerText)
//     para.innerText += ' NEW TEXT';
//     console.log(para.innerText)
    
// });

// //changing HTML in the DOM
// const content = document.querySelector('.content');
// // content.innerHTML = '<H2>This is a new H2</H2>'

// const people = ['mario', 'luigi', 'yoshi']

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`
// })

// //update attributes of HTML elements
// const link = document.querySelector('a');
// console.log(link)
// console.log(link.getAttribute('href'))
// // link.setAttribute('href', "https:\\wwww.happyearth.com.au")
// link.innerText = "Happy Earth"

// const mssg = document.querySelector('p')
// console.log(mssg)
// mssg.setAttribute('class', 'success')
// mssg.setAttribute('style', 'color: green')  //doesn't matter if attribute doesn't exist

// const title2 = document.querySelector('h1');
// title2.style.color = 'crimson';
// title2.style.fontSize = '60px'  //must use camel case not font-size as displayed on the element page as it thinks subtraction 
// console.log(title2.style.color)

//changing class to change the style

const content = document.querySelector('p');
console.log(content)

// content.classList.remove('error')   
content.classList.add('success')    //add the success style sheet

const paras = document.querySelectorAll('p')

paras.forEach(p => {
   
  if(p.innerText.includes('error')){    //gets all the text that is visible
    p.classList.add('error');
  } else if(p.textContent.includes('success')) { //gets all the text hidden included
    p.classList.add('success');
  }
});


