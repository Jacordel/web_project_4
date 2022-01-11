import Card from "./card.js";
import FormValidator from "./FormValidator.js";
import {
  openPopup,
  disableAddButton,
  closePopup,
  handleEditProfileFormSubmit,
  handleAddCardSubmit,
} from "./utils/util.js";
import { initialCards } from "./utils/constants.js";

const ESC_KEYCODE = 27;

const cardTemplate = document
  .querySelector("#element-template")
  .content.querySelector(".elements__place");

const popups = document.querySelectorAll(".popup");
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupAddCard = document.querySelector(".popup_type_add");
const popupPreview = document.querySelector(".popup_type_preview");
const popupFormEditEl = document.querySelector(".popup__form_type_edit");
const popupFormAddEl = document.querySelector(".popup__form_type_add");
const placesList = document.querySelector(".elements__grid");

const profileEditBtnEl = document.querySelector(".profile__edit-button");
const profileAddBtnEl = document.querySelector(".profile__add-button");
const editPopupCloseBtnEl = document
  .querySelector(".popup_type_edit")
  .querySelector(".popup__close-btn");
const addPopupCloseBtnEl = document
  .querySelector(".popup_type_add")
  .querySelector(".popup__close-btn");
const previewCloseBtnEl = document
  .querySelector(".popup_type_preview")
  .querySelector(".popup__close-btn");
const profileNameEl = document.querySelector(".profile__name");
const profileProfessionEl = document.querySelector(".profile__profession");
const previewImageEl = document.querySelector(".popup__preview-image");
const figureCaptionEl = document.querySelector(".popup__figure-caption");

const editFormNameInput = document.querySelector(".popup__input_type_name");
const editFormAboutMeInput = document.querySelector(
  ".popup__input_type_about-me"
);
const addButton = document.querySelector("#add-button");

//runs escape usability
const isEscEvt = (evt, action) => {
  if (evt.which === ESC_KEYCODE) {
    const activePopup = document.querySelector(".popup_open");
    action(activePopup);
  }
};
//handles escape button
const handleEscUp = (evt) => {
  evt.preventDefault();
  isEscEvt(evt, closePopup);
};

//event listeners for closing popup from close button
editPopupCloseBtnEl.addEventListener("click", () =>
  closePopup(popupEditProfile)
);
addPopupCloseBtnEl.addEventListener("click", () => closePopup(popupAddCard));
previewCloseBtnEl.addEventListener("click", () => closePopup(popupPreview));

//resets form and opens up popup for adding card
profileAddBtnEl.addEventListener("click", () => {
  popupFormAddEl.reset();
  disableAddButton();
  openPopup(popupAddCard);
});

//sets values of previous inputs of edit form.
//then opens up modal
profileEditBtnEl.addEventListener("click", () => {
  editFormNameInput.value = profileNameEl.textContent;
  editFormAboutMeInput.value = profileProfessionEl.textContent;
  openPopup(popupEditProfile);
});

//validation settings
const validationSettings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const editFormEl = popupEditProfile.querySelector(".popup__form");
const addFormEl = popupAddCard.querySelector(".popup__form");

const editFormValidator = new FormValidator(validationSettings, editFormEl);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(validationSettings, addFormEl);
addFormValidator.enableValidation();

popupFormEditEl.addEventListener("submit", handleEditProfileFormSubmit);
popupFormAddEl.addEventListener("submit", handleAddCardSubmit);

function renderCard(cardData) {
  const card = new Card(cardTemplate, cardData);
  addCard(card.render());
}

function addCard(card) {
  placesList.prepend(card);
}

initialCards.forEach((cardItem) => {
  renderCard(cardItem);
});

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target === popup) {
      closePopup(popup);
    }
  });
});

export {
  popupPreview,
  previewImageEl,
  figureCaptionEl,
  popupEditProfile,
  popupAddCard,
  addButton,
  profileProfessionEl,
  profileNameEl,
  editFormNameInput,
  editFormAboutMeInput,
  handleEscUp,
  renderCard,
};
