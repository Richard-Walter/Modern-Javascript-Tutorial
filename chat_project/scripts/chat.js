//adding new chat documents (messages)
//setting up a real-time listener to get new chats
//updating the username
//updating the room

class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username
        this.chats = db.collection('chats')

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
        this.chats
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

}

const chatroom = new Chatroom('general', 'shaun')

chatroom.getChats((data) => {
    console.log(data);
})