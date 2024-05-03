//interfaces
import { TState, IAction, IUpdTodoListsData } from "../interfaces/IModel";
import { ITodoListData } from "../interfaces/ITodoList";

//action types
import { INIT, SET_USER_NAME, ADD_TODO_LIST, UPD_TODO_LIST, UPD_TODO_LISTS } from "./actionTypes";

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
  }

  return state;
};

export default rootReducer;
