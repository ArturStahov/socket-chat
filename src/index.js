import 'reset-css';
import './scss/import.scss';
import FormChat from './js/form.js';
import Render from './js/render.js';

const ws = new WebSocket('wss://apartment-service-api.herokuapp.com/chat');

const formOptions = {
  formSelector: '#chatForma',
  socket: ws,
};

const chatListOptions = {
  chatListGuard: '#scroolGuard'
}

const formChat = new FormChat(formOptions);
const renderChat = new Render(chatListOptions);

function handlerOpenedSocket() {
  console.log('socket open!!');
}

function handlerRetraiverMessage({ data }) {
  console.log('Message from chat', data);
  renderChat.addMessage(data);
}

ws.onopen = handlerOpenedSocket;
ws.onmessage = handlerRetraiverMessage;
