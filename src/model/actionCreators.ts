//interfaces
import { IAction, IUpdTodoListsData } from "../interfaces/IModel";
import { ITodoListData } from "../interfaces/ITodoList";

//Actions Types
import { SET_USER_NAME, ADD_TODO_LIST, UPD_TODO_LIST, UPD_TODO_LISTS } from "./actionTypes";

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

export { createSetUserNameAction, createAddTodoListAction, createUpdTodoListAction, createUpdTodoListsAction };
