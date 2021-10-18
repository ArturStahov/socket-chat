import templateMessage from '../template/messageTemplate.hbs';

export default class Render {
  constructor({ chatListGuard }) {
    this.chatViewRef = document.querySelector(chatListGuard);

  }

  addMessage(data) {
    const messageObj = JSON.parse(data);
    const newMessage = templateMessage(messageObj);
    this.chatViewRef.insertAdjacentHTML('beforeBegin', newMessage);
    this.chatViewRef.scrollIntoView({block: "center", behavior: "smooth"});
  }
}
