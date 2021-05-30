const editFormEl = document.querySelector('.edit-form');
const editFormNameInput = document.querySelector('.edit-form__input_name');
const editFormAboutMeInput = document.querySelector('.edit-form__input_about-me');

const profileEditBtnEl = document.querySelector('.profile__edit-button');
const popupCloseBtnEl = document.querySelector('.popup__close-btn');

const popupEl = document.querySelector('.popup');

const profileNameEl = document.querySelector('.profile__name');
const profileProfessionEl = document.querySelector('.profile__profession');


//enables popup to open
function openPopup() {
  popupEl.classList.add('popup_open');
  //enables input values to be displayed as the profile data
  editFormNameInput.value = profileNameEl.textContent;
  editFormAboutMeInput.value = profileProfessionEl.textContent;
}
profileEditBtnEl.addEventListener('click', openPopup);

//enables popup to close
function closePopup() {
  popupEl.classList.remove('popup_open');
}
popupCloseBtnEl.addEventListener('click', closePopup);

//enables profile data to equal input value of popup
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editFormNameInput.value;
  profileProfessionEl.textContent = editFormAboutMeInput.value;
  closePopup(); 
}; 
editFormEl.addEventListener('submit', handleFormSubmit);



