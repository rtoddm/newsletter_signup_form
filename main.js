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

// ********** Event Listeners ********** //

// ********** Retrieving Form Data Manually ********** //
// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const data = {};
//   const fields = e.target.querySelectorAll("input");

//   for (const field of fields) {
//     data[field.name] = field.value;
//   }

//   console.log(data);

//   if (window.getComputedStyle(mainPage).display === "flex") {
//     mainPage.style.display = "none";
//     successPage.style.display = "flex";
//   }
// });

// dismissButton.addEventListener("click", function () {
//   if (window.getComputedStyle(successPage).display === "flex") {
//     mainPage.style.display = "flex";
//     successPage.style.display = "none";
//   }
// });

// ********** Retrieving Form Data Using JavaScript's FormData Constructor ********** //
form.addEventListener("submit", function (e) {
  e.preventDefault(e);

  // Done in Two Lines
  // const formData = new FormData(e.target);
  // const data = Object.fromEntries(formData);

  //Refactored to One Line
  const data = Object.fromEntries(new FormData(e.target));
  console.log(data.email);
  const dataVar = data.email;

  // ********** Data Validation ********** //

  if (data.email == "" || data.email.length < 10) {
    console.log(typeof data.email);
    console.log(data.email == String);
    console.log(data.email instanceof String);
    input.classList.add("input-error-color");
    inputErrorText.classList.remove("hidden");
    inputErrorText.classList.add("input-error-text");
  } else {
    //Button Functionality
    if (window.getComputedStyle(mainPage).display === "flex") {
      mainPage.style.display = "none";
      successPage.style.display = "flex";
    }

    dismissButton.addEventListener("click", function () {
      if (window.getComputedStyle(successPage).display === "flex") {
        mainPage.style.display = "flex";
        successPage.style.display = "none";
        inputErrorText.classList.add("hidden");
      }
    });
  }
});
