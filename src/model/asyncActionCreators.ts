//store
import store from "./store";

//API
import getUserGeoData from "../API/getUserGeoByIP";
import getWeatherForecast from "../API/getWeatherForecast";
import getRandomQuotation from "../API/getRandomQuotation";

//Ation Types
import { SET_USER_WEATHER_FORECAST, SET_RANDOM_QUOTATION } from "./actionTypes";

//Interfaces
import { IUserGeoData, IQuotationData } from "../interfaces/IAPI";
import { IUserWeatherForecastData, IWeatherData } from "../interfaces/IWeatherForecast";
import { IError } from "../interfaces/IError";

//Utils
import getTodayDate from "../utils/getTodayDate";
import getReadableDateValue from "../utils/getReadableDateValue";

//modules
import getErrorData from "../modules/common/getErrorData";

const convertTempCelsius = (initValue: number): number => {
  return Math.ceil((Math.ceil(initValue) - 32) / 1.8);
};

const createAsyncSetUserWeatherForecastByIPAction = async <N extends IWeatherData>() => {
  try {
    const userGeoData: IUserGeoData = await getUserGeoData();
    const location = userGeoData.city ? userGeoData.city : userGeoData.country;
    const date1: string = getTodayDate();

    const weatherData: N = await getWeatherForecast({ location, date1 });
    const { temp, icon } = weatherData.currentConditions;
    const iconURL: string = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${icon}.png`;

    const userWeatherForecast: IUserWeatherForecastData = {
      temp: convertTempCelsius(temp),
      icon: iconURL,
      location: `${userGeoData.city ? userGeoData.city : ""}, ${userGeoData.country}`,
      day: getReadableDateValue(),
      desc: weatherData.description,
    };

    store.dispatch({ type: SET_USER_WEATHER_FORECAST, payload: userWeatherForecast });
  } catch (err: unknown) {
    const errorDescription: string = `The User Forecast data was not gottent. Reason: ${(err as Error).name}`;
    const errorData: IError = getErrorData(err as Error, errorDescription);

    throw errorData;
  }
};

const createAsyncSetRandomQuotationAction = async () => {
  try {
    const quotationData: IQuotationData = await getRandomQuotation();

    store.dispatch({ type: SET_RANDOM_QUOTATION, payload: quotationData });
  } catch (err: unknown) {
    const errorDescription: string = `The quotation was not gotten. Reason: ${(err as Error).name}`;
    const errorData: IError = getErrorData(err as Error, errorDescription);

    throw errorData;
  }
};

export { createAsyncSetUserWeatherForecastByIPAction, createAsyncSetRandomQuotationAction };
