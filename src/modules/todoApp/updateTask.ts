//Interfaces
import { IUpdatedTaskData } from "../../interfaces/ITodoList";

//Modules
import updateTodoListData from "./updateTodoListData";

const markAsCompletedAtion = (taskElement: HTMLDivElement, taskID: string): void => {
  taskElement.classList.toggle("task__completed");
  const isTaskCompleted: boolean = taskElement.classList.contains("task__completed");

  const updatedTaskData: IUpdatedTaskData = {
    isCompleted: isTaskCompleted,
  };

  updateTodoListData(taskID, updatedTaskData);
};

const markAsImportantAction = (taskElement: HTMLDivElement, taskID: string): void => {
  taskElement.classList.toggle("task__important");
  const isTaskImportant: boolean = taskElement.classList.contains("task__important");

  const updatedTaskData: IUpdatedTaskData = {
    isImportant: isTaskImportant,
  };

  updateTodoListData(taskID, updatedTaskData);
};

const updateTask = (): void => {
  const allTasksList: HTMLDivElement = document.querySelector(".tasks") as HTMLDivElement;

  allTasksList.addEventListener("click", (event: Event) => {
    const target: HTMLElement = event.target as HTMLElement;

    if (!target.closest(".task")) return;
    const taskElement: HTMLDivElement = target.closest(".task") as HTMLDivElement;
    const taskID: string = taskElement.id;

    if (target.closest(".task__complete-btn") || target.closest(".popup-options__complete-btn")) {
      markAsCompletedAtion(taskElement, taskID);
    }

    if (target.closest(".task__important-btn") || target.closest(".popup-options__important-btn")) {
      markAsImportantAction(taskElement, taskID);
    }

    //updating with popup-options menu (delete and edit)
    if (target.closest(".popup-options__delete-btn")) updateTodoListData(taskID, {}, true);
  });
};

export default updateTask;
