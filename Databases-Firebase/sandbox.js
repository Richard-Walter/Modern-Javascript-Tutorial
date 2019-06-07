// firebase free for small applications and users

const list = document.querySelector('ul');
const form = document.querySelector('form')
const button = document.querySelector('button')

const addRecipe = (recipe, id) => {
  console.log(recipe)
  let time = recipe.created_st.toDate()
  let html = `
    <li data-id="${id}">
      <div>${recipe.title}</div>
      <div><small>${time}</small></div>
      <button class="btn btn-danger btn-block my-3">delete</button>
    </li>
  `;

  list.innerHTML += html;
};

// delete recipe from HTML: already removed from firestore
const deleteRecipe = (id) => {
  const recipes = document.querySelectorAll('li')
  recipes.forEach(recipe => {
    if (recipe.getAttribute('data-id') === id){
      // console.log(recipe)
      recipe.remove();  //remove thei <li> tag
      
    }
  })
}


// get documents from firebase
// db.collection('recipes').get().then(snapshot => {
//   // console.log(snapshot);
//   snapshot.docs.forEach(doc => {
//     console.log(doc.data());
//     addRecipe(doc.data(), doc.id);
//   });
// }).catch(err => {
//   console.log(err);
// });

//better to use a realtime firebase listener whenevere the firebase collection changes
const unsub = db.collection('recipes').onSnapshot(snapshot => {
  // console.log(snapshot.docChanges())
  snapshot.docChanges().forEach(change => {
    const doc = change.doc; //get reference to the actual document not just changes
    if(change.type === 'added'){
      addRecipe(doc.data(), doc.id)
    } else if (change.type === 'removed')
      deleteRecipe(doc.id)
  })

})



// add documents
form.addEventListener('submit', e => {
  e.preventDefault();

  const now = new Date();

  //create firebase document
  const recipe = {
    title: form.recipe.value,
    created_st: firebase.firestore.Timestamp.fromDate(now)
  }

  db.collection('recipes').add(recipe).then(() => {
    console.log('recipe added');
  }).catch(err => {
    console.log(err)
  })

})

//delete recipes: add listener to whole form as it is more efficient
list.addEventListener('click', e => {
  // console.log(e)
  if (e.target.tagName ==='BUTTON'){
    const id = e.target.parentElement.getAttribute('data-id')
    // console.log(id);
    db.collection('recipes').doc(id).delete()
    console.log('recipe deleted')
    
  }
})

//unsub from database changes
button.addEventListener('click', () =>{
  unsub();
  console.log('unscubscribed from collection changes');
  
})