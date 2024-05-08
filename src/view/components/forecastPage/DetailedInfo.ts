//Interfaces
import { IDetailedInfoData } from "../../../interfaces/IWeatherForecast";

const DetailedInfo = (data: IDetailedInfoData): string => {
  const view = `
    <div class="detailed-info__first-part">
      <p class="detailed-info__temp">Temperature: ${data.temp}°C</p>
      <p class="detailed-info__humidity">Humidity: ${data.humidity}%</p>
      <p class="detailed-info__precip">Precipitation: ${data.precip}mm</p>
      <p class="detailed-info__precipprob">Probability of Precipitation: ${data.precipprob}%</p>
      <p class="detailed-info__pressure">Pressure: ${data.pressure}mb</p>
    </div>

    <div class="detailed-info__first__second-part">
      <p class="detailed-info__windspeed">Wind: ${data.windspeed}km/h</p>
      <p class="detailed-info__windgust">Wind Gusts: ${data.windgust}km/h</p>
      <p class="detailed-info__winddir">${data.winddir}</p>
      <p class="detailed-info__visibility">Visibility: ${data.visibility}km</p>
      <p class="detailed-info__cloudcover">Cloud Cover: ${data.cloudcover}%</p>
    </div>

    <h1 class="detailed-info__conditions">${data.conditions}</h1>
  `;

  return view;
};

export default DetailedInfo;
