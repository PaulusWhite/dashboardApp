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

export { IWeatherForecastRequsetData, IUserGeoData, IQuotationData };
