interface IWeatherForecastRequsetData {
  location: string;
  date1?: string;
  date2?: string;
}

interface IUserGeoData {
  city?: string;
  country: string;
}

interface IQuotationData {
  content: string;
  author: string;
}

interface IWeatherForecastHourResponseData {
  datetime: string;
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

interface IWeatherForecastDayResponseData {
  datetime: string;
  temp: number;
  icon: string;
  windspeed: number;
  conditions: string;
  hours: IWeatherForecastHourResponseData[];
}

interface IWeatherForecastResponseData {
  address: string;
  days: IWeatherForecastDayResponseData[];
  tzoffset: number;
  currentConditions: {
    datetime: string;
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
  };
}

export {
  IWeatherForecastRequsetData,
  IUserGeoData,
  IQuotationData,
  IWeatherForecastDayResponseData,
  IWeatherForecastResponseData,
  IWeatherForecastHourResponseData,
};
