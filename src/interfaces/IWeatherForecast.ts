interface IWeatherData {
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

export { IWeatherData, IUserWeatherForecastData, IPeriodDayData, IHourData, IDetailedInfoData };
