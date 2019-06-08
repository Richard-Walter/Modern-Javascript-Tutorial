//This class joins all the files together - start of app

//dom queries
const chatList = document.querySelector('.chat-list')
const newChatForm = document.querySelector('.new-chat')
const newNameForm = document.querySelector('.new-name')
const updateMssg = document.querySelector('.update-mssg')
const rooms = document.querySelector('.chat-rooms')


// add a new chat
newChatForm.addEventListener('submit', e =>{
    e.preventDefault()
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)   //returns a promise
    .then(()=> newChatForm.reset())
    .catch(err => console.log(err))
    })

// update room
rooms.addEventListener('click', e =>{
    e.preventDefault()
    // console.log(e);
    if(e.target.tagName === 'BUTTON') {
        chatUI.clear();
        chatroom.updateRoom(e.target.id);
        // chatroom.getChats(chat => chatUI.render(chat))
    }
})

// update name
newNameForm.addEventListener('submit', e =>{
    e.preventDefault()
    const name = newNameForm.name.value.trim();
    chatroom.updateName(name)   
    //reset the form
    newNameForm.reset()
    //show then hide the update message
    updateMssg.innerText = `Your name was updated to ${name}`
    //hise this message after 3 seconds
    setTimeout(() => updateMssg.innerText = '', 3000 )

})

//check local storage for a name
const username = localStorage.username ? localStorage.username : 'anon'

//class instances
const chatUI = new ChatUI(chatList)
const chatroom = new Chatroom('general', username)

//get chats and render them via the UI.js app
chatroom.getChats((data) => {
    chatUI.render(data) //this is a call back function once data has been updated
})