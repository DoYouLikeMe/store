export const validateForm = (e) => {
  e.preventDefault();
  const popup = document.querySelector(".popup");
  const errors = document.querySelectorAll(".form__error");
  const hasErrors = errors.length;
  if (hasErrors) {
    errors.forEach((error) => {
      error.remove();
    });
  }
  const numberInput = document.querySelector(".form__input");
  if (numberInput.value <= 0) {
    const error = document.createElement("div");
    error.classList.add("form__error");
    error.textContent = "Введите значение больше нуля";
    const row = numberInput.closest(".form__row");
    row.insertAdjacentElement("afterend", error);
    return;
  }
  document.body.style.overflow = "visible";
  popup.remove();
  alert("Ваш заказ оформлен!");
};
