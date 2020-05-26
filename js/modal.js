let requestOpen = document.querySelector(".modal--request-open");
let requestPopup = document.querySelector(".modal--request");
let requestClose = requestPopup.querySelector(".modal-close");

requestOpen.onclick = function (evt) {
  evt.preventDefault();
  requestPopup.classList.add("modal-show");
};

requestClose.onclick = function (evt) {
  evt.preventDefault();
  requestPopup.classList.remove("modal-show");
};

window.onkeydown = function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (requestPopup.classList.contains("modal-show")) {
      requestPopup.classList.remove("modal-show");
    }
  }
};
