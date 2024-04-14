//storage
import { getTodoList } from "../../storage/getSetTodoList";

//Interfaces
import { ITodoList, ITask } from "../../interfaces/ITodoList";

//Components
import Task from "../../components/todo-list/Task";

const showAllTasks = (allTasks: ITask[]): void => {
  const allTasksList: HTMLDivElement = document.querySelector(".tasks__all-tasks") as HTMLDivElement;

  allTasks.forEach((task: ITask) => {
    allTasksList.innerHTML += Task(task);
  });
};

const showImportantTasks = (importantTasks: ITask[]): void => {
  const importantTasksList: HTMLDivElement = document.querySelector(".tasks__important-tasks") as HTMLDivElement;

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
