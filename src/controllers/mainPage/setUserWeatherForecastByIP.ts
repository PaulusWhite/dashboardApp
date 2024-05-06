//store
import store from "../../model/store";

//Async Actions
import { createAsyncSetUserWeatherForecastByIPAction } from "../../model/asyncActionCreators";

//Interfaces
import { IUserWeatherForecastData } from "../../interfaces/IWeatherForecast";

//Components
import MainWeatherForecast from "../../view/components/mainPage/MainWeatherForecast";

const setUserWeatherForecastByIP = async () => {
  let userWeatherForecast: IUserWeatherForecastData | null = store.getState().userWeatherForecast;

  if (!userWeatherForecast) {
    try {
      await createAsyncSetUserWeatherForecastByIPAction();

      userWeatherForecast = store.getState().userWeatherForecast as IUserWeatherForecastData;
    } catch (err: unknown) {
      console.log(err);
    }
  }

  if (!userWeatherForecast) return;

  const weatherForecastSection: HTMLElement = document.querySelector(".main .forecast")!;
  weatherForecastSection.innerHTML = MainWeatherForecast(userWeatherForecast);
};

export default setUserWeatherForecastByIP;
