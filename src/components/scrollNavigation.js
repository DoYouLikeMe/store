const navigation = document.querySelector(".navigation");
const footerNavigation = document.querySelector(".page-footer__navigation");

const scrollToLink = function (e) {
  e.preventDefault();
  const link = e.target.closest("a");
  if (!link) return;

  const section = document.querySelector(
    `[data-category="${link.dataset.categorylink}"]`
  );

  const navHeight = navigation.getBoundingClientRect().height + 20;
  const positionTop =
    section.getBoundingClientRect().top + window.pageYOffset - navHeight;

  window.scrollTo({top: positionTop, behavior: "smooth"});
};

footerNavigation.addEventListener("click", scrollToLink);
navigation.addEventListener("click", scrollToLink);
