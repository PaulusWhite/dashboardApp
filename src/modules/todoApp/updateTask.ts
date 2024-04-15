//Interfaces
import { IUpdatedTaskData } from "../../interfaces/ITodoList";

//Modules
import updateTodoListData from "./updateTodoListData";

const displayEditMode = (taskElement: HTMLDivElement, editModeField: HTMLDivElement, textField: HTMLParagraphElement) => {
  taskElement.classList.toggle("task__edit-mode");
  editModeField.classList.toggle("none");
  textField.classList.toggle("none");
};

const getEditModeElements = (taskElement: HTMLDivElement) => {
  const editModeField: HTMLDivElement = taskElement.children[2] as HTMLDivElement;
  const editInput: HTMLInputElement = editModeField.firstElementChild as HTMLInputElement;
  const textField: HTMLParagraphElement = taskElement.children[1] as HTMLParagraphElement;

  return { editModeField, editInput, textField };
};

const markAsCompletedAtion = (taskElement: HTMLDivElement, taskID: string) => {
  taskElement.classList.toggle("task__completed");
  const isTaskCompleted: boolean = taskElement.classList.contains("task__completed");

  const updatedTaskData: IUpdatedTaskData = {
    isCompleted: isTaskCompleted,
  };

  updateTodoListData(taskID, updatedTaskData);
};

const markAsImportantAction = (taskElement: HTMLDivElement, taskID: string) => {
  taskElement.classList.toggle("task__important");
  const isTaskImportant: boolean = taskElement.classList.contains("task__important");

  const updatedTaskData: IUpdatedTaskData = {
    isImportant: isTaskImportant,
  };

  updateTodoListData(taskID, updatedTaskData);
};

const setEditModeAction = (taskElement: HTMLDivElement, taskID: string) => {
  const { editInput, textField, editModeField } = getEditModeElements(taskElement);

  displayEditMode(taskElement, editModeField, textField);

  const todoList: HTMLDivElement = document.querySelector(".todo-list") as HTMLDivElement;

  editInput.value = textField.innerHTML;
  editInput.focus();

  const editTaskWithKeuboardAction = (event: KeyboardEvent) => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      editTaskTextAction(taskElement, taskID);
    }
  };

  const removeEditMode = (event: Event) => {
    const target: HTMLElement = event.target as HTMLElement;
    const clickedTaskInput: HTMLInputElement | null = target.closest(".task__edit-input");
    const clickedTask: HTMLDivElement | null = target.closest(".task");

    if (clickedTask && clickedTask.id === taskID && clickedTaskInput) return;

    displayEditMode(taskElement, editModeField, textField);
    todoList.removeEventListener("click", removeEditMode);
    taskElement.removeEventListener("keydown", editTaskWithKeuboardAction);
  };

  taskElement.addEventListener("keydown", editTaskWithKeuboardAction);

  setTimeout(() => {
    todoList.addEventListener("click", removeEditMode);
  }, 0);
};

const editTaskTextAction = (taskElement: HTMLDivElement, taskID: string) => {
  const { editInput, textField, editModeField } = getEditModeElements(taskElement);

  displayEditMode(taskElement, editModeField, textField);

  const newTaskText: string = editInput.value.replace(/\s{2,}/g, " ").trim();

  const updatedTaskData: IUpdatedTaskData = {
    text: newTaskText,
  };

  const isTaskRemoved: boolean = !newTaskText ? true : false;

  updateTodoListData(taskID, updatedTaskData, isTaskRemoved);
};

const updateTask = () => {
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
