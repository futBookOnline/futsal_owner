const getDayName = (day, short = true) => {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return short ? dayNames[day].slice(0, 3) : dayNames[day];
};

const getMonthName = (month, short = true) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return short ? months[month].slice(0, 3) : months[month];
};

export { getDayName, getMonthName };
