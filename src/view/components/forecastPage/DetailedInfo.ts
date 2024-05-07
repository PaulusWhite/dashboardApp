//Interfaces
import { IDetailedInfoData } from "../../../interfaces/IWeatherForecast";

const DetailedInfo = (data: IDetailedInfoData): string => {
  const view = `
    <p class="detailed-info__time">${data.time}</p>
    <p class="detailed-info__temp">${data.temp}</p>
    <p class="detailed-info__humidity">${data.humidity}</p>
    <p class="detailed-info__precip">${data.precip}</p>
    <p class="detailed-info__precipprob">${data.precipprob}</p>
    <p class="detailed-info__snow">${data.snow}</p>
    <p class="detailed-info__windgust">${data.windgust}</p>
    <p class="detailed-info__windspeed">${data.windspeed}</p>
    <p class="detailed-info__winddir">${data.winddir}</p>
    <p class="detailed-info__pressure">${data.pressure}</p>
    <p class="detailed-info__visibility">${data.visibility}</p>
    <p class="detailed-info__cloudcover">${data.cloudcover}</p>
    <p class="detailed-info__conditions">${data.conditions}</p>
    <p class="detailed-info__icon">${data.icon}</p>
  `;

  return view;
};

export default DetailedInfo;
