import { IWeatherForecastData, IDayForecastData, IDetailedInfoData } from "./src/interfaces/IWeatherForecast";
import getRandomID from "./src/utils/getRandomID";

const getHours = () => {
  const arr: IDetailedInfoData[] = [];

  for (let i = 0; i < 24; i++) {
    const hour: IDetailedInfoData = {
      time: `20: ${i}`,
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
        id: getRandomID(),
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
    time: "20.30",
    temp: 14,
    windspeed: 2,
  },
  days: getDays(),
};

export default pseudoData;
