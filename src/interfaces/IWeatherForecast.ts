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
  id: string;
  icon: string;
  date: string;
  forecast: string;
  temp: number;
}

interface IHourData {
  id: string;
  time: string;
  icon: string;
  temp: number;
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

interface ICurrentForecastData {
  location: string;
  time: string;
  temp: number;
  windspeed: number;
}

interface IDayForecastData {
  basicData: IPeriodDayData;
  hoursData: IDetailedInfoData[];
}

interface IWeatherForecastData {
  current: ICurrentForecastData;
  days: IDayForecastData[];
}

export { IUserWeatherData, IUserWeatherForecastData };
export { IPeriodDayData, IHourData, IDetailedInfoData, IWeatherForecastData };
