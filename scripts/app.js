const chatList = document.querySelector('.chat-box-content');
const newChatForm = document.querySelector('.new-chat-form');
const nameForm = document.querySelector('.name-form');

const scrollToBottom = () => {
    chatList.scrollTop = chatList.scrollHeight - chatList.clientHeight;
}



newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();

    chat.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));

    scrollToBottom();
});

nameForm.addEventListener('submit', e => {
    e.preventDefault();
    const newName = nameForm.name.value.trim();
    chat.updateName(newName);
    nameForm.reset();
});

const username = localStorage.username ? localStorage.username : 'Anonim';

// class instances
const chatUI = new ChatUI(chatList);
const chat = new Chat(username);

chat.getChats(data => {
    chatUI.render(data);
    scrollToBottom();
});

