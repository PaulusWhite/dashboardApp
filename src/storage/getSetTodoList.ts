//Interfaces
import { ITodoList } from "../interfaces/ITodoList";

const TODO_LIST_KEY: string = "todo-list";
const INITIAL_TODO_LIST_DATA: ITodoList = {
  allTasks: [],
};

const getTodoList = (): ITodoList => {
  const todoList: string | null = localStorage.getItem(TODO_LIST_KEY);

  if (!todoList) {
    setTodoList(INITIAL_TODO_LIST_DATA);

    return INITIAL_TODO_LIST_DATA;
  }

  return JSON.parse(todoList as string) as ITodoList;
};

const setTodoList = (todoList: ITodoList): void => {
  localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoList));
};

export { getTodoList, setTodoList };
