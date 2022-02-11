import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        this._imageEl = this._popupElement.querySelector(".popup__preview-image");
        this._imageTitleEl = this._popupElement.querySelector(".popup__figure-caption");
    }

    open(cardData) {      
        this._imageEl.src = cardData.link;
        this._imageEl.alt = cardData.title;
        this._imageTitleEl.textContent = cardData.title;
        super.open();
    }
}