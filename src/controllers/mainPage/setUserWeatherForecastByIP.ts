//store
import store from "../../model/store";

//Async Actions
import { createAsyncSetUserWeatherForecastByIPAction } from "../../model/asyncActionCreators";

//Interfaces
import { IUserWeatherForecastData } from "../../interfaces/IWeatherForecast";

const setUserWeatherForecastByIP = async () => {
  const userWeatherForecast: IUserWeatherForecastData | null = store.getState().userWeatherForecast;

  if (!userWeatherForecast) {
    await createAsyncSetUserWeatherForecastByIPAction();

    console.log(store.getState().userWeatherForecast);
  }
};

export default setUserWeatherForecastByIP;
