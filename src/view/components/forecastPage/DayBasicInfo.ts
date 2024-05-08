//Interfaces
import { ICurrentForecastData } from "../../../interfaces/IWeatherForecast";

//Icons
import LocationIcon from "../../../assets/icons/location";

const DayBasicInfo = (data: ICurrentForecastData): string => {
  const view = `
    <div class="day-basic-info__location">
      ${LocationIcon()}
      <span class="day-basic-info__location-name">${data.location}</span>
    </div>

    <span class="today-basic-info__temp">${data.temp}°C</span>
    <span class="today-basic-info__windspeed">Windspeed: ${data.windspeed} km/h</span>
  `;

  return view;
};

export default DayBasicInfo;
