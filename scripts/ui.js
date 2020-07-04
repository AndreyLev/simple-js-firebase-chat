class ChatUI {
    constructor(list) {
        this.list = list;
    }
    clear() {
        this.list.innerHTML = '';
    }
    render(data) {
        const when = dateFns.distanceInWordsToNow(
            data.created_at.toDate(),
            { addSuffix: true }
        );

        const html = `
        <div class="user-message-block">
            <div class="user-avatar">
                
            </div>
                <div class="user-message">
                    <div class="user-message-title">${data.username} <span class="message-date">${when}</span></div>
                    <div class="user-message-content">
                        <p>${data.message}</p>
                </div>
            </div>
        </div>
        `

        this.list.innerHTML += html;
    }
}