//interfaces
import { TTodoListsData, ITodoListData } from "./ITodoList";
import { IUserWeatherForecastData } from "./IWeatherForecast";
import { IQuotationData } from "./IAPI";
import { IWeatherForecastData } from "./IWeatherForecast";

type TState = {
  userName: string | null;
  todo: TTodoListsData;
  quotation: IQuotationData | null;
  isPreloader: boolean;
  userWeatherForecast: IUserWeatherForecastData | null;
  weatherForecast: IWeatherForecastData | null;
};

interface IAction<T> {
  type: string;
  payload?: T;
}

interface IStore {
  dispatch: <T>(action: IAction<T>) => void;
  subscribe: (callback: CallableFunction) => void;
  getState: () => TState;
}

//Interfaces for actions
interface IUpdTodoListsData {
  todoListData: ITodoListData;
  isRemove: boolean | undefined;
}

export { IStore, TState, IAction, IUpdTodoListsData, IUserWeatherForecastData };
