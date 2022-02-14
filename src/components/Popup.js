export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(`#${popupSelector}`);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_open");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_open");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target === this._popupElement ||
        evt.target.classList.contains("popup__close-btn")
      ) {
        this.close();
      }
    });
  }
}
