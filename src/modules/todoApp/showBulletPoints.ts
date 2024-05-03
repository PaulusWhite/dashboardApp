//Interfaces
import { ITodoListData, ITaskData, TBulletPointType, TTodoListsData } from "../../interfaces/ITodoList";

//Components
import BulletPoint from "../../components/todoApp/BulletPoint";

//Modules
import displayImportantTasksList from "./displayImportantTasksList";

//Controllers
import getTodoListDataByID from "../../controllers/todoPage/getTodoListDataByID";
import getTodoLists from "../../controllers/todoPage/getTodoLists";

const showTasks = (): void => {
  const todoListPage: HTMLDivElement = document.querySelector(".todo-list")!;
  const noTasksMessage: HTMLHeadingElement = document.querySelector(".tasks__no-tasks")!;
  const allTasksList: HTMLUListElement = document.querySelector("#tasks-list-all")!;
  const importantTasksList: HTMLUListElement = document.querySelector("#tasks-list-important")!;

  const todoListId: string = todoListPage.id;
  const todoListData: ITodoListData = getTodoListDataByID(todoListId) as ITodoListData;
  const { allTasks } = todoListData;

  allTasksList.innerHTML = ""; //this is neccesery for using this func after adding new task in AddTask.ts module
  importantTasksList.innerHTML = ""; //this is neccesery for using this func after adding new task in AddTask.ts module

  if (!allTasks.length) {
    noTasksMessage.classList.remove("none");

    return;
  }

  noTasksMessage.classList.add("none");

  allTasks.forEach((task: ITaskData) => {
    const isTaskImportant: boolean = task.isImportant;
    const taskComponent: string = BulletPoint({ ...task }, "task"); //ITask interface keys match IBulletPointData interface

    isTaskImportant ? (importantTasksList.innerHTML += taskComponent) : (allTasksList.innerHTML += taskComponent);
  });

  displayImportantTasksList();
};

const showAllTodoLists = (): void => {
  const todoListsList: HTMLUListElement = document.querySelector(".my-todo-lists__list")!;
  const noListsMessage: HTMLHeadElement = document.querySelector(".my-todo-lists__no-lists")!;
  const todoLists: TTodoListsData = getTodoLists();

  todoListsList.innerHTML = "";

  if (!todoLists.length) {
    noListsMessage.classList.remove("none");

    return;
  }

  noListsMessage.classList.add("none");

  todoLists.forEach((todoList: ITodoListData) => {
    const { id, name } = todoList;

    todoListsList.innerHTML += BulletPoint({ id, text: name }, "list");
  });
};

const showBulletPoints = (type: TBulletPointType): void => {
  if (type === "task") showTasks();
  if (type === "list") showAllTodoLists();
};

export default showBulletPoints;
