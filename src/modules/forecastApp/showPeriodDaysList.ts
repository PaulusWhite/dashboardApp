//Components
import PeriodDay from "../../view/components/forecastPage/PeriodDay";

//Interfaces
import { IDayForecastData } from "../../interfaces/IWeatherForecast";

const showPeriodDaysList = (periodDaysList: IDayForecastData[]): void => {
  const periodList: HTMLUListElement = document.querySelector(".forecast-nav__period-days-list")!;

  periodDaysList.forEach((dayData: IDayForecastData) => {
    periodList.innerHTML += PeriodDay(dayData.basicData);
  });
};

export default showPeriodDaysList;
