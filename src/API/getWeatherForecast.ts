//Interfaces
import { IWeatherForecastRequsetData } from "../interfaces/IAPI";

const API_KEY = "AL54RZ8KWJVYSUZRVRMTM2UQ3";
const BASE_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

const getWeatherForecast = async (requestData: IWeatherForecastRequsetData) => {
  const { location } = requestData;
  const { date1 } = requestData;
  const URL: string = `${BASE_URL}${location}${date1 ? `/${date1}` : ""}?key=${API_KEY}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export default getWeatherForecast;
