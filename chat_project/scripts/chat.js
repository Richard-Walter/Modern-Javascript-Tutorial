//adding new chat documents (messages)
//setting up a real-time listener to get new chats
//updating the username
//updating the room

class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username
        this.chats = db.collection('chats')
        this.unsub //used to usubscribe from the firestore listener

    }

    async addChat(message) {
        //format a chat object to send to firebase
        const now = new Date()

        const chat = {
            message: message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }
        //save chat document
        const response = await this.chats.add(chat)
        return response //return a promise as await keyword used
    }

    //set up a realtime listener that will return a response when there has been a change
    getChats(callback){
        this.unsub = this.chats //onSnapshot listener returns an unsub object
            .where('room', '==', this.room) //takes 3 arguments like SQL
            .orderBy('created_at')  //output them in datae order
            .onSnapshot(snaphot => {
                snaphot.docChanges().forEach(change => {
                    if(change.type === 'added') {}
                        //update ui
                        callback(change.doc.data())
                      
                })
        })
    }

    updateName(username){
        this.username = username;
        localStorage.setItem('username', username)
    }

    updateRoom(room){
        this.room = room
        if (this.unsub) {
            this.unsub();   //unsubscripe to document changes for current room
        }
        //get new chat window based on new room
        chatroom.getChats((data) => {
            chatUI.render(data)
        })

    }
}