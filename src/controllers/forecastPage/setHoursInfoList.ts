//store
import store from "../../model/store";

//Interfaces
import { IDetailedInfoData, IHourData } from "../../interfaces/IWeatherForecast";

//Components
import HourInfo from "../../view/components/forecastPage/HourInfo";

//Controllers
import setRelevantTime from "./setRelevantTime";

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

export default setHoursInfoList;
