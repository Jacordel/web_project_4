import "./index.css";

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import { initialCards } from "../components/utils/constants.js";

const popupEditProfile = document.querySelector(".popup_type_edit");
const popupAddCard = document.querySelector(".popup_type_add");
const popupFormAddEl = document.querySelector(".popup__form_type_add");
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
const editFormNameInput = document.querySelector(".popup__input_type_name");
const editFormAboutMeInput = document.querySelector(".popup__input_type_job");

//event listeners for closing popup from close button
editPopupCloseBtnEl.addEventListener("click", () => editPopupForm.close());

addPopupCloseBtnEl.addEventListener("click", () => addPopupForm.close());
previewCloseBtnEl.addEventListener("click", () => imagePopup.close());

//resets form and opens up popup for adding card
profileAddBtnEl.addEventListener("click", () => {
  popupFormAddEl.reset();
  formValidators[addFormEl.getAttribute("name")].disableButton();
  addPopupForm.open();
});

//sets values of previous inputs of edit form.
//then opens up modal
profileEditBtnEl.addEventListener("click", () => {
  editFormNameInput.value = profileNameEl.textContent;
  editFormAboutMeInput.value = profileProfessionEl.textContent;
  editPopupForm.open();
});

//validation settings
const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const editFormEl = popupEditProfile.querySelector(".popup__form");
const addFormEl = popupAddCard.querySelector(".popup__form");

const formValidators = {
  "edit-profile": new FormValidator(validationSettings, editFormEl),
  "create-card": new FormValidator(validationSettings, addFormEl),
};

// enable validation
const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((form) => {
    const validator = new FormValidator(settings, form);
    const name = form.getAttribute("name");

    formValidators[name] = validator;
    validator.enableValidation();
  });
};
enableValidation(validationSettings);

const imagePopup = new PopupWithImage("popup-image");

const renderCard = (cardData) => {
  const card = new Card(
    {
      cardData,
      handlePreviewPopup: () => {
        imagePopup.open(cardData);
      },
    },
    "#element-template"
  );
  return card.render();
};

const cardList = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      cardList.addItem(renderCard(cardData));
    },
  },
  ".elements__grid"
);

const userInfo = new UserInfo({
  userNameSelector: ".profile__name",
  userJobSelector: ".profile__profession",
});

const editPopupForm = new PopupWithForm({
  popupSelector: "edit-popup-form",
  handleFormSubmit: (cardData) => {
    userInfo.setUserInfo(cardData);
  },
});

const addPopupForm = new PopupWithForm({
  popupSelector: "add-popup-form",
  handleFormSubmit: (cardData) => {
    cardList.addItem(renderCard(cardData));
    addPopupForm.resetForm();
  },
});

cardList.renderItems(initialCards);
imagePopup.setEventListeners();
editPopupForm.setEventListeners();
addPopupForm.setEventListeners();
