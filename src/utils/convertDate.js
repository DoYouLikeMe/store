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

export {getWeekNumber, convertDate};
