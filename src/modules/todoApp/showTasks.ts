//storage
import { getTodoList } from "../../storage/getSetTodoList";

//Interfaces
import { ITodoList, ITask } from "../../interfaces/ITodoList";

//Components
import Task from "../../components/todo-list/Task";

const showAllTasks = (allTasks: ITask[]): void => {
  const allTasksList: HTMLDivElement = document.querySelector("#tasks-list-all") as HTMLDivElement;
  allTasksList.innerHTML = ""; //this is neccesery for using this func after adding new task in AddTask.ts module

  allTasks.forEach((task: ITask) => {
    allTasksList.innerHTML += Task(task);
  });
};

const showImportantTasks = (importantTasks: ITask[]): void => {
  const importantTasksList: HTMLDivElement = document.querySelector("#tasks-list-important") as HTMLDivElement;
  importantTasksList.innerHTML = ""; //this is neccesery for using this func after adding new task in AddTask.ts module

  if (!importantTasks.length) {
    importantTasksList.classList.add("none");

    return;
  }

  importantTasksList.classList.remove("none");

  importantTasks.forEach((importantTask: ITask) => {
    importantTasksList.innerHTML += Task(importantTask);
  });
};

const showTasks = (): void => {
  const todoList: ITodoList = getTodoList();
  const { allTasks, importantTasks } = todoList;
  const noTasksMessage: HTMLHeadingElement = document.querySelector(".tasks__no-tasks") as HTMLHeadingElement;

  if (!allTasks.length && !importantTasks.length) {
    noTasksMessage.classList.remove("none");

    return;
  }

  noTasksMessage.classList.add("none");

  showAllTasks(allTasks);
  showImportantTasks(importantTasks);
};

export default showTasks;
