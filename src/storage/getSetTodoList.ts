//Interfaces
import { ITodoList, TMyTodoLists } from "../interfaces/ITodoList";

const TODO_LISTS_KEY: string = "my-todo-lists";
const INITIAL_MY_TODO_LISTS_DATA: TMyTodoLists = [];

const setMyTodoListsData = (allTodoLists: TMyTodoLists) => {
  localStorage.setItem(TODO_LISTS_KEY, JSON.stringify(allTodoLists));
};

const getMyTodoLists = (): TMyTodoLists => {
  const allTodoLists: string | null = localStorage.getItem(TODO_LISTS_KEY);

  if (!allTodoLists) {
    setMyTodoListsData(INITIAL_MY_TODO_LISTS_DATA);

    return INITIAL_MY_TODO_LISTS_DATA;
  }

  return JSON.parse(allTodoLists as string) as TMyTodoLists;
};

const getTodoListById = (listId: string): ITodoList | undefined => {
  const allTodoLists: TMyTodoLists = getMyTodoLists();
  const todoList: ITodoList | undefined = allTodoLists.find((todoList: ITodoList) => todoList.id === listId);

  return todoList;
};

const setTodoList = (updTodoList: ITodoList) => {
  const allTodoLists: TMyTodoLists = getMyTodoLists();
  const isUpdTodoList: boolean = Boolean(getTodoListById(updTodoList.id));

  if (!isUpdTodoList) {
    allTodoLists.push(updTodoList);
    setMyTodoListsData(allTodoLists);

    return;
  }

  const updAllTodoLists = allTodoLists.map((todoList: ITodoList) => {
    return todoList.id === updTodoList.id ? updTodoList : todoList;
  });

  setMyTodoListsData(updAllTodoLists);
};

export { getMyTodoLists, getTodoListById, setTodoList };
