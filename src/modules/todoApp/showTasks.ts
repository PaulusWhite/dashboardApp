//storage
import { getTodoList } from "../../storage/getSetTodoList";

//Interfaces
import { ITodoList, ITask } from "../../interfaces/ITodoList";

//Components
import BulletPoint from "../../components/todo-list/BulletPoint";
// import Task from "../../components/todo-list/Task";

//Modules
import displayImportantTasksList from "./displayImportantTasksList";

const showTasks = () => {
  const todoList: ITodoList = getTodoList();
  const { allTasks } = todoList;

  const noTasksMessage: HTMLHeadingElement = document.querySelector(".tasks__no-tasks") as HTMLHeadingElement;
  const allTasksList: HTMLUListElement = document.querySelector("#tasks-list-all") as HTMLUListElement;
  const importantTasksList: HTMLUListElement = document.querySelector("#tasks-list-important") as HTMLUListElement;

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

export default showTasks;
