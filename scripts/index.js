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
const popupEl = document.querySelector('.popup');
const editFormEl = document.querySelector('.edit-form');
const placesList = document.querySelector('.elements__grid');


////////////
//buttons and elements
////////////
const profileEditBtnEl = document.querySelector('.profile__edit-button');
const popupCloseBtnEl = document.querySelector('.popup__close-btn');
const profileNameEl = document.querySelector('.profile__name');
const profileProfessionEl = document.querySelector('.profile__profession');


////////////
//what the user will input in the form elements
////////////
const editFormNameInput = document.querySelector('.edit-form__input_type_name');
const editFormAboutMeInput = document.querySelector('.edit-form__input_type_about-me');


////////////
//enables popup to open
////////////
function openPopup() {
  popupEl.classList.add('popup_open');
  //enables input values to be displayed as the profile data
  editFormNameInput.value = profileNameEl.textContent;
  editFormAboutMeInput.value = profileProfessionEl.textContent;
}
profileEditBtnEl.addEventListener('click', openPopup);


////////////
//enables popup to close
////////////
function closePopup() {
  popupEl.classList.remove('popup_open');
}
popupCloseBtnEl.addEventListener('click', closePopup);


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
  //clone template
  const cardElement = elementTemplate.cloneNode(true);
  //query name element 
  const nameElement = elementTemplate.querySelector('.elements__title');
  //query image element
  const imageElement = elementTemplate.querySelector('.elements__image');
  //set value for title and image
  nameElement.textContent = card.name;
  imageElement.src = card.link;
  //append the card
  placesList.append(cardElement);
});

