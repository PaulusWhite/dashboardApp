//store
import store from "../../model/store";

//Actions
import { createSetRandomQuotationAction, createSetUserWeatherForecastAction } from "../../model/actionCreators";

//Interfaces
import { IQuotationData } from "../../interfaces/IAPI";
import { IUserWeatherForecastData } from "../../interfaces/IWeatherForecast";
import IPromiseValue from "../../interfaces/IPromise";

//Types
import { TState } from "../../interfaces/IModel";

//Controllers
import getRandomQuotationData from "./getRandomQuotationData";
import getUserWeatherForecastDataByIP from "./getUserWeatherForecastDataByIP";

//Components
import Quotation from "../../view/components/mainPage/Quotation";
import MainWeatherForecast from "../../view/components/mainPage/MainWeatherForecast";

const setQuotationAndWeatherForecast = async () => {
  const state: TState = store.getState();

  const quotationField: HTMLDivElement = document.querySelector(".quotation")!;
  const forecastField: HTMLElement = document.querySelector(".forecast")!;

  const promiseArr: Promise<IPromiseValue>[] = [];

  if (!state.quotation) promiseArr.push(getRandomQuotationData());
  if (!state.userWeatherForecast) promiseArr.push(getUserWeatherForecastDataByIP());

  await Promise.allSettled(promiseArr).then((promiseDataArr) => {
    promiseDataArr.forEach((promiseData) => {
      if (promiseData.status === "rejected") return;

      const promiseValue: IPromiseValue = promiseData.value;
      if (promiseValue.dataType === "quotation") {
        const quotationData: IQuotationData = promiseValue.data;
        store.dispatch(createSetRandomQuotationAction(quotationData));
      } else {
        const weatherForecastData: IUserWeatherForecastData = promiseValue.data;
        store.dispatch(createSetUserWeatherForecastAction(weatherForecastData));
      }
    });
  });

  if (state.quotation) quotationField.innerHTML = Quotation(state.quotation.content, state.quotation.author);
  if (state.userWeatherForecast) forecastField.innerHTML = MainWeatherForecast(state.userWeatherForecast);
};

export default setQuotationAndWeatherForecast;
