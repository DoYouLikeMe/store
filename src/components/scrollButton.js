const scrollButton = document.querySelector(".scroll-button");
const scroollToTheTop = function () {
  setTimeout(() => window.scrollTo({top: 0, behavior: "smooth"}), 300);
};

scrollButton.addEventListener("click", scroollToTheTop);

const revealButton = function () {
  if (window.scrollY > 30) {
    scrollButton.classList.add("scroll-button_visible");
  } else {
    scrollButton.classList.remove("scroll-button_visible");
  }
};
window.addEventListener("scroll", revealButton);
