import { popupPreview, previewImageEl, figureCaptionEl } from "./index.js";
import { openPopup } from "./utils/util.js";

class Card {
  constructor(cardTemplate, cardData) {
    this._cardData = cardData;
    this._cardTemplate = cardTemplate;
  }

  render() {
    this._element = this._cardTemplate.cloneNode(true);

    const titleEl = this._element.querySelector(".elements__title");
    const imageEl = this._element.querySelector(".elements__image");

    titleEl.textContent = this._cardData.name;
    imageEl.alt = this._cardData.name;
    imageEl.src = this._cardData.link;

    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector(".elements__like-button")
      .addEventListener("click", () => this._handleLikeButton());

    this._element
      .querySelector(".elements__trash-button")
      .addEventListener("click", () => this._handleDeleteButton());

    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => this._handlePreviewPopup());
  }

  _handleLikeButton() {
    this._element
      .querySelector(".elements__like-button")
      .classList.toggle("elements__like-button_active");
  }

  _handleDeleteButton() {
    this._element.querySelector(".elements__trash-button").parentNode.remove();
  }

  _handlePreviewPopup() {
    openPopup(popupPreview);

    previewImageEl.src = this._cardData.link;
    previewImageEl.alt = this._cardData.name;
    figureCaptionEl.textContent = this._cardData.name;
  }
}

export default Card;
