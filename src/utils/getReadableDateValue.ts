//Interfaces
import { IGetReadableDateData } from "../interfaces/Icommon";

const getReadableDateValue = (data?: IGetReadableDateData): string => {
  const date = new Date();
  const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months: string[] = [
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

  const dd: string = data ? days[data.dayIndex] : days[date.getDay()];
  const mm: string = data ? months[data.monthIndex] : months[date.getMonth()];

  return `${dd}, ${date.getDate()} ${mm}`;
};

export default getReadableDateValue;
