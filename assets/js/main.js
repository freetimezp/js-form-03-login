const btnPopup = document.querySelector(".btnLogin-popup");
const coverBox = document.querySelector(".cover_box");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const iconClose = document.querySelector(".icon-close");

function activateCoverBox() {
    coverBox.classList.add('active');
};

function deactivateCoverBox() {
    coverBox.classList.remove('active');
};

function activatePopup() {
    coverBox.classList.add('active-popup');
};

function deactivatePopup() {
    coverBox.classList.remove('active-popup');
};


registerLink.addEventListener("click", activateCoverBox);
loginLink.addEventListener("click", deactivateCoverBox);
btnPopup.addEventListener("click", activatePopup);
iconClose.addEventListener("click", deactivatePopup);






















