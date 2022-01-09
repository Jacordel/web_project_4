import {
  popupEditProfile,
  popupAddCard,
  profileProfessionEl,
  profileNameEl,
  editFormNameInput,
  editFormAboutMeInput,
  handleEscUp,
  renderCard
} from "./index.js";

// const nameInput = document.querySelector("#name-input");
// const aboutMeInput = document.querySelector("#about-me-input");
const titleInput = document.querySelector("#title-input");
const imageInput = document.querySelector("#image-input");

// functions that open/closes modal windows.
function openPopup(popup) {
  popup.classList.add("popup_open");
  document.addEventListener("keyup", handleEscUp);
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
  closePopup,
  handleEditProfileFormSubmit,
  handleAddCardSubmit,
};
