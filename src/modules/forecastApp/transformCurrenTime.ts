//store
import store from "../../model/store";

//utils
import getCurrentTime from "../../utils/getCurrentTime";

//Interfaces
import { IWeatherForecastData } from "../../interfaces/IWeatherForecast";

const transformCurrenTime = (time: string) => {
  const weatherForecast: IWeatherForecastData = store.getState().weatherForecast as IWeatherForecastData;
  const currentHourIndex: number | null = weatherForecast.current.basicInfo.currentHourIndex;

  const timeArr: string[] = time.split(":");
  let [hour, minute] = timeArr;

  if (!currentHourIndex) {
    const [, currentMinute] = getCurrentTime();

    const today = new Date();
    const UTCHours: number = today.getUTCHours();
    const forecastTzoffset: number = weatherForecast.tzoffset;
    const currentHour: number = today.getHours() + 1;

    const localHour: number = currentHour - UTCHours + forecastTzoffset;
    minute = currentMinute;
    hour = `${localHour}`;
  }

  hour = hour.length === 1 ? `0${hour}` : hour;

  return `${hour}:${minute}`;
};

export default transformCurrenTime;
