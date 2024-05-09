//interfaces
import { IAction, IUpdTodoListsData } from "../interfaces/IModel";
import { ITodoListData } from "../interfaces/ITodoList";
import { IQuotationData } from "../interfaces/IAPI";
import { IUserWeatherForecastData } from "../interfaces/IModel";

//Actions Types
import {
  SET_USER_NAME,
  ADD_TODO_LIST,
  UPD_TODO_LIST,
  UPD_TODO_LISTS,
  SET_RANDOM_QUOTATION,
  SET_USER_WEATHER_FORECAST,
  SET_FORECAST_DAY_INDEX,
  SET_FORECAST_HOUR_INDEX,
} from "./actionTypes";

//API
import { setUserNameData } from "../API/accessUserNameData";
import { addTodoListData, updTodoListData, updTodoListsData } from "../API/accessTodoListsData";

const createSetUserNameAction = <T>(userName: string): IAction<T> => {
  setUserNameData(userName); //setting value in localStorage

  return {
    type: SET_USER_NAME,
    payload: userName as T,
  };
};

const createAddTodoListAction = <T>(newTodoList: ITodoListData): IAction<T> => {
  addTodoListData(newTodoList);

  return {
    type: ADD_TODO_LIST,
    payload: newTodoList as T,
  };
};

const createUpdTodoListAction = <T>(updTodoList: ITodoListData): IAction<T> => {
  updTodoListData(updTodoList);

  return {
    type: UPD_TODO_LIST,
    payload: updTodoList as T,
  };
};

const createUpdTodoListsAction = <T>(updateTodoListsData: IUpdTodoListsData): IAction<T> => {
  const { todoListData, isRemove } = updateTodoListsData;

  updTodoListsData(todoListData, isRemove);

  return {
    type: UPD_TODO_LISTS,
    payload: updateTodoListsData as T,
  };
};

const createSetRandomQuotationAction = <T>(quotationData: IQuotationData): IAction<T> => {
  return {
    type: SET_RANDOM_QUOTATION,
    payload: quotationData as T,
  };
};

const createSetUserWeatherForecastAction = <T>(userWeatherForecastData: IUserWeatherForecastData): IAction<T> => {
  return {
    type: SET_USER_WEATHER_FORECAST,
    payload: userWeatherForecastData as T,
  };
};

const createSetForecastDayIndexAction = <T>(index: number): IAction<T> => {
  return {
    type: SET_FORECAST_DAY_INDEX,
    payload: index as T,
  };
};

const createSetForecastCurrentIndexAction = <T>(index: number): IAction<T> => {
  return {
    type: SET_FORECAST_HOUR_INDEX,
    payload: index as T,
  };
};

export { createSetUserNameAction, createAddTodoListAction, createUpdTodoListAction, createUpdTodoListsAction };
export {
  createSetRandomQuotationAction,
  createSetUserWeatherForecastAction,
  createSetForecastDayIndexAction,
  createSetForecastCurrentIndexAction,
};
