"use strict";

window.addEventListener("load", initApp);

function initApp() {
  //event listener for select on HTML
  document
    .querySelector("#select-color-mode")
    .addEventListener("change", modeSelected);
  detectUserPreference();
}

// modeSelected called when #select-color-mode changes value (the user select color mode)
function modeSelected() {
  const selectedColorMode = this.value;
  console.log(selectedColorMode);
  changeMode(selectedColorMode);
  saveUserColorMode(selectedColorMode);
}

function changeMode(mode) {
  console.log("Changed color mode");
  resetColorMode();
  if (mode == "dark") {
    document.querySelector("body").classList.add("dark-mode");
  } else if (mode == "red") {
    document.querySelector("body").classList.add("red-mode");
  } else if (mode == "blue") {
    document.querySelector("body").classList.add("blue-mode");
  } else if (mode == "green") {
    document.querySelector("body").classList.add("green-mode");
  }
}

function resetColorMode() {
  console.log("Reset color mode");
  document
    .querySelector("body")
    .classList.remove("dark-mode", "red-mode", "blue-mode", "green-mode");
}

function saveUserColorMode(mode) {
  localStorage.setItem("selectedMode", mode);
}

function readUserColorMode() {
  const selectedMode = localStorage.getItem("selectedMode");
  return selectedMode;
}

function detectUserPreference() {
  const modeFromLocalStorage = readUserColorMode();
  if (modeFromLocalStorage) {
    changeMode(modeFromLocalStorage);
    document.querySelector("#select-color-mode").value = modeFromLocalStorage;
  }
}
