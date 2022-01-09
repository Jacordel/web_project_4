import { popupPreview, previewImageEl, figureCaptionEl } from "./index.js";
import { openPopup } from "./util.js"

class Card {
  constructor(cardTemplate, cardData) {
    this._cardData = cardData;
    this._cardTemplate = cardTemplate;
  }

  render() {
    this._element = this._cardTemplate.content.cloneNode(true);

    const titleEl = this._element.querySelector(".elements__title");
    const imageEl = this._element.querySelector(".elements__image");
    const deleteButtonEl = this._element.querySelector(".elements__trash-button");
    const likeButtonEl = this._element.querySelector(".elements__like-button");

    titleEl.textContent = this._cardData.name;
    imageEl.alt = this._cardData.name;
    imageEl.src = this._cardData.link;


    imageEl.addEventListener("click", () => {
      openPopup(popupPreview);

      previewImageEl.src = this._cardData.link;
      previewImageEl.alt = this._cardData.name;
      figureCaptionEl.textContent = this._cardData.name;
    });

    deleteButtonEl.addEventListener("click", (e) => {
      deleteButtonEl.parentNode.remove();
    });

    likeButtonEl.addEventListener("click", (e) => {
      likeButtonEl.classList.toggle("elements__like-button_active");
    });

    return this._element;
  }
}

export default Card;