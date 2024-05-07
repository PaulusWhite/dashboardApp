//API
import getUserGeoData from "../../API/getUserGeoByIP";
import getWeatherForecast from "../../API/getWeatherForecast";

//Utils
import getTodayDate from "../../utils/getTodayDate";
import getReadableDateValue from "../../utils/getReadableDateValue";

//Interfaces
import { IUserWeatherForecastData, IWeatherData } from "../../interfaces/IWeatherForecast";
import { IUserGeoData } from "../../interfaces/IAPI";
import { IError } from "../../interfaces/IError";
import IPromiseValue from "../../interfaces/IPromise";

//Modules
import getErrorData from "../../modules/common/getErrorData";

const convertTempCelsius = (initValue: number): number => {
  return Math.ceil((Math.ceil(initValue) - 32) / 1.8);
};

const getUserWeatherForecastDataByIP = async <T extends IWeatherData>(): Promise<IPromiseValue> => {
  try {
    const userGeoData: IUserGeoData = await getUserGeoData();
    const location = userGeoData.city ? userGeoData.city : userGeoData.country;
    const date1: string = getTodayDate();

    const weatherData: T = await getWeatherForecast({ location, date1 });
    const { temp, icon } = weatherData.currentConditions;
    const iconURL: string = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${icon}.png`;

    const userWeatherForecastData: IUserWeatherForecastData = {
      temp: convertTempCelsius(temp),
      icon: iconURL,
      location: `${userGeoData.city ? userGeoData.city : ""}, ${userGeoData.country}`,
      day: getReadableDateValue(),
      desc: weatherData.description,
    };

    return {
      dataType: "forecast",
      data: userWeatherForecastData,
    };
  } catch (err: unknown) {
    const errorDescription: string = `The User Forecast data was not gottent. Reason: ${(err as Error).name}`;
    const errorData: IError = getErrorData(err as Error, errorDescription);

    throw errorData;
  }
};

export default getUserWeatherForecastDataByIP;
