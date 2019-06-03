//store data in local storage - data stays after a refresh or new tab
console.log('test')

// can see this data in the dev console  uner application-> Local storage
localStorage.setItem('name', 'mario')
localStorage.setItem('age', 50) //everything in local storage will get converted to string

//get data from local storage
let name = localStorage.getItem('name')
let age = localStorage.getItem('age')
console.log(name)
console.log(age)

//updating data
localStorage.setItem('name', 'luigi')
localStorage.age = '40'
console.log(localStorage.getItem('name'))
console.log(localStorage.getItem('age'))

//deleting data from local storage
localStorage.removeItem('name')
console.log(localStorage.getItem('name'))   //returns null

//remove all items from localstorage
localStorage.clear();

//storing more complex data
const todos = [
    {text: 'play mariokart', author: 'shaun'},
    {text: 'buy some milk', author: 'mario'},
    {text: 'buy some bread', author: 'luigi'}
  ];
  
//   console.log(JSON.stringify(todos));
  localStorage.setItem('todos', JSON.stringify(todos));
  
  const stored = localStorage.getItem('todos');
  // console.log(stored);
  
  console.log(JSON.parse(stored));