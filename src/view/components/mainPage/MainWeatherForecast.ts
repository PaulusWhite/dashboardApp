//Interfaces
import { IUserWeatherForecastData } from "../../../interfaces/IWeatherForecast";

const MainWeatherForecast = (weatherForecastData: IUserWeatherForecastData): string => {
  const view = `
    <div class="forecast__date">
      <span class="forecast__day">${weatherForecastData.day}</span>
      <span class="forecast__day-desc">${weatherForecastData.desc}</span>
    </div>

    <div class="forecast__temp">
      <span class="forecast__temp-data">
        <img src="${weatherForecastData.icon}" class="forecast__icon">
        <span class="forecast__temp-value">${weatherForecastData.temp}°C</span>
      </span>

      <span class="forecast__location">${weatherForecastData.location}</span>
    </div>
  `;

  return view;
};

export default MainWeatherForecast;
