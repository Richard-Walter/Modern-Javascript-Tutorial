const form = document.querySelector('.signup-form')
// const username = document.querySelector('#username')

form.addEventListener('submit', e => {
    e.preventDefault()    //prevents refresh of page
    // console.log(username.value);
    console.log(form.username.value);   //can access form values using . notation

}) //add listener to form not submit button


