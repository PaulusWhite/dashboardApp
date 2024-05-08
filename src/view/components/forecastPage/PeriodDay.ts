//Interfaces
import { IPeriodDayData } from "../../../interfaces/IWeatherForecast";

const CHECKED_CLASS: string = "checked-point";

const PeriodDay = (data: IPeriodDayData, id: number, isChecked: boolean): string => {
  const view = `
    <li class="period-day ${isChecked ? CHECKED_CLASS : ""}" id="${id}">
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
