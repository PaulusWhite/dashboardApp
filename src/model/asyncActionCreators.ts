//store
import store from "./store";

//API
import getUserGeoData from "../API/getUserGeoByIP";
import getWeatherForecast from "../API/getWeatherForecast";

//Ation Types
import { SET_USER_WEATHER_FORECAST } from "./actionTypes";

//Interfaces
import { IUserGeoData } from "../interfaces/IAPI";
import { IUserWeatherForecastData, IWeatherData } from "../interfaces/IWeatherForecast";

//Utils
import getTodayDate from "../utils/getTodayDate";

const createAsyncSetUserWeatherForecastByIPAction = async <N extends IWeatherData>() => {
  try {
    const userGeoData: IUserGeoData = await getUserGeoData();
    const location = userGeoData.city ? userGeoData.city : userGeoData.country;
    const date1: string = getTodayDate();

    const weatherData: N = await getWeatherForecast({ location, date1 });

    const userWeatherForecast: IUserWeatherForecastData = {
      temp: weatherData.currentConditions.temp,
      icon: weatherData.currentConditions.icon,
      location: `${userGeoData.city ? userGeoData.city : ""}, ${userGeoData.country}`,
      day: getTodayDate(),
      desc: weatherData.description,
    };

    store.dispatch({ type: SET_USER_WEATHER_FORECAST, payload: userWeatherForecast });
  } catch (err) {
    throw new Error("error from createAsyncSetUserWeatherForecastByIPAction");
  }
};

export { createAsyncSetUserWeatherForecastByIPAction };
