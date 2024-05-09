//store
import store from "../../model/store";

//Modules
import showPeriodDaysList from "../../modules/forecastApp/showPeriodDaysList";

//Interfaces
import { IWeatherForecastData, IDayForecastData } from "../../interfaces/IWeatherForecast";

const setPeriodDaysList = () => {
  const weatherForecast: IWeatherForecastData = store.getState().weatherForecast!;
  const currentDayIndex: number = weatherForecast.current.basicInfo.currentDayIndex;
  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".forecast-nav__periods-list input")!;

  const checkedInput: HTMLInputElement = [].find.call(inputs, (input: HTMLInputElement) => input.checked)!;
  const periodValue: number = +checkedInput.value;
  const periodDaysList: IDayForecastData[] = weatherForecast.days.slice(0, periodValue);

  showPeriodDaysList(periodDaysList, currentDayIndex);
};

export default setPeriodDaysList;
