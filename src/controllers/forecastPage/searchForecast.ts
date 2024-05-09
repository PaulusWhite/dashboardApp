//store
import store from "../../model/store";

//API
import getWeatherForecast from "../../API/getWeatherForecast";

//Actions
import { createSetForecastData } from "../../model/actionCreators";

//Interfaces
import { IError } from "../../interfaces/IError";
import { IWeatherForecastData, IDayForecastData, IDetailedInfoData, ICurrentForecastData } from "../../interfaces/IWeatherForecast";
import {
  IWeatherForecastResponseData,
  IWeatherForecastDayResponseData,
  IWeatherForecastHourResponseData,
} from "../../interfaces/IAPI";

//modules
import getErrorData from "../../modules/common/getErrorData";

//Utils
import convertTempCelsius from "../../utils/convertTempCelsius";

//Controllers
import { showForecast } from "./showForecast";

const getCurrentForecastData = (data: IWeatherForecastResponseData): ICurrentForecastData => {
  return {
    basicInfo: {
      location: data.address,
      time: data.currentConditions.datetime,
      date: data.days[0].datetime,
      temp: convertTempCelsius(data.currentConditions.temp),
      windspeed: data.currentConditions.windspeed,
      currentDayIndex: 0,
      currentHourIndex: null,
    },
    currentDetailedData: {
      ...data.currentConditions,
      time: data.currentConditions.datetime,
      temp: convertTempCelsius(data.currentConditions.temp),
    },
  };
};

const getDaysForecastData = (daysData: IWeatherForecastDayResponseData[]) => {
  return daysData.map((dayData: IWeatherForecastDayResponseData) => {
    const dayForecastData: IDayForecastData = {
      basicData: {
        icon: `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${dayData.icon}.png`,
        date: dayData.datetime,
        forecast: dayData.conditions,
        temp: convertTempCelsius(dayData.temp),
      },
      hoursData: dayData.hours.map((hourData: IWeatherForecastHourResponseData) => {
        const hourForecastData: IDetailedInfoData = {
          ...hourData,
          temp: convertTempCelsius(hourData.temp),
          time: hourData.datetime,
          icon: `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${hourData.icon}.png`,
        };

        return hourForecastData;
      }),
    };
    return dayForecastData;
  });
};

const searchForecast = () => {
  const searchBtn: HTMLButtonElement = document.querySelector(".input-field__add-btn")!;

  searchBtn.addEventListener("click", async <T extends IWeatherForecastResponseData>() => {
    const seachInput: HTMLInputElement = document.querySelector(".forecast-page #input-field__input")!;
    const requestValue: string = seachInput.value.trim();

    try {
      const data: T = await getWeatherForecast({ location: requestValue });

      console.log(data);

      const weatherForecastData: IWeatherForecastData = {
        current: getCurrentForecastData(data),
        days: getDaysForecastData(data.days),
        tzoffset: data.tzoffset,
      };

      store.dispatch(createSetForecastData(weatherForecastData));

      showForecast();
    } catch (err: unknown) {
      const errorDescription: string = `The Weahter Forecast data was not gottent. Reason: ${(err as Error).name}`;
      const errorData: IError = getErrorData(err as Error, errorDescription);

      throw errorData;
    }

    seachInput.value = "";
  });
};

export default searchForecast;
