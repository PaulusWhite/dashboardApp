//interfaces
import { IQuotationData } from "./IAPI";
import { IUserWeatherForecastData } from "./IWeatherForecast";

interface IQutationPromiseValue {
  dataType: "quotation";
  data: IQuotationData;
}

interface IForecastPromiseValue {
  dataType: "forecast";
  data: IUserWeatherForecastData;
}

type IPromiseValue = IQutationPromiseValue | IForecastPromiseValue;

export default IPromiseValue;
