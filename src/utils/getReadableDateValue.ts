const getReadableDateValue = (): string => {
  const date = new Date();
  const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month: string[] = [
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

  const dd = days[date.getDay()];
  const mm: string = month[date.getMonth()];

  return `${dd}, ${date.getDate()} ${mm}`;
};

export default getReadableDateValue;
