//store
import store from "../../model/store";

//Components
import DayBasicInfo from "../../view/components/forecastPage/DayBasicInfo";
import ForecastNav from "../../view/components/forecastPage/ForecastNav";
import DetailedInfo from "../../view/components/forecastPage/DetailedInfo";
import HourInfo from "../../view/components/forecastPage/HourInfo";
// import RelevantTime from "../../view/components/forecastPage/RelevantTime";

//Interfaces
import { IDayForecastData, IDetailedInfoData, IHourData } from "../../interfaces/IWeatherForecast";

//Modules
import showPeriodDaysList from "../../modules/forecastApp/showPeriodDaysList";
import getRandomID from "../../utils/getRandomID";

const setPeriod = () => {
  const weatherForecast = store.getState().weatherForecast!;
  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".forecast-nav__periods-list input")!;

  const checkedInput: HTMLInputElement = [].find.call(inputs, (input: HTMLInputElement) => input.checked)!;
  const periodValue: number = +checkedInput.value;
  const periodDaysList: IDayForecastData[] = weatherForecast.days.slice(0, periodValue);

  showPeriodDaysList(periodDaysList);
};

const setDetailedInfo = (): void => {
  const weatherForecast = store.getState().weatherForecast!;
  const detailedInfoData: IDetailedInfoData = weatherForecast.days[1].hoursData[1]; //TEST

  const detailedInfoField: HTMLDivElement = document.querySelector(".detailed-info")!;
  detailedInfoField.innerHTML = DetailedInfo(detailedInfoData);
};

const setHoursInfo = (): void => {
  const weatherForecast = store.getState().weatherForecast!;
  const hoursList: HTMLUListElement = document.querySelector(".hours-list")!;

  weatherForecast.days[1].hoursData.forEach((hourData: IDetailedInfoData) => {
    const { time, temp, icon } = hourData;
    const componentHourData: IHourData = { id: getRandomID(), time, temp, icon };

    hoursList.innerHTML += HourInfo(componentHourData);
  });
};

const showForecast = () => {
  const { weatherForecast } = store.getState();

  if (!weatherForecast) return;

  const basicInfoField: HTMLDivElement = document.querySelector(".day-basic-info")!;
  const forecastNavField: HTMLElement = document.querySelector(".forecast-nav")!;

  basicInfoField.innerHTML = DayBasicInfo(weatherForecast.current);
  forecastNavField.innerHTML = ForecastNav();

  setPeriod();

  setHoursInfo();
  setDetailedInfo();
};

export default showForecast;
