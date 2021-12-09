// enabling validation by calling enableValidation()
// pass all the settings on call

const checkInputValidity = (inputElement) => {
    console.log(inputElement.validity.valid);
}

const setEventListeners = (form, settings) => {
  //grab all inputs
  const inputElements = Array.from(document.querySelectorAll(settings.inputSelector));
  //loop through all inputs and check validity
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener('input', (e) => {
    //check validity
    checkInputValidity(inputElement);
     //if input invalid, show errorMessage
    //else remove errorMessage & enableButton
    });
  });
};

const enableValidation = (settings) => {
  const formElements = Array.from(
    document.querySelectorAll(settings.formSelector)
  );
  formElements.forEach((form) => {
    form.addEventListener("submit", (e) => e.preventDefault());
    setEventListeners(form, settings);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
