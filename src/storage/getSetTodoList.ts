//Interfaces
import { ITodoList, TMyTodoLists } from "../interfaces/ITodoList";

const TODO_LISTS_KEY: string = "my-todo-lists";
const INITIAL_MY_TODO_LISTS_DATA: TMyTodoLists = [];

const setMyTodoListsData = (allTodoLists: TMyTodoLists): void => {
  localStorage.setItem(TODO_LISTS_KEY, JSON.stringify(allTodoLists));
};

const getMyTodoListsData = (): TMyTodoLists => {
  const allTodoLists: string | null = localStorage.getItem(TODO_LISTS_KEY);

  if (!allTodoLists) {
    setMyTodoListsData(INITIAL_MY_TODO_LISTS_DATA);

    return INITIAL_MY_TODO_LISTS_DATA;
  }

  return JSON.parse(allTodoLists as string) as TMyTodoLists;
};

const getTodoListDataById = (listId: string): ITodoList | undefined => {
  const allTodoLists: TMyTodoLists = getMyTodoListsData();
  const todoList: ITodoList | undefined = allTodoLists.find((todoList: ITodoList) => todoList.id === listId);

  return todoList;
};

const setTodoListData = (updTodoList: ITodoList, isRemove?: boolean): void => {
  const allTodoLists: TMyTodoLists = getMyTodoListsData();
  const isUpdTodoList: boolean = Boolean(getTodoListDataById(updTodoList.id));

  if (!isUpdTodoList) {
    allTodoLists.push(updTodoList);
    setMyTodoListsData(allTodoLists);

    return;
  }

  let updAllTodoListsData = allTodoLists.map((todoList: ITodoList) => {
    return todoList.id === updTodoList.id ? updTodoList : todoList;
  });

  if (isRemove) updAllTodoListsData = updAllTodoListsData.filter((todoList: ITodoList) => todoList.id !== updTodoList.id);

  setMyTodoListsData(updAllTodoListsData);
};

export { getMyTodoListsData, getTodoListDataById, setTodoListData };
