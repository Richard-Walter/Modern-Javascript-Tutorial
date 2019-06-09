//signup
const signupForm = document.querySelector('#signup-form')

// event listener is submit rather than on button as it listens to return as well
signupForm.addEventListener('submit', e => {
  e.preventDefault();

  const email = signupForm['signup-email'].value
  const password = signupForm['signup-password'].value

  // sign up the user using firebase auth object we created in the HTML
  //this is asyncronous and returns a promise containing a user credential
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred);
    const modal = document.querySelector('#modal-signup')
    //close the signup modal
    M.Modal.getInstance(modal).close()
    signupForm.reset()
    
  })


})

