//store
import store from "../../model/store";

//Components
import DayBasicInfo from "../../view/components/forecastPage/DayBasicInfo";
import ForecastNav from "../../view/components/forecastPage/ForecastNav";
import HourInfo from "../../view/components/forecastPage/HourInfo";

//Interfaces
import { IDayForecastData, IWeatherForecastData, IDetailedInfoData, IHourData } from "../../interfaces/IWeatherForecast";

//Modules
import showPeriodDaysList from "../../modules/forecastApp/showPeriodDaysList";

//Controllers
import changeDayInfo from "./changeDayInfo";
import changePeriodList from "./changePeriodList";
import changeHourInfo from "./changeHourInfo";
import setDetailedInfo from "./setDetailedInfo";
import setRelevantTime from "./setRelevantTime";

const setPeriodDaysList = () => {
  const weatherForecast: IWeatherForecastData = store.getState().weatherForecast!;
  const currentDayIndex: number = weatherForecast.current.basicInfo.currentDayIndex;
  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".forecast-nav__periods-list input")!;

  const checkedInput: HTMLInputElement = [].find.call(inputs, (input: HTMLInputElement) => input.checked)!;
  const periodValue: number = +checkedInput.value;
  const periodDaysList: IDayForecastData[] = weatherForecast.days.slice(0, periodValue);

  showPeriodDaysList(periodDaysList, currentDayIndex);
};

const setHoursInfoList = (): void => {
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
  setHoursInfoList();
  setDetailedInfo();

  //Listeners
  changeDayInfo();
  changePeriodList();
  changeHourInfo();
};

export default showForecast;
