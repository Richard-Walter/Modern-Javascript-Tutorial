// listen to auth status changes.  
auth.onAuthStateChanged((user) => {
  if (user) { //if not logged in the user object is null

    //get guide data from firestore 
    db.collection('guides').get().then((snapshot) => {
      setUpGuides(snapshot.docs)
      setupUI(user)
  
})
  } else {
    setUpGuides([])
    setupUI()
  }
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

// create new guide
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('guides').add({
    title: createForm.title.value,
    content: createForm.content.value
  }).then(() => {
    // close the create modal & reset form
    const modal = document.querySelector('#modal-create');
    M.Modal.getInstance(modal).close();
    createForm.reset();
  }).catch(err => { //such as user doesn;t have permission
    console.log(err.message);
  });
});