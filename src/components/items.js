import {getWeekNumber, convertDate} from "../utils/convertDate.js";

const categories = document.querySelectorAll(".category-section");

const showItems = async function (categoryName, container) {
  const res = await fetch("./data/items.json");
  const data = await res.json();

  const filteredByCategory = data.filter(
    (item) => item.category === categoryName
  );

  filteredByCategory.forEach((item) => {
    const {date, title, image_path, id} = item;

    const html = `<div class="item" data-item-id="${id}">
              <figure class="item__image-container">
                <img
                  src="${image_path}"
                  class="item__image"
                  alt="${title}"
                />
                <figcaption class="item__heading">
                 ${title}
                </figcaption>
              </figure>
              <p class="item__date">${convertDate(date)}</p>
              <button class="btn">Купить</button>
            </div>`;

    container.insertAdjacentHTML("beforeend", html);
  });
};

categories.forEach((category) => {
  const itemsWrapper = category.querySelector(".items-wrapper");
  const categoryName = category.dataset.category;
  showItems(categoryName, itemsWrapper);
});
