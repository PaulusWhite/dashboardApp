//storage
import { getMyTodoListsData, getTodoListDataById } from "../../storage/getSetTodoList";

//Interfaces
import { ITodoList, ITask, TBulletPointType, TMyTodoLists } from "../../interfaces/ITodoList";

//Components
import BulletPoint from "../../components/todo-list/BulletPoint";

//Modules
import displayImportantTasksList from "./displayImportantTasksList";

const showTasks = (): void => {
  const todoListPage: HTMLDivElement = document.querySelector(".todo-list")!;
  const noTasksMessage: HTMLHeadingElement = document.querySelector(".tasks__no-tasks")!;
  const allTasksList: HTMLUListElement = document.querySelector("#tasks-list-all")!;
  const importantTasksList: HTMLUListElement = document.querySelector("#tasks-list-important")!;

  const todoListId: string = todoListPage.id;
  const todoListData: ITodoList = getTodoListDataById(todoListId) as ITodoList;
  const { allTasks } = todoListData;

  allTasksList.innerHTML = ""; //this is neccesery for using this func after adding new task in AddTask.ts module
  importantTasksList.innerHTML = ""; //this is neccesery for using this func after adding new task in AddTask.ts module

  if (!allTasks.length) {
    noTasksMessage.classList.remove("none");

    return;
  }

  noTasksMessage.classList.add("none");

  allTasks.forEach((task: ITask) => {
    const isTaskImportant: boolean = task.isImportant;
    const taskComponent: string = BulletPoint({ ...task }, "task"); //ITask interface keys match IBulletPointData interface

    isTaskImportant ? (importantTasksList.innerHTML += taskComponent) : (allTasksList.innerHTML += taskComponent);
  });

  displayImportantTasksList();
};

const showAllTodoLists = (): void => {
  const todoListsList: HTMLUListElement = document.querySelector(".my-todo-lists__list")!;
  const noListsMessage: HTMLHeadElement = document.querySelector(".my-todo-lists__no-lists")!;
  const myTodoListsData: TMyTodoLists = getMyTodoListsData();

  todoListsList.innerHTML = "";

  if (!myTodoListsData.length) {
    noListsMessage.classList.remove("none");

    return;
  }

  noListsMessage.classList.add("none");

  myTodoListsData.forEach((todoList: ITodoList) => {
    const { id, name } = todoList;

    todoListsList.innerHTML += BulletPoint({ id, text: name }, "list");
  });
};

const showBulletPoints = (type: TBulletPointType): void => {
  if (type === "task") showTasks();
  if (type === "list") showAllTodoLists();
};

export default showBulletPoints;
