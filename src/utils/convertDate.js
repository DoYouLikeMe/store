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
  const weekNumber = Math.ceil(date.getDate() / 7);
  const monthName = months[date.getMonth()];

  const result = `${weekDay}, ${weekNumber} неделя<br>${monthName} ${year} года`;
  return result;
};

export {convertDate};
