const button = document.querySelector('button')

button.addEventListener('click', () => {
    console.log('YOu click me');
})

const items = document.querySelectorAll('li')

items.forEach(item => {
    item.addEventListener('click', (e) => {
        // console.log('item clicked');
        // console.log(e)
        // console.log(e.target)
        // console.log(item)
        // item.remove()
        e.target.style.textDecoration = 'line-through'
    });
});
