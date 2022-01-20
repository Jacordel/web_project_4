import { handleEscUp } from "../../pages/index.js";

// functions that open/closes modal windows.
function openPopup(popup) {
  popup.classList.add("popup_open");
  document.addEventListener("keyup", handleEscUp);
}

function closePopup(popup) {
  popup.classList.remove("popup_open");
  document.removeEventListener("keyup", handleEscUp);
}

export { openPopup, closePopup };
