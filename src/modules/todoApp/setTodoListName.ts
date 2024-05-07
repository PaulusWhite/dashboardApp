//Controllers
import getTodoListDataByID from "../../controllers/todoPage/getTodoListDataByID";

//Interfaces
import { ITodoListData } from "../../interfaces/ITodoList";

const setTodoListName = (): void => {
  const todoListPage: HTMLDivElement = document.querySelector(".todo-list-page")!;
  const todoListName: HTMLSpanElement = todoListPage.querySelector(".todo-list-page__name")!;

  const todoListID: string = todoListPage.id!;

  const { name } = getTodoListDataByID(todoListID) as ITodoListData;

  todoListName.textContent = name;
};

export default setTodoListName;
