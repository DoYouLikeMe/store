import {validateForm} from "../components/formValidaton.js";

const showPopup = async function (e) {
  if (!e.target.classList.contains("item_btn")) return;

  const itemElement = e.target.closest(".item");
  if (!itemElement) return;

  const body = document.querySelector("body");

  const res = await fetch("./data/items.json");
  const data = await res.json();

  const item = data.find((item) => item.id === itemElement.dataset.id);

  const html = `
   <div class="popup">
      <div class="popup__container">
        <h2 class="popup__heading">Оформление заказа:</h2>
        <button class="popup__close-btn" title="Закрыть">&#10006;</button>
        <form class="form" method="post">
          <div class="form__row">
          <span class="form__heading">Название: </span>${item.title}
          </div>
          <div class="form__row">
            <label for="number" class="form__label">
              <span class="form__heading">Количество:</span>
            </label>
            <input
              class="form__input"
              type="number"
              min="1"
              id="number"
              name="number"
            />
          </div>
          <div class="form__row">
            <span class="form__heading">Цвета:</span>
            <label for="blue">
              <input type="radio" id="blue" checked name="options" value="blue" />
              Голубой
            </label>
            <label for="green">
              <input type="radio" id="green" name="options" value="green" />
              Зеленый
            </label>
            <label for="black">
              <input type="radio" id="black" name="options" value="black" />
              Черный
            </label>
          </div>
          <label for="commentary">
            <span class="form__heading">Комментарий:</span>
          </label>
          <textarea
            maxlength="200"
            class="form__commentary"
            id="commentary"
            name="commentary"
            placeholder="Оставьте ваш комментарий"
          ></textarea>
          <button type="submit" class="btn">Отправить</button>
        </form>
      </div>
    </div>
  `;

  body.style.overflow = "hidden";
  body.insertAdjacentHTML("beforeend", html);

  const form = document.querySelector(".form");
  form.addEventListener("submit", validateForm);

  const popup = document.querySelector(".popup");
  popup.addEventListener("click", closePopup);
};

const closePopup = function (e) {
  const popup = document.querySelector(".popup");

  if (
    e.target.classList.contains("popup") ||
    e.target.classList.contains("popup__close-btn")
  ) {
    document.body.style.overflow = "visible";
    popup.remove();
  } else {
    return;
  }
};

const main = document.querySelector("main");
main.addEventListener("click", showPopup);
