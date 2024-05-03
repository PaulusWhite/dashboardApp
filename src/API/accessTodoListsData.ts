//Interfaces
import { ITodoListData, TTodoListsData } from "../interfaces/ITodoList";

const TODO_LISTS_KEY: string = "my-todo-lists";
const INITIAL_MY_TODO_LISTS_DATA: TTodoListsData = [];

const setTodoListsData = (todoListsData: TTodoListsData): void => {
  localStorage.setItem(TODO_LISTS_KEY, JSON.stringify(todoListsData));
};

const getTodoListsData = (): TTodoListsData => {
  const todoListsData: string | null = localStorage.getItem(TODO_LISTS_KEY);

  if (!todoListsData) {
    setTodoListsData(INITIAL_MY_TODO_LISTS_DATA);

    return INITIAL_MY_TODO_LISTS_DATA;
  }

  return JSON.parse(todoListsData as string) as TTodoListsData;
};

const updTodoListsData = (updTodoListData: ITodoListData, isRemove: boolean | undefined) => {
  let todoListsData: TTodoListsData = getTodoListsData();

  if (isRemove) {
    todoListsData = todoListsData.filter((todoListData: ITodoListData) => todoListData.id !== updTodoListData.id);
  } else
    todoListsData = todoListsData.map((todoListData: ITodoListData) => {
      return todoListData.id === updTodoListData.id ? updTodoListData : todoListData;
    });

  setTodoListsData(todoListsData);
};

const addTodoListData = (addedTodoListData: ITodoListData): void => {
  const todoListsData: TTodoListsData = getTodoListsData();
  todoListsData.push(addedTodoListData);

  setTodoListsData(todoListsData);
};

const updTodoListData = (updTodoListData: ITodoListData): void => {
  let todoListsData: TTodoListsData = getTodoListsData();

  todoListsData = todoListsData.map((todoListData: ITodoListData) => {
    return todoListData.id === updTodoListData.id ? updTodoListData : todoListData;
  });

  setTodoListsData(todoListsData);
};

export { getTodoListsData, addTodoListData, updTodoListData, updTodoListsData };
