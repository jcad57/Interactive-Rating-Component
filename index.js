"use strict";

const ratingStateContainerElement = document.querySelector(".rating-state__container");
const thankyouStateContainerElement = document.querySelector(".thank-you-state__container");
const scoreElement = document.querySelector(".thank-you-state__container--score");
const allRatingValueElements = document.querySelectorAll(".raiting-state__rating-values--value");
const submitBtnElement = document.querySelector(".submit");
const errorMsgElement = document.querySelector(".error-msg");

let selectedRating;

const resetAllRatingStyles = function (e) {
  allRatingValueElements.forEach((element) => {
    element.style.backgroundColor = "var(--dark-blue)";
    element.style.color = "var(--light-grey)";
    errorMsgElement.classList.add("hidden");
    submitBtnElement.style.marginTop = "1.5rem";
  });
};

// Handle rating selection
allRatingValueElements.forEach((element) => {
  element.addEventListener("click", function () {
    // Reset the last selected rating value
    resetAllRatingStyles();
    selectedRating = this.textContent;
    this.style.backgroundColor = "white";
    this.style.color = "var(--dark-blue)";
  });
});

// Handle submit function
submitBtnElement.addEventListener("click", function (e) {
  e.preventDefault();
  // Check if a rating has been selected
  if (selectedRating !== undefined && selectedRating !== "null") {
    // Success
    scoreElement.innerHTML = `You selected ${selectedRating} out of 5`;
    ratingStateContainerElement.classList.add("hidden");
    thankyouStateContainerElement.classList.remove("hidden");
  } else {
    // Failure
    errorMsgElement.classList.remove("hidden");
    submitBtnElement.style.marginTop = "0";
  }
});
