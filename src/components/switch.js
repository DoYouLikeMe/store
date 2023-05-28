const switcher = document.querySelector(".switch");
const body = document.querySelector("body");

const switchNightMode = function () {
  switcher.classList.toggle("switch_night-theme");
  body.classList.toggle("night-theme");
};

switcher.addEventListener("click", switchNightMode);
