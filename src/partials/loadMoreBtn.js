export default class LoadMoreBtn {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector, select);

    hidden && this.removeButton();
  }

  getRefs(selector) {
    const refs = {
      button: document.querySelector(selector),
    };

    return refs;
  }

  addButton() {
    this.refs.button.classList.remove('is-hidden');
    this.refs.button.disabled = false;
  }

  removeButton() {
    this.refs.button.classList.add('is-hidden');
    this.refs.button.disable = true;
  }
}
