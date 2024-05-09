//interfaces
import { TState, IAction, IUpdTodoListsData } from "../interfaces/IModel";
import { ITodoListData } from "../interfaces/ITodoList";
import { IUserWeatherForecastData } from "../interfaces/IWeatherForecast";
import { IQuotationData } from "../interfaces/IAPI";

//action types
import {
  INIT,
  SET_USER_NAME,
  ADD_TODO_LIST,
  UPD_TODO_LIST,
  UPD_TODO_LISTS,
  SET_USER_WEATHER_FORECAST,
  SET_RANDOM_QUOTATION,
  SET_FORECAST_DAY_INDEX,
  SET_FORECAST_HOUR_INDEX,
} from "./actionTypes";

const rootReducer = <T>(state: TState, action: IAction<T>): TState => {
  if (action.type === INIT) return state;

  if (action.type === SET_USER_NAME) {
    const userName: string = action.payload as string;
    state = { ...state, userName };
  } else if (action.type === ADD_TODO_LIST) {
    const newTodoList: ITodoListData = action.payload as ITodoListData;
    state = { ...state, todo: [...state.todo, newTodoList] };
  } else if (action.type === UPD_TODO_LIST) {
    const updTodoList: ITodoListData = action.payload as ITodoListData;

    state.todo = state.todo.map((todoList: ITodoListData) => {
      return todoList.id === updTodoList.id ? updTodoList : todoList;
    });
  } else if (action.type === UPD_TODO_LISTS) {
    const { todoListData: updTodoList, isRemove } = action.payload as IUpdTodoListsData;

    if (isRemove) {
      state.todo = state.todo.filter((todoList: ITodoListData) => todoList.id !== updTodoList.id);
    } else state.todo = state.todo.map((todoList: ITodoListData) => (todoList.id === updTodoList.id ? updTodoList : todoList));
  } else if (action.type === SET_USER_WEATHER_FORECAST) {
    const weatherData: IUserWeatherForecastData = action.payload as IUserWeatherForecastData;
    state.userWeatherForecast = weatherData;
  } else if (action.type === SET_RANDOM_QUOTATION) {
    state.quotation = action.payload as IQuotationData;
  } else if (action.type === SET_FORECAST_DAY_INDEX) {
    if (!state.weatherForecast) return state;

    const relevantDayIndex: number = action.payload as number;

    state.weatherForecast.current.currentDayIndex = relevantDayIndex;
    state.weatherForecast.current.date = state.weatherForecast.days[relevantDayIndex].basicData.date;
  } else if (action.type === SET_FORECAST_HOUR_INDEX) {
    if (!state.weatherForecast) return state;

    state.weatherForecast.current.currentHourIndex = action.payload as number;
  }

  return state;
};

export default rootReducer;
