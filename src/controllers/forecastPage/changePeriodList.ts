//store
import store from "../../model/store";

//Modules
import showPeriodDaysList from "../../modules/forecastApp/showPeriodDaysList";

//Interfaces
import { IWeatherForecastData, IDayForecastData } from "../../interfaces/IWeatherForecast";

const changePeriodList = (): void => {
  const periodsNavInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".forecast-nav__periods-list input")!;

  periodsNavInputs.forEach((input: HTMLInputElement) => {
    input.addEventListener("change", () => {
      const periodDaysValue: number = +input.value;

      const weatherForecast: IWeatherForecastData = store.getState().weatherForecast!;
      const currentDayIndex: number = weatherForecast.current.currentDayIndex;
      const periodDaysList: IDayForecastData[] = weatherForecast.days.slice(0, periodDaysValue);

      showPeriodDaysList(periodDaysList, currentDayIndex);
    });
  });
};

export default changePeriodList;
