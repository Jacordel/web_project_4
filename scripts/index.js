const editFormEl = document.querySelector('.edit-form');
const editFormNameInput = document.querySelector('.edit-form__name');
const editFormAboutMeInput = document.querySelector('.edit-form__about-me');

const profileEditBtnEl = document.querySelector('.profile__edit-button');
const popupCloseBtnEl = document.querySelector('.popup__close-btn');

const popupEl = document.querySelector('.popup');

const profileNameEl = document.querySelector('.profile__name');
const profileProfessionEl = document.querySelector('.profile__profession');

function openPopup() {
  popupEl.classList.add('popup_open');
}
profileEditBtnEl.addEventListener('click', openPopup);

function closePopup() {
  popupEl.classList.remove('popup_open');
}
popupCloseBtnEl.addEventListener('click', closePopup);

function nameValue() {
  editFormNameInput.value = profileNameEl.textContent();
  editFormAboutMeInput.value = profileProfessionEl.textContent();
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editFormNameInput.value;
  profileProfessionEl.textContent = editFormAboutMeInput.value;
  closePopup();
};
editFormEl.addEventListener('submit', handleFormSubmit);