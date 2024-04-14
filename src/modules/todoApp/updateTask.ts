//Interfaces
import { IUpdatedTaskData } from "../../interfaces/ITodoList";

//Modules
import updateTodoListData from "./updateTodoListData";

//Common mutable function
const getEditModeElements = (taskElement: HTMLDivElement) => {
  const editModeField: HTMLDivElement = taskElement.children[2] as HTMLDivElement;
  const editInput: HTMLInputElement = editModeField.firstElementChild as HTMLInputElement;
  const textField: HTMLParagraphElement = taskElement.children[1] as HTMLParagraphElement;

  taskElement.classList.toggle("task__edit-mode");
  editModeField.classList.toggle("none");
  textField.classList.toggle("none");

  return { editModeField, editInput, textField };
};

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

const setEditModeAction = (taskElement: HTMLDivElement, taskID: string) => {
  const { editInput, textField } = getEditModeElements(taskElement); //mutable func

  editInput.value = textField.innerHTML;
  editInput.focus();

  taskElement.addEventListener("keydown", (event: KeyboardEvent) => {
    console.log("fasafs");
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      editTaskTextAction(taskElement, taskID);
    }
  });
};

const editTaskTextAction = (taskElement: HTMLDivElement, taskID: string) => {
  const { editInput } = getEditModeElements(taskElement); //mutable func

  const newTaskText: string = editInput.value.trim();

  const updatedTaskData: IUpdatedTaskData = {
    text: newTaskText,
  };

  const isTaskRemoved: boolean = !newTaskText ? true : false;

  updateTodoListData(taskID, updatedTaskData, isTaskRemoved);
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
    if (target.closest(".popup-options__edit-btn")) setEditModeAction(taskElement, taskID);
    if (target.closest(".task__edit-btn")) editTaskTextAction(taskElement, taskID);
  });
};

export default updateTask;
