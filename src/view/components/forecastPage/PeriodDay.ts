//Interfaces
import { IPeriodDayData } from "../../../interfaces/IWeatherForecast";

const PeriodDay = (data: IPeriodDayData): string => {
  const view = `
    <li class="period-day" id="${data.id}">
      <img src="${data.icon}" class="period-day__icon" alt="weather-icon">

      <div class="period-day__info">
        <span class="period-day__date">${data.date}</span>
        <span class="period-day__forecast">${data.forecast}</span>
      </div>

      <span class="period-day__temp">${data.temp}°C</span>
    </li>
  `;

  return view;
};

export default PeriodDay;
