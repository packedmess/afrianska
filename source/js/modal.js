let requestOpen = document.querySelector(".modal--request-open");
let requestPopup = document.querySelector(".modal--request");
let infoPopup = document.querySelector(".modal__info");
let requestClose = requestPopup.querySelector(".modal-close");
let fields = requestPopup.querySelectorAll("input");
let textarea = requestPopup.querySelector("textarea");
let form = document.querySelector(".modal__form");
let submitButton = document.querySelector(".modal__submit-button");

requestOpen.onclick = function (evt) {
  evt.preventDefault();
  requestPopup.classList.add("modal-show");
};

requestClose.onclick = function (evt) {
  evt.preventDefault();
  requestPopup.classList.remove("modal-show");
  for (let field of fields) {
    field.value = '';
  }
  textarea.value = '';
  submitButton.removeAttribute("disabled");
  submitButton.textContent = "Submit";
  submitButton.style.background = '#5A98D0';
};

window.onkeydown = function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (requestPopup.classList.contains("modal-show")) {
      requestPopup.classList.remove("modal-show");
    }
  }
};

form.onsubmit = function (evt) {
  evt.preventDefault();

  let formData = new FormData(form);

  let xhr = new XMLHttpRequest();

  xhr.open('POST', '/server', true);

  xhr.onload = function(e) { 
    submitButton.setAttribute("disabled", "disabled");
    submitButton.textContent = "Your message was sent";
    submitButton.style.background = 'green';
  };

  xhr.send(formData);
}