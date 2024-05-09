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
import transformCurrenTime from "../../modules/forecastApp/transformCurrenTime";

//Controllers
import changeDayInfo from "./changeDayInfo";
import changePeriodList from "./changePeriodList";
import changeHourInfo from "./changeHourInfo";

const setPeriodDaysList = () => {
  const weatherForecast: IWeatherForecastData = store.getState().weatherForecast!;
  const currentDayIndex: number = weatherForecast.current.basicInfo.currentDayIndex;
  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".forecast-nav__periods-list input")!;

  const checkedInput: HTMLInputElement = [].find.call(inputs, (input: HTMLInputElement) => input.checked)!;
  const periodValue: number = +checkedInput.value;
  const periodDaysList: IDayForecastData[] = weatherForecast.days.slice(0, periodValue);

  showPeriodDaysList(periodDaysList, currentDayIndex);
};

const getCheckedHourDataIndex = (): number | undefined => {
  const checkedHour: HTMLLIElement | null = document.querySelector(".hours-list .checked-point");

  return checkedHour ? +checkedHour.id : undefined;
};

const setDetailedInfo = (): void => {
  const weatherForecast = store.getState().weatherForecast!;

  const currentDayIndex: number = weatherForecast.current.basicInfo.currentDayIndex;
  const checkedHourIndex: number | undefined = getCheckedHourDataIndex();

  let detailedInfoData: IDetailedInfoData = {} as IDetailedInfoData;

  if (checkedHourIndex) {
    detailedInfoData = weatherForecast.days[currentDayIndex].hoursData[checkedHourIndex];
  } else detailedInfoData = weatherForecast.current.currentDetailedData;

  const detailedInfoField: HTMLDivElement = document.querySelector(".detailed-info")!;
  detailedInfoField.innerHTML = DetailedInfo(detailedInfoData);
};

const setRelevantTime = () => {
  const weatherForecast = store.getState().weatherForecast!;
  const { time, date } = weatherForecast.current.basicInfo; //relevant time
  const corrnetTime = transformCurrenTime(time);
  const relevainTimeField: HTMLParagraphElement = document.querySelector(".main-interface__time")!;

  relevainTimeField.innerHTML = RelevantTime({ date, time: corrnetTime });
};

const setHoursInfo = (): void => {
  const weatherForecast = store.getState().weatherForecast!;
  const currentDayIndex: number = weatherForecast.current.basicInfo.currentDayIndex;
  const currentHourIndex: number | null = weatherForecast.current.basicInfo.currentHourIndex;

  const hoursList: HTMLUListElement = document.querySelector(".hours-list")!;
  hoursList.innerHTML = "";

  weatherForecast.days[currentDayIndex].hoursData.forEach((hourData: IDetailedInfoData, index: number) => {
    const { time, temp, icon } = hourData;
    const isChecked = currentHourIndex === index ? true : false;

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

  basicInfoField.innerHTML = DayBasicInfo(weatherForecast.current.basicInfo);
  forecastNavField.innerHTML = ForecastNav();

  setPeriodDaysList();

  setHoursInfo();
  setDetailedInfo();

  //
  changeDayInfo();
  changePeriodList();
  changeHourInfo();
};

export { setHoursInfo, setRelevantTime, setDetailedInfo, showForecast };
