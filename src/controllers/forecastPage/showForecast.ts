//store
import store from "../../model/store";

//Components
import DayBasicInfo from "../../view/components/forecastPage/DayBasicInfo";
import ForecastNav from "../../view/components/forecastPage/ForecastNav";
import DetailedInfo from "../../view/components/forecastPage/DetailedInfo";
import HourInfo from "../../view/components/forecastPage/HourInfo";
import RelevantTime from "../../view/components/forecastPage/RelevantTime";

//Interfaces
import { IDayForecastData, IWeatherForecastData, IDetailedInfoData, IHourData } from "../../interfaces/IWeatherForecast";

//Modules
import showPeriodDaysList from "../../modules/forecastApp/showPeriodDaysList";

//Controllers
import changeDayInfo from "./changeDayInfo";
import changePeriodList from "./changePeriodList";

const setPeriodDaysList = () => {
  const weatherForecast: IWeatherForecastData = store.getState().weatherForecast!;
  const currentDayIndex: number = weatherForecast.current.currentDayIndex;
  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".forecast-nav__periods-list input")!;

  const checkedInput: HTMLInputElement = [].find.call(inputs, (input: HTMLInputElement) => input.checked)!;
  const periodValue: number = +checkedInput.value;
  const periodDaysList: IDayForecastData[] = weatherForecast.days.slice(0, periodValue);

  showPeriodDaysList(periodDaysList, currentDayIndex);
};

const getCheckedHourDataIndex = (): number => {
  const hourItems: NodeListOf<Element> = document.querySelectorAll(".hour ")!;

  const checkedHourItem: HTMLLIElement = [].find.call(hourItems, (hourItem: HTMLLIElement) =>
    hourItem.classList.contains("checked-point"),
  )!;

  const hourDataIndex: number = +checkedHourItem.id;

  return hourDataIndex;
};

const setDetailedInfo = (): void => {
  const weatherForecast = store.getState().weatherForecast!;
  const currentDayIndex: number = weatherForecast.current.currentDayIndex;
  const checkedHourData: number = getCheckedHourDataIndex();
  const detailedInfoData: IDetailedInfoData = weatherForecast.days[currentDayIndex].hoursData[checkedHourData];

  const detailedInfoField: HTMLDivElement = document.querySelector(".detailed-info")!;
  detailedInfoField.innerHTML = DetailedInfo(detailedInfoData);
};

const setRelevantTime = () => {
  const weatherForecast = store.getState().weatherForecast!;
  const { time, date } = weatherForecast.current; //relevant time
  const relevainTimeField: HTMLParagraphElement = document.querySelector(".main-interface__time")!;

  relevainTimeField.innerHTML = RelevantTime({ date, time });
};

const setHoursInfo = (): void => {
  const weatherForecast = store.getState().weatherForecast!;
  const currentDayIndex: number = weatherForecast.current.currentDayIndex;
  const relevantTime: string = weatherForecast.current.time;

  const hoursList: HTMLUListElement = document.querySelector(".hours-list")!;
  hoursList.innerHTML = "";

  weatherForecast.days[currentDayIndex].hoursData.forEach((hourData: IDetailedInfoData, index: number) => {
    const { time, temp, icon } = hourData;
    const isChecked = relevantTime === hourData.time ? true : false;

    const componentHourData: IHourData = { id: index, time, temp, icon, isChecked };

    hoursList.innerHTML += HourInfo(componentHourData);
  });

  setRelevantTime();
};

const showForecast = () => {
  const { weatherForecast } = store.getState();

  if (!weatherForecast) return;

  const basicInfoField: HTMLDivElement = document.querySelector(".day-basic-info")!;
  const forecastNavField: HTMLElement = document.querySelector(".forecast-nav")!;

  basicInfoField.innerHTML = DayBasicInfo(weatherForecast.current);
  forecastNavField.innerHTML = ForecastNav();

  setPeriodDaysList();

  setHoursInfo();
  setDetailedInfo();

  //
  changeDayInfo();
  changePeriodList();
};

export { setHoursInfo, setDetailedInfo, showForecast };
