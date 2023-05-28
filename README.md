# Тестовое задание для Digital Design

## Intro

В качестве начальной сборки проекта был использован Webpack как таск-менеджер и сборщик модулей. В качестве возможностей сборки были использованы:

- Babel для полифилинга
- SCSS как препроцессор CSS
- Webpack Dev Server для отладки приложения
- CSS минификатор и автопрефиксер
- normalize.scss для приведения дефолтных стилей к единому виду

## Ход выполнения задачи

> закрепленное сверху меню с названиями категорий (не менее 3-х). При прокрутке страницы меню остается на месте (всегда видно в верхней части экрана). При клике на название категории осуществляется переход к ней на странице

Навигационное меню закреплено с помощью фиксированного позиционирования. Плавная прокрутка осуществляется при помощи smooth behaviour. С помощью JS мы обеспечиваем адекватную прокрутку до секции, которая не зависит от высоты нашего меню.

> закрепленная кнопка для возврата наверх страницы (отображается только после прокрутки) расположена в правом нижнем углу экрана

При прокрутке страницы кнопке добавляется модификатор, который ее отображает. Когда страница возращается в верхнюю часть, модификатор убирается.

> Дата добавления на сайт должна выводиться через функцию, которая преобразует дату в человекочитаемый вид. Результатом функции должен быть форматированный текст: \*\*<день недели>, <номер недели> неделя <месяц> <год> года

```
const getWeekNumber = (day) => {
  switch (true) {
    case day <= 7:
      return 1;
      break;
    case day <= 14:
      return 2;
      break;
    case day <= 21:
      return 3;
      break;
    default:
      return 4;
      break;
  }
};

const convertDate = (string) => {
  const [day, month, year] = string.split(".");
  const weekDays = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];

  const date = new Date(year, month - 1, day);
  const weekDay = weekDays[date.getDay()];
  const weekNumber = getWeekNumber(date.getDate());
  const monthName = months[date.getMonth()];

  const result = `${weekDay}, ${weekNumber} неделя<br>${monthName} ${year} года`;
  return result;
};
```

> Форма делается через тег form. При нажатии на "Купить" отображается сообщение о покупке (например через alert), при нажатии "Закрыть" форма скрывается

При сабмите формы была добавлена небольшая валидация на проверку корректных значений в input с типом number.

> карточки “товаров” должны переноситься на новую строку, если не умещаются в одной строке, количество в категории от 10 штук (сделать разное количество в категориях)

В данном случае сетка сделалан с помощью grid раскладки.

> внутри категорий расположены карточки с "Товарами". Карточка содержит:
> изображение,
> подпись к изображению,
> дату добавления на сайт,
> кнопку "Купить"

Информация о товарах подгружается из JSON файла.

> верхнем меню справа расположить кнопку переключения темы (темная/светлая). При переключении должен изменяться цвет фона и текста

Состояние переключателя сохраняется в Local Storage, при перезагрузке страницы подгружается выбраная ранее тема.
