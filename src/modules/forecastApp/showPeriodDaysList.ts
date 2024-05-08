//Components
import PeriodDay from "../../view/components/forecastPage/PeriodDay";

//Interfaces
import { IDayForecastData } from "../../interfaces/IWeatherForecast";

const showPeriodDaysList = (periodDaysList: IDayForecastData[], currentDayIndex: number): void => {
  const periodList: HTMLUListElement = document.querySelector(".forecast-nav__period-days-list")!;

  periodDaysList.forEach((dayData: IDayForecastData, index: number) => {
    const isChecked = currentDayIndex === index ? true : false;
    periodList.innerHTML += PeriodDay(dayData.basicData, index, isChecked);
  });
};

export default showPeriodDaysList;
