class Chat {
    constructor(username) {
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }

    async addChat(message) {
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }

        const response = await this.chats.add(chat);
        return response;
    }

    getChats(callback){
        
        this.unsub = this.chats
            .orderBy('created_at')
            .onSnapshot(snapshot => {
             snapshot.docChanges().forEach(change => {
                if (change.type === 'added') {
                    callback(change.doc.data());
                }
             });
        });

    }
    updateName(username) {
        this.username = username;
        localStorage.setItem('username', username);
    }
}