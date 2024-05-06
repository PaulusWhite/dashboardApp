//Interfaces
import { IWeatherForecastRequsetData } from "../interfaces/IAPI";

const API_KEY = "AL54RZ8KWJVYSUZRVRMTM2UQ3";
const BASE_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

const getWeatherForecast = async <T>(requestData: IWeatherForecastRequsetData): Promise<T> => {
  const { location } = requestData;
  const { date1 } = requestData;
  const URL: string = `${BASE_URL}${location}${date1 ? `/${date1}` : ""}?key=${API_KEY}`;

  const response: Response = await fetch(URL);
  const data: T = await response.json();

  return data;
};

export default getWeatherForecast;
