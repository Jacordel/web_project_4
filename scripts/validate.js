const showInputError = (input, form, {errorClass, inputErrorClass}) => {
  const errorSpan = form.querySelector('#' + input.id + '-error');
  errorSpan.textContent = input.validationMessage;
  errorSpan.classList.add(errorClass);
  input.classList.add(inputErrorClass);
};

const hideInputError = (input, form, {errorClass}) => {
  const errorSpan = form.querySelector('#' + input.id + '-error');
  errorSpan.textContent = "";
  errorSpan.classList.remove(errorClass);
};

const checkInputValidity = (form, input, settings) => {
  if (input.validity.valid) {
    hideInputError(input, form, settings);
  } else {
    showInputError(input, form, settings);
  };
};

const hasValidInput = (inputElements) => {
  return inputElements.every((input) => input.validity.valid === true);
};

const toggleButton = (inputElements, button, settings) => {
  if (hasValidInput(inputElements)) {
    button.disabled = false;
  } else {
    button.disabled = true;
  };
};

const setEventListeners = (form, settings) => {
  const inputElements = [...form.querySelectorAll(settings.inputSelector)];
  const submitButton = form.querySelector(settings.submitButtonSelector);
  inputElements.forEach((input) => {
    input.addEventListener("input", (e) => {
      checkInputValidity(form, input, settings);
      toggleButton(inputElements, submitButton, settings);
    });
  });
};

const enableValidation = (settings) => {
  const formElements = [...document.querySelectorAll(settings.formSelector)];
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
