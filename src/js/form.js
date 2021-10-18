export default class FormChat {
  constructor({ formSelector, socket }) {
    this.formRef = document.querySelector(formSelector);
    this.formAreaRef = this.formRef.querySelector('textarea');
    this.formData = null;
    this.socket = socket;
    this._init();
  }

  _init() {
    this._handlerForm = this._handlerForm.bind(this);
    this.formRef.addEventListener('submit', this._handlerForm);
  }

  _handlerForm(event) {
    event.preventDefault();

    if (!this.formAreaRef.value) {
      alert('enter message !!');
      return;
    }

    if (!this.isOpenSocket()) {
      alert('sorry you disconnect, reload page!!');
      return;
    }

    this.formData = new FormData(this.formRef);
    const date = new Date().toLocaleString();

    const messageObj = {
      message: this.getMessage(),
      date,
    };

    const data = JSON.stringify(messageObj);
    this.socket.send(data);

    this.formRef.reset();
  }

  isOpenSocket() {
    return this.socket.readyState === this.socket.OPEN;
  }

  getMessage() {
    return this.formData.get('message');
  }
}
