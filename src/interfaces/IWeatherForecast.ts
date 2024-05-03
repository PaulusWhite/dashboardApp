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

export { IWeatherData, IUserWeatherForecastData };
