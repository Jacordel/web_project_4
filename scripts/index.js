const elementTemplate = document
  .querySelector("#element-template")
  .content.querySelector(".elements__place");

const editPopupEl = document.querySelector(".popup_type_edit");
const addPopupEl = document.querySelector(".popup_type_add");
const openPreviewPopupEl = document.querySelector(".popup_type_preview");
const editFormEl = document.querySelector(".edit-form");
const addFormEl = document.querySelector(".add-form");
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

const editFormNameInput = document.querySelector(".edit-form__input_type_name");
const editFormAboutMeInput = document.querySelector(
  ".edit-form__input_type_about-me"
);

const addFormTitleInput = document.querySelector(".add-form__input_type_title");
const addFormLinkInput = document.querySelector(".add-form__input_type_link");

function openPopup(popup) {
  popup.classList.add("popup_open");
}

function closePopup(popup) {
  popup.classList.remove("popup_open");
}

function handlePreviewPicture(preview) {
  openPreviewPopupEl.classList.add("popup_open");

  previewImageEl.src = preview.link;
  previewImageEl.alt = preview.name;
  figureCaptionEl.textContent = preview.name;
}

editPopupCloseBtnEl.addEventListener("click", () => closePopup(editPopupEl));
addPopupCloseBtnEl.addEventListener("click", () => closePopup(addPopupEl));
previewCloseBtnEl.addEventListener("click", () =>
  closePopup(openPreviewPopupEl)
);
profileAddBtnEl.addEventListener("click", () => openPopup(addPopupEl));
profileEditBtnEl.addEventListener("click", () => {
  editFormNameInput.value = profileNameEl.textContent;
  editFormAboutMeInput.value = profileProfessionEl.textContent;
  openPopup(editPopupEl);
});

function handleDeleteCard(evt) {
  evt.target.parentNode.remove();
}

function handleLikeCard(evt) {
  evt.target.classList.toggle("elements__like-button_active");
}

function createCard(card) {
  const newCard = elementTemplate.cloneNode(true);
  (newCard.querySelector(".elements__title").textContent = card.name),
    (newCard.querySelector(".elements__image").src = card.link);
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

addFormEl.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const newPlace = {
    name: addFormTitleInput.value,
    link: addFormLinkInput.value,
  };
  renderCard(createCard(newPlace));
  closePopup(addPopupEl);
});

function renderCard(cardElement) {
  placesList.prepend(cardElement);
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editFormNameInput.value;
  profileProfessionEl.textContent = editFormAboutMeInput.value;
  closePopup(editPopupEl);
}
editFormEl.addEventListener("submit", handleFormSubmit);

initialCards.forEach((card) => {
  const cardElement = createCard(card);
  renderCard(cardElement);
});
