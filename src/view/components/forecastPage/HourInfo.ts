//Interfaces
import { IHourData } from "../../../interfaces/IWeatherForecast";

const HourInfo = (data: IHourData): string => {
  const view = `
    <li class="hour" id="${data.id}">
      <span class="hourt__time">${data.time}</span>
      <img src="${data.icon}" class="hour__icon" alt="weather-icon">
      <span class="hourt__temo">${data.temp}°C</span>
    </li>
  `;

  return view;
};

export default HourInfo;
