//store
import store from "../../model/store";

//Async Actions
import { createAsyncSetUserWeatherForecastByIPAction } from "../../model/asyncActionCreators";

//Interfaces
import { IUserWeatherForecastData } from "../../interfaces/IWeatherForecast";

//Components
import MainWeatherForecast from "../../components/mainPage/MainWeatherForecast";

const convertTempCelsius = (initValue: number): number => {
  return Math.ceil((Math.ceil(initValue) - 32) / 1.8);
};

const setUserWeatherForecastByIP = async () => {
  try {
    let userWeatherForecast: IUserWeatherForecastData | null = store.getState().userWeatherForecast;

    if (!userWeatherForecast) {
      await createAsyncSetUserWeatherForecastByIPAction();

      userWeatherForecast = store.getState().userWeatherForecast as IUserWeatherForecastData;
    }

    userWeatherForecast.temp = convertTempCelsius(userWeatherForecast.temp);

    const weatherForecastSection: HTMLElement = document.querySelector(".main .forecast")!;
    weatherForecastSection.innerHTML = MainWeatherForecast(userWeatherForecast);
  } catch (err) {
    console.log(err);
  }
};

export default setUserWeatherForecastByIP;
