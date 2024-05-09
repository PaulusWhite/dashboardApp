//store
import store from "../../model/store";

//Interfaces
import { IDetailedInfoData } from "../../interfaces/IWeatherForecast";

//Components
import DetailedInfo from "../../view/components/forecastPage/DetailedInfo";

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

export default setDetailedInfo;
