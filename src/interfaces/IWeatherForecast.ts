//Interfaces for User Weather Forecast on the Main Page
interface IUserWeatherData {
  description: string;
  currentConditions: {
    temp: number;
    icon: string;
  };
}

interface IUserWeatherForecastData {
  temp: number;
  icon: string;
  location: string;
  day: string;
  desc: string;
}

//Interfaces for Weather Foreast on Forecast APP Page
interface IPeriodDayData {
  icon: string;
  date: string;
  forecast: string;
  temp: number;
}

interface IHourData {
  id: number;
  time: string;
  icon: string;
  temp: number;
  isChecked: boolean;
}

interface IDetailedInfoData {
  time: string;
  temp: number;
  humidity: number;
  precip: number;
  precipprob: number;
  snow: number;
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  visibility: number;
  cloudcover: number;
  conditions: string;
  icon: string;
}

interface ICurrentBasicInfo {
  location: string;
  time: string;
  date: string;
  temp: number;
  windspeed: number;
  currentDayIndex: number;
  currentHourIndex: number | null;
}

interface ICurrentForecastData {
  basicInfo: ICurrentBasicInfo;
  currentDetailedData: IDetailedInfoData;
}

interface IDayForecastData {
  basicData: IPeriodDayData;
  hoursData: IDetailedInfoData[];
}

interface IWeatherForecastData {
  tzoffset: number;
  current: ICurrentForecastData;
  days: IDayForecastData[];
}

interface IRelevantIme {
  time: string;
  date: string;
}

export { IUserWeatherData, IUserWeatherForecastData };
export {
  IPeriodDayData,
  IHourData,
  ICurrentForecastData,
  ICurrentBasicInfo,
  IDetailedInfoData,
  IWeatherForecastData,
  IDayForecastData,
  IRelevantIme,
};
