const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')
// const username = document.querySelector('#username')

form.addEventListener('submit', e => {
    e.preventDefault()    //prevents refresh of page
    console.log(form.username.value);   //can access form values using . notation
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;
    console.log(usernamePattern.test(username))

    if (usernamePattern.test(username)){
        feedback.textContent = 'that username is valid'
    } else {
        feedback.textContent = 'Username msut contain lettes and be bewtween 6 and 12 characters'
    }

}); //add listener to form not submit button

// // testing reg expression
// const username = 'shauxgjhgjjkgj'
// //find at least 6 characters
// const pattern = /[a-z]{6,}/;

// // let result = username.search(pattern)   //returns integer of first match, -1 if no match

// //test regEx
// let result = pattern.test(username) 

// if(result){

//     console.log('regex passed');
// } else {
//     console.log('regex test failed');
// }
