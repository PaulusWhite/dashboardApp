//store
import store from "../../model/store";

//Components
import DayBasicInfo from "../../view/components/forecastPage/DayBasicInfo";
import ForecastNav from "../../view/components/forecastPage/ForecastNav";

//Controllers
import changeDayInfo from "./changeDayInfo";
import changePeriodList from "./changePeriodList";
import changeHourInfo from "./changeHourInfo";
import setDetailedInfo from "./setDetailedInfo";
import setPeriodDaysList from "./setPeriodDaysList";
import setHoursInfoList from "./setHoursInfoList";

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
