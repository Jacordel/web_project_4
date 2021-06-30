const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

////////////
//template
////////////
const elementTemplate = document.querySelector("#element-template").content.querySelector('.elements__place');


////////////
//wrappers
////////////
const editPopupEl = document.querySelector('.popup_type_edit');
const addPopupEl = document.querySelector('.popup_type_add');
const editFormEl = document.querySelector('.edit-form');
const addFormEl = document.querySelector('.add-form');
const placesList = document.querySelector('.elements__grid');


////////////
//buttons and elements
////////////
const profileEditBtnEl = document.querySelector('.profile__edit-button');
const profileAddBtnEl = document.querySelector('.profile__add-button');
const editPopupCloseBtn = document.querySelector('.popup_type_edit').querySelector('.popup__close-btn');
const addPopupCloseBtn = document.querySelector('.popup_type_add').querySelector('.popup__close-btn');
const profileNameEl = document.querySelector('.profile__name');
const profileProfessionEl = document.querySelector('.profile__profession');


////////////
//when the user will input in the form elements
////////////
const editFormNameInput = document.querySelector('.edit-form__input_type_name');
const editFormAboutMeInput = document.querySelector('.edit-form__input_type_about-me');


////////////
//when the user adds a new card
////////////
const addFormTitleInput = document.querySelector('.add-form__input_type_title');
const addFormLinkInput = document.querySelector('.add-form__input_type_link');


////////////
//enables edit-popup to open
////////////
function openEditPopup() {
  editPopupEl.classList.add('popup_open');
  //enables input values to be displayed as the profile data
  editFormNameInput.value = profileNameEl.textContent;
  editFormAboutMeInput.value = profileProfessionEl.textContent;
}
profileEditBtnEl.addEventListener('click', openEditPopup);

////////////
//enables edit-popup to close
////////////
function closeEditPopup() {
  editPopupEl.classList.remove('popup_open');
}
editPopupCloseBtn.addEventListener('click', closeEditPopup);


////////////
//enables add-popup to open
////////////
function openAddPopup() {
  addPopupEl.classList.add('popup_open');
}
profileAddBtnEl.addEventListener('click', openAddPopup);


////////////
//enables add-popup to close
////////////
function closeAddPopup() {
  addPopupEl.classList.remove('popup_open');
}
addPopupCloseBtn.addEventListener('click', closeAddPopup);


////////////
//function helpers
////////////
function renderCard(cardElement) {
  placesList.append(cardElement);
};

function generateCard(card){
  //clone template
  const cardElement = elementTemplate.cloneNode(true);
  //query name element from the clone template
  const nameElement = cardElement.querySelector('.elements__title').textContent = card.name;
  //query image element from the clone template
  const imageElement = cardElement.querySelector('.elements__image').src = card.link;
  //set value for title and image
  return cardElement;
};

////////////
//enables profile data to equal input value of popup
////////////
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editFormNameInput.value;
  profileProfessionEl.textContent = editFormAboutMeInput.value;
  closePopup(); 
}; 
editFormEl.addEventListener('submit', handleFormSubmit);

initialCards.forEach(card => {
  const cardElement = generateCard(card);
  //append the card
  renderCard(cardElement);
});

