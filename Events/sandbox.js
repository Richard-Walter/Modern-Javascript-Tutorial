// attach event listeners
// const button = document.querySelector('button')
// const ul = document.querySelector('ul')

// button.addEventListener('click', () => {

//     console.log('YOu click me');
//     console.log(ul.innerHTML);
//     // ul.innerHTML += '<li>somenew</li>';
//     const li = document.createElement('li')
//     li.textContent ='Something new via createElement'
//     ul.append(li)   //put at the bottom of the element
//     ul.prepend(li)   //put at the top of the parent

// })

// const items = document.querySelectorAll('li')

// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         console.log('even in li');
//         // console.log(e)
//         // console.log(e.target)
//         // console.log(item)
//         // item.remove()
//         e.stopPropagation() //stops event ubbling up to parent event listeners
//         e.target.remove()
//         // e.target.style.textDecoration = 'line-through'
//     });
// });

//event bubbling - events travel up the heirachy to parent even listeners

// ul.addEventListener('click', e => {
//     console.log('evenet in UL')
//     console.log(e.target)   //get the html line that the element that was clicked
//     if (e.target.tagName === 'LI'){
//         e.target.remove();
//     }

// })

const copy = document.querySelector('.copy-me');

//event listener when a user copies text.
copy.addEventListener('copy', () => {
  console.log('OI! my content is copyrighted!!');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
  // console.log(e);
  // console.log(e.offsetX, e.offsetY);
  box.textContent = `x pos - ${e.offsetX}  y pos - ${e.offsetY}`;
});

//add a mouse wheel elevent to the whole document

document.addEventListener('wheel', e => {
  console.log(e.pageX, e.pageY);    //position of cursor during wheel rolled
});