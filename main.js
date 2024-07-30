//DOM Selectors
const form = document.getElementById("form");
const button = document.getElementById("subscribe-button");
const mainPage = document.getElementsByClassName("content-container")[0];
const successPage = document.getElementsByClassName(
  "content-container-success"
)[0];
const dismissButton = document.getElementsByClassName("dismiss")[0];
const input = document.getElementById("email");
const inputErrorText = document.getElementById("input-error-text");
const successEmail = document.getElementById("success-message-email");

// ********** Event Listeners ********** //

// ********** RETRIEVING FORM DATA Using JavaScript's FormData Constructor ********** //
form.addEventListener("submit", function (e) {
  e.preventDefault(e);
  const data = Object.fromEntries(new FormData(e.target));
  console.log(data);
});

// ********** Validating Form Data Using Constraint Validation API  ********** //

//Validating Form Element
form.addEventListener("submit", function (e) {
  if (!email.validity.valid) {
    console.log("This one works!");
    showError();
    inputErrorText.classList.remove("hidden");
    e.preventDefault();
  } else if (email.validity.valid) {
    inputErrorText.classList.add("hidden");
  }
});

// Error Function
function showError() {
  if (email.validity.valueMissing) {
    inputErrorText.textContent = "Please enter an email address.";
  } else if (email.validity.tooShort) {
    inputErrorText.textContent = `Email should be at least ${email.minLength} characters; you only entered ${email.value.length} characters.`;
  } else if (email.validity.typeMismatch) {
    inputErrorText.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    inputErrorText.textContent =
      "Entered value needs to be at least 8 characters long.";
  }
}

//Button Functionality
button.addEventListener("click", function () {
  if (
    email.validity.valid &&
    window.getComputedStyle(mainPage).display === "flex"
  ) {
    mainPage.style.display = "none";
    successPage.style.display = "flex";
    successEmail.innerHTML = email.value;
    console.log("It's working:" + email.value);
  }
});

dismissButton.addEventListener("click", function () {
  if (window.getComputedStyle(successPage).display === "flex") {
    mainPage.style.display = "flex";
    successPage.style.display = "none";
    location.reload();
  }
});
