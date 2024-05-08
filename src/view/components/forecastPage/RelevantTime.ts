//Interfaces
import { IRelevantIme } from "../../../interfaces/IWeatherForecast";

const RelevantTime = (data: IRelevantIme): string => {
  const view = `
    <span class="main-interface__date">${data.date}</span> | 
    <span class="main-interface__hour">${data.time}</span>
  `;

  return view;
};

export default RelevantTime;
