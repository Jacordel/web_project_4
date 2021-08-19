////////////
//template
////////////
const elementTemplate = document
  .querySelector("#element-template")
  .content.querySelector(".elements__place");

//////////
//wrappers
////////////
const editPopupEl = document.querySelector(".popup_type_edit");
const addPopupEl = document.querySelector(".popup_type_add");
const openPreviewPopupEl = document.querySelector(".popup_type_preview");
const editFormEl = document.querySelector(".edit-form");
const addFormEl = document.querySelector(".add-form");
const placesList = document.querySelector(".elements__grid");

////////////
//buttons and elements
////////////
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

////////////
//when the user will input in the form elements
////////////
const editFormNameInput = document.querySelector(".edit-form__input_type_name");
const editFormAboutMeInput = document.querySelector(
  ".edit-form__input_type_about-me"
);

////////////
//when the user adds a new card
////////////
const addFormTitleInput = document.querySelector(".add-form__input_type_title");
const addFormLinkInput = document.querySelector(".add-form__input_type_link");

//create a general function for opening popups
function openPopup() {
  
}

//create a general function for closing popups
function closePopup() {

}


////////////
//enables edit-popup to open
////////////
function openEditPopup() {
  editPopupEl.classList.add("popup_open");
  //enables input values to be displayed as the profile data
  editFormNameInput.value = profileNameEl.textContent;
  editFormAboutMeInput.value = profileProfessionEl.textContent;
}
profileEditBtnEl.addEventListener("click", openEditPopup);

////////////
//enables edit-popup to close
////////////
function closeEditPopup() {
  editPopupEl.classList.remove("popup_open");
}
editPopupCloseBtnEl.addEventListener("click", closeEditPopup);

////////////
//enables add-popup to open
////////////
function openAddPopup() {
  addPopupEl.classList.add("popup_open");
}
profileAddBtnEl.addEventListener("click", openAddPopup);

////////////
//enables add-popup to close
////////////
function closeAddPopup() {
  addPopupEl.classList.remove("popup_open");
}
addPopupCloseBtnEl.addEventListener("click", closeAddPopup);

///////////
//enables to open preview popup
///////////
function handlePreviewPicture(preview) {
  openPreviewPopupEl.classList.add("popup_open");

  const previewCard = {
    name: document
      .querySelector(".elements__place")
      .querySelector(".elements__title").value,
    link: document
      .querySelector(".elements__place")
      .querySelector(".elements__image").value,
    alt: document
      .querySelector(".elements__place")
      .querySelector(".elements__title").value,
  };
  // src = card.link
  document.querySelector(".popup__preview-image").src = preview.link;
  // // caption = card.name
  document.querySelector(".popup__figure-caption").textContent = preview.name;
  // // alt = card.name
  document.querySelector(".popup__preview-image").alt = preview.name;
}

function closePlacePreview() {
  openPreviewPopupEl.classList.remove("popup_open");
}
previewCloseBtnEl.addEventListener("click", closePlacePreview);

////////////
//function to delete a card
////////////
function handleDeleteCard(evt) {
  evt.target.parentNode.remove();
}

function handleLikeCard(evt) {
  // get target from event
  // toggle modifier class
  evt.target.classList.toggle("elements__like-button_active");
}

////////////
//enables to add a new card
////////////
function createCard(card) {
  //clone template
  const newCard = elementTemplate.cloneNode(true);
  //query info
  (newCard.querySelector(".elements__title").textContent = card.name),
    (newCard.querySelector(".elements__image").src = card.link);
  //event listener for preview image
  const previewImageEl = newCard.querySelector(".elements__image");
  previewImageEl.addEventListener("click", () => {
    handlePreviewPicture(card);
  });
  //call function for trash button
  const deleteButton = newCard.querySelector(".elements__trash-button");
  deleteButton.addEventListener("click", handleDeleteCard);
  // query for like button in newCard
  const likeButton = newCard.querySelector(".elements__like-button");
  // add event listener for like button - handleLikeCard
  likeButton.addEventListener("click", handleLikeCard);
  return newCard;
}

addFormEl.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const newPlace = {
    name: document.querySelector(".add-form__input_type_title").value,
    link: document.querySelector(".add-form__input_type_link").value,
  };
  renderCard(createCard(newPlace));
  closeAddPopup();
});

////////////
//function helpers
////////////
function renderCard(cardElement) {
  placesList.prepend(cardElement);
}

////////////
//enables profile data to equal input value of popup
////////////
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editFormNameInput.value;
  profileProfessionEl.textContent = editFormAboutMeInput.value;
  closeEditPopup();
}
editFormEl.addEventListener("submit", handleFormSubmit);

initialCards.forEach((card) => {
  const cardElement = createCard(card);
  //append the card
  renderCard(cardElement);
});
