const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

const generateTemplate = (todo) => {

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>  
    `;

    list.innerHTML += html
}


addForm.addEventListener('submit', e => {

    e.preventDefault(); //prevent page from reloading
    const todo = addForm.add.value.trim();

    if (todo.length) {
        generateTemplate(todo)
        addForm.reset();

    }

});

//delete todos
list.addEventListener('click', e => {

    console.log(e.target.classList)  //click elements classes
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

//search todos- using filter method
const filterTodos = (term) => {

    // console.log(term)
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        //add a class called filtered to the todo element
        .forEach(todo => todo.classList.add('filtered'))
        
    //remove filtered class if user deletes letters
    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    //add a class called filtered to the todo element
    .forEach(todo => todo.classList.remove('filtered'))    
};

search.addEventListener('keyup', () =>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term)
})
