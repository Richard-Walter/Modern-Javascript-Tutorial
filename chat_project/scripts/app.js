//This class joins all the files together - start of app

//dom queries
const chatList = document.querySelector('.chat-list')


//class instances
const chatUI = new ChatUI(chatList)
const chatroom = new Chatroom('general', 'shaun')

//get chats and render them via the UI.js app
chatroom.getChats((data) => {
    chatUI.render(data) //this is a call back function once data has been updated
})