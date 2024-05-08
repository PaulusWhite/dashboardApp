import { IWeatherForecastData, IDayForecastData, IDetailedInfoData } from "./src/interfaces/IWeatherForecast";

const getHours = () => {
  const arr: IDetailedInfoData[] = [];

  for (let i = 0; i < 24; i++) {
    const hour: IDetailedInfoData = {
      time: `${i}:00:00`,
      temp: 2 + i,
      humidity: 1 + i,
      precip: 0 + i / 10,
      precipprob: 0,
      snow: 0,
      windgust: 0 + i / 11,
      windspeed: 3,
      winddir: 14,
      visibility: 88,
      pressure: 1488,
      cloudcover: 18,
      conditions: "It is very good",
      icon: "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/showers-day.png",
    };

    arr.push(hour);
  }

  return arr;
};

const getDays = (): IDayForecastData[] => {
  const arr: IDayForecastData[] = [];

  for (let i = 0; i < 14; i++) {
    const day: IDayForecastData = {
      basicData: {
        icon: "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/showers-day.png",
        date: "Thusday, May 7",
        forecast: "Clear",
        temp: i + 3,
      },
      hoursData: getHours(),
    };

    arr.push(day);
  }

  return arr;
};

const pseudoData: IWeatherForecastData = {
  current: {
    location: "Minsk, Belarus",
    time: "10:00:00",
    temp: 14,
    windspeed: 2,
    currentDayIndex: 0,
  },
  days: getDays(),
};

export default pseudoData;
