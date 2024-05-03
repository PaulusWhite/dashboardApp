interface IWeatherForecastRequsetData {
  location: string;
  date1?: string;
  date2?: string;
}

interface IUserGeoData {
  city?: string;
  country: string;
}

export { IWeatherForecastRequsetData, IUserGeoData };
