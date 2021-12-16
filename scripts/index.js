const ESC_KEYCODE = 27;

const elementTemplate = document
  .querySelector("#element-template")
  .content.querySelector(".elements__place");

const popups = document.querySelectorAll(".popup");
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupAddCard = document.querySelector(".popup_type_add");
const popupPreview = document.querySelector(".popup_type_preview");
const popupFormEl = document.querySelector(".popup__form");
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
const addFormTitleInput = document.querySelector(".popup__input_type_title");
const addFormLinkInput = document.querySelector(".popup__input_type_link");
const disabledButton = document.querySelector("#button-disabled");

const isEscEvt = (evt, action) => {
  const activePopup = document.querySelector(".popup_open");
  if (evt.which === ESC_KEYCODE) {
    action(activePopup);
  }
};

const handleEscUp = (evt) => {
  evt.preventDefault();
  isEscEvt(evt, closePopup);
};

function openPopup(popup) {
  popup.classList.add("popup_open");
  document.addEventListener("keyup", handleEscUp);
}

function closePopup(popup) {
  popup.classList.remove("popup_open");
  document.removeEventListener("keyup", handleEscUp);
}

function handlePreviewPicture(preview) {
  openPopup(popupPreview);

  previewImageEl.src = preview.link;
  previewImageEl.alt = preview.name;
  figureCaptionEl.textContent = preview.name;
}

editPopupCloseBtnEl.addEventListener("click", () =>
  closePopup(popupEditProfile)
);
addPopupCloseBtnEl.addEventListener("click", () => closePopup(popupAddCard));
previewCloseBtnEl.addEventListener("click", () => closePopup(popupPreview));

function disableAddButton() {
  disabledButton.classList.add("popup__button_disabled");
  disabledButton.disabled = true;
}

profileAddBtnEl.addEventListener("click", () => {
  popupFormAddEl.reset();
  disableAddButton();
  openPopup(popupAddCard);
});

profileEditBtnEl.addEventListener("click", () => {
  editFormNameInput.value = profileNameEl.textContent;
  editFormAboutMeInput.value = profileProfessionEl.textContent;
  openPopup(popupEditProfile);
});

function handleDeleteCard(evt) {
  evt.target.parentNode.remove();
}

function handleLikeCard(evt) {
  evt.target.classList.toggle("elements__like-button_active");
}

function createCard(card) {
  const newCard = elementTemplate.cloneNode(true);
  newCard.querySelector(".elements__title").textContent = card.name;
  newCard.querySelector(".elements__image").src = card.link;
  const previewImageEl = newCard.querySelector(".elements__image");
  previewImageEl.addEventListener("click", () => {
    handlePreviewPicture(card);
  });
  const deleteButton = newCard.querySelector(".elements__trash-button");
  deleteButton.addEventListener("click", handleDeleteCard);
  const likeButton = newCard.querySelector(".elements__like-button");
  likeButton.addEventListener("click", handleLikeCard);
  return newCard;
}

popupFormAddEl.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const newPlace = {
    name: addFormTitleInput.value,
    link: addFormLinkInput.value,
  };
  renderCard(createCard(newPlace));
  closePopup(popupAddCard);
});

function renderCard(cardElement) {
  placesList.prepend(cardElement);
}

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editFormNameInput.value;
  profileProfessionEl.textContent = editFormAboutMeInput.value;
  closePopup(popupEditProfile);
}
popupFormEditEl.addEventListener("submit", handleEditProfileFormSubmit);

initialCards.forEach((card) => {
  const cardElement = createCard(card);
  renderCard(cardElement);
});

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target === popup) {
      closePopup(popup);
    }
  });
});
