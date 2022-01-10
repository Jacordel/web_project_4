import {
  popupEditProfile,
  popupAddCard,
  addButton,
  profileProfessionEl,
  profileNameEl,
  editFormNameInput,
  editFormAboutMeInput,
  handleEscUp,
  renderCard
} from "../index.js";


const titleInput = document.querySelector("#title-input");
const imageInput = document.querySelector("#image-input");

// functions that open/closes modal windows.
function openPopup(popup) {
  popup.classList.add("popup_open");
  document.addEventListener("keyup", handleEscUp);
}

function disableAddButton() {
  addButton.classList.add("popup__button_disabled");
  addButton.disabled = true;
}

function closePopup(popup) {
  popup.classList.remove("popup_open");
  document.removeEventListener("keyup", handleEscUp);
}

// these are event handlers for modal windows.
function handleEditProfileFormSubmit(e) {
  e.preventDefault();
  profileNameEl.textContent = editFormNameInput.value;
  profileProfessionEl.textContent = editFormAboutMeInput.value;
  closePopup(popupEditProfile);
}

function handleAddCardSubmit(e) {
  e.preventDefault();
  const cardData = {
    name: titleInput.value,
    link: imageInput.value,
  };

  renderCard(cardData);
  closePopup(popupAddCard);
}

export {
  openPopup,
  disableAddButton,
  closePopup,
  handleEditProfileFormSubmit,
  handleAddCardSubmit,
};
