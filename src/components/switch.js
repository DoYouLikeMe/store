const switcher = document.querySelector(".switch");
const body = document.querySelector("body");

const theme = localStorage.getItem("theme");

const switchNightMode = function (event) {
  if (theme === "night") {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", "night");
  }

  switcher.classList.toggle("switch_night-theme");
  body.classList.toggle("night-theme");
};

if (theme === "night") {
  switcher.classList.add("switch_night-theme");
  body.classList.add("night-theme");
}

switcher.addEventListener("click", switchNightMode);
