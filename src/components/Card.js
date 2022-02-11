class Card {
  constructor({ cardData, handlePreviewPopup }, elementTemplate) {
    this._cardData = cardData;
    this._handlePreviewPopup = handlePreviewPopup;

    this._cardTemplate = document.querySelector(`#${elementTemplate}`);
  }

  render() {
    this._element = this._cardTemplate.content.cloneNode(true).querySelector(".elements__place");

    const titleEl = this._element.querySelector(".elements__title");
    const imageEl = this._element.querySelector(".elements__image");

    imageEl.src = this._cardData.link;
    titleEl.textContent = this._cardData.title;
    imageEl.alt = this._cardData.title;

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
    previewImageEl.alt = this._cardData.title;
    figureCaptionEl.textContent = this._cardData.title;
  }
}

export default Card;
