class FormValidator {
  constructor(settings, form) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._settings = settings;
    this._form = form;
  }

  _showInputError(input) {
    const errorSpan = this._form.querySelector("#" + input.id + "-error");
    errorSpan.textContent = input.validationMessage;
    errorSpan.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }

  _hideInputError(input) {
    const errorSpan = this._form.querySelector("#" + input.id + "-error");
    errorSpan.textContent = "";
    errorSpan.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  }

  _checkInputValidity(input) {
    if (input.validity.valid) {
      this._hideInputError(input);
    } else {
      this._showInputError(input);
    }
  }

  _hasValidInput() {
    return this._inputElements.every((input) => input.validity.valid === true);
  }

  _toggleButton() {
    if (this._hasValidInput()) {
      this._submitButton.disabled = false;
      this._submitButton.classList.remove(this._inactiveButtonClass);
    } else {
        this._submitButton.disabled = true;
        this._submitButton.classList.add(this._inactiveButtonClass);
    }
  }

  _setEventListeners() {
    this._inputElements = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._submitButton = this._form.querySelector(this._submitButtonSelector);

    this._inputElements.forEach((input) => {
      input.addEventListener("input", (e) => {
        this._checkInputValidity(input, this._form);
        this._toggleButton();
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (e) => e.preventDefault());
    this._setEventListeners();
  }
}

export default FormValidator;
