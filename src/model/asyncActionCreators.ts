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
import getReadableDateValue from "../utils/getReadableDateValue";

const createAsyncSetUserWeatherForecastByIPAction = async <N extends IWeatherData>() => {
  try {
    const userGeoData: IUserGeoData = await getUserGeoData();
    const location = userGeoData.city ? userGeoData.city : userGeoData.country;
    const date1: string = getTodayDate();

    const weatherData: N = await getWeatherForecast({ location, date1 });
    const { temp, icon } = weatherData.currentConditions;
    const iconURL: string = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${icon}.png`;

    const userWeatherForecast: IUserWeatherForecastData = {
      temp,
      icon: iconURL,
      location: `${userGeoData.city ? userGeoData.city : ""}, ${userGeoData.country}`,
      day: getReadableDateValue(),
      desc: weatherData.description,
    };

    store.dispatch({ type: SET_USER_WEATHER_FORECAST, payload: userWeatherForecast });
  } catch (err) {
    throw new Error("error from createAsyncSetUserWeatherForecastByIPAction");
  }
};

export { createAsyncSetUserWeatherForecastByIPAction };
