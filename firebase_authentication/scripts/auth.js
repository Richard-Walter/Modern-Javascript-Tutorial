// listen to auth status changes.  
auth.onAuthStateChanged((user) => {
  if (user) { //if not logged in the user object is null
    console.log('user logged in : ', user); 
  } else {
    console.log('User has logged out');
  }
 })

//get guide data firestore 
db.collection('guides').get().then((snapshot) => {
  setUpGuides(snapshot.docs)
  
})

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
    
    const modal = document.querySelector('#modal-signup')
    //close the signup modal
    M.Modal.getInstance(modal).close()
    signupForm.reset()

  })
})

// logout
const logout = document.querySelector('#logout')
logout.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut()

})

// log in
const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const email = loginForm['login-email'].value
  const password = loginForm['login-password'].value

  auth.signInWithEmailAndPassword(email, password).then((cred) => {
   
    //close the signup modal
    const modal = document.querySelector('#modal-login')
    M.Modal.getInstance(modal).close()
    signupForm.reset()
  })

})